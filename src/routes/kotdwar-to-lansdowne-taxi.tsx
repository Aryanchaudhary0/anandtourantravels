import { createFileRoute } from "@tanstack/react-router";
import { RoutePage } from "@/components/site/pages";
import { routeHead } from "@/components/site/seo";
import { getRoute } from "@/data/routes";

const page = getRoute("kotdwar-to-lansdowne-taxi");

export const Route = createFileRoute("/kotdwar-to-lansdowne-taxi")({
  component: () => <RoutePage slug="kotdwar-to-lansdowne-taxi" />,
  head: () => page ? routeHead(page) : {},
});
