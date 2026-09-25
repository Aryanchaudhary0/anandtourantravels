import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "@/components/site/pages";
import { createPageHead } from "@/components/site/seo";

export const Route = createFileRoute("/contact")({
  component: () => <ContactPage />,
  head: () => createPageHead("Contact and Book a Taxi", "Call or WhatsApp Anand Tour & Travel in Kotdwar for taxi availability, trip planning, and confirmed fares.", "/contact"),
});
