import { ArrowLeft, Info } from "lucide-react";
import { cn } from "@/lib/utils";
import phontLogo from "@/assets/phont-logo.png";

interface HeaderProps {
  title?: string;
  showBack?: boolean;
  onBack?: () => void;
  onInfoClick?: () => void;
  showInfo?: boolean;
  className?: string;
}

export const Header = ({ 
  title, 
  showBack, 
  onBack, 
  onInfoClick,
  showInfo = true,
  className 
}: HeaderProps) => {
  return (
    <header className={cn(
      "sticky top-0 z-40 glass-panel-strong border-b border-border/50",
      className
    )}>
      <div className="flex items-center justify-between h-14 px-4 max-w-4xl mx-auto">
        <div className="flex items-center">
          {showBack && (
            <button 
              onClick={onBack}
              className="mr-3 p-2 -ml-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-5 h-5" strokeWidth={1.5} />
            </button>
          )}
          
          {title ? (
            <h1 className="text-lg font-display font-semibold tracking-tight">{title}</h1>
          ) : (
            <div className="flex items-center gap-2">
              <img src={phontLogo} alt="PHONT" className="h-6 w-auto" />
              <span className="text-accent text-sm font-medium">Live</span>
            </div>
          )}
        </div>
        
        {showInfo && onInfoClick && (
          <button 
            onClick={onInfoClick}
            className="p-2 -mr-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <Info className="w-5 h-5" strokeWidth={1.5} />
          </button>
        )}
      </div>
    </header>
  );
};
