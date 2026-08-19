"use client";

import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import RequestSidebar from "./RequestSidebar";
import StepProgress from "./StepProgress";
import { CALENDLY_URL, CONTACT_EMAIL, t, useCases } from "@/lib/content";
import type { Lang } from "@/lib/locale";

const inputClass =
  "w-full rounded-control border border-input-border bg-white px-3.5 py-3 text-sm text-ink transition-colors duration-200 focus:border-primary focus:outline-none";
const labelClass = "mb-2 block text-[13px] font-semibold text-ink";

export default function SolutionFlow({
  lang,
  initialSolPicks,
  initialSectorIdx,
}: {
  lang: Lang;
  initialSolPicks: number[];
  initialSectorIdx: number;
}) {
  const router = useRouter();
  const copy = t(lang);
  const s = copy.solution;
  const f = copy.form;

  const [step, setStep] = useState(0);
  const [solPicks, setSolPicks] = useState<number[]>(initialSolPicks);
  const [auditOptIn, setAuditOptIn] = useState(true);
  const [sectorIdx, setSectorIdx] = useState(initialSectorIdx);
  const [challenge, setChallenge] = useState("");
  const [outcome, setOutcome] = useState("");
  const [site, setSite] = useState("");
  const [involved, setInvolved] = useState("");
  const [timeline, setTimeline] = useState(f.timelineOpts[0]);
  const [budget, setBudget] = useState(f.budgetOpts[0]);
  const [org, setOrg] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  function toggleSolPick(i: number) {
    setSolPicks((picks) => (picks.includes(i) ? picks.filter((x) => x !== i) : picks.concat(i)));
  }

  function goBack() {
    if (step === 0) {
      router.push(`/${lang}`);
      return;
    }
    setStep((st) => st - 1);
    window.scrollTo(0, 0);
  }

  function goNext(e: FormEvent) {
    e.preventDefault();
    if (step === 2) {
      const pickedNames = solPicks.map((i) => (lang === "ar" ? useCases[i].ar.title : useCases[i].en.title)).join(", ") || "—";
      const sector = sectorIdx > -1 ? f.sectorChips[sectorIdx] : "—";
      const subject = encodeURIComponent(`Solution brief — ${org}`);
      const body = encodeURIComponent(
        `Organisation: ${org}\nContact name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nSector: ${sector}\nStarting point(s): ${pickedNames}\nFree audit: ${auditOptIn ? "Yes" : "No"}\n\nThe challenge:\n${challenge}\n\nThe outcome wanted:\n${outcome}\n\nSite / spaces: ${site}\nTarget timeline: ${timeline}\nIndicative budget: ${budget}\nWho else is involved: ${involved}`
      );
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
      setStep(3);
      window.scrollTo(0, 0);
      return;
    }
    setStep((st) => Math.min(3, st + 1));
    window.scrollTo(0, 0);
  }

  return (
    <>
      <section className="py-13 text-white" style={{ background: "linear-gradient(135deg,#1B1259 0%,#241C6E 55%,#123A82 100%)" }}>
        <div className="mx-auto max-w-content px-8">
          <p className="mb-2.5 text-xs font-bold uppercase tracking-[0.16em] text-cyan-light">{s.kicker}</p>
          <h1 className="font-display text-[34px] font-bold">{s.title}</h1>
          <p className="mt-3 max-w-[620px] text-base leading-relaxed text-white/75">{s.copy}</p>
        </div>
      </section>

      <section className="pb-22 pt-11">
        <div className="mx-auto grid max-w-content grid-cols-1 gap-11 px-8 lg:grid-cols-[1fr_320px]">
          <div>
            <StepProgress steps={s.steps} currentStep={step} />

            <form onSubmit={goNext} className="mt-8 rounded-card-lg border border-hairline bg-white p-8">
              {step === 0 && (
                <>
                  <div className="mb-7.5 rounded-card border border-blue-hairline bg-panel-blue p-6">
                    <div className="flex flex-wrap items-baseline justify-between gap-3">
                      <h2 className="font-display text-xl font-bold text-ink">{s.picker.title}</h2>
                    </div>
                    <p className="my-2.5 max-w-[560px] text-sm leading-relaxed text-ink-muted">{s.picker.copy}</p>
                    <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                      {useCases.map((u, i) => {
                        const data = lang === "ar" ? u.ar : u.en;
                        const on = solPicks.includes(i);
                        return (
                          <button
                            type="button"
                            key={u.id}
                            onClick={() => toggleSolPick(i)}
                            className={`flex items-start gap-3 rounded-control border p-3.5 text-start ${on ? "border-indigo bg-[#F4F8FE]" : "border-[oklch(92%_0.008_265)] bg-white"}`}
                          >
                            <span
                              className={`flex h-7.5 w-7.5 flex-none items-center justify-center rounded-[8px] font-display text-[13px] font-bold ${on ? "bg-indigo text-white" : "bg-surface text-ink-soft"}`}
                            >
                              {on ? "✓" : "+"}
                            </span>
                            <span className="block">
                              <span className="block text-sm font-bold text-ink">{data.title}</span>
                              <span className="mt-1 block text-xs leading-relaxed text-ink-muted">{data.short}</span>
                            </span>
                          </button>
                        );
                      })}
                    </div>
                    <div className="mt-4.5 border-t border-blue-hairline pt-4">
                      <p className="mb-2.5 text-xs font-bold uppercase tracking-[0.14em] text-primary">{s.picker.selected}</p>
                      {solPicks.length === 0 && <p className="text-[13px] text-ink-muted">{s.picker.none}</p>}
                      <div className="flex flex-wrap gap-2">
                        {solPicks.map((i) => (
                          <button
                            type="button"
                            key={i}
                            onClick={() => toggleSolPick(i)}
                            className="flex items-center gap-2 whitespace-nowrap rounded-full border border-indigo bg-indigo px-3.5 py-2 text-[13px] font-semibold text-white"
                          >
                            {lang === "ar" ? useCases[i].ar.title : useCases[i].en.title} ×
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div
                    className={`mb-7.5 flex flex-wrap items-center justify-between gap-5 rounded-card border p-5 ${auditOptIn ? "border-indigo" : "border-blue-hairline"}`}
                    style={{ background: "linear-gradient(120deg,#F2FBFD,#EEF4FE)" }}
                  >
                    <div className="flex items-center gap-4">
                      <span
                        className="flex h-[62px] w-[62px] flex-none -rotate-[11deg] items-center justify-center rounded-full border-2 border-dashed border-[rgba(11,16,48,0.2)] bg-[linear-gradient(135deg,#25E0EF,#1E93E8)] text-center font-display text-[10px] font-bold leading-[1.15] text-on-gradient"
                      >
                        {copy.audit.sticker}
                      </span>
                      <div>
                        <p className="text-[15px] font-bold text-ink">{copy.audit.optTitle}</p>
                        <p className="mt-1.5 max-w-[520px] text-[13px] leading-relaxed text-ink-muted">{copy.audit.optCopy}</p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => setAuditOptIn((v) => !v)}
                      className={`flex-none whitespace-nowrap rounded-control border px-4.5 py-2.5 text-[13px] font-semibold ${
                        auditOptIn ? "border-indigo bg-indigo text-white" : "border-blue-hairline bg-white text-ink"
                      }`}
                    >
                      {auditOptIn ? copy.audit.optOn : copy.audit.optOff}
                    </button>
                  </div>

                  <h2 className="font-display text-xl font-bold text-ink">{s.s0Title}</h2>
                  <p className="my-2.5 text-sm leading-relaxed text-ink-muted">{s.s0Copy}</p>
                  <div className="flex flex-col gap-5">
                    <div>
                      <label className={labelClass}>{f.sector}</label>
                      <div className="flex flex-wrap gap-2">
                        {f.sectorChips.map((label, i) => {
                          const on = sectorIdx === i;
                          return (
                            <button
                              type="button"
                              key={label}
                              onClick={() => setSectorIdx(i)}
                              className={`whitespace-nowrap rounded-full border px-4 py-2.5 text-[13px] font-semibold ${
                                on ? "border-indigo bg-indigo text-white" : "border-input-border bg-white text-ink-soft"
                              }`}
                            >
                              {label}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                    <div>
                      <label className={labelClass}>{s.l1}</label>
                      <textarea rows={4} placeholder={s.p1} value={challenge} onChange={(e) => setChallenge(e.target.value)} className={`${inputClass} resize-y`} />
                    </div>
                    <div>
                      <label className={labelClass}>{s.l2}</label>
                      <textarea rows={3} placeholder={s.p2} value={outcome} onChange={(e) => setOutcome(e.target.value)} className={`${inputClass} resize-y`} />
                    </div>
                  </div>
                </>
              )}

              {step === 1 && (
                <>
                  <h2 className="font-display text-xl font-bold text-ink">{s.s1Title}</h2>
                  <p className="my-2.5 text-sm leading-relaxed text-ink-muted">{s.s1Copy}</p>
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label className={labelClass}>{s.l3}</label>
                      <input value={site} onChange={(e) => setSite(e.target.value)} placeholder={s.p3} className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass}>{f.timeline}</label>
                      <select value={timeline} onChange={(e) => setTimeline(e.target.value)} className={inputClass}>
                        {f.timelineOpts.map((o) => (
                          <option key={o} value={o}>
                            {o}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className={labelClass}>{f.budget}</label>
                      <select value={budget} onChange={(e) => setBudget(e.target.value)} className={inputClass}>
                        {f.budgetOpts.map((o) => (
                          <option key={o} value={o}>
                            {o}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className={labelClass}>{s.l4}</label>
                      <input value={involved} onChange={(e) => setInvolved(e.target.value)} placeholder={s.p4} className={inputClass} />
                    </div>
                  </div>
                </>
              )}

              {step === 2 && (
                <>
                  <h2 className="font-display text-xl font-bold text-ink">{s.contactTitle}</h2>
                  <p className="my-2.5 text-sm leading-relaxed text-ink-muted">{s.contactCopy}</p>
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label className={labelClass}>{f.org}</label>
                      <input required value={org} onChange={(e) => setOrg(e.target.value)} className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass}>{f.name}</label>
                      <input required value={name} onChange={(e) => setName(e.target.value)} className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass}>{f.email}</label>
                      <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass}>{f.phone}</label>
                      <input value={phone} onChange={(e) => setPhone(e.target.value)} className={inputClass} />
                    </div>
                  </div>
                </>
              )}

              {step === 3 && (
                <div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[linear-gradient(135deg,#25E0EF,#1E93E8)] font-display text-lg font-bold text-on-gradient">
                    ✓
                  </div>
                  <h2 className="mt-5 font-display text-2xl font-bold text-ink">{s.doneTitle}</h2>
                  <p className="mt-3 max-w-[520px] text-[15px] leading-relaxed text-ink-muted">{s.doneCopy}</p>
                  <div className="mt-7 flex flex-col gap-3.5 border-t border-hairline-soft pt-6">
                    {(auditOptIn ? s.next.concat([{ n: "★", title: copy.audit.nextTitle, copy: copy.audit.nextCopy }]) : s.next).map((item) => (
                      <div key={item.title} className="flex gap-3.5">
                        <span className="flex h-6.5 w-6.5 flex-none items-center justify-center rounded-[8px] bg-[linear-gradient(135deg,#CDF3FB,#E6F0FD)] font-display text-xs font-bold text-badge-ink-deep">
                          {item.n}
                        </span>
                        <div>
                          <p className="text-sm font-bold text-ink">{item.title}</p>
                          <p className="mt-1 text-[13px] text-ink-muted">{item.copy}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6.5 flex flex-wrap gap-3">
                    <a
                      href={CALENDLY_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-control bg-[linear-gradient(135deg,#1E93E8,#1668C9)] px-5.5 py-3.5 text-sm font-semibold text-white transition-opacity duration-200 hover:opacity-90"
                    >
                      {f.bookCall}
                    </a>
                    <button
                      type="button"
                      onClick={() => router.push(`/${lang}`)}
                      className="rounded-control border border-input-border bg-white px-5.5 py-3.5 text-sm font-semibold text-ink transition-colors duration-200 hover:border-primary hover:text-primary"
                    >
                      {f.backHome}
                    </button>
                  </div>
                </div>
              )}

              {step < 3 && (
                <div className="mt-7.5 flex items-center justify-between gap-4 border-t border-hairline-soft pt-5.5">
                  <button
                    type="button"
                    onClick={goBack}
                    className="rounded-control border border-input-border bg-white px-5 py-3 text-sm font-semibold text-ink transition-colors duration-200 hover:border-primary hover:text-primary"
                  >
                    {f.back}
                  </button>
                  <button
                    type="submit"
                    className="rounded-control bg-[linear-gradient(135deg,#1E93E8,#1668C9)] px-5.5 py-3 text-sm font-semibold text-white transition-opacity duration-200 hover:opacity-90"
                  >
                    {step === 2 ? s.submitLabel : f.continueLabel}
                  </button>
                </div>
              )}
            </form>
          </div>

          <RequestSidebar lang={lang} items={s.aside} switchLabel={s.switchLabel} switchHref={`/${lang}/request/technology`} />
        </div>
      </section>
    </>
  );
}
