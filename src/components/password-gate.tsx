import { useEffect, useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { unlockSite } from "@/lib/gate.functions";
import { Button } from "@/components/ui/button";
import { PasswordRequest } from "@/components/password-request";

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
      <div className="blur-[10px] opacity-45 select-none pointer-events-none" aria-hidden>
        {children}
      </div>

      {ready && (
        <div className="absolute inset-0 z-30 flex items-start justify-center px-6">
          <div className="w-full max-w-xs mt-40 md:mt-56 text-center">
          <form onSubmit={onSubmit}>
            <p className="text-[15px] leading-relaxed text-foreground/70">
              Enter the password to continue.
            </p>
            <input
              type="password"
              inputMode="numeric"
              autoComplete="current-password"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className="mt-6 w-full rounded-full border border-border/70 bg-transparent px-4 py-2.5 text-sm text-center tracking-[0.2em] outline-none transition-colors placeholder:tracking-normal placeholder:text-muted-foreground/60 focus:border-foreground/25"
              placeholder="Password"
              aria-label="Password"
            />
            <div className="h-4 mt-1">
              {error && <p className="text-[13px] text-muted-foreground">Incorrect password</p>}
            </div>
            <Button
              type="submit"
              disabled={pending}
              className="mt-2 h-10 w-[80%] rounded-full text-sm shadow-none font-normal"
            >
              {pending ? "Checking…" : "Enter"}
            </Button>
          </form>
          <PasswordRequest />
          </div>
        </div>
      )}
    </div>
  );
}
