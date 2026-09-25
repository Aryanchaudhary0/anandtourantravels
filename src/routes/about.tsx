import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "@/components/site/pages";
import { createPageHead } from "@/components/site/seo";

export const Route = createFileRoute("/about")({
  component: () => <AboutPage />,
  head: () => createPageHead("About Anand Tour & Travel", "Learn about Anand Tour & Travel, a dependable customer-focused taxi service based in Kotdwar, Uttarakhand.", "/about"),
});
