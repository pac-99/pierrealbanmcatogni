import { createServerFn } from "@tanstack/react-start";
import { createHash, timingSafeEqual } from "node:crypto";

export const unlockSite = createServerFn({ method: "POST" })
  .inputValidator((data: { password: string }) => data)
  .handler(async ({ data }) => {
    const expected = process.env["SITE_PASSWORD"];
    if (!expected) return { ok: false as const };
    const a = createHash("sha256").update(String(data.password), "utf8").digest();
    const b = createHash("sha256").update(expected, "utf8").digest();
    return { ok: timingSafeEqual(a, b) };
  });
