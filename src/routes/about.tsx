import { createFileRoute } from "@tanstack/react-router";
import { FinalCta, PageHero, Reveal, SectionHead } from "@/components/site/Layout";

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
      <section className="mx-auto max-w-7xl px-6 py-24">
        <SectionHead eyebrow="Our story" title="From one small project to a trusted partner." />
        <ol className="mt-12 space-y-8 border-l-2 border-primary/30 pl-8">
          {[
            ["The beginning", "Canlaa started by helping local shops and friends get online with simple, honest websites."],
            ["Growing the team", "We added developers, designers and marketers so clients could get everything in one place."],
            ["Going global", "Today we support businesses across Asia, Europe, Australia and the Middle East."],
            ["What's next", "More tools, smarter automation and long-term partnerships with the businesses we serve."],
          ].map(([t, d], i) => (
            <Reveal key={t} delay={i * 100}>
              <li className="relative">
                <span className="absolute -left-[41px] top-1 h-4 w-4 rounded-full bg-primary ring-4 ring-accent" />
                <h3 className="text-xl font-semibold">{t}</h3>
                <p className="mt-2 max-w-2xl text-muted-foreground">{d}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </section>
      <section className="bg-navy-gradient text-navy-foreground">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-20 sm:grid-cols-2 lg:grid-cols-4">
          {[["5+", "countries served"], ["6", "core services"], ["1 day", "reply time"], ["100%", "friendly service"]].map(([k, v], i) => (
            <Reveal key={v} delay={i * 100}>
              <p className="font-display text-5xl font-semibold text-electric">{k}</p>
              <p className="mt-2 text-navy-muted">{v}</p>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 py-24">
        <SectionHead eyebrow="The team" title="Real people, ready to help." text="A small, focused team of designers, developers and strategists." />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[["Strategy", "Plans projects and keeps everything on track."], ["Design", "Creates friendly, clear interfaces and brands."], ["Development", "Builds fast, secure websites and apps."], ["Growth", "Helps customers find you through SEO and content."]].map(([t, d], i) => (
            <Reveal key={t} delay={i * 100}>
              <div className="h-full rounded-md bg-card p-6 shadow-card transition-transform duration-300 hover:-translate-y-1">
                <div className="grid h-14 w-14 place-items-center rounded-full bg-accent font-display text-xl font-semibold text-primary">{t[0]}</div>
                <h3 className="mt-5 text-lg font-semibold">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <FinalCta />
    </>
  ),
});
