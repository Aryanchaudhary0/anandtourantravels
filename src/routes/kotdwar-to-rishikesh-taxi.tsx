import { createFileRoute } from "@tanstack/react-router";
import { RoutePage } from "@/components/site/pages";
import { createPageHead } from "@/components/site/seo";

export const Route = createFileRoute("/kotdwar-to-rishikesh-taxi")({
  component: () => <RoutePage pageKey="/kotdwar-to-rishikesh-taxi" />,
  head: () => createPageHead("Kotdwar to Rishikesh Taxi", "Book a one-way taxi from Kotdwar to Rishikesh with exact Swift Dzire and Maruti Ertiga fares.", "/kotdwar-to-rishikesh-taxi"),
});
