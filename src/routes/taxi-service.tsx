import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/pages";
import { createPageHead } from "@/components/site/seo";

export const Route = createFileRoute("/taxi-service")({
  component: () => <ServicePage type="taxi" />,
  head: () => createPageHead("Taxi Service in Kotdwar", "Book reliable local taxi service in Kotdwar for point-to-point rides, railway transfers, and nearby travel.", "/taxi-service"),
});
