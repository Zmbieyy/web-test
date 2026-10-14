import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Mail, MessageCircle, Send } from "lucide-react";
import { CONTACT, SERVICES } from "@/lib/site";
import { PageHero } from "@/components/site/Layout";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Canlaa | Start Your Project" },
      { name: "description", content: "Tell us about your project. Enquire by form, email or WhatsApp — we reply within one business day." },
      { property: "og:title", content: "Contact Canlaa" },
      { property: "og:description", content: "Start your project with a free discovery call." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

const field = "w-full rounded-sm border border-input bg-card px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-ring/20";

function Contact() {
  const [sent, setSent] = useState(false);
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const body = ["name", "email", "company", "service", "budget", "details"].map((k) => `${k}: ${d.get(k) ?? ""}`).join("\n");
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(`Project enquiry — ${d.get("company") || d.get("name")}`)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }
  return (
    <>
      <PageHero eyebrow="Contact" title="Let's talk about your project." intro="Share a few details and we'll come back within one business day with next steps." />
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-3">
        <form onSubmit={submit} className="grid gap-5 rounded-md border border-border bg-card p-8 shadow-card sm:grid-cols-2 lg:col-span-2">
          <label className="grid gap-2 text-sm font-medium">Name<input required name="name" maxLength={100} className={field} /></label>
          <label className="grid gap-2 text-sm font-medium">Business email<input required type="email" name="email" maxLength={255} className={field} /></label>
          <label className="grid gap-2 text-sm font-medium">Company<input name="company" maxLength={100} className={field} /></label>
          <label className="grid gap-2 text-sm font-medium">Required service
            <select required name="service" className={field} defaultValue="">
              <option value="" disabled>Select a service</option>
              {SERVICES.map((s) => <option key={s.slug}>{s.title}</option>)}
              <option>Not sure yet</option>
            </select>
          </label>
          <label className="grid gap-2 text-sm font-medium sm:col-span-2">Budget range
            <select required name="budget" className={field} defaultValue="">
              <option value="" disabled>Select a range (USD)</option>
              <option>Under $2,000</option><option>$2,000 – $5,000</option><option>$5,000 – $15,000</option><option>$15,000 – $50,000</option><option>$50,000+</option>
            </select>
          </label>
          <label className="grid gap-2 text-sm font-medium sm:col-span-2">Project details<textarea required name="details" rows={6} maxLength={2000} className={field} /></label>
          <div className="flex flex-wrap items-center gap-4 sm:col-span-2">
            <button className="inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3 font-semibold text-primary-foreground hover:bg-electric">Send enquiry <Send className="h-4 w-4" /></button>
            {sent && <span className="text-sm text-muted-foreground">Your email app should open with the enquiry ready to send.</span>}
          </div>
        </form>
        <aside className="space-y-4">
          <a href={`https://wa.me/${CONTACT.whatsapp}`} target="_blank" rel="noreferrer" className="flex gap-4 rounded-md border border-border bg-card p-6 transition-colors hover:border-primary">
            <MessageCircle className="h-6 w-6 text-primary" />
            <div><p className="font-display font-semibold">WhatsApp</p><p className="text-sm text-muted-foreground">{CONTACT.whatsappLabel}</p></div>
          </a>
          <a href={`mailto:${CONTACT.email}`} className="flex gap-4 rounded-md border border-border bg-card p-6 transition-colors hover:border-primary">
            <Mail className="h-6 w-6 text-primary" />
            <div><p className="font-display font-semibold">Email</p><p className="text-sm text-muted-foreground">{CONTACT.email}</p></div>
          </a>
          <div className="rounded-md bg-navy-gradient p-6 text-navy-foreground">
            <p className="font-display font-semibold">Working worldwide</p>
            <p className="mt-2 text-sm text-navy-muted">Malaysia · United Kingdom · Singapore · Australia · UAE</p>
          </div>
        </aside>
      </section>
    </>
  );
}
