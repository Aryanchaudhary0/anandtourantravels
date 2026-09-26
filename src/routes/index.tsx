import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/site/home";
import { createPageHead } from "@/components/site/seo";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => createPageHead("Best Cab Service in Kotdwar, Uttarakhand", "Book the best cab service in Kotdwar for local trips, outstation travel, airport transfers, and Char Dham Yatra from Haridwar and Rishikesh.", "/", { image: "/images/himalayan-road-hero.jpg", imageAlt: "Anand Tour & Travel taxi route through the Uttarakhand Himalayas" }),
});
