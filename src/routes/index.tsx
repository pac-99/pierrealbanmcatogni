import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import portrait from "@/assets/portrait.jpeg";
import { Reveal } from "@/components/reveal";

export const Route = createFileRoute("/")({
  component: CV,
  head: () => ({
    meta: [
      { title: "Pierre-Alban M. Catogni — CV" },
      { name: "description", content: "Strategy, product and operations. Provo, UT." },
    ],
  }),
});

type Role = {
  company: string;
  location: string;
  title: string;
  period: string;
  bullets: string[];
};

const experience: Role[] = [
  {
    company: "Cougar Strategy Group",
    location: "Provo, UT",
    title: "Associate Consultant — Product",
    period: "Jan. 2026 — May 2026",
    bullets: [
      "Created an AI-powered evidence review platform integrated into the Microsoft ecosystem, automating consultant workflows and reducing case review time from 2–3 hours to 20–30 minutes.",
      "Entrusted with redesigning the evaluation methodology after analyzing consultant workflows end-to-end, identifying inefficiencies in existing review processes, and developing a scalable framework to enhance recommendation accuracy and consistency.",
    ],
  },
  {
    company: "Pepeuf",
    location: "Lausanne, Switzerland",
    title: "Sales and Operations Manager",
    period: "Aug. 2024 — Dec. 2024",
    bullets: [
      "Negotiated, sourced, and managed relationships with 5 major vendor partners to support cross-border market entry, driving expansion from 4 markets (Paris, Geneva, Lausanne, Brussels) into 3 new ones (London, US East and West Coast) and contributing to 37% revenue growth during tenure.",
      "Established a 0→1 financial compliance and reporting system after diagnosing gaps in accounting operations; integrated three data streams, eliminated recurring reconciliation errors, and developed revenue projection models by market and sales channel, ultimately adopted as the organization’s standard reporting framework.",
      "Analyzed historical performance data and market dynamics across geographies and sales channels to develop expansion priorities, informing market entry decisions across 3 new regions and optimizing resource allocation.",
    ],
  },
  {
    company: "Unicity International",
    location: "Dubai, UAE",
    title: "Operations Consultant Intern",
    period: "Jun. 2024 — Aug. 2024",
      bullets: [
        "Audited compliance and performance across 9 MENA countries, identifying missed payments and overbilled amounts, and ensuring adherence to financial and regulatory standards across multi-country operations.",
        "Assessed and benchmarked retail expansion opportunities across Dubai, analyzing demographic trends, footfall patterns, lease economics, and competitive positioning to support the selection of a new store location that strengthened brand presence among the company’s target customer segment.",
        "Supported supplier strategy analysis by evaluating alternatives that led to a higher-value, lower-cost partnership, improving margins and regional coverage.",
      ],
  },
  {
    company: "Built Brands",
    location: "American Fork, UT",
    title: "Business Operations Intern",
    period: "Mar. 2024 — Apr. 2024",
    bullets: [
      "Resolved systemic delays in procurement and fulfillment workflows, mapped the end-to-end process, and redesigned the delivery system by eliminating operational bottlenecks, reducing cycle time from 10 days to under 3.\u00a0",
      "Collaborated with product and operations teams to refine customer segmentation and GTM strategy, informing new product development and revised targeting approach for customer acquisition.",
    ],
  },
  {
    company: "Ensign College",
    location: "Salt Lake City, UT",
    title: "Enrollment Coordinator",
    period: "May 2023 — Dec. 2023",
    bullets: [
      "Selected to co-lead international enrollment operations out of a generalist hire cohort; coordinated workflows across 12 colleagues and departments, with expanded responsibilities granted based on performance.",
      "Redesigned international student onboarding and case-management workflows, increasing average weekly case throughput by 29% without compromising accuracy or service quality.",
      "Managed complex stakeholder relationships across students, academic departments, international services, and external partners to resolve time-sensitive operational cases.",
    ],
  },
  {
    company: "Voiss AG & Corris AG",
    location: "Lausanne, Switzerland",
    title: "Fundraising Project Coordinator",
    period: "Aug. 2022 — Apr. 2023",
    bullets: [
      "Ranked Top 5 nationally among 140+ fundraisers over a 9-month period, closing 1,020 donor commitments representing an estimated 215,000+ CHF in annualized retained revenue, with a 12% sign-out rate versus the 17% company average.",
      "Coached team of 9 using Scrum methodology, driving average daily deals per fundraiser from 3 to 6 — exceeding the company-wide standard of 4 deals/day, sustained consistently over multiple months.",
    ],
  },
  {
    company: "Church of Jesus Christ of Latter-day Saints",
    location: "UK · New Zealand · Germany · Switzerland",
    title: "Full-Time Volunteer Representative",
    period: "Mar. 2019 — Jun. 2021",
    bullets: [
      "Appointed to leadership roles across 4 zones (30+ volunteers each) over 27 months, serving in leadership for 20 of those months; grew active community reach in each zone (e.g., 195 → 345 in final zone) through new outreach strategies, training methods, and team coordination.",
      "Managed community development initiatives in partnership with local NGOs and government organizations, coordinating diverse stakeholders to ensure successful project execution.",
      "Trained and mentored 5 volunteers in strategic communication, stakeholder engagement, and leadership principles — 4 of whom went on to hold leadership roles themselves, extending the impact of the work well beyond my time in the field.",
    ],
  },
];

