import { createFileRoute } from "@tanstack/react-router";
import { CharDhamPage } from "@/components/site/pages";
import { createPageHead } from "@/components/site/seo";
import { SERVICE_HUBS } from "@/data/routes";

export const Route = createFileRoute("/char-dham-yatra")({
  component: () => <CharDhamPage />,
  head: () => createPageHead(SERVICE_HUBS.charDham.metaTitle, SERVICE_HUBS.charDham.metaDescription, "/char-dham-yatra", { keywords: SERVICE_HUBS.charDham.keywords }),
});
