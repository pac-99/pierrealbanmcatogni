import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { passwordRequestSchema } from "@/lib/password-request-schema";
import { requestPassword } from "@/lib/password-request.functions";

export function PasswordRequest() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("Hi Pierre-Alban, I'd like to view your CV and projects. Could you please send me the password? Thank you.");
  const [website, setWebsite] = useState("");
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");
  const [saved, setSaved] = useState(false);
  const submitRequest = useServerFn(requestPassword);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const parsed = passwordRequestSchema.safeParse({ email, message, website });
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? "Check your details.");
      return;
    }
    setError("");
    setPending(true);
    try {
      const result = await submitRequest({ data: parsed.data });
      if (result.ok) setSaved(true);
      else setError(result.error);
    } catch {
      setError("Your request couldn't be saved. Please try again.");
    } finally {
      setPending(false);
    }
  }

  return (
    <div className="mt-4">
      <Button type="button" variant="link" aria-expanded={open} aria-controls="password-request-form" onClick={() => setOpen(!open)} className="h-auto w-full whitespace-normal px-0 py-1 text-[12px] font-normal text-muted-foreground hover:text-foreground">
        Request password (if not already provided)
        <ChevronDown className={`shrink-0 transition-transform motion-reduce:transition-none ${open ? "rotate-180" : ""}`} />
      </Button>
      {open && (
        <div id="password-request-form" className="mt-5 border-t border-border/70 pt-5 text-left">
          {saved ? (
            <p role="status" className="text-center text-[13px] leading-relaxed text-muted-foreground">Your request has been saved. Email delivery is not available yet.</p>
          ) : (
            <form onSubmit={onSubmit} className="space-y-4">
              <div>
                <label htmlFor="requester-email" className="text-xs text-muted-foreground">Your email</label>
                <input id="requester-email" type="email" autoComplete="email" required maxLength={255} value={email} onChange={(event) => setEmail(event.target.value)} placeholder="you@example.com" className="mt-2 w-full rounded-xl border border-border/70 bg-background/80 px-3 py-2.5 text-sm outline-none focus:border-foreground/30" />
              </div>
              <div>
                <label htmlFor="request-message" className="text-xs text-muted-foreground">Message</label>
                <textarea id="request-message" required maxLength={2000} rows={5} value={message} onChange={(event) => setMessage(event.target.value)} className="mt-2 w-full resize-y rounded-xl border border-border/70 bg-background/80 px-3 py-2.5 text-sm leading-relaxed outline-none focus:border-foreground/30" />
              </div>
              <div hidden aria-hidden="true"><input name="website" tabIndex={-1} autoComplete="off" value={website} onChange={(event) => setWebsite(event.target.value)} /></div>
              {error && <p role="alert" className="text-[13px] text-muted-foreground">{error}</p>}
              <div className="text-center">
                <Button type="submit" disabled={pending} className="h-10 w-[80%] rounded-full shadow-none font-normal">{pending ? "Submitting…" : "Request password"}</Button>
              </div>
            </form>
          )}
        </div>
      )}
    </div>
  );
}