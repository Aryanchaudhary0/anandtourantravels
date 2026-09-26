import { business } from "@/config/business";
import type { TravelRoute } from "@/data/routes";

type HeadOptions = {
  image?: string;
  imageAlt?: string;
  keywords?: string[];
  schemas?: Record<string, unknown>[];
};

export function absoluteUrl(path: string) {
  return `${business.siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

export function createPageHead(title: string, description: string, path: string, options: HeadOptions | boolean = {}) {
  const fullTitle = `${title} | ${business.name}`;
  const normalizedOptions = typeof options === "boolean" ? {} : options;
  const canonical = absoluteUrl(path);
  const image = normalizedOptions.image ? absoluteUrl(normalizedOptions.image) : undefined;
  const schemas = [...(path === "/" ? [] : [breadcrumbSchema([{ name: "Home", path: "/" }, { name: title, path }])]), ...(normalizedOptions.schemas ?? [])];
  return {
    meta: [
      { title: fullTitle },
      { name: "description", content: description },
      ...(normalizedOptions.keywords?.length ? [{ name: "keywords", content: normalizedOptions.keywords.join(", ") }] : []),
      { property: "og:title", content: fullTitle },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: canonical },
      ...(image ? [{ property: "og:image", content: image }, { property: "og:image:alt", content: normalizedOptions.imageAlt ?? title }] : []),
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: fullTitle },
      { name: "twitter:description", content: description },
      ...(image ? [{ name: "twitter:image", content: image }, { name: "twitter:image:alt", content: normalizedOptions.imageAlt ?? title }] : []),
    ],
    links: [{ rel: "canonical", href: canonical }],
    scripts: schemas.map((schema) => ({ type: "application/ld+json", children: JSON.stringify(schema) })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: items.map((item, index) => ({ "@type": "ListItem", position: index + 1, name: item.name, item: absoluteUrl(item.path) })) };
}

export function routeHead(route: TravelRoute) {
  const path = `/${route.slug}`;
  return createPageHead(route.metaTitle.replace(` | ${business.name}`, ""), route.metaDescription, path, {
    image: route.socialImage,
    imageAlt: route.imageAlt,
    keywords: route.keywords,
    schemas: [
      { "@context": "https://schema.org", "@type": "Service", name: route.h1, serviceType: route.h1, description: route.metaDescription, url: absoluteUrl(path), image: absoluteUrl(route.socialImage), provider: { "@type": ["TravelAgency", "TaxiService", "LocalBusiness"], name: business.name, telephone: business.phoneDisplay, url: business.siteUrl }, areaServed: ["Kotdwar", "Haridwar", "Rishikesh", "Uttarakhand"] },
    ],
  });
}
