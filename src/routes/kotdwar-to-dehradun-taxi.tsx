import { createFileRoute } from "@tanstack/react-router";
import { RoutePage } from "@/components/site/pages";
import { createPageHead } from "@/components/site/seo";

export const Route = createFileRoute("/kotdwar-to-dehradun-taxi")({
  component: () => <RoutePage pageKey="/kotdwar-to-dehradun-taxi" />,
  head: () => createPageHead("Kotdwar to Dehradun Taxi", "Book a one-way taxi from Kotdwar to Dehradun with exact Swift Dzire and Maruti Ertiga fares.", "/kotdwar-to-dehradun-taxi"),
});
