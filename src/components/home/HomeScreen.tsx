import { CurrentlySpeaking } from "./CurrentlySpeaking";
import { FeatureGrid } from "./FeatureGrid";
import heroImage from "@/assets/hero-event.jpg";

interface HomeScreenProps {
  onNavigate: (panel: string) => void;
}

export const HomeScreen = ({ onNavigate }: HomeScreenProps) => {
  const handleViewTranscript = () => {
    onNavigate('handout');
  };

  return (
    <div className="min-h-[calc(100dvh-4rem)] flex flex-col">
      {/* Hero Section - responsive height */}
      <section className="relative flex-shrink-0">
        {/* Hero Image */}
        <div className="relative h-28 sm:h-40 md:h-56 overflow-hidden">
          <img 
            src={heroImage} 
            alt="Event stage with dramatic lighting" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
        </div>
        
        {/* Currently Speaking - overlapping hero, responsive margins */}
        <div className="px-4 -mt-8 sm:-mt-12 relative z-10">
          <div className="max-w-lg mx-auto">
            <CurrentlySpeaking 
              className="opacity-0 fade-in" 
              onViewTranscript={handleViewTranscript}
            />
          </div>
        </div>
      </section>
      
      {/* Spacer - responsive */}
      <div className="flex-1 min-h-4 sm:min-h-6" />
      
      {/* Feature Grid - fixed at bottom */}
      <section className="flex-shrink-0 px-4 pb-4 sm:pb-6">
        <div className="max-w-lg mx-auto">
          <FeatureGrid onNavigate={onNavigate} />
        </div>
      </section>
    </div>
  );
};
