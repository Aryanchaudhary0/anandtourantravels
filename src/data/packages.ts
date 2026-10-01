import corbettImage from "@/assets/jim-corbett-package.webp";
import nainitalImage from "@/assets/nainital-package.webp";
import munsiyariImage from "@/assets/munsiyari-package.webp";
import choptaImage from "@/assets/chopta-package.webp";

export type TourPackage = {
  key: string;
  title: string;
  duration: string;
  vehicle: string;
  price: number;
  pricingUnit: string;
  image: string;
  imageAlt: string;
  inclusions: string[];
  itinerary: { day: string; title: string; detail: string }[];
  note?: string;
};

export type TransferPrice = {
  key: string;
  hub: "Kotdwar Railway Station" | "Jolly Grant Airport" | "Delhi IGI Airport";
  vehicle: "Swift Dzire" | "Maruti Ertiga";
  price: number;
  note: string;
};

export const TRANSFER_PRICES = [
  { key: "kotdwar-station-dzire", hub: "Kotdwar Railway Station", vehicle: "Swift Dzire", price: 0, note: "Local pickup or drop" },
  { key: "kotdwar-station-ertiga", hub: "Kotdwar Railway Station", vehicle: "Maruti Ertiga", price: 0, note: "Local pickup or drop" },
  { key: "jolly-grant-dzire", hub: "Jolly Grant Airport", vehicle: "Swift Dzire", price: 0, note: "Direct airport transfer" },
  { key: "jolly-grant-ertiga", hub: "Jolly Grant Airport", vehicle: "Maruti Ertiga", price: 0, note: "Direct airport transfer" },
  { key: "delhi-igi-dzire", hub: "Delhi IGI Airport", vehicle: "Swift Dzire", price: 5500, note: "One-way from Kotdwar" },
  { key: "delhi-igi-ertiga", hub: "Delhi IGI Airport", vehicle: "Maruti Ertiga", price: 7000, note: "One-way from Kotdwar" },
] satisfies TransferPrice[];

export const TOUR_PACKAGES = [
  {
    key: "corbett-weekend-dzire",
    title: "Delhi to Jim Corbett Weekend Safari",
    duration: "2 days / 1 night",
    vehicle: "Swift Dzire",
    price: 9999,
    pricingUnit: "full car",
    image: corbettImage,
    imageAlt: "Elephant on a forest road in Jim Corbett National Park",
    inclusions: ["Toll", "Parking", "Driver"],
    itinerary: [
      { day: "Day 1", title: "Delhi to Jim Corbett", detail: "Approx. 250 km drive, hotel check-in and evening safari." },
      { day: "Day 2", title: "Safari and return", detail: "Morning safari, Corbett Falls visit and return to Delhi." },
    ],
  },
  {
    key: "nainital-kainchi-dzire",
    title: "Kotdwar to Nainital + Neem Karoli Baba / Kainchi Dham",
    duration: "3 days / 2 nights",
    vehicle: "Swift Dzire",
    price: 11999,
    pricingUnit: "full car",
    image: nainitalImage,
    imageAlt: "Colorful boats on Naini Lake surrounded by Nainital hills",
    inclusions: ["Toll", "Parking", "Driver"],
    itinerary: [
      { day: "Day 1", title: "Kotdwar to Nainital", detail: "Approx. 180 km drive, hotel check-in and Naini Lake boating." },
      { day: "Day 2", title: "Temples and lakes", detail: "Nainital local sightseeing, Kainchi Dham, Bhimtal and Sattal." },
      { day: "Day 3", title: "Return to Kotdwar", detail: "Breakfast followed by the return journey to Kotdwar." },
    ],
  },
  {
    key: "munsiyari-dzire",
    title: "Delhi to Munsiyari",
    duration: "5 days / 4 nights",
    vehicle: "Swift Dzire",
    price: 29999,
    pricingUnit: "full car",
    image: munsiyariImage,
    imageAlt: "Panchachuli snow peaks rising above the green Munsiyari valley",
    inclusions: ["Toll", "Parking", "Driver"],
    itinerary: [
      { day: "Day 1", title: "Delhi to Chaukori", detail: "Drive into Kumaon and overnight in Chaukori." },
      { day: "Day 2", title: "Chaukori to Munsiyari", detail: "Travel via Birthi Falls and check in at Munsiyari." },
      { day: "Day 3", title: "Khaliya Top", detail: "Day reserved for the Khaliya Top trek and Himalayan views." },
      { day: "Day 4", title: "Munsiyari to Kausani", detail: "Scenic transfer to Kausani for the night." },
      { day: "Day 5", title: "Kausani to Delhi", detail: "Return journey to Delhi." },
    ],
  },
  {
    key: "chopta-ertiga-vehicle",
    title: "Kotdwar to Chopta Tungnath & Chandrashila",
    duration: "4 days / 3 nights",
    vehicle: "Maruti Ertiga · up to 6 persons",
    price: 19999,
    pricingUnit: "per vehicle",
    image: choptaImage,
    imageAlt: "Stone temple and trail near Chopta with snow-covered Garhwal peaks",
    inclusions: ["Toll", "Parking"],
    note: "Petrol is extra for the per-vehicle plan. An all-inclusive option is also available at ₹16,999 per person, including toll, parking, driver, stay, meals and permits.",
    itinerary: [
      { day: "Day 1", title: "Kotdwar to Chopta", detail: "Approx. 229 km drive and arrival in the Chopta region." },
      { day: "Day 2", title: "Tungnath and Chandrashila", detail: "Tungnath trek of approx. 3.5 km, then 1.5 km onward to Chandrashila summit." },
      { day: "Day 3", title: "Deoria Tal and Ukhimath", detail: "Local excursion to Deoria Tal and Ukhimath." },
      { day: "Day 4", title: "Return to Kotdwar", detail: "Drive back to Kotdwar." },
    ],
  },
] satisfies TourPackage[];

export const CHAR_DHAM_PACKAGES = [
  { key: "chardham-dzire", vehicle: "Swift Dzire", title: "Char Dham", duration: "10 days", price: 38999 },
  { key: "dodham-dzire", vehicle: "Swift Dzire", title: "Do Dham", duration: "5 days", price: 19999 },
  { key: "kedarnath-dzire", vehicle: "Swift Dzire", title: "Ek Dham Kedarnath", duration: "3 days", price: 11999 },
  { key: "badrinath-dzire", vehicle: "Swift Dzire", title: "Ek Dham Badrinath", duration: "3 days", price: 14999 },
  { key: "chardham-ertiga", vehicle: "Maruti Ertiga", title: "Char Dham", duration: "10 days", price: 48999 },
  { key: "dodham-ertiga", vehicle: "Maruti Ertiga", title: "Do Dham", duration: "5 days", price: 25999 },
  { key: "kedarnath-ertiga", vehicle: "Maruti Ertiga", title: "Ek Dham Kedarnath", duration: "3 days", price: 15999 },
  { key: "badrinath-ertiga", vehicle: "Maruti Ertiga", title: "Ek Dham Badrinath", duration: "3 days", price: 16999 },
  { key: "chardham-innova", vehicle: "Innova Crysta", title: "Char Dham", duration: "10 days", price: 64999 },
  { key: "dodham-innova", vehicle: "Innova Crysta", title: "Do Dham", duration: "5 days", price: 34999 },
  { key: "kedarnath-innova", vehicle: "Innova Crysta", title: "Ek Dham Kedarnath", duration: "3 days", price: 19999 },
  { key: "badrinath-innova", vehicle: "Innova Crysta", title: "Ek Dham Badrinath", duration: "3 days", price: 24999 },
] as const;