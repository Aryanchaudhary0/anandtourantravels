import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/pages";
import { createPageHead } from "@/components/site/seo";

export const Route = createFileRoute("/outstation-taxi")({
  component: () => <ServicePage type="outstation" />,
  head: () => createPageHead("Outstation Taxi from Kotdwar", "Book one-way and round-trip outstation taxis from Kotdwar across Uttarakhand, Delhi, and nearby destinations.", "/outstation-taxi"),
});
