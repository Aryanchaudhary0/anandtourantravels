import { createFileRoute } from "@tanstack/react-router";
import { RoutePage } from "@/components/site/pages";
import { createPageHead } from "@/components/site/seo";

export const Route = createFileRoute("/kotdwar-to-delhi-taxi")({
  component: () => <RoutePage pageKey="/kotdwar-to-delhi-taxi" />,
  head: () => createPageHead("Kotdwar to Delhi Taxi", "Book a one-way taxi from Kotdwar to Delhi with exact Swift Dzire and Maruti Ertiga fares.", "/kotdwar-to-delhi-taxi"),
});
