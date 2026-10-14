import { createFileRoute } from "@tanstack/react-router";
import { SERVICES } from "@/lib/site";
import { FinalCta, PageHero, ServiceCard } from "@/components/site/Layout";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services | Canlaa Digital Solutions" },
      { name: "description", content: "Websites, custom software, mobile apps, maintenance, digital marketing and branding from Canlaa." },
      { property: "og:title", content: "Services | Canlaa Digital Solutions" },
      { property: "og:description", content: "Six disciplines, one dependable digital partner." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <>
      <PageHero eyebrow="Services" title="Six disciplines. One dependable partner." intro="From your first website to complex business software, we cover the full digital lifecycle — strategy, design, build and long-term support." />
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => <ServiceCard key={s.slug} s={s} />)}
        </div>
      </section>
      <FinalCta />
    </>
  ),
});
