import Link from "next/link";
import { CONTACT_EMAIL, CONTACT_PHONE, t } from "@/lib/content";
import type { Lang } from "@/lib/locale";

export default function RequestSidebar({
  lang,
  items,
  switchLabel,
  switchHref,
}: {
  lang: Lang;
  items: { title: string; copy: string }[];
  switchLabel: string;
  switchHref: string;
}) {
  const copy = t(lang).form;

  return (
    <aside className="h-fit rounded-card-lg border border-hairline bg-surface-soft p-6.5">
      <p className="mb-3.5 text-xs font-bold uppercase tracking-[0.16em] text-primary">{copy.asideTitle}</p>
      <div className="flex flex-col gap-3.5">
        {items.map((item) => (
          <div key={item.title}>
            <p className="text-sm font-bold">{item.title}</p>
            <p className="mt-1 text-[13px] leading-relaxed text-ink-muted">{item.copy}</p>
          </div>
        ))}
      </div>
      <div className="mt-5.5 border-t border-hairline pt-4.5 text-[13px] text-ink-muted">
        <p className="mb-2 font-bold text-ink">{copy.preferTalk}</p>
        <p className="m-0" dir="ltr" style={{ unicodeBidi: "isolate", display: "inline-block" }}>
          {CONTACT_PHONE}
        </p>
        <p className="mt-1" dir="ltr" style={{ unicodeBidi: "isolate", display: "inline-block" }}>
          {CONTACT_EMAIL}
        </p>
      </div>
      <Link
        href={switchHref}
        className="mt-5 block w-full rounded-control border border-input-border bg-white px-4 py-3 text-center text-[13px] font-semibold text-ink transition-colors duration-200 hover:border-primary hover:text-primary"
      >
        {switchLabel}
      </Link>
    </aside>
  );
}
