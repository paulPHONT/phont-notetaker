import { Share2, BarChart3, FileText, Briefcase, MessageCircle } from "lucide-react";
import { NavigationPanel } from "./NavigationPanel";

interface HomeScreenProps {
  onNavigate: (panel: string) => void;
}

export const HomeScreen = ({ onNavigate }: HomeScreenProps) => {
  const panels = [
    {
      id: 'social',
      icon: Share2,
      label: 'Social Content API',
      subtitle: 'From stage to feed',
    },
    {
      id: 'analysis',
      icon: BarChart3,
      label: 'Analysis',
      subtitle: 'Signal from spoken content',
    },
    {
      id: 'handout',
      icon: FileText,
      label: 'Handout',
      subtitle: 'What was actually said',
    },
    {
      id: 'business',
      icon: Briefcase,
      label: 'Business',
      subtitle: 'Value beyond the stage',
    },
    {
      id: 'social-wall',
      icon: MessageCircle,
      label: 'Social Wall',
      subtitle: 'What resonated',
    },
  ];

  return (
    <div className="min-h-screen pb-24">
      {/* Hero Section */}
      <section className="relative px-4 pt-8 pb-10">
        <div className="max-w-lg mx-auto space-y-4">
          {/* Prototype Badge */}
          <div className="phont-badge opacity-0 fade-in">
            PHONT Live Prototype
          </div>
          
          {/* Event Title */}
          <h1 className="text-3xl md:text-4xl font-display font-bold tracking-tight leading-tight opacity-0 fade-in stagger-1">
            Future of Energy <br />
            <span className="text-accent">Summit 2025</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg text-muted-foreground leading-relaxed opacity-0 fade-in stagger-2">
            Live speech turned into publishable content.
          </p>
        </div>
      </section>
      
      {/* Navigation Panels */}
      <section className="px-4">
        <div className="max-w-lg mx-auto space-y-3">
          {panels.map((panel, index) => (
            <NavigationPanel
              key={panel.id}
              icon={panel.icon}
              label={panel.label}
              subtitle={panel.subtitle}
              onClick={() => onNavigate(panel.id)}
              delay={150 + index * 50}
            />
          ))}
        </div>
      </section>
    </div>
  );
};
