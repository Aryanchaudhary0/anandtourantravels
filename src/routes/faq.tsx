import { createFileRoute } from "@tanstack/react-router";
import { FaqPage } from "@/components/site/pages";
import { createPageHead } from "@/components/site/seo";

export const Route = createFileRoute("/faq")({
  component: () => <FaqPage />,
  head: () => createPageHead("Taxi Booking FAQ", "Answers about taxi booking, route fares, vehicles, night charges, round trips, and Char Dham travel.", "/faq"),
});
