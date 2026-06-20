"use client";

import Link from "next/link";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import {
  submitServiceRequest,
  initialFormState,
} from "@/app/contact/actions";
import { INDUSTRIES, SERVICES, TIMELINES } from "@/lib/contact-schema";
import { Button } from "./ui/Button";
import { cn } from "@/lib/cn";

const inputBase =
  "w-full rounded-xl border border-line-strong bg-paper px-4 py-3 text-sm text-ink placeholder:text-subtle transition-colors focus:border-azure focus:outline-none";

function FieldError({ messages }: { messages?: string[] }) {
  if (!messages?.length) return null;
  return <p className="mt-1.5 text-xs text-amber">{messages[0]}</p>;
}

function Label({
  htmlFor,
  children,
  required,
}: {
  htmlFor?: string;
  children: React.ReactNode;
  required?: boolean;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="mb-1.5 block text-sm font-medium text-ink"
    >
      {children}
      {required && <span className="ml-0.5 text-amber">*</span>}
    </label>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" size="lg" disabled={pending} className="w-full sm:w-auto">
      {pending ? "Submitting…" : "Submit request"}
    </Button>
  );
}

export function ServiceRequestForm() {
  const [state, formAction] = useActionState(
    submitServiceRequest,
    initialFormState,
  );
  const errors = state.errors ?? {};

  if (state.status === "success") {
    return (
      <div className="rounded-2xl border border-teal/30 bg-teal/8 p-8 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-teal/15 text-teal">
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
            <path
              d="m5 13 4 4 10-10"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <p className="mx-auto mt-4 max-w-md text-[1.02rem] leading-relaxed text-ink">
          {state.message}
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-6" noValidate>
      {/* Honeypot — visually hidden, off-screen, not announced */}
      <div className="absolute left-[-9999px]" aria-hidden="true">
        <label htmlFor="website">Leave this field empty</label>
        <input
          id="website"
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {state.status === "error" && state.message && (
        <div className="rounded-xl border border-amber/30 bg-amber/8 px-4 py-3 text-sm text-ink">
          {state.message}
        </div>
      )}

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <Label htmlFor="fullName" required>
            Full name
          </Label>
          <input id="fullName" name="fullName" className={inputBase} autoComplete="name" />
          <FieldError messages={errors.fullName} />
        </div>
        <div>
          <Label htmlFor="company">Company / organization</Label>
          <input
            id="company"
            name="company"
            className={inputBase}
            autoComplete="organization"
          />
          <FieldError messages={errors.company} />
        </div>
        <div>
          <Label htmlFor="workEmail" required>
            Work email
          </Label>
          <input
            id="workEmail"
            name="workEmail"
            type="email"
            className={inputBase}
            autoComplete="email"
          />
          <FieldError messages={errors.workEmail} />
        </div>
        <div>
          <Label htmlFor="phone">Phone</Label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className={inputBase}
            autoComplete="tel"
            placeholder="+43 …"
          />
          <FieldError messages={errors.phone} />
        </div>
      </div>

      <div>
        <Label htmlFor="industry">Industry</Label>
        <select id="industry" name="industry" className={cn(inputBase, "appearance-none")} defaultValue="">
          <option value="">Select an industry…</option>
          {INDUSTRIES.map((i) => (
            <option key={i} value={i}>
              {i}
            </option>
          ))}
        </select>
        <FieldError messages={errors.industry} />
      </div>

      <fieldset>
        <legend className="mb-2.5 text-sm font-medium text-ink">
          Service required <span className="text-amber">*</span>
        </legend>
        <div className="grid gap-2.5 sm:grid-cols-2">
          {SERVICES.map((s) => (
            <label
              key={s}
              className="flex cursor-pointer items-start gap-3 rounded-xl border border-line bg-paper px-4 py-3 text-sm text-ink transition-colors hover:border-line-strong has-checked:border-azure has-checked:bg-azure/5"
            >
              <input
                type="checkbox"
                name="services"
                value={s}
                className="mt-0.5 h-4 w-4 shrink-0 accent-azure"
              />
              <span className="leading-snug">{s}</span>
            </label>
          ))}
        </div>
        <FieldError messages={errors.services} />
      </fieldset>

      <div>
        <Label htmlFor="message" required>
          Requirement / message
        </Label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className={cn(inputBase, "resize-y")}
          placeholder="Describe what you need to defend."
        />
        <FieldError messages={errors.message} />
      </div>

      <div>
        <Label htmlFor="timeline">Preferred timeline</Label>
        <select id="timeline" name="timeline" className={cn(inputBase, "appearance-none")} defaultValue="">
          <option value="">Select a timeline…</option>
          {TIMELINES.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
        <FieldError messages={errors.timeline} />
      </div>

      <div>
        <label className="flex cursor-pointer items-start gap-3 text-sm text-muted">
          <input
            type="checkbox"
            name="consent"
            value="on"
            className="mt-0.5 h-4 w-4 shrink-0 accent-azure"
          />
          <span>
            I agree to the{" "}
            <Link href="/legal/privacy" className="text-azure underline underline-offset-2">
              privacy policy
            </Link>
            . <span className="text-amber">*</span>
          </span>
        </label>
        <FieldError messages={errors.consent} />
      </div>

      <div className="pt-2">
        <SubmitButton />
      </div>
    </form>
  );
}
