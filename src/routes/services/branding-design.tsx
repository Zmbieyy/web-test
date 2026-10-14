import { createFileRoute } from "@tanstack/react-router";
import { ServicePage, serviceHead } from "@/components/site/ServicePage";

export const Route = createFileRoute("/services/branding-design")({
  head: () => serviceHead("branding-design"),
  component: () => <ServicePage slug="branding-design" />,
});
