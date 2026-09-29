import { createFileRoute } from "@tanstack/react-router";
import { RoutePage } from "@/components/site/pages";
import { routeHead } from "@/components/site/seo";
import { getRoute } from "@/data/routes";

const page = getRoute("kotdwar-to-mussoorie-taxi");

export const Route = createFileRoute("/kotdwar-to-mussoorie-taxi")({
  component: () => <RoutePage slug="kotdwar-to-mussoorie-taxi" />,
  head: () => page ? routeHead(page) : {},
});