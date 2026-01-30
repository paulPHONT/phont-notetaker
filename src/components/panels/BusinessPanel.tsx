import { Building2, Users, TrendingUp, BarChart3 } from "lucide-react";

export const BusinessPanel = () => {
  const sponsorMentions = [
    { name: "GridSync Technologies", mentions: 12, context: "Primary product demo, Q&A" },
    { name: "Terraform Energy", mentions: 8, context: "Keynote speaker company" },
    { name: "Nordic Power Alliance", mentions: 5, context: "Case study reference" },
    { name: "CleanTech Ventures", mentions: 3, context: "Panel discussion" },
  ];

  const partnerSignals = [
    { name: "European Grid Authority", type: "Regulatory", frequency: "High" },
    { name: "MIT Energy Initiative", type: "Research", frequency: "Medium" },
    { name: "Bloomberg NEF", type: "Data Partner", frequency: "Medium" },
    { name: "International Energy Agency", type: "Policy", frequency: "Low" },
  ];

  return (
    <div className="min-h-screen pb-24">
      <section className="px-4 pt-6">
        <div className="max-w-lg mx-auto space-y-8">
          
          {/* Sponsor Impact */}
          <div className="opacity-0 slide-up" style={{ animationDelay: '100ms' }}>
            <h3 className="text-sm font-display font-semibold mb-4 flex items-center gap-2">
              <Building2 className="w-4 h-4 text-accent" />
              Sponsor Impact
            </h3>
            <div className="glass-panel-strong rounded-xl p-5 space-y-4">
              <p className="text-xs text-muted-foreground mb-4">
                How and where sponsors were mentioned during the session
              </p>
              {sponsorMentions.map((sponsor, i) => (
                <div key={i} className="flex items-center justify-between py-2 border-b border-border/50 last:border-0">
                  <div>
                    <p className="text-sm font-medium">{sponsor.name}</p>
                    <p className="text-xs text-muted-foreground">{sponsor.context}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-lg font-display font-bold text-accent">{sponsor.mentions}</span>
                    <p className="text-xs text-muted-foreground">mentions</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Partner Signals */}
          <div className="opacity-0 slide-up" style={{ animationDelay: '150ms' }}>
            <h3 className="text-sm font-display font-semibold mb-4 flex items-center gap-2">
              <Users className="w-4 h-4 text-accent" />
              Partner Signals
            </h3>
            <div className="glass-panel-strong rounded-xl p-5">
              <p className="text-xs text-muted-foreground mb-4">
                Recurring organizations and names from the discussion
              </p>
              <div className="space-y-3">
                {partnerSignals.map((partner, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                        <span className="text-xs font-bold text-accent">{partner.name[0]}</span>
                      </div>
                      <div>
                        <p className="text-sm font-medium">{partner.name}</p>
                        <p className="text-xs text-muted-foreground">{partner.type}</p>
                      </div>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      partner.frequency === 'High' 
                        ? 'bg-accent/20 text-accent' 
                        : partner.frequency === 'Medium'
                        ? 'bg-muted text-muted-foreground'
                        : 'bg-muted/50 text-muted-foreground'
                    }`}>
                      {partner.frequency}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Business Benchmarking */}
          <div className="opacity-0 slide-up" style={{ animationDelay: '200ms' }}>
            <h3 className="text-sm font-display font-semibold mb-4 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-accent" />
              Business Benchmarking
            </h3>
            <div className="glass-panel-strong rounded-xl p-5 space-y-6">
              <p className="text-xs text-muted-foreground">
                Compared to previous events in this series
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <p className="text-2xl font-display font-bold text-accent">+23%</p>
                  <p className="text-xs text-muted-foreground">Topic diversity</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-display font-bold">4.2</p>
                  <p className="text-xs text-muted-foreground">Avg. quote strength</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-display font-bold">89%</p>
                  <p className="text-xs text-muted-foreground">Audience alignment</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-display font-bold text-accent">+15%</p>
                  <p className="text-xs text-muted-foreground">Actionability score</p>
                </div>
              </div>
              
              <div className="border-t border-border pt-4">
                <p className="text-xs text-muted-foreground italic">
                  Note: Benchmarking data is illustrative. Actual metrics would be calculated across comparable event transcripts.
                </p>
              </div>
            </div>
          </div>

          {/* Example indicator */}
          <p className="text-xs text-center text-muted-foreground pt-4">
            Example output • Executive intelligence view
          </p>
        </div>
      </section>
    </div>
  );
};
