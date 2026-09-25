import { createFileRoute } from "@tanstack/react-router";
import { RoutePage } from "@/components/site/pages";
import { createPageHead } from "@/components/site/seo";

export const Route = createFileRoute("/kotdwar-to-haridwar-taxi")({
  component: () => <RoutePage pageKey="/kotdwar-to-haridwar-taxi" />,
  head: () => createPageHead("Kotdwar to Haridwar Taxi", "Book a one-way taxi from Kotdwar to Haridwar with exact Swift Dzire and Maruti Ertiga fares.", "/kotdwar-to-haridwar-taxi"),
});
