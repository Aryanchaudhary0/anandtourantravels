import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/pages";
import { createPageHead } from "@/components/site/seo";

export const Route = createFileRoute("/airport-taxi")({
  component: () => <ServicePage type="airport" />,
  head: () => createPageHead("Airport Taxi from Kotdwar", "Direct airport taxi transfers from Kotdwar to Delhi Airport, Dehradun Airport, and major railway stations.", "/airport-taxi"),
});
