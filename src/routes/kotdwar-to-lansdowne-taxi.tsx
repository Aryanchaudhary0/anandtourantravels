import { createFileRoute } from "@tanstack/react-router";
import { RoutePage } from "@/components/site/pages";
import { createPageHead } from "@/components/site/seo";

export const Route = createFileRoute("/kotdwar-to-lansdowne-taxi")({
  component: () => <RoutePage pageKey="/kotdwar-to-lansdowne-taxi" />,
  head: () => createPageHead("Kotdwar to Lansdowne Taxi", "Book a one-way taxi from Kotdwar to Lansdowne with exact Swift Dzire and Maruti Ertiga fares.", "/kotdwar-to-lansdowne-taxi"),
});
