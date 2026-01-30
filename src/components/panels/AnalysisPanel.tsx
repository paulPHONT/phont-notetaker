import { Smile, Meh, Frown, Clock, Quote, Scale, CheckSquare } from "lucide-react";

export const AnalysisPanel = () => {
  const speakers = [
    { name: 'Dr. Elena Vasquez', time: 28, color: 'bg-accent' },
    { name: 'Marcus Chen', time: 22, color: 'bg-accent/70' },
    { name: 'Sarah Thompson', time: 18, color: 'bg-accent/50' },
    { name: 'Panel Discussion', time: 32, color: 'bg-muted-foreground/50' },
  ];

  const keyQuotes = [
    { quote: "The cost of inaction now far exceeds the investment required.", speaker: "Dr. Elena Vasquez", rank: 1 },
    { quote: "By 2030, 40% of commercial buildings will operate as micro-grids.", speaker: "Marcus Chen", rank: 2 },
    { quote: "Regulation is finally catching up to innovation.", speaker: "Sarah Thompson", rank: 3 },
  ];

  const consensus = [
    "Grid modernization is urgent",
    "Public-private partnerships are essential",
    "Consumer education needs improvement",
  ];

  const controversy = [
    "Nuclear energy's role in transition",
    "Carbon credit market effectiveness",
    "Pace of fossil fuel phase-out",
  ];

  const actionItems = [
    { text: "Form working group on interoperability standards", assignee: "Industry Coalition" },
    { text: "Draft policy recommendations by Q3", assignee: "Advisory Board" },
    { text: "Schedule follow-up regional summits", assignee: "Organizers" },
  ];

  return (
    <div className="min-h-screen pb-24">
      <section className="px-4 pt-6">
        <div className="max-w-lg mx-auto space-y-8">
          
          {/* Mood Overview */}
          <div className="opacity-0 slide-up" style={{ animationDelay: '100ms' }}>
            <h3 className="text-sm font-display font-semibold mb-4 flex items-center gap-2">
              <Smile className="w-4 h-4 text-accent" />
              Mood Overview
            </h3>
            <div className="glass-panel-strong rounded-xl p-5">
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl font-display font-bold">Optimistic</span>
                <div className="flex gap-2">
                  <div className="p-2 rounded-lg bg-accent/20">
                    <Smile className="w-5 h-5 text-accent" />
                  </div>
                  <div className="p-2 rounded-lg bg-muted">
                    <Meh className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <div className="p-2 rounded-lg bg-muted">
                    <Frown className="w-5 h-5 text-muted-foreground" />
                  </div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Speakers expressed confidence in industry trajectory. Tone shifted toward urgency during regulatory discussion.
              </p>
            </div>
          </div>

          {/* Speaking Time */}
          <div className="opacity-0 slide-up" style={{ animationDelay: '150ms' }}>
            <h3 className="text-sm font-display font-semibold mb-4 flex items-center gap-2">
              <Clock className="w-4 h-4 text-accent" />
              Speaking Time
            </h3>
            <div className="glass-panel-strong rounded-xl p-5 space-y-4">
              {speakers.map((speaker) => (
                <div key={speaker.name} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>{speaker.name}</span>
                    <span className="text-muted-foreground">{speaker.time} min</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div 
                      className={`speaking-bar ${speaker.color}`}
                      style={{ width: `${(speaker.time / 32) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Quotes */}
          <div className="opacity-0 slide-up" style={{ animationDelay: '200ms' }}>
            <h3 className="text-sm font-display font-semibold mb-4 flex items-center gap-2">
              <Quote className="w-4 h-4 text-accent" />
              Key Quotes
            </h3>
            <div className="space-y-3">
              {keyQuotes.map((item) => (
                <div key={item.rank} className="glass-panel-strong rounded-xl p-4 border-l-2 border-l-accent/50">
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 text-accent text-xs font-bold flex items-center justify-center">
                      {item.rank}
                    </span>
                    <div className="space-y-1">
                      <p className="text-sm font-medium">"{item.quote}"</p>
                      <p className="text-xs text-muted-foreground">— {item.speaker}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Consensus vs Controversy */}
          <div className="opacity-0 slide-up" style={{ animationDelay: '250ms' }}>
            <h3 className="text-sm font-display font-semibold mb-4 flex items-center gap-2">
              <Scale className="w-4 h-4 text-accent" />
              Consensus vs Controversy
            </h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="glass-panel-strong rounded-xl p-4">
                <p className="text-xs text-accent font-semibold mb-3">CONSENSUS</p>
                <ul className="space-y-2">
                  {consensus.map((item, i) => (
                    <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                      <span className="text-accent mt-0.5">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="glass-panel-strong rounded-xl p-4">
                <p className="text-xs text-muted-foreground font-semibold mb-3">CONTROVERSY</p>
                <ul className="space-y-2">
                  {controversy.map((item, i) => (
                    <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                      <span className="mt-0.5">○</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Action Items */}
          <div className="opacity-0 slide-up" style={{ animationDelay: '300ms' }}>
            <h3 className="text-sm font-display font-semibold mb-4 flex items-center gap-2">
              <CheckSquare className="w-4 h-4 text-accent" />
              Action Items
            </h3>
            <div className="glass-panel-strong rounded-xl p-5 space-y-4">
              {actionItems.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded border border-accent/50 flex-shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <p className="text-sm">{item.text}</p>
                    <p className="text-xs text-muted-foreground">{item.assignee}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Example indicator */}
          <p className="text-xs text-center text-muted-foreground pt-4">
            Example output • Not real analytics
          </p>
        </div>
      </section>
    </div>
  );
};
