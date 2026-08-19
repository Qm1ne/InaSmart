"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMemo, useState, type FormEvent } from "react";
import RequestSidebar from "./RequestSidebar";
import StepProgress from "./StepProgress";
import { CALENDLY_URL, CONTACT_EMAIL, flattenProducts, t } from "@/lib/content";
import type { Lang } from "@/lib/locale";

const inputClass =
  "w-full rounded-control border border-input-border bg-white px-3.5 py-3 text-sm text-ink transition-colors duration-200 focus:border-primary focus:outline-none";
const labelClass = "mb-2 block text-[13px] font-semibold text-ink";

export default function TechnologyFlow({ lang, initialProductIds = [] }: { lang: Lang; initialProductIds?: string[] }) {
  const router = useRouter();
  const copy = t(lang);
  const tc = copy.technology;
  const f = copy.form;

  const catalogue = useMemo(() => flattenProducts(lang), [lang]);

  const [step, setStep] = useState(0);
  const [picks, setPicks] = useState<number[]>(() =>
    initialProductIds.map((id) => catalogue.findIndex((c) => c.id === id)).filter((i) => i > -1)
  );
  const [pickQuery, setPickQuery] = useState("");
  const [spec, setSpec] = useState("");
  const [constraints, setConstraints] = useState("");
  const [quantity, setQuantity] = useState("");
  const [delivery, setDelivery] = useState("");
  const [timeline, setTimeline] = useState(f.timelineOpts[0]);
  const [budget, setBudget] = useState(f.budgetOpts[0]);
  const [org, setOrg] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const results = catalogue
    .map((item, i) => ({ item, i }))
    .filter(({ item }) => {
      const q = pickQuery.trim().toLowerCase();
      return !q || (item.sub + " " + item.category).toLowerCase().includes(q);
    })
    .slice(0, 6);

  function togglePick(i: number) {
    setPicks((p) => (p.includes(i) ? p.filter((x) => x !== i) : p.concat(i)));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const pickedNames = picks.map((i) => catalogue[i]?.sub).join(", ") || "—";
    const subject = encodeURIComponent(`Technology request — ${org}`);
    const body = encodeURIComponent(
      `Organisation: ${org}\nContact name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nFrom catalogue: ${pickedNames}\n\nSpecific requirement:\n${spec}\n\nStandards or constraints:\n${constraints}\n\nQuantity / volumes: ${quantity}\nDelivery location: ${delivery}\nTarget timeline: ${timeline}\nIndicative budget: ${budget}`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setStep(1);
    window.scrollTo(0, 0);
  }

  return (
    <>
      <section className="py-13 text-white" style={{ background: "linear-gradient(135deg,#1B1259 0%,#241C6E 55%,#123A82 100%)" }}>
        <div className="mx-auto max-w-content px-8">
          <p className="mb-2.5 text-xs font-bold uppercase tracking-[0.16em] text-cyan-light">{tc.kicker}</p>
          <h1 className="font-display text-[34px] font-bold">{tc.title}</h1>
          <p className="mt-3 max-w-[620px] text-base leading-relaxed text-white/75">{tc.copy}</p>
        </div>
      </section>

      <section className="pb-22 pt-11">
        <div className="mx-auto grid max-w-content grid-cols-1 gap-11 px-8 lg:grid-cols-[1fr_320px]">
          <div>
            <StepProgress steps={tc.steps} currentStep={step} />

            <form onSubmit={handleSubmit} className="mt-8 rounded-card-lg border border-hairline bg-white p-8">
              {step === 0 && (
                <>
                  <div className="rounded-card border border-blue-hairline bg-panel-blue p-6">
                    <div className="flex flex-wrap items-baseline justify-between gap-3">
                      <h2 className="font-display text-xl font-bold text-ink">{tc.picker.title}</h2>
                      <Link href={`/${lang}/products`} className="text-[13px] font-semibold text-primary">
                        {tc.picker.browse}
                      </Link>
                    </div>
                    <p className="my-2.5 max-w-[560px] text-sm leading-relaxed text-ink-muted">{tc.picker.copy}</p>
                    <input
                      value={pickQuery}
                      onChange={(e) => setPickQuery(e.target.value)}
                      placeholder={tc.picker.search}
                      className={inputClass}
                    />
                    <div className="mt-3.5 flex flex-col gap-2">
                      {results.map(({ item, i }) => {
                        const on = picks.includes(i);
                        return (
                          <div key={item.sub} className="flex items-center justify-between gap-3.5 rounded-control border border-[oklch(92%_0.008_265)] bg-white p-3">
                            <div className="flex min-w-0 items-center gap-3">
                              <span className="relative block h-8.5 w-8.5 flex-none overflow-hidden rounded-[8px] bg-surface-soft">
                                <Image src={item.image} alt="" fill sizes="34px" className="object-cover" />
                              </span>
                              <div className="min-w-0">
                                <p className="text-sm font-bold text-ink">{item.sub}</p>
                                <p className="mt-0.5 text-xs text-ink-muted">{item.category}</p>
                              </div>
                            </div>
                            <button
                              type="button"
                              onClick={() => togglePick(i)}
                              className={`flex-none whitespace-nowrap rounded-[8px] border px-3.5 py-2 text-[13px] font-semibold ${
                                on ? "border-indigo bg-indigo text-white" : "border-input-border bg-white text-ink"
                              }`}
                            >
                              {on ? tc.picker.added : tc.picker.add}
                            </button>
                          </div>
                        );
                      })}
                    </div>
                    <div className="mt-4.5 border-t border-blue-hairline pt-4">
                      <p className="mb-2.5 text-xs font-bold uppercase tracking-[0.14em] text-primary">{tc.picker.selected}</p>
                      {picks.length === 0 && <p className="text-[13px] text-ink-muted">{tc.picker.none}</p>}
                      <div className="flex flex-wrap gap-2">
                        {picks.map((i) => (
                          <button
                            type="button"
                            key={i}
                            onClick={() => togglePick(i)}
                            className="flex items-center gap-2 whitespace-nowrap rounded-full border border-indigo bg-indigo px-3.5 py-2 text-[13px] font-semibold text-white"
                          >
                            {catalogue[i]?.sub} ×
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <h2 className="mt-7.5 font-display text-xl font-bold text-ink">{tc.specificTitle}</h2>
                  <p className="my-2.5 max-w-[560px] text-sm leading-relaxed text-ink-muted">{tc.specificCopy}</p>
                  <div className="flex flex-col gap-4.5">
                    <textarea rows={3} placeholder={tc.p1} value={spec} onChange={(e) => setSpec(e.target.value)} className={`${inputClass} resize-y`} />
                    <div>
                      <label className={labelClass}>{tc.l2}</label>
                      <input value={constraints} onChange={(e) => setConstraints(e.target.value)} placeholder={tc.p2} className={inputClass} />
                    </div>
                  </div>

                  <h2 className="mb-4.5 mt-7.5 font-display text-xl font-bold text-ink">{tc.commercialsTitle}</h2>
                  <div className="grid grid-cols-1 gap-4.5 sm:grid-cols-2">
                    <div>
                      <label className={labelClass}>{tc.l3}</label>
                      <input value={quantity} onChange={(e) => setQuantity(e.target.value)} placeholder={tc.p3} className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass}>{tc.l4}</label>
                      <input value={delivery} onChange={(e) => setDelivery(e.target.value)} placeholder={tc.p4} className={inputClass} />
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
                  </div>

                  <h2 className="mb-4.5 mt-7.5 font-display text-xl font-bold text-ink">{tc.contactTitle}</h2>
                  <div className="grid grid-cols-1 gap-4.5 sm:grid-cols-2">
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

                  <div className="mt-7.5 flex items-center justify-between gap-4 border-t border-hairline-soft pt-5.5">
                    <button
                      type="button"
                      onClick={() => router.push(`/${lang}`)}
                      className="rounded-control border border-input-border bg-white px-5 py-3 text-sm font-semibold text-ink transition-colors duration-200 hover:border-primary hover:text-primary"
                    >
                      {f.back}
                    </button>
                    <button
                      type="submit"
                      className="rounded-control bg-[linear-gradient(135deg,#1E93E8,#1668C9)] px-5.5 py-3 text-sm font-semibold text-white transition-opacity duration-200 hover:opacity-90"
                    >
                      {tc.submitLabel}
                    </button>
                  </div>
                </>
              )}

              {step === 1 && (
                <div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[linear-gradient(135deg,#25E0EF,#1E93E8)] font-display text-lg font-bold text-on-gradient">
                    ✓
                  </div>
                  <h2 className="mt-5 font-display text-2xl font-bold text-ink">{tc.doneTitle}</h2>
                  <p className="mt-3 max-w-[520px] text-[15px] leading-relaxed text-ink-muted">{tc.doneCopy}</p>
                  <div className="mt-7 flex flex-col gap-3.5 border-t border-hairline-soft pt-6">
                    {tc.next.map((item) => (
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
            </form>
          </div>

          <RequestSidebar lang={lang} items={tc.aside} switchLabel={tc.switchLabel} switchHref={`/${lang}/request/solution`} />
        </div>
      </section>
    </>
  );
}
