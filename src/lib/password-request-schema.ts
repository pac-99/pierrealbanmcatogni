import { z } from "zod";

export const passwordRequestSchema = z.object({
  email: z.string().trim().toLowerCase().email("Enter a valid email address.").max(255),
  message: z.string().trim().min(1, "Please include a message.").max(2000, "Keep your message under 2,000 characters."),
  website: z.string().max(0, "Unable to submit this request.").default(""),
});