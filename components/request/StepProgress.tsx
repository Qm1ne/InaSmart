export default function StepProgress({ steps, currentStep }: { steps: string[]; currentStep: number }) {
  return (
    <div className="flex gap-2">
      {steps.map((label, i) => {
        const reached = i <= currentStep;
        return (
          <div key={label} className="flex-1">
            <div
              className={`h-1 rounded-full ${reached ? "bg-[linear-gradient(90deg,#25E0EF,#1E93E8)]" : "bg-hairline"}`}
            />
            <p className={`mt-2.5 text-xs font-semibold ${reached ? "text-ink" : "text-[oklch(60%_0.012_265)]"}`}>{label}</p>
          </div>
        );
      })}
    </div>
  );
}
