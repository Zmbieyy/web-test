import { createFileRoute } from "@tanstack/react-router";
import { ServicePage, serviceHead } from "@/components/site/ServicePage";

export const Route = createFileRoute("/services/custom-software")({
  head: () => serviceHead("custom-software"),
  component: () => <ServicePage slug="custom-software" />,
});
