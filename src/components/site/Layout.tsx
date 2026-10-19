import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowRight, ArrowUpRight, Menu, X, Mail, MessageCircle } from "lucide-react";
import { CONTACT, NAV, SERVICES } from "@/lib/site";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-2.5" aria-label="Canlaa home">
      <span className="grid h-8 w-8 place-items-center rounded-sm bg-primary font-display text-sm font-bold text-primary-foreground">C</span>
      <span className={`font-display text-lg font-semibold tracking-tight ${light ? "text-navy-foreground" : "text-foreground"}`}>canlaa</span>
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-navy-border bg-navy/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Logo light />
        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((n) => (
            <Link key={n.to} to={n.to} className="text-sm text-navy-muted transition-colors hover:text-navy-foreground" activeProps={{ className: "text-navy-foreground" }}>
              {n.label}
            </Link>
          ))}
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-sm bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-electric">
            Let's Talk <ArrowRight className="h-4 w-4" />
          </Link>
        </nav>
        <button className="text-navy-foreground md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-navy-border px-6 py-4 md:hidden">
          {NAV.map((n) => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="block py-2.5 text-navy-foreground">{n.label}</Link>
          ))}
          <Link to="/contact" onClick={() => setOpen(false)} className="mt-3 block rounded-sm bg-primary px-4 py-2.5 text-center font-semibold text-primary-foreground">Let's Talk</Link>
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-navy text-navy-muted">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-4">
        <div className="md:col-span-1">
          <Logo light />
          <p className="mt-4 text-sm leading-relaxed">Your Friendly Neighbourhood Web Partner. Digital solutions for businesses in Malaysia, the UK, Singapore, Australia, the UAE and beyond.</p>
        </div>
        <div>
          <h4 className="mb-4 text-sm font-semibold text-navy-foreground">Services</h4>
          <ul className="space-y-2.5 text-sm">
            {SERVICES.map((s) => (
              <li key={s.slug}><Link to={s.path} className="hover:text-navy-foreground">{s.title}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-4 text-sm font-semibold text-navy-foreground">Company</h4>
          <ul className="space-y-2.5 text-sm">
            <li><Link to="/about" className="hover:text-navy-foreground">About Us</Link></li>
            <li><Link to="/services" className="hover:text-navy-foreground">All Services</Link></li>
            <li><Link to="/faq" className="hover:text-navy-foreground">FAQ</Link></li>
            <li><Link to="/contact" className="hover:text-navy-foreground">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 text-sm font-semibold text-navy-foreground">Get in touch</h4>
          <ul className="space-y-2.5 text-sm">
            <li><a href={`mailto:${CONTACT.email}`} className="inline-flex items-center gap-2 hover:text-navy-foreground"><Mail className="h-4 w-4" />{CONTACT.email}</a></li>
            <li><a href={`https://wa.me/${CONTACT.whatsapp}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-navy-foreground"><MessageCircle className="h-4 w-4" />WhatsApp</a></li>
          </ul>
          <div className="mt-6 flex gap-4 text-sm">
            {["LinkedIn", "Instagram", "X"].map((s) => (
              <a key={s} href="#" className="hover:text-navy-foreground">{s}</a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-navy-border">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-2 px-6 py-6 text-xs md:flex-row">
          <span>© {new Date().getFullYear()} Canlaa. All rights reserved.</span>
          <span>Built with care, worldwide.</span>
        </div>
      </div>
    </footer>
  );
}

export function PageHero({ eyebrow, title, intro, children }: { eyebrow: string; title: string; intro: string; children?: ReactNode }) {
  return (
    <section className="relative overflow-hidden bg-navy-gradient text-navy-foreground">
      <div className="grid-pattern absolute inset-0" />
      <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-28">
        <p className="eyebrow fade-up">{eyebrow}</p>
        <h1 className="fade-up mt-4 max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">{title}</h1>
        <p className="fade-up mt-6 max-w-2xl text-lg text-navy-muted">{intro}</p>
        {children}
      </div>
    </section>
  );
}

export function SectionHead({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div className="max-w-2xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold leading-tight md:text-4xl">{title}</h2>
      {text && <p className="mt-4 text-muted-foreground">{text}</p>}
    </div>
  );
}

export function ServiceCard({ s }: { s: (typeof SERVICES)[number] }) {
  return (
    <Link to={s.path} className="group flex flex-col border-t border-border bg-card p-8 transition-colors hover:bg-accent">
      <span className="font-display text-sm text-primary">{s.num}</span>
      <h3 className="mt-6 text-xl font-semibold">{s.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{s.short}</p>
      <span className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
        Learn more <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </Link>
  );
}

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-navy-gradient text-navy-foreground">
      <div className="grid-pattern absolute inset-0" />
      <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 py-20 md:flex-row md:items-center">
        <div>
          <h2 className="max-w-xl text-3xl font-semibold md:text-4xl">Have a project in mind? Let's talk it through.</h2>
          <p className="mt-3 text-navy-muted">Free discovery call. Clear proposal. Reply within one business day.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3 font-semibold text-primary-foreground hover:bg-electric">Start Your Project <ArrowRight className="h-4 w-4" /></Link>
          <a href={`https://wa.me/${CONTACT.whatsapp}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-sm border border-navy-border px-6 py-3 font-semibold hover:bg-navy-border">
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

export function FaqList({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="divide-y divide-border border-y border-border">
      {items.map((f) => (
        <details key={f.q} className="group py-6">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-display text-lg font-medium">
            {f.q}
            <span className="text-2xl text-primary transition-transform group-open:rotate-45">+</span>
          </summary>
          <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">{f.a}</p>
        </details>
      ))}
    </div>
  );
}

export function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e?.isIntersecting) { el.classList.add("is-in"); io.disconnect(); } }, { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>{children}</div>;
}

export function Marquee({ items }: { items: string[] }) {
  return (
    <div className="overflow-hidden border-y border-navy-border bg-navy py-5 text-navy-muted">
      <div className="marquee flex w-max gap-12 whitespace-nowrap font-display text-lg">
        {[...items, ...items].map((t, i) => <span key={i} className="flex items-center gap-12">{t}<span className="text-electric">✦</span></span>)}
      </div>
    </div>
  );
}
