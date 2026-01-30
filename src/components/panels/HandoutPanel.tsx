import { useState } from "react";
import { FileText, Quote, Lightbulb, Book, Newspaper, ChevronDown, ChevronUp, Download } from "lucide-react";

export const HandoutPanel = () => {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    transcript: false,
    glossary: false,
  });

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const topQuotes = [
    { quote: "The cost of inaction now far exceeds the investment required for transformation.", speaker: "Dr. Elena Vasquez" },
    { quote: "By 2030, we expect 40% of all commercial buildings to operate as micro-grids.", speaker: "Marcus Chen" },
    { quote: "Regulation is finally catching up to innovation—and that's terrifying for some.", speaker: "Sarah Thompson" },
  ];

  const keyLearnings = [
    "Grid modernization requires unified interoperability standards across regions",
    "Public-private partnerships are accelerating faster than regulatory frameworks",
    "Consumer behavior remains the largest unpredictable variable in adoption",
    "Micro-grid technology is reaching commercial viability in urban markets",
  ];

  const glossaryTerms = [
    { term: "Micro-grid", definition: "A localized energy system capable of operating independently from the traditional grid." },
    { term: "Interoperability", definition: "The ability of different systems and technologies to work together seamlessly." },
    { term: "Grid modernization", definition: "The process of upgrading electrical infrastructure to support new energy technologies." },
    { term: "Demand response", definition: "Adjusting consumer electricity usage based on supply conditions." },
  ];

  return (
    <div className="min-h-screen pb-24">
      <section className="px-4 pt-6">
        <div className="max-w-lg mx-auto space-y-6">
          
          {/* Download Summary Button */}
          <div className="opacity-0 slide-up" style={{ animationDelay: '50ms' }}>
            <button className="w-full glass-panel-strong rounded-xl p-4 flex items-center justify-between hover:border-accent/40 transition-colors">
              <span className="text-sm font-display font-semibold flex items-center gap-2">
                <Download className="w-4 h-4 text-accent" strokeWidth={1.5} />
                Download Summary
              </span>
              <span className="text-xs text-muted-foreground">PDF</span>
            </button>
          </div>
          
          {/* Short Summary */}
          <div className="opacity-0 slide-up" style={{ animationDelay: '100ms' }}>
            <h3 className="text-sm font-display font-semibold mb-3 flex items-center gap-2">
              <FileText className="w-4 h-4 text-accent" strokeWidth={1.5} />
              Summary
            </h3>
            <div className="glass-panel-strong rounded-xl p-5">
              <p className="text-sm leading-relaxed text-muted-foreground">
                <strong className="text-foreground">The Future of Energy Summit 2025</strong> brought together industry leaders to discuss grid modernization, regulatory challenges, and the acceleration of renewable energy adoption. Key themes included the urgency of infrastructure investment, the role of micro-grids in urban development, and the need for cross-sector collaboration.
              </p>
            </div>
          </div>

          {/* Full Transcript (Collapsed) */}
          <div className="opacity-0 slide-up" style={{ animationDelay: '150ms' }}>
            <button 
              onClick={() => toggleSection('transcript')}
              className="w-full glass-panel-strong rounded-xl p-4 flex items-center justify-between"
            >
              <span className="text-sm font-display font-semibold flex items-center gap-2">
                <FileText className="w-4 h-4 text-accent" strokeWidth={1.5} />
                Full Transcript
              </span>
              {expandedSections.transcript ? (
                <ChevronUp className="w-4 h-4 text-muted-foreground" />
              ) : (
                <ChevronDown className="w-4 h-4 text-muted-foreground" />
              )}
            </button>
            {expandedSections.transcript && (
              <div className="glass-panel rounded-xl p-5 mt-2 max-h-64 overflow-y-auto">
                <p className="text-xs text-muted-foreground leading-relaxed font-mono">
                  [09:15:22] <strong>MODERATOR:</strong> Good morning and welcome to the Future of Energy Summit 2025. We're joined today by an exceptional panel...<br /><br />
                  [09:16:45] <strong>DR. VASQUEZ:</strong> Thank you for having me. I want to start by addressing something that's been on everyone's mind—the cost of inaction now far exceeds the investment required for transformation...<br /><br />
                  [09:21:30] <strong>CHEN:</strong> Building on Elena's point, at Terraform we've been tracking commercial adoption rates, and by 2030, we expect 40% of all commercial buildings to operate as micro-grids...<br /><br />
                  [09:28:15] <strong>THOMPSON:</strong> The regulatory landscape is shifting rapidly. Regulation is finally catching up to innovation—and that's terrifying for some...
                </p>
              </div>
            )}
          </div>

          {/* Top Quotes */}
          <div className="opacity-0 slide-up" style={{ animationDelay: '200ms' }}>
            <h3 className="text-sm font-display font-semibold mb-3 flex items-center gap-2">
              <Quote className="w-4 h-4 text-accent" strokeWidth={1.5} />
              Top Quotes
            </h3>
            <div className="space-y-3">
              {topQuotes.map((item, i) => (
                <div key={i} className="glass-panel-strong rounded-xl p-4">
                  <p className="text-sm editorial-quote mb-2">"{item.quote}"</p>
                  <p className="text-xs text-muted-foreground">— {item.speaker}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Learnings */}
          <div className="opacity-0 slide-up" style={{ animationDelay: '250ms' }}>
            <h3 className="text-sm font-display font-semibold mb-3 flex items-center gap-2">
              <Lightbulb className="w-4 h-4 text-accent" strokeWidth={1.5} />
              Key Learnings
            </h3>
            <div className="glass-panel-strong rounded-xl p-5">
              <ul className="space-y-3">
                {keyLearnings.map((learning, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="text-accent mt-1">•</span>
                    {learning}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Glossary */}
          <div className="opacity-0 slide-up" style={{ animationDelay: '300ms' }}>
            <button 
              onClick={() => toggleSection('glossary')}
              className="w-full glass-panel-strong rounded-xl p-4 flex items-center justify-between"
            >
              <span className="text-sm font-display font-semibold flex items-center gap-2">
                <Book className="w-4 h-4 text-accent" strokeWidth={1.5} />
                Glossary
              </span>
              {expandedSections.glossary ? (
                <ChevronUp className="w-4 h-4 text-muted-foreground" />
              ) : (
                <ChevronDown className="w-4 h-4 text-muted-foreground" />
              )}
            </button>
            {expandedSections.glossary && (
              <div className="glass-panel rounded-xl p-5 mt-2 space-y-4">
                {glossaryTerms.map((item, i) => (
                  <div key={i}>
                    <p className="text-sm font-semibold text-accent">{item.term}</p>
                    <p className="text-xs text-muted-foreground mt-1">{item.definition}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Journalist Briefing */}
          <div className="opacity-0 slide-up" style={{ animationDelay: '350ms' }}>
            <h3 className="text-sm font-display font-semibold mb-3 flex items-center gap-2">
              <Newspaper className="w-4 h-4 text-accent" strokeWidth={1.5} />
              Journalist Briefing
            </h3>
            <div className="glass-panel-strong rounded-xl p-5 space-y-4">
              <div>
                <p className="text-xs text-accent font-semibold mb-2">WHAT TO QUOTE</p>
                <p className="text-sm text-muted-foreground">
                  Dr. Vasquez's statement on cost of inaction provides a strong lead. Chen's 2030 prediction offers concrete numbers for headlines.
                </p>
              </div>
              <div className="border-t border-border pt-4">
                <p className="text-xs text-accent font-semibold mb-2">WHAT MATTERS</p>
                <p className="text-sm text-muted-foreground">
                  Rare industry consensus on need for unified standards. Implicit criticism of current regulatory pace. Emerging tension between utility incumbents and tech disruptors.
                </p>
              </div>
            </div>
          </div>

          {/* Example indicator */}
          <p className="text-xs text-center text-muted-foreground pt-4">
            Example output • Living document format
          </p>
        </div>
      </section>
    </div>
  );
};
