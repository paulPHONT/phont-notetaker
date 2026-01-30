import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureTileProps {
  icon: LucideIcon;
  label: string;
  description: string;
  onClick: () => void;
  delay?: number;
}

export const FeatureTile = ({ 
  icon: Icon, 
  label, 
  description, 
  onClick,
  delay = 0
}: FeatureTileProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "nav-panel w-full p-4 text-left opacity-0 slide-up",
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 p-2 rounded-lg bg-accent/10 text-accent">
          <Icon className="w-4 h-4" />
        </div>
        <div className="flex-1 space-y-1">
          <h4 className="text-sm font-display font-semibold tracking-tight">
            {label}
          </h4>
          <p className="text-xs text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </button>
  );
};
