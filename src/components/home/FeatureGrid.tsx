import { useState } from "react";
import { Share2, BarChart3, FileText, Briefcase, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface FeatureGridProps {
  onNavigate: (panel: string) => void;
}

interface GridItemProps {
  icon?: LucideIcon;
  label: string;
  subtitle: string;
  onClick?: () => void;
  isFeatureHeader?: boolean;
  delay?: number;
}

type ViewMode = 'current' | 'another' | 'event';

const GridItem = ({ icon: Icon, label, subtitle, onClick, isFeatureHeader, delay = 0 }: GridItemProps) => {
  if (isFeatureHeader) {
    return (
      <div 
        className="p-4 flex flex-col justify-center opacity-0 slide-up"
        style={{ animationDelay: `${delay}ms` }}
      >
        <h2 className="text-3xl font-display font-normal tracking-tight mb-1">Features</h2>
        <p className="text-xs text-muted-foreground">Everything you need.</p>
      </div>
    );
  }

  return (
    <button
      onClick={onClick}
      className={cn(
        "nav-panel p-4 text-left flex items-center gap-4 min-h-[100px] opacity-0 slide-up",
        "hover:border-accent/40"
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      {Icon && (
        <div className="flex-shrink-0">
          <Icon className="w-10 h-10 text-foreground" strokeWidth={1} />
        </div>
      )}
      <div className="min-w-0">
        <h3 className="text-sm font-display font-normal tracking-tight text-foreground mb-0.5">
          {label}
        </h3>
        <p className="text-xs text-muted-foreground leading-snug">
          {subtitle}
        </p>
      </div>
    </button>
  );
};

export const FeatureGrid = ({ onNavigate }: FeatureGridProps) => {
  const [viewMode, setViewMode] = useState<ViewMode>('current');

  const viewModes: { id: ViewMode; label: string }[] = [
    { id: 'current', label: 'Current Talk' },
    { id: 'another', label: 'Another Talk' },
    { id: 'event', label: 'Whole Event' },
  ];

  const panels = [
    { id: 'social', icon: Share2, label: 'Social Content', subtitle: 'From stage to feed' },
    { id: 'analysis', icon: BarChart3, label: 'Analysis', subtitle: 'Signal from speech' },
    { id: 'handout', icon: FileText, label: 'Handout', subtitle: 'What was said' },
    { id: 'business', icon: Briefcase, label: 'Business', subtitle: 'Value beyond stage' },
    { id: 'social-wall', icon: MessageCircle, label: 'Social Wall', subtitle: 'What resonated' },
  ];

  return (
    <div className="space-y-6">
      {/* View Mode Switch */}
      <div className="opacity-0 fade-in" style={{ animationDelay: '50ms' }}>
        <div className="glass-panel-strong rounded-full p-1 flex">
          {viewModes.map((mode) => (
            <button
              key={mode.id}
              onClick={() => setViewMode(mode.id)}
              className={cn(
                "flex-1 px-3 py-2 rounded-full text-xs font-medium transition-all",
                viewMode === mode.id
                  ? "bg-accent text-accent-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {mode.label}
            </button>
          ))}
        </div>
      </div>

      {/* 2x3 Grid */}
      <div className="grid grid-cols-2 gap-3">
        {/* Feature Header Cell */}
        <GridItem 
          label="Features" 
          subtitle="Everything you need." 
          isFeatureHeader 
          delay={100}
        />
        
        {/* Panel Items */}
        {panels.map((panel, index) => (
          <GridItem
            key={panel.id}
            icon={panel.icon}
            label={panel.label}
            subtitle={panel.subtitle}
            onClick={() => onNavigate(panel.id)}
            delay={150 + index * 50}
          />
        ))}
      </div>
    </div>
  );
};
