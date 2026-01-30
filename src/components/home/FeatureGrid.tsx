import { useState } from "react";
import { Share2, BarChart3, FileText, Briefcase, MessageCircle, Calendar } from "lucide-react";
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
  delay?: number;
}

interface Talk {
  id: string;
  time: string;
  title: string;
  speaker: string;
  isActive?: boolean;
}

const GridItem = ({ icon: Icon, label, subtitle, onClick, delay = 0 }: GridItemProps) => {
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
  const [selectedTalk, setSelectedTalk] = useState<string>('talk-2');

  const talks: Talk[] = [
    { id: 'talk-1', time: '09:00', title: 'Opening Keynote', speaker: 'James Wilson' },
    { id: 'talk-2', time: '10:30', title: 'Grid Modernization', speaker: 'Dr. Sarah Mitchell', isActive: true },
    { id: 'talk-3', time: '14:00', title: 'Investor Panel', speaker: 'Marcus Chen' },
    { id: 'talk-4', time: '15:30', title: 'Policy Future', speaker: 'Elena Vasquez' },
    { id: 'talk-5', time: '17:00', title: 'Closing Remarks', speaker: 'David Park' },
  ];

  const currentTalk = talks.find(t => t.id === selectedTalk);

  const panels = [
    { id: 'social', icon: Share2, label: 'Social Content', subtitle: 'From stage to feed' },
    { id: 'analysis', icon: BarChart3, label: 'Analysis', subtitle: 'Signal from speech' },
    { id: 'handout', icon: FileText, label: 'Handout', subtitle: 'What was said' },
    { id: 'business', icon: Briefcase, label: 'Business', subtitle: 'Value beyond stage' },
    { id: 'social-wall', icon: MessageCircle, label: 'Social Wall', subtitle: 'What resonated' },
  ];

  return (
    <div className="space-y-6">
      {/* Selected Talk Info */}
      {currentTalk && (
        <div className="glass-panel-strong rounded-xl p-4 opacity-0 fade-in" style={{ animationDelay: '50ms' }}>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 rounded-full bg-accent" />
            <span className="text-xs text-muted-foreground uppercase tracking-wider">Selected Talk</span>
          </div>
          <p className="text-base font-display font-normal">{currentTalk.title}</p>
          <p className="text-xs text-muted-foreground mt-1">{currentTalk.time} • {currentTalk.speaker}</p>
        </div>
      )}

      {/* Schedule Carousel */}
      <div className="opacity-0 fade-in" style={{ animationDelay: '100ms' }}>
        <div className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide">
          {talks.map((talk) => (
            <button
              key={talk.id}
              onClick={() => setSelectedTalk(talk.id)}
              className={cn(
                "flex-shrink-0 px-4 py-2 rounded-full text-xs font-medium transition-all",
                selectedTalk === talk.id
                  ? "bg-accent text-accent-foreground"
                  : "glass-panel-strong text-muted-foreground hover:text-foreground"
              )}
            >
              {talk.time}
            </button>
          ))}
        </div>
      </div>

      {/* Headers Row */}
      <div className="grid grid-cols-2 gap-3">
        {/* Features Header */}
        <div 
          className="p-4 flex flex-col justify-center opacity-0 slide-up"
          style={{ animationDelay: '100ms' }}
        >
          <h2 className="text-3xl font-display font-normal tracking-tight mb-1">Features</h2>
          <p className="text-xs text-muted-foreground">Select talk above.</p>
        </div>
        
        {/* Schedule Button */}
        <button 
          className="nav-panel p-4 flex items-center gap-4 opacity-0 slide-up hover:border-accent/40"
          style={{ animationDelay: '120ms' }}
        >
          <Calendar className="w-10 h-10 text-foreground flex-shrink-0" strokeWidth={1} />
          <div className="min-w-0 text-left">
            <h3 className="text-sm font-display font-normal tracking-tight text-foreground mb-0.5">
              Schedule
            </h3>
            <p className="text-xs text-muted-foreground leading-snug">
              Full agenda
            </p>
          </div>
        </button>
      </div>
      
      {/* Panel Grid */}
      <div className="grid grid-cols-2 gap-3">
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
