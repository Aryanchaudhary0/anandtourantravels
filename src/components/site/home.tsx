import { useRef, useState, type FormEvent, type UIEvent } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, CalendarClock, Car, Check, ChevronLeft, ChevronRight, CircleDollarSign, Clock3, Headphones, MapPin, MessageCircle, Navigation, Phone, Route, ShieldCheck, Sparkles, Users } from "lucide-react";
import heroImage from "@/assets/himalayan-road-hero.jpg";
import carImage from "@/assets/taxi-sedan.jpg";
import { bookingVehicleOptions, business, formatPrice, popularRoutes, rateTables, rateTerms, services } from "@/config/business";
import { yatraRoutes } from "@/data/routes";
import { TOUR_PACKAGES } from "@/data/packages";
import { bookingMessage, whatsappUrl } from "@/lib/booking";
import { Button } from "@/components/ui/button";
import { TextAnimate } from "@/components/ui/text-animate";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SiteLayout, TrustStrip } from "./layout";
import { priceFor, pricingFor, useLiveAnnouncement, useLivePricingItems, useLiveRates } from "@/lib/live-content";

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
    <TourPackages />
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
        <TextAnimate text="Your Trusted Taxi Service in Kotdwar & All Uttarakhand" type="fadeInUp" className="max-w-3xl font-display text-4xl font-extrabold leading-[1.08] sm:text-5xl lg:text-6xl" />
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
      <div className="grid min-w-0 grid-cols-[minmax(0,1fr)] gap-4"><Field label="Date & Time" icon={CalendarClock}><Input name="datetime" type="datetime-local" className="min-w-0 max-w-full" required /></Field><Field label="Passengers" icon={Users}><Input name="passengers" type="number" min="1" max="26" placeholder="2" required /></Field></div>
      <div><Label htmlFor="vehicle" className="mb-2">Vehicle Type</Label><Select value={vehicle} onValueChange={setVehicle}><SelectTrigger id="vehicle" className="w-full"><SelectValue /></SelectTrigger><SelectContent>{bookingVehicleOptions.map(item=><SelectItem key={item} value={item}>{item}</SelectItem>)}</SelectContent></Select></div>
      <Button type="submit" size="xl" className="mt-1 w-full"><MessageCircle /> Get Fare & Book Now</Button>
      <p className="text-center text-xs text-muted-foreground">No payment required. Continue directly on WhatsApp.</p>
    </div>
  </form>;
}
function Field({label,icon:Icon,children}:{label:string;icon:typeof MapPin;children:React.ReactNode}) { return <div className="min-w-0"><Label className="mb-2 flex items-center gap-1.5"><Icon className="size-3.5 text-accent" />{label}</Label>{children}</div>; }

function SectionHeading({eyebrow,title,description,dark=false}:{eyebrow:string;title:string;description:string;dark?:boolean}) { return <div className="mx-auto mb-7 max-w-2xl text-center"><p className="section-eyebrow">{eyebrow}</p><h2 className={dark ? "section-title text-primary-foreground" : "section-title"}>{title}</h2><p className={dark ? "section-copy text-primary-foreground/75" : "section-copy"}>{description}</p></div>; }

function PopularRoutes() { const live=useLiveRates(); return <section className="section"><div className="site-container"><SectionHeading eyebrow="Popular journeys" title="Clear one-way fares from Kotdwar" description="Start with our most-booked routes. Prices shown below are for Swift Dzire." /><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{popularRoutes.map(route=><article key={route.destination} className="group rounded-xl border bg-card p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"><div className="flex items-start justify-between gap-3"><span className="grid size-10 shrink-0 place-items-center rounded-lg bg-secondary text-primary"><Route className="size-5" /></span><span className="text-right"><small className="block text-xs text-muted-foreground">One way from</small><strong className="font-display text-xl text-primary">{formatPrice(priceFor(live,route.rateKey,"Swift Dzire",route.price))}</strong></span></div><h3 className="mt-5 font-display text-lg font-bold">Kotdwar to {route.destination}</h3><p className="mt-1 text-sm text-muted-foreground">{route.note}</p><Button asChild variant="ghost" className="mt-4 px-0 text-accent"><a href={whatsappUrl(bookingMessage(route.destination,"Swift Dzire"))} target="_blank" rel="noreferrer">Book now <ArrowRight /></a></Button></article>)}</div></div></section>; }

