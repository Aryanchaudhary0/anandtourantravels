# Himalayan visual and SEO upgrade

## Scope
- Rework the site palette to a warm Himalayan stone canvas, deep navy feature sections, saffron accents, crisp borders, and retained WhatsApp green.
- Add four real local JPG shrine photographs for Kedarnath, Badrinath, Gangotri, and Yamunotri, imported directly from `src/assets`.
- Replace the homepage Char Dham area with image-led shrine cards showing altitude, road-access context, Kotdwar/Haridwar/Rishikesh pickup coverage, enquiry-only pricing, and shrine-specific WhatsApp messages.
- Create a central route catalogue for the five taxi routes and four shrine routes, including unique search copy, highlights, body content, journey details, and known fares or enquiry status.
- Render all nine route pages from that catalogue with one H1, visible breadcrumbs, detailed content, and 6–8 related route links.
- Add unique page metadata and structured data across every public page, including global business schema, route Service schema, matching BreadcrumbList markup, and FAQPage markup only where visible FAQs exist.
- Generate a dynamic sitemap from the central route catalogue and static pages, and update robots.txt to point to `https://anandtourandtravel.in/sitemap.xml`.

## Confirmed business rules
- No email is published.
- Open 24 hours.
- Address: BSNL Tower, near Jal Nigam Store, Ekta Puram Colony, Shibu Nagar, Kotdwar, Uttarakhand 246149, India.
- Shrine fares are enquiry-only because vehicle and itinerary pricing varies.
- Create separate Kedarnath, Badrinath, Gangotri, and Yamunotri pages.
- Canonical base URL: `https://anandtourandtravel.in`.
- Do not add ratings, reviews, or fabricated prices.

## Technical details
- Keep business facts and site URL centralized; route copy lives in `src/data/routes.ts`.
- Use local bundled assets for rendered and social images, resolving absolute share URLs from the central live domain.
- Sitemap output is generated at `/sitemap.xml` without synthetic `lastmod` dates.
- Preserve the current frontend-only WhatsApp booking flow and exact existing taxi fares.
- Verify compilation, metadata output, sitemap/robots responses, mobile overflow, route links, and shrine enquiries.
