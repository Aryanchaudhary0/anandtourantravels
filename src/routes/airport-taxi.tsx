import { createFileRoute } from "@tanstack/react-router";
import { AirportTransferPage } from "@/components/site/pages";
import { createPageHead } from "@/components/site/seo";
import { SERVICE_HUBS } from "@/data/routes";

export const Route = createFileRoute("/airport-taxi")({
  component: AirportTransferPage,
  head: () => createPageHead(SERVICE_HUBS.airport.metaTitle, SERVICE_HUBS.airport.metaDescription, "/airport-taxi", { keywords: SERVICE_HUBS.airport.keywords }),
});
