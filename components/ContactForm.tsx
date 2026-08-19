"use client";

import { useState, type FormEvent } from "react";
import { CONTACT_EMAIL, t } from "@/lib/content";
import type { Lang } from "@/lib/locale";

export default function ContactForm({ lang }: { lang: Lang }) {
  const copy = t(lang).contactPage;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const subject = encodeURIComponent(`Website contact from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3.5 rounded-card-lg border border-hairline bg-white p-7.5">
      <div className="flex flex-col gap-1.5">
        <label className="text-[13px] font-semibold" htmlFor="contact-name">
          {copy.formName}
        </label>
        <input
          id="contact-name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="rounded-control border border-input-border px-3.5 py-3 text-sm transition-colors duration-200 focus:border-primary focus:outline-none"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="text-[13px] font-semibold" htmlFor="contact-email">
          {copy.formEmail}
        </label>
        <input
          id="contact-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="rounded-control border border-input-border px-3.5 py-3 text-sm transition-colors duration-200 focus:border-primary focus:outline-none"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="text-[13px] font-semibold" htmlFor="contact-message">
          {copy.formMessage}
        </label>
        <textarea
          id="contact-message"
          rows={5}
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="rounded-control border border-input-border px-3.5 py-3 text-sm font-body transition-colors duration-200 focus:border-primary focus:outline-none"
        />
      </div>
      <button
        type="submit"
        className="mt-2 self-start rounded-control bg-[linear-gradient(135deg,#1E93E8,#1668C9)] px-5.5 py-3.5 text-sm font-bold text-white transition-opacity duration-200 hover:opacity-90"
      >
        {sent ? copy.sent : copy.send}
      </button>
    </form>
  );
}
