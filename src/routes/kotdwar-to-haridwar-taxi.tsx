import { createFileRoute } from "@tanstack/react-router";
import { RoutePage } from "@/components/site/pages";
import { routeHead } from "@/components/site/seo";
import { getRoute } from "@/data/routes";

const page = getRoute("kotdwar-to-haridwar-taxi");

export const Route = createFileRoute("/kotdwar-to-haridwar-taxi")({
  component: () => <RoutePage slug="kotdwar-to-haridwar-taxi" />,
  head: () => page ? routeHead(page) : {},
});
