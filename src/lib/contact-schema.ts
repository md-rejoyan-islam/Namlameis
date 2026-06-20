import { z } from "zod";

export const INDUSTRIES = [
  "FinTech",
  "Government & Defense",
  "Critical Infrastructure",
  "Technology",
  "Other",
] as const;

export const SERVICES = [
  "AI-Powered Cybersecurity",
  "Vulnerability Discovery & Offensive Security",
  "Threat Detection & Response",
  "Reputation & Narrative Defense",
  "Data Security",
] as const;

export const TIMELINES = ["Urgent", "1–3 months", "Exploring"] as const;

// Server-side validation schema for the service-request form (Zod v4).
export const serviceRequestSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Please enter your full name.")
    .max(120, "That name is too long."),
  company: z.string().trim().max(160).optional(),
  workEmail: z
    .email("Please enter a valid work email address.")
    .max(200, "That email is too long."),
  phone: z.string().trim().max(40).optional(),
  industry: z.enum(INDUSTRIES).optional().or(z.literal("")),
  services: z
    .array(z.enum(SERVICES))
    .min(1, "Please select at least one service."),
  message: z
    .string()
    .trim()
    .min(10, "Please describe what you need to defend (at least 10 characters).")
    .max(5000, "That message is too long."),
  timeline: z.enum(TIMELINES).optional().or(z.literal("")),
  consent: z
    .boolean()
    .refine((v) => v === true, "You must agree to the privacy policy."),
  // Honeypot: must stay empty. Bots tend to fill every field.
  website: z.string().max(0).optional(),
});

export type ServiceRequestInput = z.infer<typeof serviceRequestSchema>;
export type FieldErrors = Partial<
  Record<keyof ServiceRequestInput, string[]>
>;
