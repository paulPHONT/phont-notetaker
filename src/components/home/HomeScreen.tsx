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
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative">
        {/* Hero Image */}
        <div className="relative h-44 md:h-56 overflow-hidden">
          <img 
            src={heroImage} 
            alt="Event stage with dramatic lighting" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
          
          {/* Prototype Badge */}
          <div className="absolute top-4 left-4">
            <div className="phont-badge opacity-0 fade-in">
              PHONT Live Prototype
            </div>
          </div>
        </div>
        
        {/* Currently Speaking - overlapping hero */}
        <div className="px-4 -mt-12 relative z-10">
          <div className="max-w-lg mx-auto">
            <CurrentlySpeaking 
              className="opacity-0 fade-in stagger-1" 
              onViewTranscript={handleViewTranscript}
            />
          </div>
        </div>
      </section>
      
      {/* Feature Grid */}
      <section className="flex-1 px-4 py-6">
        <div className="max-w-lg mx-auto">
          <FeatureGrid onNavigate={onNavigate} />
        </div>
      </section>
    </div>
  );
};
