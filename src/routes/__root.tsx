import { Link, Outlet, createRootRoute } from "@tanstack/react-router";

function Nav() {
  const linkBase =
    "text-[13px] tracking-tight text-foreground/70 hover:text-foreground transition-colors";
  const active = "text-foreground";
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/60">
      <div className="mx-auto max-w-6xl px-6 h-12 flex items-center justify-between">
        <Link to="/" className="text-[13px] font-medium tracking-tight">
          Pierre-Alban M. Catogni
        </Link>
        <nav className="flex items-center gap-7">
          <Link to="/" className={linkBase} activeOptions={{ exact: true }} activeProps={{ className: `${linkBase} ${active}` }}>
            CV
          </Link>
          <Link to="/projects" className={linkBase} activeProps={{ className: `${linkBase} ${active}` }}>
            Projects
          </Link>
        </nav>
      </div>
    </header>
  );
}

export const Route = createRootRoute({
  component: () => (
    <>
      <Nav />
      <main className="pt-12">
        <Outlet />
      </main>
    </>
  ),
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center">
      <Link to="/" className="text-sm underline">Go home</Link>
    </div>
  ),
});
