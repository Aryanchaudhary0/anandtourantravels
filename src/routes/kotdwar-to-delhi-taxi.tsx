import { createFileRoute } from "@tanstack/react-router";
import { RoutePage } from "@/components/site/pages";
import { routeHead } from "@/components/site/seo";
import { getRoute } from "@/data/routes";

const page = getRoute("kotdwar-to-delhi-taxi");

export const Route = createFileRoute("/kotdwar-to-delhi-taxi")({
  component: () => <RoutePage slug="kotdwar-to-delhi-taxi" />,
  head: () => page ? routeHead(page) : {},
});
