import { createFileRoute } from "@tanstack/react-router";
import { RoutePage } from "@/components/site/pages";
import { routeHead } from "@/components/site/seo";
import { getRoute } from "@/data/routes";

const page = getRoute("kotdwar-to-jim-corbett-taxi");

export const Route = createFileRoute("/kotdwar-to-jim-corbett-taxi")({
  component: () => <RoutePage slug="kotdwar-to-jim-corbett-taxi" />,
  head: () => page ? routeHead(page) : {},
});