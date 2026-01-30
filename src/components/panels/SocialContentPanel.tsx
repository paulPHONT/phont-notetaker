import { Image, Video, Quote, FileText } from "lucide-react";
import { FeatureTile } from "./FeatureTile";

interface SocialContentPanelProps {
  onSelectFeature: (feature: string) => void;
}

export const SocialContentPanel = ({ onSelectFeature }: SocialContentPanelProps) => {
  const features = [
    {
      id: 'poster',
      icon: Image,
      label: 'Poster Generator',
      description: 'Event quote on bold typographic poster',
    },
    {
      id: 'clips',
      icon: Video,
      label: 'Highlight Clips',
      description: 'Vertical video with PHONT subtitles',
    },
    {
      id: 'quotes',
      icon: Quote,
      label: 'Quote Cards',
      description: 'Speaker portrait + quote layout',
    },
    {
      id: 'press',
      icon: FileText,
      label: 'Press Releases',
      description: 'Clean text layout with highlighted quotes',
    },
  ];

  return (
    <div className="min-h-screen pb-24">
      <section className="px-4 pt-6">
        <div className="max-w-lg mx-auto">
          <p className="text-sm text-muted-foreground mb-6 opacity-0 fade-in">
            Transform live speech into ready-to-publish content for every channel.
          </p>
          
          <div className="space-y-3">
            {features.map((feature, index) => (
              <FeatureTile
                key={feature.id}
                icon={feature.icon}
                label={feature.label}
                description={feature.description}
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
