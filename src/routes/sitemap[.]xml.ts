import { createFileRoute } from "@tanstack/react-router";
import { business } from "@/config/business";
import { ROUTES } from "@/data/routes";

const staticPages = ["/", "/taxi-service", "/outstation-taxi", "/airport-taxi", "/char-dham-yatra", "/vehicles", "/about", "/contact", "/faq"];
const escapeXml = (value: string) => value.replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&apos;" })[char] ?? char);

export const Route = createFileRoute("/sitemap.xml")({
  server: { handlers: { GET: async () => {
    const paths = [...staticPages, ...ROUTES.map((route) => `/${route.slug}`)];
    const urls = paths.map((path) => `<url><loc>${escapeXml(new URL(path, business.siteUrl).href)}</loc></url>`).join("");
    return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`, { headers: { "Content-Type": "application/xml; charset=utf-8", "Cache-Control": "public, max-age=3600" } });
  } } },
});