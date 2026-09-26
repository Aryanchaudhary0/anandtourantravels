import { createFileRoute } from "@tanstack/react-router";
import { FaqPage, faqs } from "@/components/site/pages";
import { createPageHead } from "@/components/site/seo";

export const Route = createFileRoute("/faq")({
  component: () => <FaqPage />,
  head: () => createPageHead("Taxi Booking FAQ", "Answers about taxi booking, route fares, vehicles, night charges, round trips, and Char Dham travel.", "/faq", { schemas: [{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) }] }),
});
