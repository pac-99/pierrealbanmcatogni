import { useEffect, useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { unlockSite } from "@/lib/gate.functions";

const STORAGE_KEY = "site-unlocked";

export function PasswordGate({ children }: { children: React.ReactNode }) {
  const [unlocked, setUnlocked] = useState(false);
  const [ready, setReady] = useState(false);
  const [error, setError] = useState(false);
  const [pending, setPending] = useState(false);
  const [value, setValue] = useState("");
  const unlock = useServerFn(unlockSite);

  useEffect(() => {
    setUnlocked(window.sessionStorage.getItem(STORAGE_KEY) === "1");
    setReady(true);
  }, []);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setPending(true);
    setError(false);
    try {
      const { ok } = await unlock({ data: { password: value } });
      if (ok) {
        window.sessionStorage.setItem(STORAGE_KEY, "1");
        setUnlocked(true);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setPending(false);
    }
  }

  if (unlocked) return <>{children}</>;

  return (
    <div className="relative">
      <div className="blur-[7px] select-none pointer-events-none" aria-hidden>
        {children}
      </div>

      {ready && (
        <div className="absolute inset-0 z-30 flex items-start justify-center bg-background/40">
          <form
            onSubmit={onSubmit}
            className="sticky top-32 w-full max-w-sm rounded-2xl border border-border bg-background/90 backdrop-blur-xl p-6 shadow-sm"
          >
            <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Protected</p>
            <p className="mt-2 text-[15px] text-foreground/80">Enter the password to view this page.</p>
            <input
              type="password"
              inputMode="numeric"
              autoComplete="current-password"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className="mt-4 w-full rounded-full border border-border bg-transparent px-4 py-2 text-sm outline-none focus:border-foreground/40"
              placeholder="Password"
            />
            {error && <p className="mt-2 text-[13px] text-destructive">Incorrect password</p>}
            <button
              type="submit"
              disabled={pending}
              className="mt-4 w-full rounded-full bg-foreground text-background text-sm py-2 disabled:opacity-60"
            >
              {pending ? "Checking…" : "Enter"}
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
