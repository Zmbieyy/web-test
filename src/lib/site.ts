export const CONTACT = {
  email: "hello@canlaa.com",
  whatsapp: "60123456789",
  whatsappLabel: "+60 12-345 6789",
};

export type ServiceSlug =
  | "website-development"
  | "custom-software"
  | "mobile-apps"
  | "maintenance-support"
  | "digital-marketing"
  | "branding-design";

export type Service = {
  slug: ServiceSlug;
  path: string;
  num: string;
  title: string;
  short: string;
  intro: string;
  offerings: { title: string; text: string }[];
  outcomes: string[];
};

export const SERVICES: Service[] = [
  {
    slug: "website-development",
    path: "/services/website-development",
    num: "01",
    title: "Website Design & Development",
    short: "Corporate websites, business sites, landing pages and ecommerce stores built to perform.",
    intro: "We design and build fast, credible websites that explain what you do clearly and turn visitors into enquiries.",
    offerings: [
      { title: "Corporate websites", text: "Structured multi-page sites that present your organisation with clarity and authority." },
      { title: "Business websites", text: "Practical sites for growing companies, easy to update and built to rank." },
      { title: "Landing pages", text: "Focused campaign pages designed around one goal and one clear action." },
      { title: "Ecommerce stores", text: "Online shops with secure checkout, product management and order flows." },
    ],
    outcomes: ["Responsive on every device", "SEO-ready structure", "Fast load times", "Content you can manage"],
  },
  {
    slug: "custom-software",
    path: "/services/custom-software",
    num: "02",
    title: "Custom Software Development",
    short: "Business applications, workflow automation and tailored digital tools.",
    intro: "When off-the-shelf tools don't fit, we build software around the way your business actually works.",
    offerings: [
      { title: "Business applications", text: "Internal systems for operations, records, reporting and teams." },
      { title: "Workflow automation", text: "Replace repetitive manual steps with reliable automated processes." },
      { title: "Web applications", text: "Secure browser-based platforms for customers, partners or staff." },
      { title: "Tailored digital tools", text: "Calculators, portals, dashboards and integrations built to spec." },
    ],
    outcomes: ["Built around your process", "Scalable architecture", "Role-based access", "Documented handover"],
  },
  {
    slug: "mobile-apps",
    path: "/services/mobile-apps",
    num: "03",
    title: "Mobile App Development",
    short: "Modern mobile applications designed around real business requirements.",
    intro: "We plan, design and build mobile apps that are useful from the first release and simple to grow.",
    offerings: [
      { title: "Product discovery", text: "Define users, core features and a realistic first release." },
      { title: "UI / UX design", text: "Clean, intuitive interfaces tested against real user journeys." },
      { title: "iOS & Android builds", text: "Cross-platform development for consistent experiences on both stores." },
      { title: "Launch & iteration", text: "Store submission, analytics and planned improvement cycles." },
    ],
    outcomes: ["One codebase, two platforms", "Store-ready releases", "Backend integration", "Post-launch support"],
  },
  {
    slug: "maintenance-support",
    path: "/services/maintenance-support",
    num: "04",
    title: "Website Maintenance & Support",
    short: "Updates, troubleshooting, performance, security monitoring and technical support.",
    intro: "Keep your website secure, fast and up to date, with a responsive team on hand when you need help.",
    offerings: [
      { title: "Website updates", text: "Content changes, new pages and feature tweaks handled for you." },
      { title: "Troubleshooting", text: "Diagnosis and fixes for errors, broken forms and display issues." },
      { title: "Performance optimisation", text: "Speed improvements across images, code and hosting." },
      { title: "Security monitoring", text: "Updates, backups and monitoring to reduce risk and downtime." },
    ],
    outcomes: ["Predictable monthly plans", "Clear response times", "Regular backups", "Plain-English reports"],
  },
  {
    slug: "digital-marketing",
    path: "/services/digital-marketing",
    num: "05",
    title: "Digital Marketing",
    short: "SEO, content strategy and social media support that builds visibility.",
    intro: "Being online is only the start. We help the right people find you and understand why to choose you.",
    offerings: [
      { title: "Search engine optimisation", text: "Technical, on-page and local SEO to improve organic visibility." },
      { title: "Content strategy", text: "Topics, structure and copy that answer what your customers search for." },
      { title: "Social media support", text: "Planning and creative assets for consistent social presence." },
      { title: "Analytics & reporting", text: "Tracking set-up and reports that show what's working." },
    ],
    outcomes: ["Measurable goals", "Search-focused content", "Consistent brand voice", "Monthly insights"],
  },
  {
    slug: "branding-design",
    path: "/services/branding-design",
    num: "06",
    title: "Branding & Creative Design",
    short: "Visual identity, graphic design and digital brand assets.",
    intro: "A clear, consistent identity makes every touchpoint more credible, from your website to your pitch deck.",
    offerings: [
      { title: "Visual identity", text: "Logo, colour, typography and the rules that hold them together." },
      { title: "Graphic design", text: "Brochures, presentations, signage and marketing collateral." },
      { title: "Digital brand assets", text: "Social templates, icons, banners and email graphics." },
      { title: "Brand guidelines", text: "A practical reference so your team applies the brand consistently." },
    ],
    outcomes: ["Distinct identity", "Consistent across channels", "Print & digital files", "Usable guidelines"],
  },
];

export const FAQS = [
  { q: "How long does a typical website project take?", a: "Most business websites take 3–6 weeks from discovery to launch. Larger corporate sites, ecommerce stores and custom software usually take 6–16 weeks depending on scope. We confirm a timeline in your proposal." },
  { q: "How is pricing structured?", a: "We quote per project based on scope, after a free discovery call. You receive a fixed proposal with clear deliverables and milestones — no surprise invoices." },
  { q: "Do you offer maintenance after launch?", a: "Yes. We offer monthly maintenance and support plans covering updates, security, backups, performance and technical help." },
  { q: "Do you work with international clients?", a: "Yes. We work remotely with businesses in Malaysia, the UK, Singapore, Australia, the UAE and beyond, scheduling calls across time zones." },
  { q: "What do you need from me to get started?", a: "A short description of your business, goals and any existing materials. Our enquiry form is the quickest way to begin — we reply within one business day." },
  { q: "Will I be able to update the website myself?", a: "Where it suits the project, we build on a content management system and provide a walkthrough so your team can edit content confidently." },
];

export const NAV = [
  { to: "/services", label: "Services" },
  { to: "/work", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;
