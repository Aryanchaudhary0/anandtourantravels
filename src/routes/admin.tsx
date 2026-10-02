import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import { toast } from "sonner";
import { LogOut, Save } from "lucide-react";
import type { Session } from "@supabase/supabase-js";
import { supabase } from "@/integrations/supabase/client";
import { formatPrice } from "@/config/business";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/admin")({
  ssr: false,
  component: AdminPage,
  head: () => ({
    meta: [
      { title: "Owner Admin | Anand Tour & Travel" },
      { name: "description", content: "Owner-only panel to update taxi fares and the homepage announcement." },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: "Owner Admin | Anand Tour & Travel" },
      { property: "og:description", content: "Owner-only panel for Anand Tour & Travel." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
});

function AdminPage() {
  const [session, setSession] = useState<Session | null>(null);
  const [ready, setReady] = useState(false);
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);

  useEffect(() => {
    const { data: sub } = supabase.auth.onAuthStateChange((_e, s) => setSession(s));
    supabase.auth.getSession().then(({ data }) => { setSession(data.session); setReady(true); });
    return () => sub.subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (!session) { setIsAdmin(null); return; }
    supabase.rpc("claim_admin").then(({ data }) => setIsAdmin(!!data));
  }, [session?.user.id]);

  async function signOut() { await supabase.auth.signOut(); }

  return <div className="min-h-screen bg-background">
    <Toaster />
    <header className="border-b bg-card"><div className="site-container flex items-center justify-between py-4"><a href="/" className="font-display font-bold">Anand Tour & Travel · Admin</a>{session && <Button variant="outline" size="sm" onClick={signOut}><LogOut /> Log out</Button>}</div></header>
    <main className="site-container py-8">
      {!ready ? null : !session ? <Login /> : isAdmin === null ? <p className="text-muted-foreground">Checking access…</p> : !isAdmin ? <NoAccess email={session.user.email} /> : <Dashboard />}
    </main>
  </div>;
}

function Login() {
  const [mode, setMode] = useState<"in" | "up">("in");
  const [error, setError] = useState("");
  const [info, setInfo] = useState("");
  const [busy, setBusy] = useState(false);
  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault(); setError(""); setInfo(""); setBusy(true);
    const f = new FormData(e.currentTarget);
    const email = String(f.get("email")).trim(); const password = String(f.get("password"));
    if (mode === "in") {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) setError(error.message === "Invalid login credentials" ? "Wrong email or password." : error.message);
    } else {
      const { data, error } = await supabase.auth.signUp({ email, password, options: { emailRedirectTo: `${window.location.origin}/admin` } });
      if (error) setError(error.message);
      else if (!data.session) setInfo("Check your email and click the confirmation link, then log in here.");
    }
    setBusy(false);
  }
  return <form onSubmit={submit} className="mx-auto grid max-w-sm gap-4 rounded-xl border bg-card p-6 shadow-sm">
    <div><h1 className="font-display text-2xl font-bold">{mode === "in" ? "Owner login" : "Create owner account"}</h1><p className="mt-1 text-sm text-muted-foreground">Only approved owner emails get access.</p></div>
    <div><Label htmlFor="email" className="mb-2">Email</Label><Input id="email" name="email" type="email" required autoComplete="email" /></div>
    <div><Label htmlFor="password" className="mb-2">Password</Label><Input id="password" name="password" type="password" minLength={6} required autoComplete={mode === "in" ? "current-password" : "new-password"} /></div>
    {error && <p role="alert" className="rounded-md bg-destructive/10 p-3 text-sm text-destructive">{error}</p>}
    {info && <p className="rounded-md bg-secondary p-3 text-sm">{info}</p>}
    <Button type="submit" disabled={busy}>{busy ? "Please wait…" : mode === "in" ? "Log in" : "Create account"}</Button>
    <button type="button" className="text-sm font-semibold text-accent" onClick={() => { setMode(mode === "in" ? "up" : "in"); setError(""); setInfo(""); }}>{mode === "in" ? "First time? Create your owner account" : "Already have an account? Log in"}</button>
  </form>;
}

