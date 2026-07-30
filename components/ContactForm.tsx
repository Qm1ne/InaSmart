"use client";

import { useState, type FormEvent } from "react";
import { CONTACT_EMAIL, t } from "@/lib/content";
import type { Lang } from "@/lib/locale";

export default function ContactForm({ lang }: { lang: Lang }) {
  const copy = t(lang).contactPage;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const subject = encodeURIComponent(`Website contact from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
      <div className="flex flex-col gap-1.5">
        <label className="text-[13px] font-semibold" htmlFor="contact-name">
          {copy.formName}
        </label>
        <input
          id="contact-name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="rounded-control border border-input-border px-3.5 py-3 text-sm"
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
          className="rounded-control border border-input-border px-3.5 py-3 text-sm"
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
          className="rounded-control border border-input-border px-3.5 py-3 text-sm font-body"
        />
      </div>
      <button
        type="submit"
        className="mt-2 self-start rounded-control bg-primary px-5.5 py-3.5 text-sm font-bold text-white"
      >
        {copy.send}
      </button>
    </form>
  );
}
