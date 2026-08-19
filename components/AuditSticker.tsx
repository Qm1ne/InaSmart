export default function AuditSticker({ label, size = 118, className = "" }: { label: string; size?: number; className?: string }) {
  return (
    <div
      className={`flex flex-none -rotate-[11deg] items-center justify-center rounded-full border-2 border-dashed border-[rgba(11,16,48,0.25)] bg-[linear-gradient(135deg,#25E0EF,#1E93E8)] shadow-[0_18px_34px_-18px_rgba(0,0,0,0.55)] ${className}`}
      style={{ height: size, width: size }}
    >
      <span
        className="text-center font-display font-bold leading-[1.15] text-on-gradient"
        style={{ maxWidth: size * 0.73, fontSize: Math.round(size * 0.145) }}
      >
        {label}
      </span>
    </div>
  );
}