const competencies = [
  {
    label: "Strategy & Operations",
    items: ["Strategy Frameworks", "Market Sizing & Benchmarking", "Business Development", "Go-to-Market Strategy", "Agile / Scrum", "Competitive Strategy", "Corporate Strategy", "Agentic Engineering", "AI-Assisted Development"],
  },
  {
    label: "Data Analysis & Tools",
    items: ["Excel (Advanced, VBA)", "SQL", "Tableau", "R", "Python", "Quantitative Analysis"],
  },
  {
    label: "Client & Stakeholder",
    items: ["Executive Presentations", "Cross-Cultural Communication", "Stakeholder Coordination", "Customer Segmentation & Account Mapping", "Negotiation", "Partnership Strategy"],
  },
  {
    label: "Professionalism",
    items: ["Driven", "Curious", "Deliberate", "Problem-Solver", "Adaptable", "Organized", "Analytical", "Team Player", "Creative", "Detail-Oriented", "Comfortable with Ambiguity", "Innovative Mindset"],
  },
];

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Reveal as="section" className="grid grid-cols-12 gap-8 py-16 border-t border-border/70">
      <h2 className="col-span-12 md:col-span-3 text-xs uppercase tracking-[0.18em] text-muted-foreground pt-1">
        {title}
      </h2>
      <div className="col-span-12 md:col-span-9">{children}</div>
    </Reveal>
  );
}

function ContactStrip() {
  const pillBase = "shrink-0 inline-flex items-center gap-1";

  const items = (
    <>
      <span className={pillBase}>Provo, UT</span>
      <a href="mailto:pierrealban99@gmail.com" className={`${pillBase} hover:text-foreground transition-colors`}>
        pierrealban99@gmail.com
        <ArrowUpRight className="size-2 opacity-60 -translate-y-1" aria-hidden />
      </a>
      <a href="https://www.linkedin.com/in/pierre-alban-catogni-688603220" target="_blank" rel="noreferrer" className={`${pillBase} hover:text-foreground transition-colors`}>
        linkedin.com/in/pierre-alban-catogni
        <ArrowUpRight className="size-2 opacity-60 -translate-y-1" aria-hidden />
      </a>
      <span className={pillBase}>
        US:&nbsp;<a href="tel:+13852195806" className="inline-flex items-center gap-1 hover:text-foreground transition-colors">+1 385 219-5806<ArrowUpRight className="size-2 opacity-60 -translate-y-1" aria-hidden /></a>
      </span>
      <span className={pillBase}>
        FR:&nbsp;<a href="tel:+33784867442" className="inline-flex items-center gap-1 hover:text-foreground transition-colors">+33 7 84 86 74 42<ArrowUpRight className="size-2 opacity-60 -translate-y-1" aria-hidden /></a>
      </span>
    </>
  );

  return (
    <>
      {/* Mobile: continuous left-to-right marquee, still swipeable */}
      <div className="mt-10 sm:hidden relative overflow-x-auto -mx-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <div className="flex w-max animate-marquee gap-8 pr-8 text-sm text-muted-foreground [animation-play-state:running] [&:hover]:[animation-play-state:paused]">
          <div className="flex shrink-0 gap-8 pl-6">{items}</div>
          <div className="flex shrink-0 gap-8 pl-6" aria-hidden>{items}</div>
        </div>
      </div>

      {/* Desktop: static wrap */}
      <div className="mt-10 hidden sm:flex flex-wrap gap-x-8 gap-y-2 text-sm text-muted-foreground">
        {items}
      </div>
    </>
  );
}


