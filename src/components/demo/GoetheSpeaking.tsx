import { cn } from "@/lib/utils";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

interface GoetheSpeakingProps {
  className?: string;
  onViewTranscript?: () => void;
}

export const GoetheSpeaking = ({ className, onViewTranscript }: GoetheSpeakingProps) => {
  return (
    <div className={cn("glass-panel rounded-2xl p-4", className)}>
      {/* Status indicator */}
      <div className="flex items-center gap-2 mb-3">
        <div className="flex items-center gap-1.5">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-xs text-muted-foreground uppercase tracking-wider font-medium">Pitching Now</span>
        </div>
      </div>

      {/* Speaker info */}
      <div className="flex items-start gap-3">
        <Avatar className="h-12 w-12 rounded-xl ring-2 ring-emerald-500/30">
          <AvatarImage src="/placeholder.svg" alt="NUNOS Team" className="object-cover" />
          <AvatarFallback className="rounded-xl bg-emerald-500/20 text-emerald-400">NU</AvatarFallback>
        </Avatar>
        
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-foreground text-base leading-tight">Team NUNOS</h3>
          <p className="text-sm text-muted-foreground truncate">
            Grünes Düngemittel aus Rindergülle
          </p>
          
          {/* Quote preview */}
          <div className="mt-2 p-2.5 rounded-lg bg-muted/30 border-l-2 border-emerald-500/50">
            <p className="text-xs text-muted-foreground italic leading-relaxed line-clamp-2">
              "Unsere Raumfahrttechnologie verwandelt Rindergülle in hochwertigen, grünen Dünger – für nachhaltige Landwirtschaft und regionale Nährstoffkreisläufe."
            </p>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-2 mt-3 pt-3 border-t border-border/50">
        <Button 
          variant="ghost" 
          size="sm" 
          className="flex-1 h-8 text-xs gap-1.5"
          onClick={onViewTranscript}
        >
          <FileText className="w-3.5 h-3.5" />
          Live-Transkript
        </Button>
        <div className="text-xs text-muted-foreground/70">
          SDG 12, 13, 15
        </div>
      </div>
    </div>
  );
};