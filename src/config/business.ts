export const business = {
  name: "Anand Tour & Travel",
  tagline: "Your Journey. Our Responsibility.",
  phoneDisplay: "+91 73021 93159",
  phone: "+917302193159",
  whatsapp: "917302193159",
  location: "Kotdwar, Uttarakhand, India",
  shortLocation: "Kotdwar, Uttarakhand",
  announcement: "Planning an Uttarakhand trip? Ask us for a comfortable taxi plan tailored to your route.",
} as const;

export const vehicles = [
  {
    id: "dzire",
    name: "Swift Dzire",
    bookingName: "Dzire Sedan",
    category: "4 Seater Sedan",
    perKm: "₹12/km",
    description: "A comfortable, economical choice for couples, small families and business travel.",
  },
  {
    id: "ertiga",
    name: "Maruti Ertiga",
    bookingName: "Ertiga SUV",
    category: "6+1 Seater SUV",
    perKm: "₹16/km",
    description: "Extra room for families and groups travelling with luggage across Uttarakhand.",
  },
] as const;

export const bookingVehicleOptions = ["Dzire Sedan", "Ertiga SUV", "Innova Crysta", "Tempo Traveller"] as const;

const destinations = [
  "Lansdowne", "Dugadda/Satpuli/Pauri", "Rishikesh/Haridwar", "Dehradun/Mussoorie/Dhanaulti",
  "Jim Corbett/Ramnagar", "Nainital/Bhimtal", "Almora/Kausani/Ranikhet", "Tehri Lake",
  "Chopta Tungnath", "Auli/Joshimath", "Delhi Airport/Delhi", "Kedarnath Sonprayag", "Badrinath",
] as const;

const dzireRates = [2200, 2500, 2500, 4000, 3800, 5500, 7500, 6000, 7000, 10000, 5500, 8000, 11000];
const ertigaRates = [3000, 3500, 3500, 5500, 5000, 7500, 10000, 8000, 9500, 13000, 7000, 11000, 15000];

export const rateTables = vehicles.map((vehicle, vehicleIndex) => ({
  ...vehicle,
  rates: destinations.map((destination, index) => ({
    destination,
    price: vehicleIndex === 0 ? dzireRates[index] : ertigaRates[index],
  })),
}));

export const popularRoutes = [
  { destination: "Lansdowne", price: 2200, note: "Quiet hill station escape" },
  { destination: "Rishikesh / Haridwar", price: 2500, note: "Ganga ghats and spiritual centres" },
  { destination: "Delhi / Delhi Airport", price: 5500, note: "Direct one-way transfer" },
  { destination: "Dehradun / Mussoorie", price: 4000, note: "Doon valley and the Queen of Hills" },
  { destination: "Jim Corbett / Ramnagar", price: 3800, note: "Gateway to Corbett National Park" },
  { destination: "Kedarnath Sonprayag", price: 8000, note: "Comfortable yatra transfer" },
] as const;

export const services = [
  { title: "Local Taxi", description: "Reliable point-to-point travel in and around Kotdwar.", href: "/taxi-service" },
  { title: "Outstation Taxi", description: "One-way and round-trip travel across Uttarakhand and beyond.", href: "/outstation-taxi" },
  { title: "Char Dham Yatra", description: "Thoughtful taxi planning for Uttarakhand's sacred circuit.", href: "/char-dham-yatra" },
  { title: "Airport & Railway Transfer", description: "Timely pickups and drops for onward journeys.", href: "/airport-taxi" },
  { title: "Lansdowne Day Tours", description: "A relaxed hill getaway from Kotdwar with a local driver.", href: "/kotdwar-to-lansdowne-taxi" },
] as const;

export const charDhams = [
  { name: "Kedarnath", description: "Taxi service to Sonprayag for the Kedarnath pilgrimage route." },
  { name: "Badrinath", description: "A scenic journey through the Alaknanda valley to Badrinath." },
  { name: "Gangotri", description: "Plan a comfortable road journey to the source of the Ganga." },
  { name: "Yamunotri", description: "Taxi travel to Janki Chatti for the Yamunotri route." },
] as const;

export const rateTerms = [
  "Toll, Parking, State Tax extra.",
  "Night charge ₹300 (10 PM–5 AM).",
  "Round trips: driver food/stay by customer.",
] as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Routes", href: "/outstation-taxi" },
  { label: "Fleet", href: "/vehicles" },
  { label: "Char Dham", href: "/char-dham-yatra" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const routePages = {
  "/kotdwar-to-lansdowne-taxi": { destination: "Lansdowne", dzire: 2200, ertiga: 3000, intro: "Book a comfortable hill taxi from Kotdwar to Lansdowne for a relaxed day trip, stay, or onward journey." },
  "/kotdwar-to-delhi-taxi": { destination: "Delhi", dzire: 5500, ertiga: 7000, intro: "Travel directly from Kotdwar to Delhi or Delhi Airport with a clean vehicle and an experienced driver." },
  "/kotdwar-to-dehradun-taxi": { destination: "Dehradun", dzire: 4000, ertiga: 5500, intro: "Reserve a one-way taxi from Kotdwar to Dehradun, with Mussoorie and Dhanaulti covered at the same listed fare." },
  "/kotdwar-to-haridwar-taxi": { destination: "Haridwar", dzire: 2500, ertiga: 3500, intro: "Book a direct taxi from Kotdwar to Haridwar for railway transfers, temple visits, or onward travel." },
  "/kotdwar-to-rishikesh-taxi": { destination: "Rishikesh", dzire: 2500, ertiga: 3500, intro: "Travel from Kotdwar to Rishikesh with convenient doorstep pickup and transparent one-way fares." },
} as const;

export function formatPrice(price: number) {
  return `₹${price.toLocaleString("en-IN")}`;
}
