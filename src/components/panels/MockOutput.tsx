import { Sparkles } from "lucide-react";
import thumbPost from "@/assets/thumb-post.jpg";
import thumbClips from "@/assets/thumb-clips.jpg";
import thumbQuotes from "@/assets/thumb-quotes.jpg";
import phontLogo from "@/assets/phont-logo.png";

interface MockOutputProps {
  type: 'poster' | 'clips' | 'quotes' | 'press';
}

export const MockOutput = ({ type }: MockOutputProps) => {
  const renderContent = () => {
    switch (type) {
      case 'poster':
        return (
          <div className="space-y-6">
            {/* Poster Preview */}
            <div className="aspect-[4/5] glass-panel-strong rounded-xl p-6 flex flex-col justify-between relative overflow-hidden">
              <img src={thumbPost} alt="" className="absolute inset-0 w-full h-full object-cover opacity-30" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
              <div className="relative">
                <span className="phont-badge">Generated Output</span>
              </div>
              <div className="relative space-y-4">
                <blockquote className="text-2xl font-display font-bold leading-tight">
                  "The future of energy isn't about choosing between sustainability and reliability—it's about demanding both."
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/20" />
                  <div>
                    <p className="text-sm font-semibold">Dr. Elena Vasquez</p>
                    <p className="text-xs text-muted-foreground">Chief Strategy Officer, GridSync</p>
                  </div>
                </div>
              </div>
              <div className="relative flex items-center justify-between">
                <span className="text-xs text-muted-foreground">Future of Energy Summit 2025</span>
                <img src={phontLogo} alt="PHONT" className="h-4 w-auto object-contain flex-shrink-0" />
              </div>
            </div>
            
            <p className="text-sm text-muted-foreground text-center">
              Automatically generated from live speech. Ready for Instagram, LinkedIn & X.
            </p>
          </div>
        );
        
      case 'clips':
        return (
          <div className="space-y-6">
            {/* Video Preview */}
            <div className="aspect-[9/16] max-w-[280px] mx-auto glass-panel-strong rounded-xl relative overflow-hidden">
              <img src={thumbClips} alt="" className="absolute inset-0 w-full h-full object-cover opacity-40" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background/90" />
              
              {/* Video content placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center">
                  <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-accent border-b-8 border-b-transparent ml-1" />
                </div>
              </div>
              
              {/* Subtitle overlay */}
              <div className="absolute bottom-4 left-4 right-4">
                <span className="phont-badge mb-2">Generated Output</span>
                <div className="glass-panel p-3 rounded-lg">
                  <p className="text-sm font-medium text-center">
                    "We're seeing a paradigm shift in how utilities approach grid modernization."
                  </p>
                </div>
              </div>
              
              {/* PHONT watermark */}
              <div className="absolute top-4 right-4">
                <img src={phontLogo} alt="PHONT" className="h-4 w-auto object-contain" />
              </div>
            </div>
            
            <p className="text-sm text-muted-foreground text-center">
              Vertical video clips with auto-generated subtitles from live transcription.
            </p>
          </div>
        );
        
      case 'quotes':
        return (
          <div className="space-y-6">
            {/* Quote Card Preview */}
            <div className="glass-panel-strong rounded-xl p-6 space-y-4 relative overflow-hidden">
              <img src={thumbQuotes} alt="" className="absolute inset-0 w-full h-full object-cover opacity-20" />
              <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/80 to-background/70" />
              <span className="phont-badge relative z-10">Generated Output</span>
              
              <div className="relative z-10 flex gap-4">
                {/* Speaker avatar */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent/30 to-accent/10" />
                </div>
                
                {/* Quote content */}
                <div className="flex-1 space-y-2">
                  <p className="font-display font-semibold text-sm">Marcus Chen</p>
                  <p className="text-xs text-muted-foreground">CEO, Terraform Energy</p>
                </div>
              </div>
              
              <blockquote className="relative z-10 text-lg font-display leading-snug editorial-quote">
                "By 2030, we expect 40% of all commercial buildings to operate as micro-grids."
              </blockquote>
              
              <div className="relative z-10 flex items-center justify-between pt-2">
                <span className="text-xs text-muted-foreground">11:24 AM • Main Stage</span>
                <img src={phontLogo} alt="PHONT" className="h-4 w-auto object-contain flex-shrink-0" />
              </div>
            </div>
            
            <p className="text-sm text-muted-foreground text-center">
              Speaker portrait paired with impactful quotes. Shareable across platforms.
            </p>
          </div>
        );
        
      case 'press':
        return (
          <div className="space-y-6">
            {/* Press Release Preview */}
            <div className="glass-panel-strong rounded-xl p-6 space-y-4 relative">
              <span className="phont-badge">Generated Output</span>
              
              <h3 className="font-display font-bold text-xl leading-tight">
                Industry Leaders Call for Unified Grid Standards at Energy Summit
              </h3>
              
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">MUNICH, GERMANY — </strong>
                Speaking at the Future of Energy Summit 2025, executives from major utilities and technology companies outlined a shared vision for grid modernization...
              </p>
              
              <div className="glass-panel p-4 rounded-lg border-l-2 border-l-accent/50">
                <p className="text-sm italic">
                  "The cost of inaction now far exceeds the investment required for transformation," said Dr. Elena Vasquez, emphasizing the urgency of infrastructure updates.
                </p>
              </div>
              
              <p className="text-sm text-muted-foreground">
                The summit, now in its eighth year, brought together over 2,000 attendees from across the energy sector...
              </p>
              
              <div className="pt-2 flex items-center justify-between">
                <span className="text-xs text-muted-foreground">Auto-formatted from session transcript</span>
                <img src={phontLogo} alt="PHONT" className="h-4 w-auto object-contain flex-shrink-0" />
              </div>
            </div>
            
            <p className="text-sm text-muted-foreground text-center">
              Press-ready summaries with highlighted quotes extracted from live speech.
            </p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen pb-24">
      <section className="px-4 pt-6">
        <div className="max-w-lg mx-auto opacity-0 slide-up" style={{ animationDelay: '100ms' }}>
          {renderContent()}
          
          {/* Generated from live speech badge */}
          <div className="mt-8 flex items-center justify-center gap-2 text-accent">
            <Sparkles className="w-4 h-4" />
            <span className="text-xs font-medium">Generated from live speech</span>
          </div>
        </div>
      </section>
    </div>
  );
};
