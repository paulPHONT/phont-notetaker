import { ArrowLeft, Info } from "lucide-react";
import { cn } from "@/lib/utils";
import phontLogo from "@/assets/phont-logo.png";

interface HeaderProps {
  title?: string;
  eventTitle?: string;
  eventYear?: string;
  showBack?: boolean;
  onBack?: () => void;
  onInfoClick?: () => void;
  showInfo?: boolean;
  className?: string;
}

export const Header = ({ 
  title, 
  eventTitle,
  eventYear,
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
        {/* Left side - Logo or Back */}
        <div className="flex items-center min-w-0">
          {showBack ? (
            <button 
              onClick={onBack}
              className="p-2 -ml-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-5 h-5" strokeWidth={1.5} />
            </button>
          ) : (
            <img src={phontLogo} alt="PHONT" className="h-6 w-auto object-contain" />
          )}
        </div>
        
        {/* Center/Right - Event or Panel Title */}
        <div className="text-right">
          {title ? (
            <h1 className="text-base font-display font-normal tracking-tight">{title}</h1>
          ) : eventTitle ? (
            <h1 className="text-base sm:text-lg font-display font-normal tracking-tight">
              {eventTitle} {eventYear && <span className="text-accent">{eventYear}</span>}
            </h1>
          ) : null}
        </div>
      </div>
    </header>
  );
};
