import { createFileRoute } from "@tanstack/react-router";
import { RoutePage } from "@/components/site/pages";
import { routeHead } from "@/components/site/seo";
import { getRoute } from "@/data/routes";

const page = getRoute("kotdwar-to-rishikesh-taxi");

export const Route = createFileRoute("/kotdwar-to-rishikesh-taxi")({
  component: () => <RoutePage slug="kotdwar-to-rishikesh-taxi" />,
  head: () => page ? routeHead(page) : {},
});
