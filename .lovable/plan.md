# Anand Tour & Travel — Phase 1 Website

## Goal
Build a polished, fast, mobile-first taxi website for Anand Tour & Travel using only frontend code. All contact details, vehicle information, route prices, services, and booking message helpers will live in `src/config/business.ts` for easy future editing.

## What will be built

### Shared site experience
- Sticky branded header with desktop navigation, phone contact, Book Taxi action, and accessible mobile drawer.
- Shared footer with service, route, quick, and policy links.
- Fixed mobile action bar for Call, WhatsApp, and Book Taxi with safe content spacing.
- Consistent Himalayan-premium visual system using deep navy, mountain blue, white, warm orange, and WhatsApp green.
- Lightweight generated mountain-road and vehicle imagery stored locally for fast loading, with descriptive alternative text.

### Home page
- Responsive mountain-road hero with trust messaging, four reassurance points, Call/WhatsApp actions, vehicle visual, and a complete fare enquiry form.
- Fare enquiry form fields for pickup, drop, date/time, passengers, and vehicle; submission opens WhatsApp with a pre-filled message to the supplied number.
- Popular routes with exact displayed prices and route-specific WhatsApp booking actions.
- Service cards, tabbed vehicle rate table, rate terms, Char Dham cards, announcement banner, Why Choose Us, How It Works, contact options, and map placeholder.

### Requested pages
- Service pages: Taxi Service, Outstation Taxi, Airport Taxi, and Char Dham Yatra.
- Route pages: Kotdwar to Lansdowne, Delhi, Dehradun, Haridwar, and Rishikesh.
- Information pages: Vehicles, About, Contact, and FAQ.
- Each page will reuse the central business configuration, provide relevant booking actions, and have unique search/social metadata.

## Content and behavior
- Preserve every supplied route rate exactly for Swift Dzire and Maruti Ertiga.
- Show all supplied rate terms clearly and avoid fabricated reviews, statistics, or contact details.
- Use the same phone and WhatsApp number for every action.
- Add LocalBusiness structured data and update crawler rules.
- Keep the announcement as clearly editable static content for Phase 1.
- No backend, database, authentication, owner panel, or form submission storage.

## Quality checks
- Verify the full booking flow opens the correctly pre-filled WhatsApp URL.
- Check desktop and mobile layouts, including 360, 375, 390, 414, and 430 px widths, for clipping or horizontal scrolling.
- Confirm navigation, tabs, menu, form controls, telephone links, and page metadata work.
- Confirm the preview compiles without errors.

## Technical details
- TanStack Start file routes will implement the requested URLs within the existing React/Vite/TypeScript project.
- Shared components will cover the header, footer, booking actions, page introduction, and repeated content blocks.
- Semantic Tailwind tokens will be defined globally; page code will avoid hardcoded visual colors.
- A sitemap needs a real public site URL. Since the project has not been published and has no custom domain, it will be deferred rather than shipping an incorrect preview URL; the existing crawl-friendly `robots.txt` will remain valid.
