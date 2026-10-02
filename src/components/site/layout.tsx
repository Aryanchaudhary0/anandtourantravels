import { Link } from "@tanstack/react-router";
import { CarFront, MapPin, Menu, MessageCircle, Mountain, Phone, ShieldCheck, Star } from "lucide-react";
import { business, navLinks, vehicles } from "@/config/business";
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
  const quick = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Our Fleet", href: "/vehicles" },
    { label: "Tour Packages", href: "/outstation-taxi" },
    { label: "Airport Transfers", href: "/airport-taxi" },
    { label: "Char Dham Yatra Guide", href: "/char-dham-yatra" },
    { label: "Contact Us", href: "/contact" },
    { label: "FAQ", href: "/faq" },
  ] as const;
  const routes = [
    { label: "Kotdwar Taxi Service", href: "/taxi-service" },
    { label: "Kotdwar to Lansdowne Taxi", href: "/kotdwar-to-lansdowne-taxi" },
    { label: "Kotdwar to Delhi Taxi", href: "/kotdwar-to-delhi-taxi" },
    { label: "Kotdwar to Dehradun Taxi", href: "/kotdwar-to-dehradun-taxi" },
    { label: "Kotdwar to Haridwar Taxi", href: "/kotdwar-to-haridwar-taxi" },
    { label: "Kotdwar to Rishikesh Taxi", href: "/kotdwar-to-rishikesh-taxi" },
    { label: "Kotdwar to Jim Corbett Taxi", href: "/kotdwar-to-jim-corbett-taxi" },
    { label: "Kotdwar to Nainital Taxi", href: "/kotdwar-to-nainital-taxi" },
    { label: "Kotdwar to Mussoorie Taxi", href: "/kotdwar-to-mussoorie-taxi" },
    { label: "Airport & Railway Transfers", href: "/airport-taxi" },
    { label: "Char Dham Yatra Packages", href: "/char-dham-yatra" },
    { label: "Kedarnath Taxi Package", href: "/kotdwar-to-kedarnath-taxi" },
    { label: "Badrinath Taxi Package", href: "/kotdwar-to-badrinath-taxi" },
    { label: "Gangotri Taxi Package", href: "/kotdwar-to-gangotri-taxi" },
    { label: "Yamunotri Taxi Package", href: "/kotdwar-to-yamunotri-taxi" },
  ] as const;
  const enquiries = ["Kotdwar to Ayodhya Tour Package", "Kotdwar to Vaishno Devi Package", "Kotdwar to Kathmandu Tour Package", "Kotdwar to Varanasi Tour Package"] as const;
  return <footer className="bg-primary pb-24 text-primary-foreground md:pb-0">
    <div className="site-container grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[1.15fr_.8fr_1.45fr_.8fr] lg:gap-8">
      <div>
        <div className="mb-3 flex items-center gap-2"><Mountain className="size-7 text-accent" /><strong className="font-display">ANAND TOUR & TRAVEL</strong></div>
        <p className="font-display text-sm font-semibold text-accent">{business.tagline}</p>
        <p className="mt-3 max-w-sm text-sm leading-6 text-primary-foreground/70">Trusted Kotdwar taxi service for local travel, outstation trips, airport transfers and Uttarakhand pilgrimages.</p>
        <a href={business.businessProfileUrl} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 rounded-md bg-accent px-3 py-2 text-sm font-bold text-accent-foreground transition-opacity hover:opacity-90"><Star className="size-4 fill-current" /> Google Business Profile</a>
        <div className="mt-5 grid gap-3 text-sm">
          <a href={`tel:${business.phone}`} className="flex items-center gap-2 font-semibold hover:text-accent"><Phone className="size-4 shrink-0 text-accent" />{business.phoneDisplay}</a>
          <Button asChild variant="whatsapp" className="w-fit"><a href={whatsappUrl(bookingMessage())} target="_blank" rel="noreferrer"><MessageCircle /> WhatsApp</a></Button>
          <a href={business.mapsUrl} target="_blank" rel="noreferrer" className="flex items-start gap-2 text-primary-foreground/70 hover:text-primary-foreground"><MapPin className="mt-0.5 size-4 shrink-0 text-accent" /><span>{business.address.streetAddress}, {business.address.addressLocality}, {business.address.addressRegion} {business.address.postalCode}</span></a>
        </div>
      </div>
      <FooterList title="Quick Links" items={quick} />
      <div>
        <FooterList title="Our Packages & Routes" items={routes} />
        <ul className="mt-2 space-y-2.5">{enquiries.map((label) => <li key={label}><a href={whatsappUrl(bookingMessage(label))} target="_blank" rel="noreferrer" className="text-sm text-primary-foreground/70 hover:text-primary-foreground">{label} <span className="text-accent">· Enquire</span></a></li>)}</ul>
      </div>
      <FooterList title="Our Fleet" items={vehicles.map((vehicle) => ({ label: vehicle.name, href: "/vehicles" as const }))} />
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
