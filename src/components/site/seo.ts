import { business } from "@/config/business";

export function createPageHead(title: string, description: string, path: string, includeSchema = false) {
  const fullTitle = `${title} | ${business.name}`;
  return {
    meta: [
      { title: fullTitle },
      { name: "description", content: description },
      { property: "og:title", content: fullTitle },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: path },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: path }],
    scripts: includeSchema ? [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "TaxiService",
        name: business.name,
        slogan: business.tagline,
        telephone: business.phoneDisplay,
        address: { "@type": "PostalAddress", addressLocality: "Kotdwar", addressRegion: "Uttarakhand", addressCountry: "IN" },
        areaServed: "Uttarakhand, India",
        priceRange: "₹₹",
      }),
    }] : undefined,
  };
}
