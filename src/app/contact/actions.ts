"use server";

import { headers } from "next/headers";
import {
  serviceRequestSchema,
  SERVICES,
  type FieldErrors,
} from "@/lib/contact-schema";

export type FormState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: FieldErrors;
};

export const initialFormState: FormState = { status: "idle" };

// Best-effort in-memory rate limit. In a serverless deployment each instance
// keeps its own window, so back this with a shared store (e.g. Upstash/Redis)
// for production. Spec target: 5 requests/min per IP.
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_PER_WINDOW;
}

export async function submitServiceRequest(
  _prev: FormState,
  formData: FormData,
): Promise<FormState> {
  // Identify the client for rate limiting (behind a proxy/CDN).
  const h = await headers();
  const ip =
    h.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    h.get("x-real-ip") ||
    "unknown";

  if (rateLimited(ip)) {
    return {
      status: "error",
      message: "Too many requests. Please wait a minute and try again.",
    };
  }

  // Honeypot: if the hidden field is filled, silently accept (don't tip off bots).
  if ((formData.get("website") as string)?.length) {
    return {
      status: "success",
      message:
        "Thank you. Your request has reached our team — we treat every enquiry as confidential and will respond shortly.",
    };
  }

  const raw = {
    fullName: (formData.get("fullName") as string) ?? "",
    company: (formData.get("company") as string) ?? "",
    workEmail: (formData.get("workEmail") as string) ?? "",
    phone: (formData.get("phone") as string) ?? "",
    industry: (formData.get("industry") as string) ?? "",
    services: formData
      .getAll("services")
      .map(String)
      .filter((s): s is (typeof SERVICES)[number] =>
        (SERVICES as readonly string[]).includes(s),
      ),
    message: (formData.get("message") as string) ?? "",
    timeline: (formData.get("timeline") as string) ?? "",
    consent: formData.get("consent") === "on" || formData.get("consent") === "true",
    website: (formData.get("website") as string) ?? "",
  };

  const parsed = serviceRequestSchema.safeParse(raw);

  if (!parsed.success) {
    return {
      status: "error",
      message: "Please correct the highlighted fields.",
      errors: parsed.error.flatten().fieldErrors as FieldErrors,
    };
  }

  // At this point the submission is valid. In production:
  //   • persist the request (database), and/or
  //   • email the team (e.g. Resend) at hello@namlameis.com
  //   • never log secrets; treat the payload as confidential.
  // For now we record a minimal server-side note.
  console.info(
    `[service-request] ${parsed.data.fullName} <${parsed.data.workEmail}> · ${parsed.data.services.join(", ")}`,
  );

  return {
    status: "success",
    message:
      "Thank you. Your request has reached our team — we treat every enquiry as confidential and will respond shortly.",
  };
}
