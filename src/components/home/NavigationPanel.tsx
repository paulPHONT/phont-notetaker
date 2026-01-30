import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavigationPanelProps {
  icon: LucideIcon;
  label: string;
  subtitle: string;
  onClick: () => void;
  className?: string;
  delay?: number;
}

export const NavigationPanel = ({ 
  icon: Icon, 
  label, 
  subtitle, 
  onClick,
  className,
  delay = 0
}: NavigationPanelProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "nav-panel w-full p-5 text-left opacity-0 slide-up",
        className
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 space-y-1.5">
          <h3 className="text-lg font-display font-semibold tracking-tight text-foreground">
            {label}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {subtitle}
          </p>
        </div>
        <div className="flex-shrink-0 p-2.5 rounded-lg bg-accent/10 text-accent">
          <Icon className="w-5 h-5" />
        </div>
      </div>
    </button>
  );
};
