import { createFileRoute } from "@tanstack/react-router";
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
      "Designed an AI-powered evidence review platform end-to-end, optimizing document analysis and scoring workflows to cut review time and standardize case evaluation across teams.",
      "Partnered with MBA consulting teams to evaluate client business strategy, prioritize growth initiatives, and develop recommendations to optimize market positioning.",
    ],
  },
  {
    company: "Pepeuf",
    location: "Lausanne, Switzerland",
    title: "Sales and Operations Manager",
    period: "Aug. 2024 — Dec. 2024",
    bullets: [
      "Led B2B sales and partnership development initiatives supporting UK/US expansion, managing relationships with local and international vendors, suppliers, and business partners.",
      "Negotiated and coordinated supplier/vendor partnerships to strengthen operational capacity and support cross-border market entry, directly contributing to 30% international expansion.",
      "Built a 0→1 internal financial compliance and reporting framework integrating accounting data streams, reducing reconciliation errors and improving reporting reliability.",
      "Developed financial models and Excel dashboards to evaluate revenue opportunities, prioritize growth initiatives, and guide resource allocation.",
    ],
  },
  {
    company: "Unicity International",
    location: "Dubai, UAE",
    title: "Operations Consultant Intern",
    period: "Jun. 2024 — Aug. 2024",
    bullets: [
      "Supported strategic partnerships and supplier negotiations across MENA, contributing to stakeholder discussions with manufacturers, vendors, and retail partners.",
      "Conducted market and distribution analysis to identify operational efficiencies and expansion opportunities across regional channels.",
      "Completed compliance and performance audits across MENA, ensuring adherence to corporate financial and regulatory standards across multi-country operations, managing risk mitigation at scale.",
      "Optimized vendor partnership and retail location strategy to enhance supply chain efficiency and market coverage.",
    ],
  },
  {
    company: "Built Brands",
    location: "American Fork, UT",
    title: "Business Operations Intern",
    period: "Mar. 2024 — Apr. 2024",
    bullets: [
      "Mapped and optimized procurement, inventory, and fulfillment workflows, reducing delivery cycle time by 15%.",
      "Collaborated with product and operations teams to evaluate product-market fit and identify key customer segments, informing go-to-market strategy for new customer acquisition.",
      "Improved internal documentation and vendor communication processes to increase operational consistency and accuracy.",
    ],
  },
  {
    company: "Ensign College",
    location: "Salt Lake City, UT",
    title: "Enrollment Coordinator",
    period: "May 2023 — Dec. 2023",
    bullets: [
      "Led a 15-person team supporting high-volume international enrollment operations, reinforcing performance standards and collaborative workflows to improve service quality and execution consistency.",
      "Redesigned international student onboarding and case-management processes, reducing processing time by 20% and improving operational efficiency across workflows.",
      "Managed complex stakeholder relationships across students, academic departments, international services, and external partners to resolve time-sensitive operational cases.",
    ],
  },
  {
    company: "Voiss AG & Corris AG",
    location: "Lausanne, Switzerland",
    title: "Fundraising Project Coordinator",
    period: "Aug. 2022 — Apr. 2023",
    bullets: [
      "Ranked Top 5 nationally among 140+ fundraisers by leveraging relationship-building, persuasive communication, and data-driven outreach.",
      "Negotiated donor commitments and managed high-volume stakeholder interactions across customer segments.",
      "Led and coached a 10-person team using Scrum methodology to improve outreach quality and conversion performance.",
    ],
  },
  {
    company: "Church of Jesus Christ of Latter-day Saints",
    location: "UK · New Zealand · Germany · Switzerland",
    title: "Full-Time Volunteer Representative",
    period: "Mar. 2019 — Jun. 2021",
    bullets: [
      "Led cross-cultural teams of 30+ volunteers, developing and executing outreach strategies that increased engagement by 250% within three months through data-driven planning and KPI tracking.",
      "Managed community development initiatives in partnership with local NGOs and government organizations, coordinating diverse stakeholders to ensure successful project execution.",
      "Trained and mentored 5 volunteers in strategic communication, stakeholder engagement, and leadership principles.",
    ],
  },
];

const competencies = [
  {
    label: "Strategy & Operations",
    items: ["Strategy Frameworks", "Market Sizing & Benchmarking", "Business Development", "Go-to-Market Strategy", "Agile / Scrum", "Competitive Strategy", "Corporate Strategy", "Agentic AI Systems", "Vibe Coding"],
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
          <div className="mt-10 flex flex-col sm:flex-row sm:flex-wrap gap-x-8 gap-y-2 text-sm text-muted-foreground">
            <span>Provo, UT</span>
            <a href="mailto:pierrealban99@gmail.com" className="underline underline-offset-4 hover:text-foreground transition-colors">pierrealban99@gmail.com</a>
            <a href="tel:+13852195806" className="hover:text-foreground transition-colors">+1 385 219 5806</a>
            <a href="https://www.linkedin.com/in/pierre-alban-catogni-688603220" target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:text-foreground transition-colors">linkedin.com/in/pierre-alban-catogni</a>
          </div>
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
