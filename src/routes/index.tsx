import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/site/home";
import { createPageHead } from "@/components/site/seo";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => createPageHead("Taxi Service in Kotdwar, Uttarakhand", "Book safe and comfortable taxis from Kotdwar for local trips, outstation travel, airport transfers, and Char Dham Yatra.", "/", true),
});
