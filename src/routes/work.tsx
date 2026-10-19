import { createFileRoute } from "@tanstack/react-router";
import { FinalCta, PageHero, Reveal } from "@/components/site/Layout";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work & Concepts | Canlaa" },
      { name: "description", content: "Concept projects and demos showing the websites, software and apps Canlaa builds." },
      { property: "og:title", content: "Work & Concepts | Canlaa" },
      { property: "og:description", content: "A look at the kind of digital work we deliver." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Work,
});

const ITEMS = [
  { tag: "Corporate website", t: "Meridian Legal", d: "Practice-area pages, team profiles and smart enquiry routing for a law firm concept.", stack: ["Design", "CMS", "SEO"] },
  { tag: "Custom software", t: "FleetDesk", d: "Scheduling, live tracking and reports for a service-vehicle operations team.", stack: ["Dashboard", "Automation", "Reports"] },
  { tag: "Mobile app", t: "Bloom Clinic", d: "Appointment booking, reminders and patient notes in one simple app.", stack: ["iOS", "Android", "Booking"] },
  { tag: "Ecommerce", t: "Kopi & Co.", d: "An online coffee shop with subscriptions, gift cards and fast checkout.", stack: ["Store", "Payments", "Email"] },
  { tag: "Branding", t: "Nusa Studio", d: "Logo, colour palette and brand guidelines for a boutique design studio.", stack: ["Identity", "Guidelines", "Assets"] },
  { tag: "Landing page", t: "LaunchPad", d: "A one-goal campaign page that tripled sign-ups in the concept test.", stack: ["Copy", "Design", "Analytics"] },
];

function Work() {
  return (
    <>
      <PageHero eyebrow="Work" title="Ideas we've shaped into products." intro="Concept projects and demos that show how we think, design and build. Real client case studies coming soon." />
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((p, i) => (
            <Reveal key={p.t} delay={(i % 3) * 120}>
              <article className="group h-full overflow-hidden rounded-md bg-card shadow-card transition-transform duration-500 hover:-translate-y-2">
                <div className="relative aspect-[4/3] overflow-hidden bg-navy-gradient">
                  <div className="grid-pattern absolute inset-0" />
                  <div className="float-slow absolute inset-8 rounded-sm border border-navy-border bg-navy/60 p-4" style={{ animationDelay: `${i * 400}ms` }}>
                    <div className="h-3 w-2/3 rounded-sm bg-navy-muted/40" />
                    <div className="mt-2 h-3 w-1/2 rounded-sm bg-navy-muted/25" />
                    <div className="mt-5 h-16 rounded-sm bg-primary/60 transition-all duration-500 group-hover:bg-electric/70" />
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary">Concept · {p.tag}</p>
                  <h3 className="mt-2 text-xl font-semibold">{p.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.stack.map((s) => <span key={s} className="rounded-sm bg-secondary px-2 py-1 text-xs">{s}</span>)}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
      <FinalCta />
    </>
  );
}
