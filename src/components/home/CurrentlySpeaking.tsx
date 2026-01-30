import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";

interface CurrentlySpeakingProps {
  className?: string;
  onViewTranscript?: () => void;
}

export const CurrentlySpeaking = ({ className, onViewTranscript }: CurrentlySpeakingProps) => {
  return (
    <div className={cn("glass-panel-strong p-4", className)}>
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
            Currently Speaking
          </span>
        </div>
      </div>
      
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-sm font-semibold flex-shrink-0">
          SM
        </div>
        <div className="min-w-0">
          <p className="text-sm font-semibold">Dr. Sarah Mitchell</p>
          <p className="text-xs text-muted-foreground">CEO, GreenTech Ventures</p>
        </div>
      </div>
      
      {/* Fixed 4 lines, no scroll */}
      <p className="text-sm leading-relaxed text-muted-foreground line-clamp-4">
        ...and that's why we believe the transition to renewable energy is not just an environmental imperative, but also an economic opportunity. The companies that adapt now will be the leaders of tomorrow. We've seen a 40% increase in investment in clean technology over the past year alone.
      </p>
      
      {/* View Transcript Button */}
      {onViewTranscript && (
        <button 
          onClick={onViewTranscript}
          className="mt-3 flex items-center gap-1 text-xs text-accent hover:text-accent/80 transition-colors"
        >
          <span>View full transcript</span>
          <ChevronRight className="w-3 h-3" strokeWidth={1.5} />
        </button>
      )}
    </div>
  );
};
