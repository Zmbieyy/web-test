import { createFileRoute } from "@tanstack/react-router";
import { ServicePage, serviceHead } from "@/components/site/ServicePage";

export const Route = createFileRoute("/services/digital-marketing")({
  head: () => serviceHead("digital-marketing"),
  component: () => <ServicePage slug="digital-marketing" />,
});
