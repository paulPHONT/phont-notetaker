import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import speakerImage from "@/assets/speaker-sarah.jpg";

interface CurrentlySpeakingProps {
  className?: string;
  onViewTranscript?: () => void;
}

export const CurrentlySpeaking = ({ className, onViewTranscript }: CurrentlySpeakingProps) => {
  return (
    <div className={cn("glass-panel-strong p-3 sm:p-4", className)}>
      <div className="flex items-center justify-between mb-2 sm:mb-3">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
            Currently Speaking
          </span>
        </div>
      </div>
      
      <div className="flex items-center gap-3 mb-2 sm:mb-3">
        <img 
          src={speakerImage} 
          alt="Dr. Sarah Mitchell" 
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover flex-shrink-0"
        />
        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold">Dr. Sarah Mitchell</p>
          <p className="text-xs text-muted-foreground">CEO, GreenTech Ventures</p>
        </div>
      </div>
      
      {/* Fixed 3 lines on mobile, 4 on larger */}
      <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground line-clamp-3 sm:line-clamp-4">
        ...and that's why we believe the transition to renewable energy is not just an environmental imperative, but also an economic opportunity. The companies that adapt now will be the leaders of tomorrow.
      </p>
      
      {/* View Transcript Button */}
      {onViewTranscript && (
        <button 
          onClick={onViewTranscript}
          className="mt-2 sm:mt-3 flex items-center gap-1 text-xs text-accent hover:text-accent/80 transition-colors"
        >
          <span>View full transcript</span>
          <ChevronRight className="w-3 h-3" strokeWidth={1.5} />
        </button>
      )}
    </div>
  );
};
