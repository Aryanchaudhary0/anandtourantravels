import { createFileRoute } from "@tanstack/react-router";
import { VehiclesPage } from "@/components/site/pages";
import { createPageHead } from "@/components/site/seo";

export const Route = createFileRoute("/vehicles")({
  component: () => <VehiclesPage />,
  head: () => createPageHead("Taxi Fleet and Vehicle Rates", "Compare Swift Dzire and Maruti Ertiga taxi options and exact one-way fares from Kotdwar.", "/vehicles"),
});
