import { useState } from "react";
import { Share2, BarChart3, FileText, Briefcase, MessageCircle, X } from "lucide-react";
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

interface TalkSlot {
  id: string;
  time: string;
  title: string;
  speaker: string;
}

const GridItem = ({ icon: Icon, label, subtitle, onClick, isFeatureHeader, delay = 0 }: GridItemProps) => {
  if (isFeatureHeader) {
    return (
      <div 
        className="p-3 sm:p-4 flex flex-col justify-center opacity-0 slide-up"
        style={{ animationDelay: `${delay}ms` }}
      >
        <h2 className="text-2xl sm:text-3xl font-display font-normal tracking-tight mb-0.5 sm:mb-1">Features</h2>
        <p className="text-xs text-muted-foreground">Everything you need.</p>
      </div>
    );
  }

  return (
    <button
      onClick={onClick}
      className={cn(
        "nav-panel p-3 sm:p-4 text-left flex items-center gap-3 sm:gap-4 opacity-0 slide-up",
        "hover:border-accent/40"
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      {Icon && (
        <div className="flex-shrink-0">
          <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-foreground" strokeWidth={1} />
        </div>
      )}
      <div className="min-w-0">
        <h3 className="text-xs sm:text-sm font-display font-normal tracking-tight text-foreground mb-0.5">
          {label}
        </h3>
        <p className="text-xs text-muted-foreground leading-snug hidden sm:block">
          {subtitle}
        </p>
      </div>
    </button>
  );
};

export const FeatureGrid = ({ onNavigate }: FeatureGridProps) => {
  const [viewMode, setViewMode] = useState<ViewMode>('current');
  const [showTalkPicker, setShowTalkPicker] = useState(false);
  const [selectedTalk, setSelectedTalk] = useState<string | null>(null);

  const talkSlots: TalkSlot[] = [
    { id: '1', time: '09:00', title: 'Opening Keynote', speaker: 'James Wilson' },
    { id: '2', time: '10:30', title: 'Grid Modernization', speaker: 'Dr. Sarah Mitchell' },
    { id: '3', time: '14:00', title: 'Investor Panel', speaker: 'Marcus Chen' },
    { id: '4', time: '15:30', title: 'Policy Future', speaker: 'Elena Vasquez' },
    { id: '5', time: '17:00', title: 'Closing Remarks', speaker: 'David Park' },
  ];

  const handleViewModeClick = (mode: ViewMode) => {
    if (mode === 'another') {
      setShowTalkPicker(true);
    } else {
      setViewMode(mode);
      setSelectedTalk(null);
    }
  };

  const handleSelectTalk = (talkId: string) => {
    setSelectedTalk(talkId);
    setViewMode('another');
    setShowTalkPicker(false);
  };

  const panels = [
    { id: 'social', icon: Share2, label: 'Social Content', subtitle: 'From stage to feed' },
    { id: 'analysis', icon: BarChart3, label: 'Analysis', subtitle: 'Signal from speech' },
    { id: 'handout', icon: FileText, label: 'Handout', subtitle: 'What was said' },
    { id: 'business', icon: Briefcase, label: 'Business', subtitle: 'Value beyond stage' },
    { id: 'social-wall', icon: MessageCircle, label: 'Social Wall', subtitle: 'What resonated' },
  ];

  const selectedTalkData = talkSlots.find(t => t.id === selectedTalk);

  return (
    <>
      <div className="flex flex-col gap-3 sm:gap-4">
        {/* View Mode Pills */}
        <div className="opacity-0 fade-in flex gap-2 flex-shrink-0" style={{ animationDelay: '50ms' }}>
          <button
            onClick={() => handleViewModeClick('current')}
            className={cn(
              "px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs font-medium transition-all",
              viewMode === 'current'
                ? "bg-accent text-accent-foreground"
                : "glass-panel text-muted-foreground hover:text-foreground"
            )}
          >
            Current Talk
          </button>
          <button
            onClick={() => handleViewModeClick('another')}
            className={cn(
              "px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs font-medium transition-all",
              viewMode === 'another'
                ? "bg-accent text-accent-foreground"
                : "glass-panel text-muted-foreground hover:text-foreground"
            )}
          >
            {selectedTalkData ? selectedTalkData.time : 'Another Talk'}
          </button>
          <button
            onClick={() => handleViewModeClick('event')}
            className={cn(
              "px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs font-medium transition-all",
              viewMode === 'event'
                ? "bg-accent text-accent-foreground"
                : "glass-panel text-muted-foreground hover:text-foreground"
            )}
          >
            Whole Event
          </button>
        </div>

        {/* 2x3 Grid - auto height */}
        <div className="grid grid-cols-2 gap-2 sm:gap-3">
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

      {/* Talk Picker Overlay */}
      {showTalkPicker && (
        <div className="fixed inset-0 z-50 flex items-end justify-center">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            onClick={() => setShowTalkPicker(false)}
          />
          
          {/* Sheet */}
          <div className="relative w-full max-w-lg mx-4 mb-4 glass-panel-strong rounded-2xl p-6 slide-up">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-display font-normal">Select Talk</h3>
              <button 
                onClick={() => setShowTalkPicker(false)}
                className="p-2 -mr-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-5 h-5" strokeWidth={1.5} />
              </button>
            </div>
            
            <div className="space-y-2">
              {talkSlots.map((talk) => (
                <button
                  key={talk.id}
                  onClick={() => handleSelectTalk(talk.id)}
                  className={cn(
                    "w-full p-4 rounded-xl text-left transition-all",
                    "glass-panel hover:border-accent/40",
                    selectedTalk === talk.id && "border-accent/60"
                  )}
                >
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-medium text-accent">{talk.time}</span>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-display font-normal">{talk.title}</p>
                      <p className="text-xs text-muted-foreground">{talk.speaker}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
