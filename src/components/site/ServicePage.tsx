import { Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { SERVICES, type ServiceSlug } from "@/lib/site";
import { FinalCta, PageHero, SectionHead, ServiceCard } from "./Layout";

export function serviceHead(slug: ServiceSlug) {
  const s = SERVICES.find((x) => x.slug === slug)!;
  const title = `${s.title} | Canlaa`;
  return {
    meta: [
      { title },
      { name: "description", content: s.intro },
      { property: "og:title", content: title },
      { property: "og:description", content: s.intro },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  };
}

export function ServicePage({ slug }: { slug: ServiceSlug }) {
  const s = SERVICES.find((x) => x.slug === slug)!;
  const others = SERVICES.filter((x) => x.slug !== slug).slice(0, 3);
  return (
    <>
      <PageHero eyebrow={`Service ${s.num}`} title={s.title} intro={s.intro}>
        <Link to="/contact" className="mt-10 inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3 font-semibold text-primary-foreground hover:bg-electric">
          Discuss your project <ArrowRight className="h-4 w-4" />
        </Link>
      </PageHero>
      <section className="mx-auto max-w-7xl px-6 py-24">
        <SectionHead eyebrow="What we deliver" title="Scope that fits your goals" />
        <div className="mt-12 grid gap-px overflow-hidden rounded-md border border-border bg-border md:grid-cols-2">
          {s.offerings.map((o, i) => (
            <div key={o.title} className="bg-card p-8">
              <span className="font-display text-sm text-primary">0{i + 1}</span>
              <h3 className="mt-4 text-xl font-semibold">{o.title}</h3>
              <p className="mt-2 text-muted-foreground">{o.text}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-secondary">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2">
          <SectionHead eyebrow="What you get" title="Every engagement includes" text="Clear milestones, regular check-ins and a team that explains decisions in plain language." />
          <ul className="grid gap-4 self-center sm:grid-cols-2">
            {s.outcomes.map((o) => (
              <li key={o} className="flex items-center gap-3 rounded-md bg-card p-4 shadow-card">
                <Check className="h-5 w-5 text-primary" /> <span className="font-medium">{o}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 py-24">
        <SectionHead eyebrow="Related" title="Other ways we can help" />
        <div className="mt-12 grid md:grid-cols-3">
          {others.map((o) => <ServiceCard key={o.slug} s={o} />)}
        </div>
      </section>
      <FinalCta />
    </>
  );
}
