import { CurrentlySpeaking } from "./CurrentlySpeaking";
import { FeatureGrid } from "./FeatureGrid";
import heroImage from "@/assets/hero-event.jpg";

interface HomeScreenProps {
  onNavigate: (panel: string) => void;
}

export const HomeScreen = ({ onNavigate }: HomeScreenProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section - Upper Third */}
      <section className="relative">
        {/* Hero Image */}
        <div className="relative h-48 md:h-64 overflow-hidden">
          <img 
            src={heroImage} 
            alt="Event stage with dramatic lighting" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background" />
          
          {/* Event Info Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <div className="max-w-lg mx-auto">
              <div className="phont-badge mb-2 opacity-0 fade-in">
                PHONT Live Prototype
              </div>
              <h1 className="text-2xl md:text-3xl font-display font-bold tracking-tight leading-tight opacity-0 fade-in stagger-1">
                Future of Energy{" "}
                <span className="text-accent">Summit 2025</span>
              </h1>
            </div>
          </div>
        </div>
        
        {/* Currently Speaking */}
        <div className="px-4 -mt-2 relative z-10">
          <div className="max-w-lg mx-auto">
            <CurrentlySpeaking className="opacity-0 fade-in stagger-2" />
          </div>
        </div>
      </section>
      
      {/* Feature Grid - Lower Two Thirds */}
      <section className="flex-1 px-4 py-6">
        <div className="max-w-lg mx-auto">
          <FeatureGrid onNavigate={onNavigate} />
        </div>
      </section>
    </div>
  );
};
