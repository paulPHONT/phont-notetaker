import { cn } from "@/lib/utils";

interface CurrentlySpeakingProps {
  className?: string;
}

export const CurrentlySpeaking = ({ className }: CurrentlySpeakingProps) => {
  const transcriptLines = [
    "...and that's why we believe the transition to renewable energy is not just an environmental imperative,",
    "but also an economic opportunity. The companies that adapt now will be the leaders of tomorrow.",
    "We've seen a 40% increase in investment in clean technology over the past year alone.",
  ];

  return (
    <div className={cn("glass-panel-strong p-4", className)}>
      <div className="flex items-center gap-2 mb-3">
        <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
        <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
          Currently Speaking
        </span>
      </div>
      
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-sm font-semibold">
          DR
        </div>
        <div>
          <p className="text-sm font-semibold">Dr. Sarah Mitchell</p>
          <p className="text-xs text-muted-foreground">CEO, GreenTech Ventures</p>
        </div>
      </div>
      
      <div className="space-y-2 max-h-24 overflow-y-auto scrollbar-thin">
        {transcriptLines.map((line, i) => (
          <p 
            key={i} 
            className={cn(
              "text-sm leading-relaxed",
              i === transcriptLines.length - 1 
                ? "text-foreground" 
                : "text-muted-foreground"
            )}
          >
            {line}
          </p>
        ))}
      </div>
    </div>
  );
};