function Services() { return <section className="section bg-muted"><div className="site-container"><SectionHeading eyebrow="Travel your way" title="Taxi services for every journey" description="From short local rides to long hill journeys, choose a service that fits your plan." /><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">{services.map((service,index)=>{const Icon=icons[index] ?? Route;return <Link key={service.href} to={service.href} className="rounded-xl border bg-card p-5 shadow-sm transition hover:border-accent hover:shadow-md"><span className="grid size-11 place-items-center rounded-lg bg-primary text-primary-foreground"><Icon className="size-5" /></span><h3 className="mt-5 font-display text-lg font-bold">{service.title}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{service.description}</p><span className="mt-5 flex items-center gap-1 text-sm font-bold text-accent">Explore <ChevronRight className="size-4" /></span></Link>})}</div></div></section>; }

export function RateTable() { const live=useLiveRates(); return <section id="rates" className="section"><div className="site-container"><SectionHeading eyebrow="Transparent rates" title="One-way taxi fare table" description="Compare exact one-way rates from Kotdwar by vehicle. Final fare may include the terms listed below." /><Tabs defaultValue="dzire"><TabsList className="mx-auto mb-6 grid h-auto max-w-xl grid-cols-2"><TabsTrigger value="dzire" className="min-h-12">Swift Dzire</TabsTrigger><TabsTrigger value="ertiga" className="min-h-12">Maruti Ertiga</TabsTrigger></TabsList>{rateTables.map(table=><TabsContent value={table.id} key={table.id}><div className="overflow-hidden rounded-xl border bg-card shadow-sm"><div className="border-b bg-secondary p-5"><h3 className="font-display text-xl font-bold">{table.name}</h3><p className="text-sm text-muted-foreground">{table.category}</p></div><div className="grid sm:grid-cols-2 lg:grid-cols-3">{table.rates.map(rate=><div key={rate.destination} className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 border-b p-4 last:border-b-0 sm:[&:nth-last-child(-n+2)]:border-b-0 lg:border-r lg:[&:nth-child(3n)]:border-r-0 lg:[&:nth-last-child(-n+3)]:border-b-0"><span className="min-w-0 text-sm font-medium">{rate.destination}</span><strong className="whitespace-nowrap text-primary">{formatPrice(priceFor(live,rate.destination,table.name,rate.price))}</strong></div>)}</div></div></TabsContent>)}</Tabs><div className="mt-6 grid gap-3 rounded-xl border border-accent/25 bg-highlight p-5 sm:grid-cols-3">{rateTerms.map(term=><p key={term} className="flex gap-2 text-sm font-semibold"><CircleDollarSign className="mt-0.5 size-4 shrink-0 text-accent" />{term}</p>)}</div></div></section>; }

function CharDham() { return <section className="section bg-primary text-primary-foreground"><div className="site-container"><SectionHeading dark eyebrow="Sacred Uttarakhand" title="Char Dham Yatra taxi from Haridwar & Rishikesh" description="Plan shrine travel from Kotdwar or the Haridwar and Rishikesh railheads. Choose a vehicle and ask the owner for the best itinerary price." /><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{yatraRoutes.map(dham=><article key={dham.slug} className="overflow-hidden rounded-xl border border-primary-foreground/15 bg-primary-foreground/5"><img src={dham.image} alt={dham.imageAlt} width={1200} height={800} loading="lazy" className="aspect-[4/3] w-full object-cover"/><div className="p-5"><div className="flex flex-wrap gap-2"><span className="rounded-full bg-accent px-2.5 py-1 text-xs font-bold text-accent-foreground">{dham.altitude}</span><span className="rounded-full bg-primary-foreground/10 px-2.5 py-1 text-xs font-semibold">Enquire for fare</span></div><h3 className="mt-4 font-display text-xl font-bold">{dham.destination}</h3><p className="mt-2 min-h-16 text-sm leading-6 text-primary-foreground/75">{dham.roadAccess}</p><p className="mt-3 text-xs font-semibold text-primary-foreground/70">Pickup: Kotdwar · Haridwar · Rishikesh</p><div className="mt-4 grid gap-2"><Button asChild variant="light" className="w-full"><a href={whatsappUrl(`Hello ${business.name}, I want to plan a ${dham.destination} yatra taxi from [Kotdwar/Haridwar/Rishikesh]. Please suggest the best vehicle and price.`)} target="_blank" rel="noreferrer"><MessageCircle /> Ask best price</a></Button><Button asChild variant="ghost" className="text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"><a href={`/${dham.slug}`}>View yatra details <ArrowRight /></a></Button></div></div></article>)}</div></div></section>; }

function TourPackages() {
  const live=useLivePricingItems();
  const track=useRef<HTMLDivElement>(null);
  const [active,setActive]=useState(0);
  function scrollTo(index:number){ const el=track.current; if(!el) return; const card=el.children[index] as HTMLElement|undefined; if(card) el.scrollTo({left:card.offsetLeft-el.offsetLeft,behavior:"smooth"}); }
  function step(dir:1|-1){ scrollTo(Math.min(TOUR_PACKAGES.length-1,Math.max(0,active+dir))); }
  function onScroll(e:UIEvent<HTMLDivElement>){ const el=e.currentTarget; const first=el.children[0] as HTMLElement|undefined; if(!first) return; const w=first.offsetWidth+20; setActive(Math.min(TOUR_PACKAGES.length-1,Math.round(el.scrollLeft/w))); }
  return <section className="section"><div className="site-container"><SectionHeading eyebrow="Multi-day escapes" title="Complete Uttarakhand tour packages" description="Choose a ready itinerary with clear pricing, then confirm dates and availability directly with the owner."/>
    <div className="relative">
      <div className="relative">
        <div ref={track} onScroll={onScroll} className="-mx-4 flex items-stretch snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-4 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:px-0">{TOUR_PACKAGES.map(item=><article key={item.key} className="flex w-[86%] shrink-0 self-stretch snap-start flex-col overflow-hidden rounded-xl border bg-card shadow-sm sm:w-[62%] lg:w-[calc((100%-2.5rem)/3)]"><img src={item.image} alt={item.imageAlt} width={1408} height={912} loading="lazy" decoding="async" className="aspect-[16/9] w-full object-cover"/><div className="flex flex-1 flex-col p-5"><div className="flex flex-wrap gap-2 text-xs font-bold"><span className="rounded-full bg-secondary px-3 py-1">{item.duration}</span><span className="rounded-full bg-highlight px-3 py-1">{item.vehicle}</span></div><h3 className="mt-4 font-display text-xl font-bold">{item.title}</h3><p className="mt-3"><strong className="font-display text-3xl text-accent">{formatPrice(pricingFor(live,item.key,item.price))}</strong> <span className="text-sm text-muted-foreground">{item.pricingUnit}</span></p><ol className="mt-5 space-y-3">{item.itinerary.map(step=><li key={step.day} className="grid grid-cols-[3.25rem_minmax(0,1fr)] gap-3 text-sm"><strong className="text-accent">{step.day}</strong><span><b>{step.title}</b><small className="mt-1 block leading-5 text-muted-foreground">{step.detail}</small></span></li>)}</ol><p className="mt-5 text-sm font-semibold">Included: {item.inclusions.join(" · ")}</p>{item.note&&<p className="mt-2 text-sm leading-6 text-muted-foreground">{item.note}</p>}<div className="mt-auto pt-5"><Button asChild className="w-full"><a href={whatsappUrl(`Hello ${business.name}, I want to book the ${item.title} package for ${item.duration}. Please confirm availability.`)} target="_blank" rel="noreferrer"><MessageCircle/> Enquire about this package</a></Button></div></div></article>)}</div>
        <button type="button" onClick={()=>step(-1)} disabled={active===0} aria-label="Previous package" className="absolute left-1 top-1/2 z-10 grid size-10 -translate-y-1/2 place-items-center rounded-full border bg-card/95 text-primary shadow-sm transition hover:border-accent disabled:opacity-40 sm:-left-5"><ChevronLeft className="size-5"/></button>
        <button type="button" onClick={()=>step(1)} disabled={active===TOUR_PACKAGES.length-1} aria-label="Next package" className="absolute right-1 top-1/2 z-10 grid size-10 -translate-y-1/2 place-items-center rounded-full border bg-card/95 text-primary shadow-sm transition hover:border-accent disabled:opacity-40 sm:-right-5"><ChevronRight className="size-5"/></button>
      </div>
      <div className="mt-5 flex justify-center"><div className="flex gap-2">{TOUR_PACKAGES.map((item,index)=><button key={item.key} type="button" onClick={()=>scrollTo(index)} aria-label={`Go to package ${index+1}`} className={`h-2.5 rounded-full transition-all ${index===active?"w-7 bg-accent":"w-2.5 bg-primary/25"}`}/>)}</div></div>
    </div>
  </div></section>;
}

function Announcement() { const offer=useLiveAnnouncement(); if(!offer.is_active) return null; return <section className="py-8"><div className="site-container"><div className="grid gap-5 rounded-xl bg-accent p-6 text-accent-foreground sm:grid-cols-[auto_minmax(0,1fr)_auto] sm:items-center"><span className="grid size-12 place-items-center rounded-lg bg-accent-foreground/10"><Sparkles /></span><div><p className="text-xs font-bold uppercase tracking-widest">Special travel update</p><h2 className="mt-1 font-display text-xl font-bold">{offer.headline}</h2></div><Button asChild variant="dark"><a href={whatsappUrl(bookingMessage())} target="_blank" rel="noreferrer">Ask on WhatsApp <ArrowRight /></a></Button></div></div></section>; }

function WhyAndHow() { const reasons=[[ShieldCheck,"Safe & Reliable"],[Car,"Experienced Hill Drivers"],[Sparkles,"Clean & Comfortable"],[Headphones,"24/7 Support"]] as const; return <section className="section"><div className="site-container grid gap-14 lg:grid-cols-2"><div><p className="section-eyebrow text-left">Why choose us</p><h2 className="section-title text-left">A dependable partner on the road</h2><div className="mt-7 grid gap-3 sm:grid-cols-2">{reasons.map(([Icon,title])=><div key={title} className="flex items-center gap-3 rounded-xl border bg-card p-4"><span className="grid size-10 shrink-0 place-items-center rounded-lg bg-secondary text-primary"><Icon className="size-5" /></span><strong className="text-sm">{title}</strong></div>)}</div></div><div><p className="section-eyebrow text-left">How it works</p><h2 className="section-title text-left">Book in three simple steps</h2><ol className="mt-7 space-y-4">{[["01","Share your journey","Tell us your pickup, destination, date, and group size."],["02","Confirm your taxi","We confirm availability and share the final trip fare."],["03","Travel with confidence","Your driver arrives at the agreed pickup time."]].map(([n,t,d])=><li key={n} className="grid grid-cols-[auto_minmax(0,1fr)] gap-4"><span className="grid size-11 place-items-center rounded-full bg-accent font-display font-bold text-accent-foreground">{n}</span><div><strong className="font-display">{t}</strong><p className="mt-1 text-sm leading-6 text-muted-foreground">{d}</p></div></li>)}</ol></div></div></section>; }

function ContactBand() { const map=`https://www.google.com/maps?q=${encodeURIComponent("BSNL Tower, Near Jal Nigam Store, Ekta Puram Colony, Shibu Nagar, Kotdwar, Uttarakhand 246149")}&output=embed`; return <section className="section bg-muted"><div className="site-container"><SectionHeading eyebrow="Contact us" title="Ready for your next journey?" description="Call or message us directly for taxi availability and a clear fare." /><div className="grid gap-4 md:grid-cols-3"><a href={`tel:${business.phone}`} className="rounded-xl border bg-card p-6 text-center shadow-sm"><Phone className="mx-auto size-7 text-accent"/><h3 className="mt-4 font-display font-bold">Direct call</h3><p className="mt-1 text-sm text-muted-foreground">{business.phoneDisplay}</p></a><a href={whatsappUrl(bookingMessage())} target="_blank" rel="noreferrer" className="rounded-xl border bg-card p-6 text-center shadow-sm"><MessageCircle className="mx-auto size-7 text-whatsapp"/><h3 className="mt-4 font-display font-bold">WhatsApp</h3><p className="mt-1 text-sm text-muted-foreground">Quick booking enquiry</p></a><a href={business.businessProfileUrl} target="_blank" rel="noreferrer" className="rounded-xl border bg-card p-6 text-center shadow-sm"><MapPin className="mx-auto size-7 text-primary"/><h3 className="mt-4 font-display font-bold">Google Business Profile</h3><p className="mt-1 text-sm text-muted-foreground">{business.shortLocation}</p></a></div><iframe title="Anand Tour & Travel location on Google Maps" src={map} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="mt-4 h-72 w-full rounded-xl border" allowFullScreen/></div></section>; }
