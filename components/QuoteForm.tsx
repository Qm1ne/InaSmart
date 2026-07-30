"use client";

import { useState, type FormEvent } from "react";
import { CONTACT_EMAIL, quoteProjectTypes, t } from "@/lib/content";
import type { Lang } from "@/lib/locale";

export default function QuoteForm({ lang }: { lang: Lang }) {
  const copy = t(lang).quotePage;
  const [org, setOrg] = useState("");
  const [contactName, setContactName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [projectType, setProjectType] = useState(lang === "ar" ? quoteProjectTypes[0].ar : quoteProjectTypes[0].en);
  const [students, setStudents] = useState("");
  const [budget, setBudget] = useState("");
  const [requirements, setRequirements] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const subject = encodeURIComponent(`Quote request — ${org}`);
    const body = encodeURIComponent(
      `Organisation: ${org}\nContact name: ${contactName}\nEmail: ${email}\nPhone: ${phone}\nProject type: ${projectType}\nStudents: ${students}\nBudget: ${budget}\n\nRequirements:\n${requirements}`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  }

  const inputClass =
    "rounded-control border border-input-border px-3.5 py-3 text-sm transition-colors duration-200 focus:border-primary focus:outline-none";
  const labelClass = "text-[13px] font-semibold";

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 gap-4.5 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label className={labelClass} htmlFor="quote-org">
            {copy.org}
          </label>
          <input id="quote-org" required value={org} onChange={(e) => setOrg(e.target.value)} className={inputClass} />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className={labelClass} htmlFor="quote-contact">
            {copy.contactName}
          </label>
          <input
            id="quote-contact"
            required
            value={contactName}
            onChange={(e) => setContactName(e.target.value)}
            className={inputClass}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className={labelClass} htmlFor="quote-email">
            {copy.email}
          </label>
          <input
            id="quote-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputClass}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className={labelClass} htmlFor="quote-phone">
            {copy.phone}
          </label>
          <input id="quote-phone" value={phone} onChange={(e) => setPhone(e.target.value)} className={inputClass} />
        </div>
        <div className="flex flex-col gap-1.5 sm:col-span-2">
          <label className={labelClass} htmlFor="quote-type">
            {copy.type}
          </label>
          <select
            id="quote-type"
            value={projectType}
            onChange={(e) => setProjectType(e.target.value)}
            className={inputClass}
          >
            {quoteProjectTypes.map((qt) => (
              <option key={qt.en} value={lang === "ar" ? qt.ar : qt.en}>
                {lang === "ar" ? qt.ar : qt.en}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-1.5">
          <label className={labelClass} htmlFor="quote-students">
            {copy.students}
          </label>
          <input id="quote-students" value={students} onChange={(e) => setStudents(e.target.value)} className={inputClass} />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className={labelClass} htmlFor="quote-budget">
            {copy.budget}
          </label>
          <input id="quote-budget" value={budget} onChange={(e) => setBudget(e.target.value)} className={inputClass} />
        </div>
        <div className="flex flex-col gap-1.5 sm:col-span-2">
          <label className={labelClass} htmlFor="quote-requirements">
            {copy.requirements}
          </label>
          <textarea
            id="quote-requirements"
            rows={4}
            value={requirements}
            onChange={(e) => setRequirements(e.target.value)}
            className={`${inputClass} font-body`}
          />
        </div>
      </div>
      <button
        type="submit"
        className="mt-5 rounded-control bg-primary px-6 py-3.5 text-sm font-bold text-white transition-opacity duration-200 hover:opacity-90"
      >
        {copy.submit}
      </button>
    </form>
  );
}
