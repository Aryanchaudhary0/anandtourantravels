import { createFileRoute } from "@tanstack/react-router";
import { RoutePage } from "@/components/site/pages";
import { routeHead } from "@/components/site/seo";
import { getRoute } from "@/data/routes";

const page = getRoute("kotdwar-to-badrinath-taxi");
export const Route = createFileRoute("/kotdwar-to-badrinath-taxi")({ component: () => <RoutePage slug="kotdwar-to-badrinath-taxi" />, head: () => page ? routeHead(page) : {} });