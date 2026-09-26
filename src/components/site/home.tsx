import { useState, type FormEvent } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, CalendarClock, Car, Check, ChevronRight, CircleDollarSign, Clock3, Headphones, MapPin, MessageCircle, Navigation, Phone, Route, ShieldCheck, Sparkles, Users } from "lucide-react";
import heroImage from "@/assets/himalayan-road-hero.jpg";
import carImage from "@/assets/taxi-sedan.jpg";
import { bookingVehicleOptions, business, formatPrice, popularRoutes, rateTables, rateTerms, services } from "@/config/business";
import { yatraRoutes } from "@/data/routes";
import { bookingMessage, whatsappUrl } from "@/lib/booking";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SiteLayout, TrustStrip } from "./layout";

const icons = [MapPin, Route, MountainIcon, Navigation, Sparkles] as const;
function MountainIcon(props: React.ComponentProps<typeof Route>) { return <Route {...props} />; }

export function HomePage() {
  return <SiteLayout>
    <Hero />
    <TrustStrip />
    <PopularRoutes />
    <Services />
    <RateTable />
    <CharDham />
    <Announcement />
    <WhyAndHow />
    <ContactBand />
  </SiteLayout>;
}

function Hero() {
  return <section className="relative isolate overflow-hidden bg-primary text-primary-foreground">
    <img src={heroImage} alt="Misty Himalayan mountain road winding through the Uttarakhand foothills" width={1600} height={1000} className="absolute inset-0 -z-20 h-full w-full object-cover" fetchPriority="high" />
    <div className="absolute inset-0 -z-10 bg-hero-overlay" />
    <div className="site-container grid min-h-[calc(100svh-4.5rem)] items-center gap-10 py-12 lg:grid-cols-[minmax(0,1.06fr)_minmax(340px,.72fr)] lg:py-16">
      <div className="min-w-0 self-center">
        <p className="mb-4 flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-accent"><span className="h-px w-8 bg-accent" />Your trusted travel partner</p>
        <h1 className="max-w-3xl font-display text-4xl font-extrabold leading-[1.08] sm:text-5xl lg:text-6xl">Your Trusted Taxi Service in Kotdwar & All Uttarakhand</h1>
        <p className="mt-5 text-base font-semibold text-primary-foreground/85 sm:text-lg">Safe <span className="mx-2 text-accent">•</span> Comfortable <span className="mx-2 text-accent">•</span> Transparent</p>
        <div className="mt-6 grid max-w-xl gap-3 sm:grid-cols-2">{["Verified Drivers","Clean Vehicles","On-Time Pickup","24/7 Support"].map(item=><span key={item} className="flex items-center gap-2 text-sm font-medium"><span className="grid size-6 place-items-center rounded-full bg-primary-foreground/15"><Check className="size-3.5 text-accent" /></span>{item}</span>)}</div>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row"><Button asChild size="lg" variant="whatsapp"><a href={whatsappUrl(bookingMessage())} target="_blank" rel="noreferrer"><MessageCircle /> WhatsApp Now</a></Button><Button asChild size="lg" variant="light"><a href={`tel:${business.phone}`}><Phone /> Call Now</a></Button></div>
        <img src={carImage} alt="White Swift Dzire sedan available for taxi booking" width={1200} height={700} className="mt-6 hidden w-[420px] rounded-lg mix-blend-lighten lg:block" />
      </div>
      <BookingCard />
    </div>
  </section>;
}

