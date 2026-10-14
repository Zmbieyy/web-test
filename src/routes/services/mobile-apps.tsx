import { createFileRoute } from "@tanstack/react-router";
import { ServicePage, serviceHead } from "@/components/site/ServicePage";

export const Route = createFileRoute("/services/mobile-apps")({
  head: () => serviceHead("mobile-apps"),
  component: () => <ServicePage slug="mobile-apps" />,
});
