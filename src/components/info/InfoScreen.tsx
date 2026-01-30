import { ExternalLink } from "lucide-react";
import phontLogo from "@/assets/phont-logo.png";

export const InfoScreen = () => {
  return (
    <div className="min-h-screen pb-24">
      <section className="px-4 pt-8">
        <div className="max-w-lg mx-auto space-y-8">
          
          {/* Logo and tagline */}
          <div className="text-center space-y-4 opacity-0 fade-in">
            <img src={phontLogo} alt="PHONT" className="h-12 w-auto mx-auto" />
            <p className="text-muted-foreground">
              What was said. What mattered. What can be reused.
            </p>
          </div>
          
          {/* About */}
          <div className="glass-panel-strong rounded-xl p-6 space-y-4 opacity-0 slide-up" style={{ animationDelay: '100ms' }}>
            <h2 className="text-sm font-display font-semibold">About This Prototype</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              PHONT Live transforms live-transcribed event content into communication, analysis, and business intelligence. This prototype demonstrates the potential of turning spoken content into actionable, publishable assets.
            </p>
            <div className="pt-2">
              <span className="phont-badge">Visual Prototype Only</span>
            </div>
          </div>

          {/* What PHONT is NOT */}
          <div className="glass-panel-strong rounded-xl p-6 space-y-4 opacity-0 slide-up" style={{ animationDelay: '150ms' }}>
            <h2 className="text-sm font-display font-semibold">What PHONT Is Not</h2>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-accent">×</span>
                Captioning software
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent">×</span>
                Simple transcription
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent">×</span>
                Generic SaaS dashboard
              </li>
            </ul>
          </div>

          {/* What PHONT IS */}
          <div className="glass-panel-strong rounded-xl p-6 space-y-4 opacity-0 slide-up" style={{ animationDelay: '200ms' }}>
            <h2 className="text-sm font-display font-semibold">What PHONT Is</h2>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-accent">✓</span>
                A communication layer for live spoken content
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent">✓</span>
                An intelligence platform for events
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent">✓</span>
                A bridge from stage to every channel
              </li>
            </ul>
          </div>

          {/* Link to website */}
          <a 
            href="https://phont.ai" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 text-sm text-accent hover:underline opacity-0 fade-in"
            style={{ animationDelay: '250ms' }}
          >
            Visit phont.ai
            <ExternalLink className="w-4 h-4" />
          </a>

          {/* Prototype disclaimer */}
          <p className="text-xs text-center text-muted-foreground pt-4 opacity-0 fade-in" style={{ animationDelay: '300ms' }}>
            All content shown is placeholder/fictional.<br />
            No real data, backend, or AI outputs.
          </p>
        </div>
      </section>
    </div>
  );
};