function CV() {
  return (
    <div className="mx-auto max-w-6xl px-6">
      {/* Hero */}
      <section className="pt-24 pb-20 md:pt-36 md:pb-28 grid grid-cols-12 gap-8 items-end">
        <Reveal className="col-span-12 md:col-span-8">
          <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground mb-6">Curriculum Vitae</p>
          <h1 className="display text-[14vw] md:text-[88px] leading-[0.95]">
            Pierre-Alban<br />
            <span className="text-muted-foreground">M. Catogni</span>
          </h1>
          <ContactStrip />
        </Reveal>
        <Reveal delay={200} className="col-span-12 md:col-span-4">
          <div className="aspect-square overflow-hidden rounded-3xl bg-muted">
            <img src={portrait} alt="Portrait of Pierre-Alban M. Catogni" className="w-full h-full object-cover" />
          </div>
        </Reveal>
      </section>

      <Section title="Experience">
        <ol className="space-y-14">
          {experience.map((r, idx) => (
            <Reveal as="li" delay={idx * 80} key={r.company + r.period} className="grid grid-cols-12 gap-6">
              <div className="col-span-12 md:col-span-4">
                <p className="text-xs text-muted-foreground tabular-nums">{r.period}</p>
                <h3 className="mt-2 text-lg font-medium tracking-tight">{r.company}</h3>
                <p className="text-sm text-muted-foreground">{r.location}</p>
              </div>
              <div className="col-span-12 md:col-span-8">
                <p className="text-base font-medium tracking-tight mb-3">{r.title}</p>
                <ul className="space-y-2 text-[15px] leading-relaxed text-foreground/80">
                  {r.bullets.map((b, i) => (
                    <li key={i} className="pl-5 relative">
                      <span className="absolute left-0 top-[0.7em] w-2 h-px bg-muted-foreground/60" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </ol>
      </Section>

      <Section title="Education">
        <p className="text-xs text-muted-foreground tabular-nums">Apr. 2026 · Provo, UT</p>
        <h3 className="mt-2 text-lg font-medium tracking-tight">Brigham Young University — Marriott School of Business</h3>
        <p className="text-sm text-muted-foreground">Bachelor of Science in Strategic Management · GPA 3.8</p>
        <ul className="mt-4 space-y-2 text-[15px] leading-relaxed text-foreground/80">
          <li className="pl-5 relative"><span className="absolute left-0 top-[0.7em] w-2 h-px bg-muted-foreground/60" />Coursework: Data Analysis and Statistics, Product Management, Economics of Strategy, Advanced Competitive Strategy, Corporate Strategy, Global Negotiations, Financial Modeling.</li>
          <li className="pl-5 relative"><span className="absolute left-0 top-[0.7em] w-2 h-px bg-muted-foreground/60" />Conducted weekly intensive business case analyses, delivering MBB-level recommendations for growth, development, and problem solving.</li>
          <li className="pl-5 relative"><span className="absolute left-0 top-[0.7em] w-2 h-px bg-muted-foreground/60" />Member: BYU Corporate Strategy Association, BYU Product Management Association.</li>
        </ul>
      </Section>

      <Section title="Competencies">
        <div className="grid sm:grid-cols-2 gap-10">
          {competencies.map((g, idx) => (
            <Reveal key={g.label} delay={idx * 80}>
              <p className="text-sm font-medium tracking-tight mb-3">{g.label}</p>
              <ul className="flex flex-wrap gap-x-2 gap-y-2">
                {g.items.map((i) => (
                  <li key={i} className="text-[13px] text-foreground/75 border border-border rounded-full px-3 py-1">
                    {i}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
          <Reveal delay={competencies.length * 80}>
            <p className="text-sm font-medium tracking-tight mb-3">Languages</p>
            <ul className="flex flex-wrap gap-x-2 gap-y-2">
              {["French", "English", "German (Intermediate)"].map((i) => (
                <li key={i} className="text-[13px] text-foreground/75 border border-border rounded-full px-3 py-1">
                  {i}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      <Section title="Personal Information">
        <div className="grid sm:grid-cols-2 gap-10 text-[15px] text-foreground/80">
          <div>
            <p className="font-medium text-foreground">Model United Nations</p>
            <p className="text-sm text-muted-foreground">École des Roches International School · Normandie, France · 2015–2017</p>
          </div>
          <div>
            <p className="font-medium text-foreground">International Baccalaureate</p>
            <p className="text-sm text-muted-foreground">Lausanne, Switzerland · May 2018</p>
          </div>
          <div className="sm:col-span-2">
            <p className="text-sm font-medium tracking-tight mb-3 text-foreground">Interests</p>
            <ul className="flex flex-wrap gap-x-2 gap-y-2">
              {["Running", "Cooking", "Reading", "New Technologies", "Great Outdoors", "Geopolitics"].map((i) => (
                <li key={i} className="text-[13px] text-foreground/75 border border-border rounded-full px-3 py-1">
                  {i}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <footer className="py-12 text-xs text-muted-foreground border-t border-border/70 flex justify-between">
        <span>© Pierre-Alban M. Catogni</span>
        <a href="mailto:pierrealban99@gmail.com" className="hover:text-foreground">Get in touch →</a>
      </footer>
    </div>
  );
}
