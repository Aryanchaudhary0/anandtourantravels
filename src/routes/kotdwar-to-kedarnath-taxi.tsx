import { createFileRoute } from "@tanstack/react-router";
import { RoutePage } from "@/components/site/pages";
import { routeHead } from "@/components/site/seo";
import { getRoute } from "@/data/routes";

const page = getRoute("kotdwar-to-kedarnath-taxi");
export const Route = createFileRoute("/kotdwar-to-kedarnath-taxi")({ component: () => <RoutePage slug="kotdwar-to-kedarnath-taxi" />, head: () => page ? routeHead(page) : {} });