function BookingCard() {
  const [vehicle, setVehicle] = useState<string>(bookingVehicleOptions[0]);
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const message = `Hello ${business.name}, I would like a fare and taxi booking.\nPickup: ${form.get("pickup")}\nDrop: ${form.get("drop")}\nDate & Time: ${form.get("datetime")}\nPassengers: ${form.get("passengers")}\nVehicle: ${vehicle}\nPlease confirm availability and final fare.`;
    window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
  }
  return <form onSubmit={submit} className="self-center rounded-xl bg-card p-5 text-card-foreground shadow-2xl sm:p-7">
    <div className="mb-5"><p className="text-xs font-bold uppercase tracking-widest text-accent">Quick booking</p><h2 className="mt-1 font-display text-2xl font-bold">Plan your taxi</h2><p className="mt-1 text-sm text-muted-foreground">Share your trip details on WhatsApp.</p></div>
    <div className="grid gap-4">
      <Field label="Pickup Location" icon={MapPin}><Input name="pickup" placeholder="Enter pickup location" required /></Field>
      <Field label="Drop Location" icon={Navigation}><Input name="drop" placeholder="Where are you going?" required /></Field>
      <div className="grid gap-4 sm:grid-cols-2"><Field label="Date & Time" icon={CalendarClock}><Input name="datetime" type="datetime-local" required /></Field><Field label="Passengers" icon={Users}><Input name="passengers" type="number" min="1" max="26" placeholder="2" required /></Field></div>
      <div><Label htmlFor="vehicle" className="mb-2">Vehicle Type</Label><Select value={vehicle} onValueChange={setVehicle}><SelectTrigger id="vehicle" className="w-full"><SelectValue /></SelectTrigger><SelectContent>{bookingVehicleOptions.map(item=><SelectItem key={item} value={item}>{item}</SelectItem>)}</SelectContent></Select></div>
      <Button type="submit" size="xl" className="mt-1 w-full"><MessageCircle /> Get Fare & Book Now</Button>
      <p className="text-center text-xs text-muted-foreground">No payment required. Continue directly on WhatsApp.</p>
    </div>
  </form>;
}
function Field({label,icon:Icon,children}:{label:string;icon:typeof MapPin;children:React.ReactNode}) { return <div><Label className="mb-2 flex items-center gap-1.5"><Icon className="size-3.5 text-accent" />{label}</Label>{children}</div>; }

function SectionHeading({eyebrow,title,description}:{eyebrow:string;title:string;description:string}) { return <div className="mx-auto mb-10 max-w-2xl text-center"><p className="section-eyebrow">{eyebrow}</p><h2 className="section-title">{title}</h2><p className="section-copy">{description}</p></div>; }

function PopularRoutes() { return <section className="section"><div className="site-container"><SectionHeading eyebrow="Popular journeys" title="Clear one-way fares from Kotdwar" description="Start with our most-booked routes. Prices shown below are for Swift Dzire." /><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{popularRoutes.map(route=><article key={route.destination} className="group rounded-xl border bg-card p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"><div className="flex items-start justify-between gap-3"><span className="grid size-10 shrink-0 place-items-center rounded-lg bg-secondary text-primary"><Route className="size-5" /></span><span className="text-right"><small className="block text-xs text-muted-foreground">One way from</small><strong className="font-display text-xl text-primary">{formatPrice(route.price)}</strong></span></div><h3 className="mt-5 font-display text-lg font-bold">Kotdwar to {route.destination}</h3><p className="mt-1 text-sm text-muted-foreground">{route.note}</p><Button asChild variant="ghost" className="mt-4 px-0 text-accent"><a href={whatsappUrl(bookingMessage(route.destination,"Swift Dzire"))} target="_blank" rel="noreferrer">Book now <ArrowRight /></a></Button></article>)}</div></div></section>; }

