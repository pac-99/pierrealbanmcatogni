import { describe, expect, test } from "bun:test";
import { passwordRequestSchema } from "./password-request-schema";

describe("password requests", () => {
  test("retains the requester's reply address and editable message", () => {
    const result = passwordRequestSchema.parse({ email: "recruiter@example.com", message: "Please send the code to my email." });
    expect(result.email).toBe("recruiter@example.com");
    expect(result.message).toBe("Please send the code to my email.");
  });
  test("rejects invalid requester email addresses", () => {
    expect(passwordRequestSchema.safeParse({ email: "not-an-email", message: "Please send me the password." }).success).toBe(false);
  });
});