import { createFileRoute } from "@tanstack/react-router";

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
    tags: ["Product Design", "Agentic AI", "Workflows", "Vibe Coding"],
  },
  {
    index: "02",
    title: "EU–DRC Cobalt Supply Chain",
    status: "Strategic research paper",
    summary:
      "Authored a research paper analyzing financial, ethical, and compliance challenges in the EU–DRC cobalt supply chain and global trade flows.",
    tags: ["Research", "Geopolitics", "Compliance"],
  },
  {
    index: "03",
    title: "AI-Powered Sports Platform",
    status: "Prototype · Go-to-market",
    summary:
      "Built prototypes and a go-to-market strategy for an AI-powered sports platform, including user-flow mapping and business model design.",
    tags: ["0→1", "Prototyping", "GTM"],
  },
  {
    index: "04",
    title:
      "Trade, Technology, and Power Dynamics: A Data Analysis of Macroeconomic Parallels Across the 1920s and 2020s",
    status: "Passion project · In progress",
    summary:
      "Builds a macroeconomic research and data visualization project testing Christine Lagarde's claim at Davos that the 2020s structurally mirror the 1920s across trade fragmentation, productivity booms, debt, inequality, and geopolitical shifts.",
    tags: ["Data Analysis", "Macroeconomics", "SQL", "Tableau", "Python"],
  },
  {
    index: "05",
    title: "Investor Portal for a Swiss International School Portfolio",
    status: "Capital Engagement",
    summary:
      "Designed and developed a web-based investor portal presenting a private international school group in Switzerland. The platform showcases all assets—both business and real estate—with a structured, analytical approach to highlight investment opportunities, financial performance, and strategic value for prospective investors.",
    tags: ["Web Design", "Investor Relations", "Storytelling", "Vibe Coding", "Stakeholder Engagement"],
  },
];

function Projects() {
  return (
    <div className="mx-auto max-w-6xl px-6">
      <section className="pt-24 pb-16 md:pt-36 md:pb-24">
        <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground mb-6">Selected Work</p>
        <h1 className="display text-[14vw] md:text-[88px] leading-[0.95]">
          Projects
        </h1>
      </section>

      <div className="border-t border-border/70">
        {projects.map((p) => (
          <article
            key={p.index}
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
          </article>
        ))}
      </div>

      <footer className="py-12 text-xs text-muted-foreground flex justify-between">
        <span>© Pierre-Alban M. Catogni</span>
        <a href="mailto:pierrealban99@gmail.com" className="hover:text-foreground">Get in touch →</a>
      </footer>
    </div>
  );
}
