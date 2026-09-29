import { Link } from "@tanstack/react-router";
import { CarFront, Menu, MessageCircle, Mountain, Phone, ShieldCheck } from "lucide-react";
import { business, navLinks, services } from "@/config/business";
import { whatsappUrl, bookingMessage } from "@/lib/booking";
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

export function Brand() {
  return <Link to="/" className="flex min-w-0 items-center gap-2.5" aria-label={`${business.name} home`}>
    <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-primary text-primary-foreground"><Mountain className="size-5" /></span>
    <span className="min-w-0 leading-tight"><strong className="block truncate font-display text-base text-foreground">ANAND TOUR & TRAVEL</strong><span className="block truncate text-[11px] font-medium text-muted-foreground">{business.tagline}</span></span>
  </Link>;
}

export function Header() {
  return <header className="sticky top-0 z-40 border-b border-border/80 bg-background/95 backdrop-blur">
    <div className="site-container grid h-18 grid-cols-[minmax(0,1fr)_auto] items-center gap-3 lg:flex">
      <Brand />
      <nav className="ml-auto hidden items-center gap-5 lg:flex" aria-label="Main navigation">
        {navLinks.map((item) => <Link key={item.href} to={item.href} className="text-sm font-semibold text-muted-foreground transition-colors hover:text-primary active:text-primary">{item.label}</Link>)}
      </nav>
      <div className="ml-3 hidden items-center gap-2 xl:flex">
        <a href={`tel:${business.phone}`} className="inline-flex items-center gap-2 text-sm font-bold text-foreground"><Phone className="size-4 text-accent" />{business.phoneDisplay}</a>
        <Button asChild><a href={whatsappUrl(bookingMessage())} target="_blank" rel="noreferrer"><CarFront /> Book Taxi</a></Button>
      </div>
      <Sheet>
        <SheetTrigger asChild><Button variant="outline" size="icon" className="lg:hidden" aria-label="Open menu"><Menu /></Button></SheetTrigger>
        <SheetContent className="w-[88%] max-w-sm">
          <SheetHeader className="border-b pb-5 text-left"><SheetTitle><Brand /></SheetTitle><SheetDescription>Taxi service from Kotdwar, Uttarakhand</SheetDescription></SheetHeader>
          <nav className="mt-5 grid gap-1" aria-label="Mobile navigation">{navLinks.map((item) => <SheetClose asChild key={item.href}><Link to={item.href} className="rounded-lg px-3 py-3 text-base font-semibold hover:bg-muted">{item.label}</Link></SheetClose>)}</nav>
          <div className="mt-6 grid gap-3"><Button asChild size="lg"><a href={whatsappUrl(bookingMessage())} target="_blank" rel="noreferrer"><MessageCircle /> Book on WhatsApp</a></Button><Button asChild variant="outline" size="lg"><a href={`tel:${business.phone}`}><Phone /> {business.phoneDisplay}</a></Button></div>
        </SheetContent>
      </Sheet>
    </div>
  </header>;
}

export function Footer() {
  const quick = [{ label: "About", href: "/about" }, { label: "Contact", href: "/contact" }, { label: "FAQ", href: "/faq" }, { label: "Vehicles", href: "/vehicles" }];
  const routes = [{ label: "Lansdowne", href: "/kotdwar-to-lansdowne-taxi" }, { label: "Delhi", href: "/kotdwar-to-delhi-taxi" }, { label: "Kedarnath", href: "/kotdwar-to-kedarnath-taxi" }, { label: "Badrinath", href: "/kotdwar-to-badrinath-taxi" }];
  const map=`https://www.google.com/maps/embed/v1/place?key=${import.meta.env['VITE_LOVABLE_CONNECTOR_GOOGLE_MAPS_BROWSER_KEY']}&q=place_id:${business.googlePlaceId}`;
  return <footer className="bg-primary pb-24 text-primary-foreground md:pb-0">
    <div className="site-container grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
      <div><div className="mb-4 flex items-center gap-2"><Mountain className="size-7 text-accent" /><strong className="font-display">ANAND TOUR & TRAVEL</strong></div><p className="max-w-xs text-sm leading-6 text-primary-foreground/70">{business.tagline}<br />Safe and comfortable taxi travel from {business.shortLocation}.</p><iframe title="Anand Tour & Travel map" src={map} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="mt-4 h-32 w-full rounded-lg border border-primary-foreground/20"/><a href={business.businessProfileUrl} target="_blank" rel="noreferrer" className="mt-3 inline-block text-sm font-semibold text-accent hover:underline">View Google Business Profile</a></div>
      <FooterList title="Services" items={services.slice(0,4).map(({title,href}) => ({label:title,href}))} />
      <FooterList title="Popular routes" items={routes} />
      <FooterList title="Quick links" items={quick} />
    </div>
    <div className="border-t border-primary-foreground/15"><div className="site-container flex flex-col gap-2 py-5 text-xs text-primary-foreground/65 sm:flex-row sm:justify-between"><span>© 2026 {business.name}. All rights reserved.</span><span>Terms & Conditions · Privacy Policy</span></div></div>
  </footer>;
}

function FooterList({ title, items }: { title: string; items: readonly { label: string; href: string }[] }) {
  return <div><h3 className="mb-4 font-display text-sm uppercase text-primary-foreground">{title}</h3><ul className="space-y-2.5">{items.map((item) => <li key={item.href}><Link to={item.href} className="text-sm text-primary-foreground/70 hover:text-primary-foreground">{item.label}</Link></li>)}</ul></div>;
}

export function MobileActionBar() {
  return <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t bg-background p-2 pb-[max(.5rem,env(safe-area-inset-bottom))] shadow-2xl md:hidden">
    <a href={`tel:${business.phone}`} className="flex min-h-12 flex-col items-center justify-center gap-0.5 text-xs font-bold text-primary"><Phone className="size-5" />Call</a>
    <a href={whatsappUrl(bookingMessage())} target="_blank" rel="noreferrer" className="flex min-h-12 flex-col items-center justify-center gap-0.5 border-x text-xs font-bold text-whatsapp"><MessageCircle className="size-5" />WhatsApp</a>
    <a href={whatsappUrl(bookingMessage())} target="_blank" rel="noreferrer" className="flex min-h-12 flex-col items-center justify-center gap-0.5 text-xs font-bold text-accent"><CarFront className="size-5" />Book Taxi</a>
  </div>;
}

export function SiteLayout({ children }: { children: React.ReactNode }) { return <><Header /><main>{children}</main><Footer /><MobileActionBar /></>; }

export function TrustStrip() { return <div className="bg-secondary"><div className="site-container grid gap-3 py-4 text-sm font-semibold text-secondary-foreground sm:grid-cols-2 lg:grid-cols-4">{["Verified Drivers","Clean Vehicles","On-Time Pickup","24/7 Support"].map(x=><span key={x} className="flex items-center gap-2"><ShieldCheck className="size-4 text-accent" />{x}</span>)}</div></div>; }
