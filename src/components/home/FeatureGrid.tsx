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

const GridItem = ({ icon: Icon, label, subtitle, onClick, isFeatureHeader, delay = 0 }: GridItemProps) => {
  if (isFeatureHeader) {
    return (
      <div 
        className="glass-panel-strong p-4 flex flex-col justify-center opacity-0 slide-up"
        style={{ animationDelay: `${delay}ms` }}
      >
        <h2 className="text-lg font-display font-bold tracking-tight mb-1">Features</h2>
        <p className="text-xs text-muted-foreground">Everything you need to know.</p>
      </div>
    );
  }

  return (
    <button
      onClick={onClick}
      className={cn(
        "nav-panel p-4 text-left flex flex-col justify-between min-h-[120px] opacity-0 slide-up",
        "hover:border-accent/40"
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      {Icon && (
        <div className="mb-3">
          <Icon className="w-7 h-7 text-accent" strokeWidth={1.5} />
        </div>
      )}
      <div>
        <h3 className="text-sm font-display font-semibold tracking-tight text-foreground mb-0.5">
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
  const panels = [
    {
      id: 'social',
      icon: Share2,
      label: 'Social Content',
      subtitle: 'From stage to feed',
    },
    {
      id: 'analysis',
      icon: BarChart3,
      label: 'Analysis',
      subtitle: 'Signal from speech',
    },
    {
      id: 'handout',
      icon: FileText,
      label: 'Handout',
      subtitle: 'What was said',
    },
    {
      id: 'business',
      icon: Briefcase,
      label: 'Business',
      subtitle: 'Value beyond stage',
    },
    {
      id: 'social-wall',
      icon: MessageCircle,
      label: 'Social Wall',
      subtitle: 'What resonated',
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-3">
      {/* Feature Header Cell */}
      <GridItem 
        label="Features" 
        subtitle="Everything you need to know." 
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
  );
};
