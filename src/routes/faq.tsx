import { createFileRoute } from "@tanstack/react-router";
import { FAQS } from "@/lib/site";
import { FaqList, FinalCta, PageHero } from "@/components/site/Layout";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ | Canlaa" },
      { name: "description", content: "Answers about Canlaa project timelines, pricing, maintenance and how to start." },
      { property: "og:title", content: "Frequently Asked Questions | Canlaa" },
      { property: "og:description", content: "Timelines, pricing, maintenance and project enquiries explained." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <>
      <PageHero eyebrow="FAQ" title="Questions, answered plainly." intro="If you don't see your question here, send us a message — we're happy to help." />
      <section className="mx-auto max-w-4xl px-6 py-24"><FaqList items={FAQS} /></section>
      <FinalCta />
    </>
  ),
});
