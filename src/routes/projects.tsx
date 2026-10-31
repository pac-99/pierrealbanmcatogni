import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/reveal";
import { PasswordGate } from "@/components/password-gate";

export const Route = createFileRoute("/projects")({
  component: Projects,
  head: () => ({
    meta: [
      { title: "Projects — Pierre-Alban M. Catogni" },
      { name: "description", content: "Selected projects in strategy, product, and AI." },
    ],
  }),
});

type Project = {
  index: string;
  title: string;
  status: string;
  summary: string;
  tags: string[];
};

const projects: Project[] = [
  {
    index: "01",
    title: "AI-Powered Evidence Review Platform",
    status: "Cougar Strategy Group",
    summary:
      "Designed end-to-end an AI platform that optimizes document analysis and scoring workflows, cutting review time and standardizing case evaluation across teams.",
    tags: ["Product Design", "Agentic AI", "Workflows", "AI-Assisted Development"],
  },
  {
    index: "02",
    title: "PERSPECTIVE — Underreported Geopolitical Insights",
    status: "Personal project · Prototype",
    summary:
      "Developed a geopolitical intelligence platform using Claude to build a more critical and comprehensive understanding of global issues, particularly those overlooked in mainstream international coverage. Brings together local, international, and scholarly perspectives through AI agents that source and synthesize reporting, highlight key journalists and research, and surface underrepresented voices. Combines an interactive world map, country-level intelligence tabs, and an interactive library of curated articles and research to help users explore geopolitical trends, monitor developments, and understand shifting global dynamics.",
    tags: ["Product Development", "Agentic AI", "Information Architecture", "Data Visualization", "Workflow Automation"],
  },
  {
    index: "03",
    title: "Investor Portal for a Swiss International School Portfolio",
    status: "Capital Engagement",
    summary:
      "Designed and developed a web-based investor portal presenting a private international school group in Switzerland. The platform showcases all assets—both business and real estate—with a structured, analytical approach to highlight investment opportunities, financial performance, and strategic value for prospective investors.",
    tags: ["Web Design", "Investor Relations", "Storytelling", "AI-Assisted Development", "Stakeholder Engagement"],
  },
  {
    index: "04",
    title: "AI Job Search Agent",
    status: "Personal project · In progress",
    summary:
      "Building an agentic AI system that identifies and scores relevant opportunities, generates tailored application recommendations, and maintains a live opportunity tracker to support structured job search execution.",
    tags: ["AI Workflow Automation", "Product Design", "Automation", "AI-Assisted Development"],
  },
  {
    index: "05",
    title: "AI-Powered Sports Platform",
    status: "Prototype · Go-to-market",
    summary:
      "Built prototypes and a go-to-market strategy for an AI-powered sports platform, including user-flow mapping and business model design.",
    tags: ["0→1", "Prototyping", "GTM"],
  },
  {
    index: "06",
    title:
      "Trade, Technology, and Power Dynamics: A Data Analysis of Macroeconomic Parallels Across the 1920s and 2020s",
    status: "Passion project · In progress",
    summary:
      "Building a macroeconomic research and data visualization project testing Christine Lagarde's claim at Davos that the 2020s structurally mirror the 1920s across trade fragmentation, productivity booms, debt, inequality, and geopolitical shifts.",
    tags: ["Data Analysis", "Macroeconomics", "SQL", "Tableau", "Python"],
  },
  {
    index: "07",
    title: "FOUDE — Family Recipe & Meal Planning App",
    status: "Family project · Product concept",
    summary:
      "Developed a family recipe app that gives everyone a shared place to preserve family recipes and organize meals together. Members can contribute their own recipes and help decide what gets cooked at upcoming family gatherings, with meal planning and shopping lists all managed in one place. The generational family cookbook, alive.",
    tags: ["Product Development", "UX/UI Design", "Prototyping", "Product Testing"],
  },
  {
    index: "08",
    title: "EU–DRC Cobalt Supply Chain",
    status: "Research paper",
    summary:
      "Authored a research paper analyzing financial, ethical, and compliance challenges in the EU–DRC cobalt supply chain and global trade flows.",
    tags: ["Research", "Geopolitics", "Compliance"],
  },
];

function Projects() {
  return (
    <div className="mx-auto max-w-6xl px-6">
      <Reveal as="section" className="pt-24 pb-16 md:pt-36 md:pb-24">
        <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground mb-6">Selected Work</p>
        <h1 className="display text-[14vw] md:text-[88px] leading-[0.95]">
          Projects
        </h1>
      </Reveal>

      <PasswordGate>
      <div className="border-t border-border/70">
        {projects.map((p, idx) => (
          <Reveal
            as="article"
            key={p.index}
            delay={idx * 90}
            className="group grid grid-cols-12 gap-6 py-14 border-b border-border/70"
          >
            <div className="col-span-12 md:col-span-2">
              <span className="text-xs tabular-nums text-muted-foreground">{p.index}</span>
            </div>
            <div className="col-span-12 md:col-span-7">
              <h2 className="text-2xl md:text-3xl tracking-tight font-medium leading-tight">
                {p.title}
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-foreground/75 max-w-xl">
                {p.summary}
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <li
                    key={t}
                    className="text-[12px] text-foreground/70 border border-border rounded-full px-3 py-1"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-12 md:col-span-3 md:text-right">
              <p className="text-xs text-muted-foreground">{p.status}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <footer className="py-12 text-xs text-muted-foreground flex justify-between">
        <span>© Pierre-Alban M. Catogni</span>
        <a href="mailto:pierrealban99@gmail.com" className="hover:text-foreground">Get in touch →</a>
      </footer>
      </PasswordGate>
    </div>
  );
}