function NoAccess({ email }: { email: string | undefined }) {
  return <div className="mx-auto max-w-md rounded-xl border bg-card p-6 text-center"><h1 className="font-display text-xl font-bold">No admin access</h1><p className="mt-2 text-sm text-muted-foreground">{email} is not on the approved owner list.</p></div>;
}

type Rate = { id: string; route_name: string; vehicle_type: string; price: number };
type PricingItem = { id: string; item_key: string; category: string; title: string; vehicle_type: string; price: number; pricing_unit: string; is_active: boolean };

function Dashboard() {
  return <div className="grid gap-8"><OfferEditor /><RatesEditor /><PricingItemsEditor /></div>;
}

function PricingItemsEditor() {
  const [items, setItems] = useState<PricingItem[]>([]);
  const [edits, setEdits] = useState<Record<string, string>>({});
  const [saving, setSaving] = useState(false);
  async function load() {
    const { data, error } = await supabase.from("pricing_items").select("id, item_key, category, title, vehicle_type, price, pricing_unit, is_active").order("category").order("sort_order");
    if (error) toast.error(error.message); else setItems(data);
  }
  useEffect(() => { load(); }, []);
  const changed = Object.entries(edits).filter(([id, value]) => items.find((item) => item.id === id)?.price !== Number(value));
  async function saveAll() {
    for (const [, value] of changed) if (!/^\d+$/.test(value)) { toast.error("Prices must be whole numbers."); return; }
    setSaving(true);
    const results = await Promise.all(changed.map(([id, value]) => supabase.from("pricing_items").update({ price: Number(value) }).eq("id", id)));
    setSaving(false);
    const failed = results.find((result) => result.error);
    if (failed?.error) toast.error(failed.error.message); else { toast.success(`${changed.length} package price(s) saved`); setEdits({}); load(); }
  }
  const groups = [...new Set(items.map((item) => item.category))];
  return <section className="rounded-xl border bg-card p-5 sm:p-6">
    <div className="flex flex-wrap items-center justify-between gap-3"><div><h2 className="font-display text-xl font-bold">Tours, transfers and yatra packages</h2><p className="mt-1 text-sm text-muted-foreground">Edit every fixed package price shown on the public site.</p></div><Button onClick={saveAll} disabled={saving || changed.length === 0}><Save /> {saving ? "Saving…" : `Save changes${changed.length ? ` (${changed.length})` : ""}`}</Button></div>
    <div className="mt-5 grid gap-6 lg:grid-cols-2">{groups.map((group) => <div key={group}><h3 className="mb-2 font-display font-bold text-accent">{group}</h3><div className="divide-y rounded-lg border">{items.filter((item) => item.category === group).map((item) => { const value=edits[item.id] ?? String(item.price); return <label key={item.id} className="grid grid-cols-[minmax(0,1fr)_7.5rem] items-center gap-3 p-3"><span className="min-w-0 text-sm font-medium">{item.title}<small className="block text-muted-foreground">{item.vehicle_type} · {item.pricing_unit}</small></span><Input inputMode="numeric" aria-label={`${item.title} ${item.vehicle_type} price`} value={value} onChange={(event) => setEdits({...edits,[item.id]:event.target.value.replace(/[^\d]/g,"")})} className={value !== String(item.price) ? "border-accent" : ""}/></label>; })}</div></div>)}</div>
  </section>;
}

