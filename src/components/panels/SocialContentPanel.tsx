import { Image, Video, Quote, FileText } from "lucide-react";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import samplePost from "@/assets/sample-post.png";
import sampleClips from "@/assets/sample-clips.jpg";
import sampleQuotes from "@/assets/sample-quotes.png";
import samplePress from "@/assets/sample-press.jpg";

interface SocialContentPanelProps {
  onSelectFeature: (feature: string) => void;
}

interface GridItemProps {
  icon: LucideIcon;
  label: string;
  subtitle: string;
  image: string;
  onClick: () => void;
  delay?: number;
}

const GridItem = ({ icon: Icon, label, subtitle, image, onClick, delay = 0 }: GridItemProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "nav-panel p-0 overflow-hidden text-left opacity-0 slide-up",
        "hover:border-accent/40 group"
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Horizontal layout */}
      <div className="flex h-24 sm:h-28">
        {/* Image */}
        <div className="relative w-24 sm:w-28 flex-shrink-0 overflow-hidden">
          <img 
            src={image} 
            alt={label}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/50" />
        </div>
        
        {/* Content */}
        <div className="flex-1 p-4 flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-1">
            <Icon className="w-4 h-4 text-accent flex-shrink-0" strokeWidth={1.5} />
            <h3 className="text-sm font-display font-medium tracking-tight text-foreground">
              {label}
            </h3>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            {subtitle}
          </p>
        </div>
      </div>
    </button>
  );
};

export const SocialContentPanel = ({ onSelectFeature }: SocialContentPanelProps) => {
  const features = [
    {
      id: 'poster',
      icon: Image,
      label: 'Post Generator',
      subtitle: 'Social media posts',
      image: samplePost,
    },
    {
      id: 'clips',
      icon: Video,
      label: 'Highlight Clips',
      subtitle: 'Video with subtitles',
      image: sampleClips,
    },
    {
      id: 'quotes',
      icon: Quote,
      label: 'Quote Cards',
      subtitle: 'Speaker + quote layout',
      image: sampleQuotes,
    },
    {
      id: 'press',
      icon: FileText,
      label: 'Press Releases',
      subtitle: 'Highlighted quotes',
      image: samplePress,
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
          
          {/* Stacked list */}
          <div className="space-y-3">
            {features.map((feature, index) => (
              <GridItem
                key={feature.id}
                icon={feature.icon}
                label={feature.label}
                subtitle={feature.subtitle}
                image={feature.image}
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
