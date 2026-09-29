import kedarnathImage from "@/assets/kedarnath-temple.webp";
import badrinathImage from "@/assets/badrinath-temple.webp";
import gangotriImage from "@/assets/gangotri-temple.webp";
import yamunotriImage from "@/assets/yamunotri-temple.webp";
import roadImage from "@/assets/himalayan-road-hero.jpg";
import corbettImage from "@/assets/jim-corbett-package.webp";
import nainitalImage from "@/assets/nainital-package.webp";
import mussoorieImage from "@/assets/chopta-package.webp";

export type RoutePrice = { dzire?: number; ertiga?: number; note?: string };

export type TravelRoute = {
  slug: string;
  destination: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  intro: string;
  highlights: string[];
  body: string[];
  price: RoutePrice;
  vehicleSummary: string;
  rateKey?: string;
  duration: string;
  image: string;
  socialImage: string;
  imageAlt: string;
  category: "taxi" | "yatra";
  altitude?: string;
  roadAccess?: string;
};

export const ROUTES = [
  {
    slug: "kotdwar-to-delhi-taxi", destination: "Delhi", h1: "Kotdwar to Delhi Taxi Service",
    metaTitle: "Kotdwar to Delhi Taxi Fare & Cab Service | Anand Tour & Travel",
    metaDescription: "Book a Kotdwar to Delhi taxi with clear one-way fares, doorstep pickup and direct Delhi Airport transfers. Dzire from ₹5,500; Ertiga from ₹7,000.",
    keywords: ["Kotdwar to Delhi taxi", "Kotdwar to Delhi taxi fare", "Kotdwar Delhi cab"],
    intro: "Travel directly from Kotdwar to Delhi or Delhi Airport in a clean, comfortable taxi with an experienced driver.",
    highlights: ["Doorstep pickup in Kotdwar", "Delhi Airport drop available", "One-way and round-trip options", "24-hour booking support"],
    body: ["Our Kotdwar to Delhi taxi service is suited to airport transfers, business travel, family journeys and onward connections across Delhi NCR.", "Choose a Dzire for compact comfort or an Ertiga for groups and extra luggage. Your final pickup time and trip plan are confirmed directly before travel."],
    price: { dzire: 5500, ertiga: 7000 }, vehicleSummary: "Sedan, SUV, Innova & Tempo Traveller", rateKey: "Delhi Airport/Delhi", duration: "Approx. 5–6 hours",
    image: roadImage, socialImage: "/images/himalayan-road-hero.jpg", imageAlt: "Himalayan road used for taxi journeys from Kotdwar", category: "taxi",
  },
  {
    slug: "kotdwar-to-dehradun-taxi", destination: "Dehradun", h1: "Kotdwar to Dehradun Taxi Service",
    metaTitle: "Kotdwar to Dehradun Taxi Fare & Cab | Anand Tour & Travel",
    metaDescription: "Reserve a Kotdwar to Dehradun taxi with doorstep pickup and transparent one-way fares. Dzire from ₹4,000 and Ertiga from ₹5,500.",
    keywords: ["Kotdwar to Dehradun taxi", "Kotdwar Dehradun cab", "Dehradun taxi fare"],
    intro: "Reserve a direct taxi from Kotdwar to Dehradun, with Mussoorie and Dhanaulti covered at the listed route fare.",
    highlights: ["Dehradun, Mussoorie and Dhanaulti", "Experienced hill-road drivers", "Sedan and SUV options", "Direct WhatsApp confirmation"],
    body: ["This route connects Kotdwar with Dehradun for airport travel, education, medical visits and hill-station journeys.", "Share your pickup, destination and group size for a suitable vehicle recommendation and confirmed travel plan."],
    price: { dzire: 4000, ertiga: 5500 }, vehicleSummary: "Sedan, SUV, Innova & Tempo Traveller", rateKey: "Dehradun/Mussoorie/Dhanaulti", duration: "Approx. 4–5 hours",
    image: roadImage, socialImage: "/images/himalayan-road-hero.jpg", imageAlt: "Scenic Uttarakhand road on the Kotdwar to Dehradun taxi route", category: "taxi",
  },
  {
    slug: "kotdwar-to-haridwar-taxi", destination: "Haridwar", h1: "Kotdwar to Haridwar Taxi Service",
    metaTitle: "Kotdwar to Haridwar Taxi Fare & Cab | Anand Tour & Travel",
    metaDescription: "Book a Kotdwar to Haridwar taxi for railway transfers, temple visits and yatra departures. Dzire from ₹2,500; Ertiga from ₹3,500.",
    keywords: ["Kotdwar to Haridwar taxi", "Haridwar cab from Kotdwar", "Haridwar railway taxi"],
    intro: "Book a direct taxi from Kotdwar to Haridwar for railway transfers, temple visits or a Char Dham connection.",
    highlights: ["Haridwar railway station transfers", "Yatra pickup coordination", "Doorstep pickup", "Clear one-way fares"],
    body: ["Haridwar is a key railhead and pilgrimage gateway. We coordinate direct pickups from Kotdwar and can discuss onward Char Dham travel.", "Book by phone or WhatsApp to confirm pickup details, luggage needs and the right vehicle for your group."],
    price: { dzire: 2500, ertiga: 3500 }, vehicleSummary: "Sedan, SUV, Innova & Tempo Traveller", rateKey: "Rishikesh/Haridwar", duration: "Approx. 2–3 hours",
    image: roadImage, socialImage: "/images/himalayan-road-hero.jpg", imageAlt: "Uttarakhand highway on the taxi journey between Kotdwar and Haridwar", category: "taxi",
  },
  {
    slug: "kotdwar-to-rishikesh-taxi", destination: "Rishikesh", h1: "Kotdwar to Rishikesh Taxi Service",
    metaTitle: "Kotdwar to Rishikesh Taxi Fare & Cab | Anand Tour & Travel",
    metaDescription: "Travel from Kotdwar to Rishikesh by private taxi with doorstep pickup. Dzire one-way from ₹2,500 and Ertiga from ₹3,500.",
    keywords: ["Kotdwar to Rishikesh taxi", "Rishikesh cab from Kotdwar", "Kotdwar Rishikesh fare"],
    intro: "Travel from Kotdwar to Rishikesh with convenient doorstep pickup and transparent one-way fares.",
    highlights: ["Ashram and hotel drops", "Char Dham departure support", "Private vehicle comfort", "Direct booking"],
    body: ["Our Rishikesh taxi service supports hotel stays, yoga visits, rail connections and onward journeys into the Garhwal Himalayas.", "Tell us your pickup time, passenger count and luggage so the owner can confirm availability and the final travel plan."],
    price: { dzire: 2500, ertiga: 3500 }, vehicleSummary: "Sedan, SUV, Innova & Tempo Traveller", rateKey: "Rishikesh/Haridwar", duration: "Approx. 3 hours",
    image: roadImage, socialImage: "/images/himalayan-road-hero.jpg", imageAlt: "Mountain highway connecting Kotdwar and Rishikesh", category: "taxi",
  },
  {
    slug: "kotdwar-to-lansdowne-taxi", destination: "Lansdowne", h1: "Kotdwar to Lansdowne Taxi Service",
    metaTitle: "Kotdwar to Lansdowne Taxi Fare & Cab | Anand Tour & Travel",
    metaDescription: "Book a Kotdwar to Lansdowne taxi for a hill stay or day tour. Dzire one-way from ₹2,200 and Ertiga from ₹3,000.",
    keywords: ["Kotdwar to Lansdowne taxi", "Lansdowne cab fare", "Lansdowne day tour"],
    intro: "Book a comfortable hill taxi from Kotdwar to Lansdowne for a relaxed day trip, stay or onward journey.",
    highlights: ["Local hill-road experience", "Hotel and sightseeing drops", "Day-trip planning", "Sedan and SUV options"],
    body: ["Lansdowne is one of the closest hill escapes from Kotdwar. A private taxi gives families and couples a flexible start and convenient hotel drop.", "Ask about a same-day return or one-way transfer; the final plan depends on waiting time and sightseeing stops."],
    price: { dzire: 2200, ertiga: 3000 }, vehicleSummary: "Sedan, SUV, Innova & Tempo Traveller", rateKey: "Lansdowne", duration: "Approx. 1.5–2 hours",
    image: roadImage, socialImage: "/images/himalayan-road-hero.jpg", imageAlt: "Pine-lined hill road from Kotdwar to Lansdowne", category: "taxi",
  },
  {
    slug: "kotdwar-to-kedarnath-taxi", destination: "Kedarnath", h1: "Kotdwar to Kedarnath Taxi Fare & Yatra Service",
    metaTitle: "Kotdwar to Kedarnath Taxi Fare & Yatra Cab | Anand Tour & Travel",
    metaDescription: "Plan a Kedarnath taxi from Kotdwar, Haridwar or Rishikesh to Sonprayag. Ask the owner for the best fare for Dzire, Ertiga, Innova or Tempo Traveller.",
    keywords: ["Kotdwar to Kedarnath taxi fare", "Kedarnath taxi from Haridwar", "Kedarnath taxi from Rishikesh"],
    intro: "Plan your road journey to Sonprayag with pickup from Kotdwar or the Haridwar and Rishikesh railheads.",
    highlights: ["Drop at Sonprayag", "Local shuttle onward to Gaurikund", "16–19 km pilgrimage trek", "Multiple vehicle choices"],
    body: ["Private taxis generally travel to Sonprayag. Yatris then use the regulated local shuttle to Gaurikund, where the Kedarnath trek begins.", "Yatra pricing varies by pickup city, vehicle, dates and itinerary. Message the owner for the best available fare rather than relying on a fixed package price."],
    price: { note: "Choose a fixed Ek Dham package or ask for a tailored itinerary" }, vehicleSummary: "Dzire, Ertiga, Innova & Tempo Traveller", duration: "Multi-day itinerary",
    altitude: "3,583 m", roadAccess: "Taxi to Sonprayag · trek from Gaurikund", image: kedarnathImage, socialImage: "/images/kedarnath-temple.webp", imageAlt: "Kedarnath Temple beneath snow-covered Himalayan peaks in Uttarakhand", category: "yatra",
  },
  {
    slug: "kotdwar-to-badrinath-taxi", destination: "Badrinath", h1: "Kotdwar to Badrinath Taxi & Yatra Service",
    metaTitle: "Kotdwar to Badrinath Taxi & Yatra Cab | Anand Tour & Travel",
    metaDescription: "Book a Badrinath yatra taxi from Kotdwar, Haridwar or Rishikesh. Enquire for the best fare across Dzire, Ertiga, Innova and Tempo Traveller.",
    keywords: ["Kotdwar to Badrinath taxi", "Badrinath taxi from Haridwar", "Badrinath yatra cab"],
    intro: "Travel through the Alaknanda valley to Badrinath with pickup from Kotdwar, Haridwar or Rishikesh.",
    highlights: ["Road access to Badrinath town", "Flexible railhead pickups", "Experienced hill drivers", "Vehicle choice for every group"],
    body: ["Badrinath Temple is reached by road, making a private taxi a practical choice for families and pilgrimage groups.", "The final fare depends on pickup point, vehicle, dates, stops and whether Badrinath is part of a wider Char Dham itinerary."],
    price: { note: "Choose a fixed Ek Dham package or ask for a tailored itinerary" }, vehicleSummary: "Dzire, Ertiga, Innova & Tempo Traveller", duration: "Multi-day itinerary",
    altitude: "3,133 m", roadAccess: "Direct road access to Badrinath", image: badrinathImage, socialImage: "/images/badrinath-temple.webp", imageAlt: "Colourful Badrinath Temple surrounded by the Uttarakhand Himalayas", category: "yatra",
  },
  {
    slug: "kotdwar-to-gangotri-taxi", destination: "Gangotri", h1: "Kotdwar to Gangotri Taxi & Yatra Service",
    metaTitle: "Kotdwar to Gangotri Taxi & Yatra Cab | Anand Tour & Travel",
    metaDescription: "Plan a Gangotri taxi from Kotdwar, Haridwar or Rishikesh with a suitable sedan, SUV or Tempo Traveller. Message for itinerary-based pricing.",
    keywords: ["Kotdwar to Gangotri taxi", "Gangotri taxi from Haridwar", "Gangotri yatra cab"],
    intro: "Arrange a comfortable road journey to Gangotri Temple from Kotdwar or the Haridwar and Rishikesh railheads.",
    highlights: ["Road access to Gangotri Temple", "Haridwar and Rishikesh pickup", "Group vehicle options", "Itinerary-based pricing"],
    body: ["Gangotri Temple is accessible by road. Gaumukh, the glacial source beyond the temple town, is a separate permitted trek and is not a taxi destination.", "Share your group size and preferred pickup point so the owner can recommend a vehicle and quote the yatra plan."],
    price: { note: "Talk to the owner for the best yatra price" }, vehicleSummary: "Dzire, Ertiga, Innova & Tempo Traveller", duration: "Multi-day itinerary",
    altitude: "3,415 m", roadAccess: "Direct road access to Gangotri Temple", image: gangotriImage, socialImage: "/images/gangotri-temple.webp", imageAlt: "White Gangotri Temple among deodar trees and Himalayan peaks", category: "yatra",
  },
  {
    slug: "kotdwar-to-yamunotri-taxi", destination: "Yamunotri", h1: "Kotdwar to Yamunotri Taxi & Yatra Service",
    metaTitle: "Kotdwar to Yamunotri Taxi & Yatra Cab | Anand Tour & Travel",
    metaDescription: "Plan a Yamunotri taxi from Kotdwar, Haridwar or Rishikesh to Janki Chatti. Ask for the best vehicle and itinerary-based yatra fare.",
    keywords: ["Kotdwar to Yamunotri taxi", "Yamunotri taxi from Haridwar", "Yamunotri yatra cab"],
    intro: "Book a taxi to Janki Chatti for Yamunotri with pickup from Kotdwar, Haridwar or Rishikesh.",
    highlights: ["Taxi to Janki Chatti", "Approx. 6 km temple trek", "Railhead departure options", "Sedan to Tempo Traveller"],
    body: ["The motorable road reaches Janki Chatti. From there, yatris complete the final journey to Yamunotri Temple on the approximately 6 km pilgrimage trail.", "Pricing is tailored to the pickup city, vehicle, dates and complete yatra plan. Contact the owner for the best available quote."],
    price: { note: "Talk to the owner for the best yatra price" }, vehicleSummary: "Dzire, Ertiga, Innova & Tempo Traveller", duration: "Multi-day itinerary",
    altitude: "3,291 m", roadAccess: "Taxi to Janki Chatti · approx. 6 km trek", image: yamunotriImage, socialImage: "/images/yamunotri-temple.webp", imageAlt: "Yamunotri Temple beside a Himalayan river valley in Uttarakhand", category: "yatra",
  },
  {
    slug: "kotdwar-to-jim-corbett-taxi", destination: "Jim Corbett / Ramnagar", h1: "Kotdwar to Jim Corbett / Ramnagar Taxi",
    metaTitle: "Kotdwar to Jim Corbett Taxi Fare & Cab | Anand Tour & Travel",
    metaDescription: "Book a Kotdwar to Jim Corbett or Ramnagar taxi. Clear one-way fares: Dzire ₹3,800 and Ertiga ₹5,000, with direct pickup from Kotdwar.",
    keywords: ["Kotdwar to Jim Corbett taxi", "Kotdwar to Ramnagar taxi", "Jim Corbett cab fare"],
    intro: "Travel from Kotdwar to Ramnagar and Jim Corbett in a private taxi with a clear one-way fare.",
    highlights: ["Direct Kotdwar pickup", "Ramnagar hotel drops", "Safari-gate transfer planning", "Sedan and SUV options"],
    body: ["This private taxi route is suitable for resort stays, safari departures and family breaks around Ramnagar and Jim Corbett National Park.", "Safari permits and entry tickets are separate. Share your hotel or gate details before travel so the driver can plan the correct drop."],
    price: { dzire: 3800, ertiga: 5000 }, vehicleSummary: "Sedan, SUV, Innova & Tempo Traveller", rateKey: "Jim Corbett/Ramnagar", duration: "Approx. 4–5 hours",
    image: corbettImage, socialImage: "/images/jim-corbett-package.webp", imageAlt: "Forest road and elephant in Jim Corbett National Park", category: "taxi",
  },
  {
    slug: "kotdwar-to-nainital-taxi", destination: "Nainital / Bhimtal", h1: "Kotdwar to Nainital / Bhimtal Taxi",
    metaTitle: "Kotdwar to Nainital Taxi Fare & Cab | Anand Tour & Travel",
    metaDescription: "Book a Kotdwar to Nainital or Bhimtal taxi. Clear one-way fares: Dzire ₹5,500 and Ertiga ₹7,500, with doorstep pickup.",
    keywords: ["Kotdwar to Nainital taxi", "Kotdwar to Bhimtal cab", "Nainital taxi fare"],
    intro: "Book a direct hill taxi from Kotdwar to Nainital or Bhimtal for a comfortable family or leisure journey.",
    highlights: ["Nainital and Bhimtal drops", "Hill-road drivers", "Doorstep pickup", "One-way and return options"],
    body: ["The route connects Kotdwar with the Kumaon lake district for hotel stays, sightseeing and onward travel to Kainchi Dham.", "Tell us your luggage and group size so we can recommend the right vehicle for the hill journey."],
    price: { dzire: 5500, ertiga: 7500 }, vehicleSummary: "Sedan, SUV, Innova & Tempo Traveller", rateKey: "Nainital/Bhimtal", duration: "Approx. 6–7 hours",
    image: nainitalImage, socialImage: "/images/nainital-package.webp", imageAlt: "Naini Lake and the green hills of Nainital", category: "taxi",
  },
  {
    slug: "kotdwar-to-mussoorie-taxi", destination: "Mussoorie / Dhanaulti", h1: "Kotdwar to Mussoorie / Dhanaulti Taxi",
    metaTitle: "Kotdwar to Mussoorie Taxi Fare & Cab | Anand Tour & Travel",
    metaDescription: "Book a Kotdwar to Mussoorie or Dhanaulti taxi. Clear one-way fares: Dzire ₹4,000 and Ertiga ₹5,500.",
    keywords: ["Kotdwar to Mussoorie taxi", "Kotdwar to Dhanaulti cab", "Mussoorie taxi fare"],
    intro: "Travel from Kotdwar to Mussoorie or Dhanaulti with a private taxi and transparent one-way pricing.",
    highlights: ["Mussoorie and Dhanaulti drops", "Experienced hill drivers", "Hotel pickup and drop", "Flexible return planning"],
    body: ["This route travels through Dehradun toward the Queen of Hills and the quieter mountain stays around Dhanaulti.", "Final pickup time and any sightseeing or waiting requirements are confirmed before departure."],
    price: { dzire: 4000, ertiga: 5500 }, vehicleSummary: "Sedan, SUV, Innova & Tempo Traveller", rateKey: "Dehradun/Mussoorie/Dhanaulti", duration: "Approx. 5–6 hours",
    image: mussoorieImage, socialImage: "/images/chopta-package.webp", imageAlt: "High Himalayan meadow road representing a hill taxi journey", category: "taxi",
  },
] satisfies TravelRoute[];

export type RouteSlug = (typeof ROUTES)[number]["slug"];
export const getRoute = (slug: string) => ROUTES.find((route) => route.slug === slug);
export const yatraRoutes = ROUTES.filter((route) => route.category === "yatra");