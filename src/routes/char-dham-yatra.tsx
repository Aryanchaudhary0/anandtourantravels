import { createFileRoute } from "@tanstack/react-router";
import { CharDhamPage } from "@/components/site/pages";
import { createPageHead } from "@/components/site/seo";

export const Route = createFileRoute("/char-dham-yatra")({
  component: () => <CharDhamPage />,
  head: () => createPageHead("Char Dham Yatra Taxi from Kotdwar", "Plan taxi travel for Kedarnath, Badrinath, Gangotri, and Yamunotri with Anand Tour & Travel.", "/char-dham-yatra"),
});
