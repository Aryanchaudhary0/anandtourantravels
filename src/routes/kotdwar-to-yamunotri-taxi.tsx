import { createFileRoute } from "@tanstack/react-router";
import { RoutePage } from "@/components/site/pages";
import { routeHead } from "@/components/site/seo";
import { getRoute } from "@/data/routes";

const page = getRoute("kotdwar-to-yamunotri-taxi");
export const Route = createFileRoute("/kotdwar-to-yamunotri-taxi")({ component: () => <RoutePage slug="kotdwar-to-yamunotri-taxi" />, head: () => page ? routeHead(page) : {} });