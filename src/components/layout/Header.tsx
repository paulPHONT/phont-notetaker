import { ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeaderProps {
  title?: string;
  showBack?: boolean;
  onBack?: () => void;
  className?: string;
}

export const Header = ({ title, showBack, onBack, className }: HeaderProps) => {
  return (
    <header className={cn(
      "sticky top-0 z-40 glass-panel-strong border-b border-border/50",
      className
    )}>
      <div className="flex items-center h-14 px-4 max-w-4xl mx-auto">
        {showBack && (
          <button 
            onClick={onBack}
            className="mr-3 p-2 -ml-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
        )}
        
        {title ? (
          <h1 className="text-lg font-display font-semibold tracking-tight">{title}</h1>
        ) : (
          <div className="flex items-center gap-2">
            <span className="text-lg font-display font-bold tracking-tight">PHONT</span>
            <span className="text-accent text-sm font-medium">Live</span>
          </div>
        )}
      </div>
    </header>
  );
};
