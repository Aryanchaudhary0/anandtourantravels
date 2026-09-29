import { createFileRoute } from "@tanstack/react-router";
import { RoutePage } from "@/components/site/pages";
import { routeHead } from "@/components/site/seo";
import { getRoute } from "@/data/routes";

const page = getRoute("kotdwar-to-nainital-taxi");

export const Route = createFileRoute("/kotdwar-to-nainital-taxi")({
  component: () => <RoutePage slug="kotdwar-to-nainital-taxi" />,
  head: () => page ? routeHead(page) : {},
});