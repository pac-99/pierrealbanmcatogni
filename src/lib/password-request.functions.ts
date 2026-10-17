import { createServerFn } from "@tanstack/react-start";
import { passwordRequestSchema } from "./password-request-schema";

export const requestPassword = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => passwordRequestSchema.parse(input))
  .handler(async ({ data }) => {
    // Public insert-only action: validation and the database trigger limit submissions.
    // No visitor can read, update, or delete requests.
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.from("password_requests").insert({
      email: data.email,
      message: data.message,
    });
    if (error) {
      return {
        ok: false as const,
        error: error.code === "P0001"
          ? "Please wait a minute before submitting another request."
          : "Your request couldn't be saved. Please try again.",
      };
    }
    // Owner notification is intentionally not wired until the sender domain is verified.
    return { ok: true as const, emailed: false as const };
  });