function Services() { return <section className="section bg-muted"><div className="site-container"><SectionHeading eyebrow="Travel your way" title="Taxi services for every journey" description="From short local rides to long hill journeys, choose a service that fits your plan." /><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">{services.map((service,index)=>{const Icon=icons[index] ?? Route;return <Link key={service.href} to={service.href} className="rounded-xl border bg-card p-5 shadow-sm transition hover:border-accent hover:shadow-md"><span className="grid size-11 place-items-center rounded-lg bg-primary text-primary-foreground"><Icon className="size-5" /></span><h3 className="mt-5 font-display text-lg font-bold">{service.title}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{service.description}</p><span className="mt-5 flex items-center gap-1 text-sm font-bold text-accent">Explore <ChevronRight className="size-4" /></span></Link>})}</div></div></section>; }

export function RateTable() { return <section id="rates" className="section"><div className="site-container"><SectionHeading eyebrow="Transparent rates" title="One-way taxi fare table" description="Compare exact one-way rates from Kotdwar by vehicle. Final fare may include the terms listed below." /><Tabs defaultValue="dzire"><TabsList className="mx-auto mb-6 grid h-auto max-w-xl grid-cols-2"><TabsTrigger value="dzire" className="min-h-12">Swift Dzire</TabsTrigger><TabsTrigger value="ertiga" className="min-h-12">Maruti Ertiga</TabsTrigger></TabsList>{rateTables.map(table=><TabsContent value={table.id} key={table.id}><div className="overflow-hidden rounded-xl border bg-card shadow-sm"><div className="flex flex-col gap-1 border-b bg-secondary p-5 sm:flex-row sm:items-end sm:justify-between"><div><h3 className="font-display text-xl font-bold">{table.name}</h3><p className="text-sm text-muted-foreground">{table.category}</p></div><strong className="text-accent">{table.perKm}</strong></div><div className="grid sm:grid-cols-2 lg:grid-cols-3">{table.rates.map((rate,index)=><div key={rate.destination} className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 border-b p-4 last:border-b-0 sm:[&:nth-last-child(-n+2)]:border-b-0 lg:border-r lg:[&:nth-child(3n)]:border-r-0 lg:[&:nth-last-child(-n+3)]:border-b-0"><span className="min-w-0 text-sm font-medium">{rate.destination}</span><strong className="whitespace-nowrap text-primary">{formatPrice(rate.price)}</strong></div>)}</div></div></TabsContent>)}</Tabs><div className="mt-6 grid gap-3 rounded-xl border border-accent/25 bg-highlight p-5 sm:grid-cols-3">{rateTerms.map(term=><p key={term} className="flex gap-2 text-sm font-semibold"><CircleDollarSign className="mt-0.5 size-4 shrink-0 text-accent" />{term}</p>)}</div></div></section>; }

function CharDham() { return <section className="section bg-primary text-primary-foreground"><div className="site-container"><SectionHeading eyebrow="Sacred Uttarakhand" title="Char Dham Yatra taxi from Haridwar & Rishikesh" description="Plan shrine travel from Kotdwar or the Haridwar and Rishikesh railheads. Choose a vehicle and ask the owner for the best itinerary price." /><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{yatraRoutes.map(dham=><article key={dham.slug} className="overflow-hidden rounded-xl border border-primary-foreground/15 bg-primary-foreground/5"><img src={dham.image} alt={dham.imageAlt} width={1200} height={800} loading="lazy" className="aspect-[4/3] w-full object-cover"/><div className="p-5"><div className="flex flex-wrap gap-2"><span className="rounded-full bg-accent px-2.5 py-1 text-xs font-bold text-accent-foreground">{dham.altitude}</span><span className="rounded-full bg-primary-foreground/10 px-2.5 py-1 text-xs font-semibold">Enquire for fare</span></div><h3 className="mt-4 font-display text-xl font-bold">{dham.destination}</h3><p className="mt-2 min-h-16 text-sm leading-6 text-primary-foreground/75">{dham.roadAccess}</p><p className="mt-3 text-xs font-semibold text-primary-foreground/70">Pickup: Kotdwar · Haridwar · Rishikesh</p><div className="mt-4 grid gap-2"><Button asChild variant="light" className="w-full"><a href={whatsappUrl(`Hello ${business.name}, I want to plan a ${dham.destination} yatra taxi from [Kotdwar/Haridwar/Rishikesh]. Please suggest the best vehicle and price.`)} target="_blank" rel="noreferrer"><MessageCircle /> Ask best price</a></Button><Button asChild variant="ghost" className="text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"><Link to={`/${dham.slug}`}>View yatra details <ArrowRight /></Link></Button></div></div></article>)}</div></div></section>; }

function Announcement() { return <section className="py-8"><div className="site-container"><div className="grid gap-5 rounded-xl bg-accent p-6 text-accent-foreground sm:grid-cols-[auto_minmax(0,1fr)_auto] sm:items-center"><span className="grid size-12 place-items-center rounded-lg bg-accent-foreground/10"><Sparkles /></span><div><p className="text-xs font-bold uppercase tracking-widest">Special travel update</p><h2 className="mt-1 font-display text-xl font-bold">{business.announcement}</h2></div><Button asChild variant="dark"><a href={whatsappUrl(bookingMessage())} target="_blank" rel="noreferrer">Ask on WhatsApp <ArrowRight /></a></Button></div></div></section>; }

function WhyAndHow() { const reasons=[[ShieldCheck,"Safe & Reliable"],[Car,"Experienced Hill Drivers"],[Sparkles,"Clean & Comfortable"],[Headphones,"24/7 Support"]] as const; return <section className="section"><div className="site-container grid gap-14 lg:grid-cols-2"><div><p className="section-eyebrow text-left">Why choose us</p><h2 className="section-title text-left">A dependable partner on the road</h2><div className="mt-7 grid gap-3 sm:grid-cols-2">{reasons.map(([Icon,title])=><div key={title} className="flex items-center gap-3 rounded-xl border bg-card p-4"><span className="grid size-10 shrink-0 place-items-center rounded-lg bg-secondary text-primary"><Icon className="size-5" /></span><strong className="text-sm">{title}</strong></div>)}</div></div><div><p className="section-eyebrow text-left">How it works</p><h2 className="section-title text-left">Book in three simple steps</h2><ol className="mt-7 space-y-4">{[["01","Share your journey","Tell us your pickup, destination, date, and group size."],["02","Confirm your taxi","We confirm availability and share the final trip fare."],["03","Travel with confidence","Your driver arrives at the agreed pickup time."]].map(([n,t,d])=><li key={n} className="grid grid-cols-[auto_minmax(0,1fr)] gap-4"><span className="grid size-11 place-items-center rounded-full bg-accent font-display font-bold text-accent-foreground">{n}</span><div><strong className="font-display">{t}</strong><p className="mt-1 text-sm leading-6 text-muted-foreground">{d}</p></div></li>)}</ol></div></div></section>; }

function ContactBand() { return <section className="section bg-muted"><div className="site-container"><SectionHeading eyebrow="Contact us" title="Ready for your next journey?" description="Call or message us directly for taxi availability and a clear fare." /><div className="grid gap-4 md:grid-cols-3"><a href={`tel:${business.phone}`} className="rounded-xl border bg-card p-6 text-center shadow-sm"><Phone className="mx-auto size-7 text-accent"/><h3 className="mt-4 font-display font-bold">Direct call</h3><p className="mt-1 text-sm text-muted-foreground">{business.phoneDisplay}</p></a><a href={whatsappUrl(bookingMessage())} target="_blank" rel="noreferrer" className="rounded-xl border bg-card p-6 text-center shadow-sm"><MessageCircle className="mx-auto size-7 text-whatsapp"/><h3 className="mt-4 font-display font-bold">WhatsApp</h3><p className="mt-1 text-sm text-muted-foreground">Quick booking enquiry</p></a><div className="rounded-xl border bg-card p-6 text-center shadow-sm"><MapPin className="mx-auto size-7 text-primary"/><h3 className="mt-4 font-display font-bold">Our base</h3><p className="mt-1 text-sm text-muted-foreground">{business.location}</p></div></div><div className="mt-4 grid min-h-52 place-items-center rounded-xl border border-dashed bg-secondary text-center"><div><MapPin className="mx-auto size-8 text-accent"/><strong className="mt-3 block font-display">Google Maps location</strong><p className="mt-1 text-sm text-muted-foreground">Map will be connected when the exact business pin is available.</p></div></div></div></section>; }
