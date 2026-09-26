import { createFileRoute } from "@tanstack/react-router";
import { RoutePage } from "@/components/site/pages";
import { routeHead } from "@/components/site/seo";
import { getRoute } from "@/data/routes";

const page = getRoute("kotdwar-to-gangotri-taxi");
export const Route = createFileRoute("/kotdwar-to-gangotri-taxi")({ component: () => <RoutePage slug="kotdwar-to-gangotri-taxi" />, head: () => page ? routeHead(page) : {} });