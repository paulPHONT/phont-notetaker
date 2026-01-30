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
    <div className="h-[calc(100dvh-4rem)] flex flex-col overflow-hidden">
      {/* Hero Section */}
      <section className="relative flex-shrink-0">
        {/* Hero Image */}
        <div className="relative h-32 sm:h-44 md:h-56 overflow-hidden">
          <img 
            src={heroImage} 
            alt="Event stage with dramatic lighting" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
        </div>
        
        {/* Currently Speaking - overlapping hero */}
        <div className="px-4 -mt-10 sm:-mt-12 relative z-10">
          <div className="max-w-lg mx-auto">
            <CurrentlySpeaking 
              className="opacity-0 fade-in" 
              onViewTranscript={handleViewTranscript}
            />
          </div>
        </div>
      </section>
      
      {/* Feature Grid */}
      <section className="flex-1 px-4 pt-4 sm:pt-6 pb-4 overflow-hidden">
        <div className="max-w-lg mx-auto h-full">
          <FeatureGrid onNavigate={onNavigate} />
        </div>
      </section>
    </div>
  );
};
