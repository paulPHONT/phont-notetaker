import { Image, Video, Quote, FileText } from "lucide-react";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface SocialContentPanelProps {
  onSelectFeature: (feature: string) => void;
}

interface GridItemProps {
  icon: LucideIcon;
  label: string;
  subtitle: string;
  onClick: () => void;
  delay?: number;
}

const GridItem = ({ icon: Icon, label, subtitle, onClick, delay = 0 }: GridItemProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "nav-panel p-4 text-left flex items-center gap-4 aspect-square opacity-0 slide-up",
        "hover:border-accent/40"
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex-shrink-0">
        <Icon className="w-10 h-10 text-foreground" strokeWidth={1} />
      </div>
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

export const SocialContentPanel = ({ onSelectFeature }: SocialContentPanelProps) => {
  const features = [
    {
      id: 'poster',
      icon: Image,
      label: 'Poster Generator',
      subtitle: 'Bold typographic posters',
    },
    {
      id: 'clips',
      icon: Video,
      label: 'Highlight Clips',
      subtitle: 'Video with subtitles',
    },
    {
      id: 'quotes',
      icon: Quote,
      label: 'Quote Cards',
      subtitle: 'Speaker + quote layout',
    },
    {
      id: 'press',
      icon: FileText,
      label: 'Press Releases',
      subtitle: 'Highlighted quotes',
    },
  ];

  return (
    <div className="min-h-screen pb-8">
      <section className="px-4 pt-6">
        <div className="max-w-lg mx-auto">
          {/* Header */}
          <div className="mb-6 opacity-0 fade-in">
            <h2 className="text-2xl font-display font-normal tracking-tight mb-1">From Stage to Feed</h2>
            <p className="text-sm text-muted-foreground">
              Transform live speech into ready-to-publish content.
            </p>
          </div>
          
          {/* 2x2 Grid */}
          <div className="grid grid-cols-2 gap-3">
            {features.map((feature, index) => (
              <GridItem
                key={feature.id}
                icon={feature.icon}
                label={feature.label}
                subtitle={feature.subtitle}
                onClick={() => onSelectFeature(feature.id)}
                delay={100 + index * 50}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
