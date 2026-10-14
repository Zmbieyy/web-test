import { createFileRoute } from "@tanstack/react-router";
import { FinalCta, PageHero, SectionHead } from "@/components/site/Layout";

const VALUES = [
  { t: "Clear communication", d: "Regular updates, honest timelines and no jargon. You always know where your project stands." },
  { t: "Quality craftsmanship", d: "Considered design, clean code and careful testing before anything goes live." },
  { t: "Practical solutions", d: "We recommend what your business needs — not the most expensive option." },
  { t: "Ongoing support", d: "We stay after launch to maintain, improve and grow what we've built together." },
];

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Canlaa | Your Friendly Neighbourhood Web Partner" },
      { name: "description", content: "Canlaa is a digital solutions company helping businesses build, improve and grow their digital presence." },
      { property: "og:title", content: "About Canlaa" },
      { property: "og:description", content: "A friendly, dependable digital partner for growing businesses worldwide." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <>
      <PageHero eyebrow="About Us" title="Your friendly neighbourhood web partner." intro="Canlaa helps businesses build, improve and grow their digital presence through professional websites, custom software, mobile applications and digital solutions." />
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-2">
        <SectionHead eyebrow="Our approach" title="Big-agency standards, neighbourly service." />
        <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
          <p>We believe great digital work comes from understanding a business first. Every project starts with listening — to your goals, your customers and the constraints you work within.</p>
          <p>We work with organisations across Malaysia, the UK, Singapore, Australia, the UAE and other markets, combining structured delivery with the approachability of a partner who picks up the phone.</p>
        </div>
      </section>
      <section className="bg-secondary">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <SectionHead eyebrow="What we value" title="How we work with you" />
          <div className="mt-12 grid gap-px overflow-hidden rounded-md border border-border bg-border md:grid-cols-4">
            {VALUES.map((v, i) => (
              <div key={v.t} className="bg-card p-8">
                <span className="font-display text-sm text-primary">0{i + 1}</span>
                <h3 className="mt-4 text-lg font-semibold">{v.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <FinalCta />
    </>
  ),
});
