# Anand Travels Kotdwar

Build a fast, mobile-first customer-facing website for ANAND TOUR & TRAVEL (Kotdwar, Uttarakhand taxi service). This is Phase 1: frontend only, no backend/database yet. All business details and rates live in a single config file (src/config/business.ts) so prices can be edited later.

Tech stack: React + Vite + TypeScript + TailwindCSS.

Business details:
- Name: Anand Tour & Travel
- Tagline: "Your Journey. Our Responsibility."
- Phone / WhatsApp: +91 73021 93159
- Base Location: Kotdwar, Uttarakhand, India

Design:
- Himalayan-premium theme: deep navy (#0B192C), mountain blue (#1E3E62), crisp white, warm orange accents (#FF6500), WhatsApp green (#25D366).
- Clean, fast, mobile-first. Rounded-xl cards, generous spacing. No heavy animation libraries.

Layout (reference style: UKWALA Travels style taxi landing page):
1. Header: Sticky, brand logo text, nav links (Home, Routes, Fleet, Char Dham, About, Contact), phone number, and "Book Taxi" button. Mobile drawer menu.
2. Hero (two-column desktop, stacked mobile): Misty mountain road background. Left: eyebrow "YOUR TRUSTED TRAVEL PARTNER", headline "Your Trusted Taxi Service in Kotdwar & All Uttarakhand", trust subtext (Safe • Comfortable • Transparent), trust checkmarks (Verified Drivers, Clean Vehicles, On-Time Pickup, 24/7 Support), WhatsApp Now (green) and Call Now (blue) buttons, car cutout at bottom left. Right: floating white booking card with Pickup Location, Drop Location, Date & Time, Passengers, Vehicle Type (Dzire Sedan / Ertiga SUV / Innova Crysta / Tempo Traveller) and prominent orange "GET FARE & BOOK NOW" button that opens WhatsApp with pre-filled message to +91 73021 93159.
3. Popular Routes grid below hero showing actual rates with quick Book Now (WhatsApp) buttons.
4. Services cards: Local Taxi, Outstation Taxi, Char Dham Yatra, Airport/Railway Transfer, Lansdowne Day Tours.
5. Interactive Rate Table with tabs for vehicles showing the exact rates below + terms.

Real Route Rates (One Way from Kotdwar) — display exactly:
- Swift Dzire (4 Seater Sedan, Rs 12/km):
  Lansdowne Rs 2,200 | Dugadda/Satpuli/Pauri Rs 2,500 | Rishikesh/Haridwar Rs 2,500 | Dehradun/Mussoorie/Dhanaulti Rs 4,000 | Jim Corbett/Ramnagar Rs 3,800 | Nainital/Bhimtal Rs 5,500 | Almora/Kausani/Ranikhet Rs 7,500 | Tehri Lake Rs 6,000 | Chopta Tungnath Rs 7,000 | Auli/Joshimath Rs 10,000 | Delhi Airport/Delhi Rs 5,500 | Kedarnath Sonprayag Rs 8,000 | Badrinath Rs 11,000
- Maruti Ertiga (6+1 Seater SUV, Rs 16/km):
  Lansdowne Rs 3,000 | Dugadda/Satpuli/Pauri Rs 3,500 | Rishikesh/Haridwar Rs 3,500 | Dehradun/Mussoorie/Dhanaulti Rs 5,500 | Jim Corbett/Ramnagar Rs 5,000 | Nainital/Bhimtal Rs 7,500 | Almora/Kausani/Ranikhet Rs 10,000 | Tehri Lake Rs 8,000 | Chopta Tungnath Rs 9,500 | Auli/Joshimath Rs 13,000 | Delhi Airport/Delhi Rs 7,000 | Kedarnath Sonprayag Rs 11,000 | Badrinath Rs 15,000

Rate terms (shown clearly): Toll, Parking, State Tax extra. Night charge Rs 300 (10 PM–5 AM). Round trips: driver food/stay by customer.

6. Char Dham section: Kedarnath, Badrinath, Gangotri, Yamunotri cards with WhatsApp inquiry buttons.
7. Special Offer / Announcement banner section: clean highlighted card (static placeholder text for now, backend comes later).
8. Why Choose Us (Safe & Reliable, Experienced Hill Drivers, Clean & Comfortable, 24/7 Support — no fabricated stats or reviews) and How It Works (3 steps).
9. Contact section: Direct call, WhatsApp, address Kotdwar, Uttarakhand, Google Maps placeholder.
10. Footer: service links, quick links, routes, terms links, © 2026 Anand Tour & Travel.
11. Mobile: fixed bottom action bar with Call / WhatsApp / Book Taxi buttons with proper bottom padding so it never overlaps content. No horizontal scroll at 360/375/390/414/430px.

SEO & Performance: Unique title/meta per page, JSON-LD LocalBusiness schema, descriptive alt text on every image, sitemap.xml, robots.txt. Fast loading, lightweight.

Routes/pages: /, /taxi-service, /outstation-taxi, /airport-taxi, /char-dham-yatra, /kotdwar-to-lansdowne-taxi, /kotdwar-to-delhi-taxi, /kotdwar-to-dehradun-taxi, /kotdwar-to-haridwar-taxi, /kotdwar-to-rishikesh-taxi, /vehicles, /about, /contact, /faq.

Hard rules: Never invent emails, review counts, fake testimonials, or fake stats. WhatsApp CTAs everywhere use +91 73021 93159. Do not add any backend/database/auth yet — Phase 2 will add the owner admin panel later.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://anandtourantravels.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/e1e0e476-3bf9-4aa2-9ee6-c494e2361a3c).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
