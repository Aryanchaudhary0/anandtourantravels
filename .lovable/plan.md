# Expand the Lansdowne, Transfer, and Char Dham Pages

## Goal
Turn the three requested pages into detailed, mobile-friendly booking pages while preserving existing live owner-edited prices, static fallback prices, and the current visual system.

## What will change

### Kotdwar to Lansdowne
- Add a railway-arrival section focused on pickup from Kotdwar Railway Station, including Mussoorie Express and Garhwal Express passengers.
- Add a Lansdowne sightseeing guide covering Bhulla Tal, Tip-in-Top, Army War Memorial, and Tarkeshwar Mahadev.
- Keep the existing live one-way fares: Dzire ₹2,200 and Ertiga ₹3,000.
- Present same-day return and full-day sightseeing as quote-based options so no unconfirmed price is invented; both will have dedicated WhatsApp enquiries.
- Add prominent Call and WhatsApp actions prefilled specifically for a Lansdowne trip.

### Railway station and airport transfers
- Expand `/airport-taxi` into a transfer hub for Kotdwar Railway Station, Jolly Grant Airport, and Delhi IGI Airport.
- Add the requested service assurances: train/flight tracking, punctual pickup, luggage help, and clean AC vehicles.
- Add a clear pricing table powered by the existing live rates where confirmed. Delhi IGI will use the current Delhi rates; unknown station and Jolly Grant prices will display “Ask for fare” rather than a misleading ₹0.
- Structure the transfer rows so the owner can later set or change prices from the existing admin pricing workflow.
- Add destination-specific WhatsApp booking actions and direct calling.

### Char Dham and Do Dham guide
- Keep all current editable vehicle/package prices and static fallbacks.
- Label package prices as starting fares, with pickup-specific confirmation for Kotdwar, Haridwar, or Rishikesh.
- Add practical registration guidance without claiming that the site performs registration.
- Add a readable route sequence covering Haridwar, Rishikesh, Devprayag, Rudraprayag, Joshimath, and Sonprayag, with clear notes that branches differ by shrine.
- Add recommended night-halt guidance and vehicle recommendations for couples, families, and groups.
- Reorganize the fare presentation so Kedarnath, Badrinath, Do Dham, and Full Char Dham are easy to compare across Dzire, Ertiga, and Innova.
- Add pickup-city-specific WhatsApp enquiry actions.

## Data and owner editing
- Keep route-specific journey copy and SEO details centralized in `src/data/routes.ts`.
- Add transfer pricing definitions to the existing editable pricing data model, seeded with confirmed prices and quote-only placeholders for unknown prices.
- Update the admin labels/grouping so transfer fares remain easy to find and edit.
- Preserve public fallback content so pages never show blank prices or loading indicators.

## Quality checks
- Verify all three pages at phone and desktop widths with no overlap or horizontal scrolling.
- Confirm Call and WhatsApp actions contain the correct trip context.
- Confirm live prices override fallbacks and unknown prices never render as ₹0.
- Check each page still has one H1 and complete unique metadata.
- Confirm the preview builds cleanly after the required package maintenance update.
