export default function PlaceholderPhoto({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div
      className={`flex items-center justify-center font-mono text-[11px] text-badge-ink-deep ${className}`}
      style={{
        background: "repeating-linear-gradient(45deg, #E4F7FC, #E4F7FC 10px, #F2FBFD 10px, #F2FBFD 20px)",
      }}
    >
      {label}
    </div>
  );
}
