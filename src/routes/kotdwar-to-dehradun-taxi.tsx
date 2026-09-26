import { createFileRoute } from "@tanstack/react-router";
import { RoutePage } from "@/components/site/pages";
import { routeHead } from "@/components/site/seo";
import { getRoute } from "@/data/routes";

const page = getRoute("kotdwar-to-dehradun-taxi");

export const Route = createFileRoute("/kotdwar-to-dehradun-taxi")({
  component: () => <RoutePage slug="kotdwar-to-dehradun-taxi" />,
  head: () => page ? routeHead(page) : {},
});
