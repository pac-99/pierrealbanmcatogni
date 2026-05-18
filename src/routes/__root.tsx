import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

import appCss from "../styles.css?url";

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Pierre-Alban M. Catogni" },
      { name: "description", content: "CV and selected projects of Pierre-Alban M. Catogni." },
      { property: "og:title", content: "Pierre-Alban M. Catogni" },
      { name: "twitter:title", content: "Pierre-Alban M. Catogni" },
      { property: "og:description", content: "CV and selected projects of Pierre-Alban M. Catogni." },
      { name: "twitter:description", content: "CV and selected projects of Pierre-Alban M. Catogni." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/msWxEt2UsFUGq4riCaIq0GrA1Q43/social-images/social-1779115677948-IMG_5792.webp" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/msWxEt2UsFUGq4riCaIq0GrA1Q43/social-images/social-1779115677948-IMG_5792.webp" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center">
      <Link to="/" className="text-sm underline">Go home</Link>
    </div>
  ),
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function ThemeToggle() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const stored = typeof localStorage !== "undefined" ? localStorage.getItem("theme") : null;
    const prefers = typeof window !== "undefined" && window.matchMedia?.("(prefers-color-scheme: dark)").matches;
    const isDark = stored ? stored === "dark" : !!prefers;
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);
  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try { localStorage.setItem("theme", next ? "dark" : "light"); } catch {}
  };
  return (
    <button
      onClick={toggle}
      aria-label="Toggle dark mode"
      className="text-foreground/50 hover:text-foreground transition-colors"
    >
      {dark ? <Sun className="h-3.5 w-3.5" /> : <Moon className="h-3.5 w-3.5" />}
    </button>
  );
}

function Nav() {
  const base = "text-[13px] tracking-tight text-foreground/60 hover:text-foreground transition-colors";
  const active = "text-foreground";
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/75 border-b border-border/60">
      <div className="mx-auto max-w-6xl px-6 h-12 flex items-center justify-between">
        <Link to="/" className="text-[13px] font-medium tracking-tight">
          Pierre-Alban M. Catogni
        </Link>
        <nav className="flex items-center gap-7">
          <Link to="/" className={base} activeOptions={{ exact: true }} activeProps={{ className: `${base} ${active}` }}>CV</Link>
          <Link to="/projects" className={base} activeProps={{ className: `${base} ${active}` }}>Projects</Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Nav />
      <main className="pt-12">
        <Outlet />
      </main>
    </QueryClientProvider>
  );
}
