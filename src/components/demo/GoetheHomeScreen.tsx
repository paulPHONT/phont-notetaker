import { Info } from "lucide-react";
import { GoetheSpeaking } from "./GoetheSpeaking";
import { FeatureGrid } from "@/components/home/FeatureGrid";

interface GoetheHomeScreenProps {
  onNavigate: (panel: string) => void;
  onInfoClick?: () => void;
}

export const GoetheHomeScreen = ({ onNavigate, onInfoClick }: GoetheHomeScreenProps) => {
  const handleViewTranscript = () => {
    onNavigate('handout');
  };

  return (
    <div className="min-h-[calc(100dvh-4rem)] flex flex-col">
      {/* Hero Section - SDG themed gradient */}
      <section className="relative flex-shrink-0">
        {/* Hero with SDG-inspired gradient */}
        <div className="relative h-36 sm:h-48 md:h-64 overflow-hidden bg-gradient-to-br from-[#00689D] via-[#19486A] to-[#0A97D9]">
          {/* SDG colored bars at top */}
          <div className="absolute top-0 left-0 right-0 h-2 flex">
            <div className="flex-1 bg-[#E5243B]" /> {/* SDG 1 */}
            <div className="flex-1 bg-[#DDA63A]" /> {/* SDG 2 */}
            <div className="flex-1 bg-[#4C9F38]" /> {/* SDG 3 */}
            <div className="flex-1 bg-[#C5192D]" /> {/* SDG 4 */}
            <div className="flex-1 bg-[#FF3A21]" /> {/* SDG 5 */}
            <div className="flex-1 bg-[#26BDE2]" /> {/* SDG 6 */}
            <div className="flex-1 bg-[#FCC30B]" /> {/* SDG 7 */}
            <div className="flex-1 bg-[#A21942]" /> {/* SDG 8 */}
            <div className="flex-1 bg-[#FD6925]" /> {/* SDG 9 */}
            <div className="flex-1 bg-[#DD1367]" /> {/* SDG 10 */}
            <div className="flex-1 bg-[#FD9D24]" /> {/* SDG 11 */}
            <div className="flex-1 bg-[#BF8B2E]" /> {/* SDG 12 */}
            <div className="flex-1 bg-[#3F7E44]" /> {/* SDG 13 */}
            <div className="flex-1 bg-[#0A97D9]" /> {/* SDG 14 */}
            <div className="flex-1 bg-[#56C02B]" /> {/* SDG 15 */}
            <div className="flex-1 bg-[#00689D]" /> {/* SDG 16 */}
            <div className="flex-1 bg-[#19486A]" /> {/* SDG 17 */}
          </div>
          
          {/* Content overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 pt-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <span className="text-lg font-bold text-white">🌱</span>
              </div>
              <span className="text-white/90 text-sm font-medium tracking-wide uppercase">Goethe-Unibator × Santander</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1">
              Startups for Future
            </h1>
            <p className="text-white/80 text-sm sm:text-base">
              SDG Contest 2025 • Live Pitch Event
            </p>
          </div>
          
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
          
          {/* Info Button */}
          {onInfoClick && (
            <button 
              onClick={onInfoClick}
              className="absolute top-5 right-3 p-2 glass-panel rounded-full text-white/80 hover:text-white transition-colors"
            >
              <Info className="w-5 h-5" strokeWidth={1.5} />
            </button>
          )}
        </div>
        
        {/* Currently Speaking */}
        <div className="px-4 -mt-6 sm:-mt-10 relative z-10">
          <div className="max-w-lg mx-auto">
            <GoetheSpeaking 
              className="opacity-0 fade-in" 
              onViewTranscript={handleViewTranscript}
            />
          </div>
        </div>
      </section>
      
      {/* Spacer */}
      <div className="flex-1 min-h-4 sm:min-h-6" />
      
      {/* Feature Grid */}
      <section className="flex-shrink-0 px-4 pb-4 sm:pb-6">
        <div className="max-w-lg mx-auto">
          <FeatureGrid onNavigate={onNavigate} />
        </div>
      </section>
    </div>
  );
};