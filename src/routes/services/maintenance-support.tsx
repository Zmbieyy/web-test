import { createFileRoute } from "@tanstack/react-router";
import { ServicePage, serviceHead } from "@/components/site/ServicePage";

export const Route = createFileRoute("/services/maintenance-support")({
  head: () => serviceHead("maintenance-support"),
  component: () => <ServicePage slug="maintenance-support" />,
});