function OfferEditor() {
  const [id, setId] = useState<string | null>(null);
  const [headline, setHeadline] = useState("");
  const [active, setActive] = useState(true);
  const [saving, setSaving] = useState(false);
  useEffect(() => {
    supabase.from("offers").select("id, headline, is_active").order("updated_at", { ascending: false }).limit(1).maybeSingle().then(({ data }) => {
      if (data) { setId(data.id); setHeadline(data.headline); setActive(data.is_active); }
    });
  }, []);
  async function save() {
    if (!headline.trim()) { toast.error("Banner text can't be empty."); return; }
    setSaving(true);
    const res = id
      ? await supabase.from("offers").update({ headline: headline.trim(), is_active: active }).eq("id", id)
      : await supabase.from("offers").insert({ headline: headline.trim(), is_active: active }).select("id").single();
    setSaving(false);
    if (res.error) toast.error(res.error.message); else { if (!id && res.data && "id" in res.data) setId(res.data.id as string); toast.success("Announcement saved"); }
  }
  return <section className="rounded-xl border bg-card p-5 sm:p-6">
    <h2 className="font-display text-xl font-bold">Homepage announcement</h2>
    <Textarea className="mt-4" rows={3} value={headline} onChange={(e) => setHeadline(e.target.value)} maxLength={200} />
    <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
      <label className="flex items-center gap-3 text-sm font-semibold"><Switch checked={active} onCheckedChange={setActive} />{active ? "Showing on homepage" : "Hidden"}</label>
      <Button onClick={save} disabled={saving}><Save /> {saving ? "Saving…" : "Save announcement"}</Button>
    </div>
  </section>;
}

function RatesEditor() {
  const [rates, setRates] = useState<Rate[]>([]);
  const [edits, setEdits] = useState<Record<string, string>>({});
  const [saving, setSaving] = useState(false);
  async function load() {
    const { data, error } = await supabase.from("rates").select("id, route_name, vehicle_type, price").order("vehicle_type", { ascending: false }).order("sort_order");
    if (error) toast.error(error.message); else setRates(data);
  }
  useEffect(() => { load(); }, []);
  const changed = Object.entries(edits).filter(([id, v]) => rates.find((r) => r.id === id)?.price !== Number(v));
  async function saveAll() {
    for (const [, v] of changed) if (!/^\d+$/.test(v)) { toast.error("Prices must be whole numbers."); return; }
    setSaving(true);
    const results = await Promise.all(changed.map(([id, v]) => supabase.from("rates").update({ price: Number(v) }).eq("id", id)));
    setSaving(false);
    const failed = results.find((r) => r.error);
    if (failed?.error) toast.error(failed.error.message); else { toast.success(`${changed.length} price(s) saved`); setEdits({}); load(); }
  }
  const groups = [...new Set(rates.map((r) => r.vehicle_type))].filter(
    (g) => g === "Swift Dzire" || g === "Maruti Ertiga"
  );
  return <section className="rounded-xl border bg-card p-5 sm:p-6">
    <div className="flex flex-wrap items-center justify-between gap-3"><h2 className="font-display text-xl font-bold">Route prices (one way from Kotdwar)</h2><Button onClick={saveAll} disabled={saving || changed.length === 0}><Save /> {saving ? "Saving…" : `Save changes${changed.length ? ` (${changed.length})` : ""}`}</Button></div>
    <div className="mt-5 grid gap-6 lg:grid-cols-2">{groups.map((g) => <div key={g}><h3 className="mb-2 font-display font-bold text-accent">{g}</h3><div className="divide-y rounded-lg border">{rates.filter((r) => r.vehicle_type === g).map((r) => {
      const val = edits[r.id] ?? String(r.price);
      return <label key={r.id} className="grid grid-cols-[minmax(0,1fr)_7.5rem] items-center gap-3 p-3"><span className="min-w-0 text-sm font-medium">{r.route_name}<small className="block text-muted-foreground">Now {formatPrice(r.price)}</small></span><Input inputMode="numeric" aria-label={`${r.route_name} ${g} price`} value={val} onChange={(e) => setEdits({ ...edits, [r.id]: e.target.value.replace(/[^\d]/g, "") })} className={val !== String(r.price) ? "border-accent" : ""} /></label>;
    })}</div></div>)}</div>
  </section>;
}
