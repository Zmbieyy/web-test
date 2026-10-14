import { createFileRoute } from "@tanstack/react-router";
import { ServicePage, serviceHead } from "@/components/site/ServicePage";

export const Route = createFileRoute("/services/website-development")({
  head: () => serviceHead("website-development"),
  component: () => <ServicePage slug="website-development" />,
});
