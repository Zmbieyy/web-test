import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Briefcase, HeartPulse, MessagesSquare, ShieldCheck, ShoppingBag, Sprout, Target, UtensilsCrossed, Wrench } from "lucide-react";
import hero from "@/assets/hero.jpg";
import { FAQS, SERVICES } from "@/lib/site";
import { FaqList, FinalCta, SectionHead, ServiceCard } from "@/components/site/Layout";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Canlaa | Digital Solutions That Move Your Business Forward" },
      { name: "description", content: "Canlaa builds websites, custom software and mobile apps for businesses worldwide. Your Friendly Neighbourhood Web Partner." },
      { property: "og:title", content: "Canlaa | Digital Solutions That Move Your Business Forward" },
      { property: "og:description", content: "Websites, custom software, mobile apps and digital growth for ambitious businesses." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const RESULTS = [
  { k: "40%", v: "faster page loads after a rebuild" },
  { k: "3×", v: "more enquiries from a redesigned landing page" },
  { k: "12 hrs", v: "saved weekly through workflow automation" },
  { k: "99.9%", v: "uptime target on maintenance plans" },
];

const PROJECTS = [
  { tag: "Concept · Corporate website", t: "Meridian Legal", d: "A multi-page corporate site for a fictional law firm with practice-area pages and enquiry routing." },
  { tag: "Demo · Custom software", t: "FleetDesk", d: "An operations dashboard concept for scheduling, tracking and reporting on service vehicles." },
  { tag: "Concept · Mobile app", t: "Bloom Clinic", d: "A booking and reminders app concept for a healthcare practice." },
];

const PROCESS = [
  { t: "Discovery", d: "Understand goals, users and constraints." },
  { t: "Planning", d: "Scope, sitemap, timeline and proposal." },
  { t: "Design", d: "Wireframes and polished interface design." },
  { t: "Development", d: "Build, integrate and test thoroughly." },
  { t: "Launch", d: "Go live, train your team, then support." },
];

const WHY = [
  { i: MessagesSquare, t: "Clear communication", d: "A dedicated point of contact and regular progress updates." },
  { i: ShieldCheck, t: "Quality you can rely on", d: "Considered design, clean code and careful testing." },
  { i: Target, t: "Practical solutions", d: "Recommendations sized to your goals and budget." },
  { i: Wrench, t: "Ongoing support", d: "Maintenance plans that keep things fast and secure." },
];

const INDUSTRIES = [
  { i: Briefcase, t: "Professional services" },
  { i: ShoppingBag, t: "Ecommerce" },
  { i: HeartPulse, t: "Healthcare" },
  { i: UtensilsCrossed, t: "Hospitality" },
  { i: Sprout, t: "Growing businesses" },
];

function Index() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy-gradient text-navy-foreground">
        <div className="grid-pattern absolute inset-0" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:py-28">
          <div>
            <p className="eyebrow fade-up">Your Friendly Neighbourhood Web Partner</p>
            <h1 className="fade-up mt-5 text-4xl font-semibold leading-[1.08] md:text-6xl">Digital solutions that move your business forward.</h1>
            <p className="fade-up mt-6 max-w-xl text-lg text-navy-muted">Canlaa designs and builds websites, software and mobile apps that make it easier for your customers to find you, trust you and work with you.</p>
            <div className="fade-up mt-10 flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3 font-semibold text-primary-foreground hover:bg-electric">Start Your Project <ArrowRight className="h-4 w-4" /></Link>
              <Link to="/services" className="inline-flex items-center rounded-sm border border-navy-border px-6 py-3 font-semibold hover:bg-navy-border">Explore Our Services</Link>
            </div>
          </div>
          <img src={hero} width={1408} height={1056} alt="Website, software dashboard and mobile app interfaces" className="fade-up w-full rounded-md border border-navy-border" />
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Typical client results · sample figures for illustration</p>
          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {RESULTS.map((r) => (
              <div key={r.k} className="border-l-2 border-primary pl-5">
                <p className="font-display text-3xl font-semibold">{r.k}</p>
                <p className="mt-1 text-sm text-muted-foreground">{r.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHead eyebrow="What we do" title="End-to-end digital services" />
          <Link to="/services" className="inline-flex items-center gap-2 font-semibold text-primary">All services <ArrowRight className="h-4 w-4" /></Link>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => <ServiceCard key={s.slug} s={s} />)}
        </div>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <SectionHead eyebrow="Featured work" title="Concept projects & demos" text="Illustrative projects showing the kind of work we deliver. Client case studies coming soon." />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {PROJECTS.map((p, i) => (
              <article key={p.t} className="group overflow-hidden rounded-md bg-card shadow-card">
                <div className="relative aspect-[4/3] overflow-hidden bg-navy-gradient">
                  <div className="grid-pattern absolute inset-0" />
                  <div className="absolute inset-6 rounded-sm border border-navy-border bg-navy/60 p-4 transition-transform duration-500 group-hover:-translate-y-1">
                    <div className="flex gap-1.5"><span className="h-2 w-2 rounded-full bg-navy-muted" /><span className="h-2 w-2 rounded-full bg-navy-muted" /><span className="h-2 w-2 rounded-full bg-electric" /></div>
                    <div className="mt-4 h-3 w-2/3 rounded-sm bg-navy-muted/40" />
                    <div className="mt-2 h-3 w-1/2 rounded-sm bg-navy-muted/25" />
                    <div className="mt-5 grid grid-cols-3 gap-2">
                      {[0, 1, 2].map((k) => <div key={k} className={`h-14 rounded-sm ${k === i ? "bg-primary/70" : "bg-navy-muted/20"}`} />)}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary">{p.tag}</p>
                  <h3 className="mt-2 text-xl font-semibold">{p.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <SectionHead eyebrow="Our process" title="A clear path from idea to launch" />
        <ol className="mt-12 grid gap-px overflow-hidden rounded-md border border-border bg-border md:grid-cols-5">
          {PROCESS.map((p, i) => (
            <li key={p.t} className="bg-card p-6">
              <span className="font-display text-4xl font-semibold text-primary/30">0{i + 1}</span>
              <h3 className="mt-4 font-semibold">{p.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-navy text-navy-foreground">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <p className="eyebrow">Why Canlaa</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold md:text-4xl">A partner that's easy to work with — and built to last.</h2>
          <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {WHY.map(({ i: Icon, t, d }) => (
              <div key={t}>
                <Icon className="h-7 w-7 text-electric" />
                <h3 className="mt-5 text-lg font-semibold">{t}</h3>
                <p className="mt-2 text-sm text-navy-muted">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <SectionHead eyebrow="Industries" title="Experience across sectors" />
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-5">
          {INDUSTRIES.map(({ i: Icon, t }) => (
            <div key={t} className="rounded-md border border-border p-6 transition-colors hover:border-primary hover:bg-accent">
              <Icon className="h-6 w-6 text-primary" />
              <p className="mt-6 font-display font-medium">{t}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-3">
          <SectionHead eyebrow="FAQ" title="Common questions" text="Timelines, pricing, maintenance and how to get started." />
          <div className="lg:col-span-2"><FaqList items={FAQS.slice(0, 4)} /></div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
