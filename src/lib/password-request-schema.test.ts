import { describe, test } from "node:test";
import { strict as assert } from "node:assert";
import { passwordRequestSchema } from "./password-request-schema";

describe("password requests", () => {
  test("retains the requester's reply address and editable message", () => {
    const result = passwordRequestSchema.parse({ email: "recruiter@example.com", message: "Please send the code to my email." });
    assert.equal(result.email, "recruiter@example.com");
    assert.equal(result.message, "Please send the code to my email.");
  });
  test("rejects invalid requester email addresses", () => {
    assert.equal(passwordRequestSchema.safeParse({ email: "not-an-email", message: "Please send me the password." }).success, false);
  });
});