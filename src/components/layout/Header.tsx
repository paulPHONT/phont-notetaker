import { ArrowLeft, Info } from "lucide-react";
import { cn } from "@/lib/utils";
import phontLogo from "@/assets/phont-logo.png";

interface HeaderProps {
  title?: string;
  eventTitle?: string;
  showBack?: boolean;
  onBack?: () => void;
  onInfoClick?: () => void;
  showInfo?: boolean;
  className?: string;
}

export const Header = ({ 
  title, 
  eventTitle,
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
      <div className="flex items-center justify-between h-16 px-4 max-w-4xl mx-auto">
        {/* Left side */}
        <div className="flex items-center min-w-0 flex-1">
          {showBack ? (
            <button 
              onClick={onBack}
              className="p-2 -ml-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-5 h-5" strokeWidth={1.5} />
            </button>
          ) : (
            <img src={phontLogo} alt="PHONT" className="h-7 w-auto" />
          )}
        </div>
        
        {/* Center - Event or Panel Title */}
        <div className="flex-shrink-0 text-center">
          {title ? (
            <h1 className="text-base font-display font-normal tracking-tight">{title}</h1>
          ) : eventTitle ? (
            <h1 className="text-lg font-display font-normal tracking-tight">{eventTitle}</h1>
          ) : null}
        </div>
        
        {/* Right side */}
        <div className="flex items-center justify-end min-w-0 flex-1">
          {showInfo && onInfoClick && (
            <button 
              onClick={onInfoClick}
              className="p-2 -mr-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Info className="w-5 h-5" strokeWidth={1.5} />
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
