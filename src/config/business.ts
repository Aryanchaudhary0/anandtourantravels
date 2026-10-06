import dzireImage from "@/assets/dzire-fleet.webp";
import ertigaImage from "@/assets/ertiga-real.webp";
import innovaImage from "@/assets/innova-fleet.webp";
import tempoImage from "@/assets/tempo-travellers-real.webp";

export const business = {
  name: "Anand Tour & Travel",
  tagline: "Your Journey. Our Responsibility.",
  siteUrl: "https://anandtourandtravel.in",
  phoneDisplay: "+91 73021 93159",
  phone: "+917302193159",
  whatsapp: "917302193159",
  location: "Kotdwar, Uttarakhand, India",
  shortLocation: "Kotdwar, Uttarakhand",
  address: {
    streetAddress: "BSNL Tower, near Jal Nigam Store, Ekta Puram Colony, Shibu Nagar",
    addressLocality: "Kotdwar",
    addressRegion: "Uttarakhand",
    postalCode: "246149",
    addressCountry: "IN",
  },
  openingHours: "Mo-Su 00:00-23:59",
  googlePlaceId: "ChIJsZK5UWV9CTkRxFOSZdgfkbo",
  coordinates: { latitude: 29.7443059, longitude: 78.5023924 },
  mapsUrl: "https://maps.google.com/?cid=13443561376955126724",
  businessProfileUrl: "https://share.google/9tQi9MYdmdeQhV5db",
  announcement: "Planning an Uttarakhand trip? Ask us for a comfortable taxi plan tailored to your route.",
} as const;

export const vehicles = [
  {
    id: "dzire",
    name: "Swift Dzire",
    bookingName: "Dzire Sedan",
    category: "4 Seater Sedan",
    image: dzireImage,
    imageAlt: "Brand new white Maruti Suzuki Swift Dzire sedan with no number plate",
    description: "A comfortable, economical choice for couples, small families and business travel.",
  },
  {
    id: "ertiga",
    name: "Maruti Ertiga",
    bookingName: "Ertiga SUV",
    category: "6+1 Seater SUV",
    image: ertigaImage,
    imageAlt: "Grey Maruti Ertiga with roof luggage carrier",
    description: "Extra room for families and groups travelling with luggage across Uttarakhand.",
  },
  {
    id: "innova",
    name: "Innova Crysta",
    bookingName: "Innova Crysta",
    category: "Premium 6+1 Seater MPV",
    image: innovaImage,
    imageAlt: "Brand new white Toyota Innova Crysta MPV with no number plate",
    description: "Premium space and comfort for longer family, group and Char Dham journeys.",
  },
  {
    id: "tempo",
    name: "Tempo Traveller",
    bookingName: "Tempo Traveller",
    category: "Group Traveller",
    image: tempoImage,
    imageAlt: "Force Tempo Traveller vehicles available for group tours",
    description: "A practical group vehicle for tours, pilgrimages and larger family journeys.",
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

export const rateTables = vehicles.slice(0, 2).map((vehicle, vehicleIndex) => ({ ...vehicle, rates: destinations.map((destination, index) => ({ destination, price: (vehicleIndex === 0 ? dzireRates[index] : ertigaRates[index]) ?? 0 })) }));

export const popularRoutes = [
  { destination: "Lansdowne", rateKey: "Lansdowne", price: 2200, note: "Quiet hill station escape" },
  { destination: "Rishikesh / Haridwar", rateKey: "Rishikesh/Haridwar", price: 2500, note: "Ganga ghats and spiritual centres" },
  { destination: "Delhi / Delhi Airport", rateKey: "Delhi Airport/Delhi", price: 5500, note: "Direct one-way transfer" },
  { destination: "Dehradun / Mussoorie", rateKey: "Dehradun/Mussoorie/Dhanaulti", price: 4000, note: "Doon valley and the Queen of Hills" },
  { destination: "Jim Corbett / Ramnagar", rateKey: "Jim Corbett/Ramnagar", price: 3800, note: "Gateway to Corbett National Park" },
  { destination: "Kedarnath Sonprayag", rateKey: "Kedarnath Sonprayag", price: 8000, note: "Comfortable yatra transfer" },
] as const;

export const services = [
  { title: "Local Taxi", description: "Reliable point-to-point travel in and around Kotdwar.", href: "/taxi-service" },
  { title: "Outstation Taxi", description: "One-way and round-trip travel across Uttarakhand and beyond.", href: "/outstation-taxi" },
  { title: "Char Dham Yatra", description: "Thoughtful taxi planning for Uttarakhand's sacred circuit.", href: "/char-dham-yatra" },
  { title: "Airport & Railway Transfer", description: "Timely pickups and drops for onward journeys.", href: "/airport-taxi" },
  { title: "Lansdowne Day Tours", description: "A relaxed hill getaway from Kotdwar with a local driver.", href: "/kotdwar-to-lansdowne-taxi" },
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

export function formatPrice(price: number) {
  return `₹${price.toLocaleString("en-IN")}`;
}
