# PHONT Live - Complete Code Reference

All components in a single file for easy copying.

---

## Table of Contents
1. [CSS Styles (index.css)](#css-styles)
2. [Main App Entry (Index.tsx)](#main-app-entry)
3. [Layout - Header](#layout-header)
4. [Home - HomeScreen](#home-homescreen)
5. [Home - CurrentlySpeaking](#home-currentlyspeaking)
6. [Home - FeatureGrid](#home-featuregrid)
7. [Panels - SocialContentPanel](#panels-socialcontentpanel)
8. [Panels - MockOutput](#panels-mockoutput)
9. [Panels - AnalysisPanel](#panels-analysispanel)
10. [Panels - HandoutPanel](#panels-handoutpanel)
11. [Panels - BusinessPanel](#panels-businesspanel)
12. [Panels - SocialWallPanel](#panels-socialwallpanel)
13. [Panels - FeatureTile](#panels-featuretile)
14. [Info - InfoScreen](#info-infoscreen)

---

## CSS Styles

**File: `src/index.css`**

```css
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Inter+Tight:wght@500;600;700;800&display=swap");
@tailwind base;
@tailwind components;
@tailwind utilities;

/* PHONT Design System - Minimal, Editorial, High-Contrast */

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 0 0% 0%;

    --card: 0 0% 98%;
    --card-foreground: 0 0% 0%;

    --popover: 0 0% 100%;
    --popover-foreground: 0 0% 0%;

    --primary: 0 0% 0%;
    --primary-foreground: 0 0% 100%;

    --secondary: 0 0% 96%;
    --secondary-foreground: 0 0% 0%;

    --muted: 0 0% 96%;
    --muted-foreground: 0 0% 45%;

    --accent: 262 100% 87%;
    --accent-foreground: 0 0% 0%;

    --destructive: 0 84% 60%;
    --destructive-foreground: 0 0% 100%;

    --border: 0 0% 90%;
    --input: 0 0% 90%;
    --ring: 262 100% 87%;

    --radius: 0.75rem;

    /* PHONT specific tokens */
    --phont-accent: 262 100% 87%;
    --phont-accent-glow: 262 100% 92%;
    --glass-bg: 0 0% 100% / 0.05;
    --glass-border: 0 0% 100% / 0.1;

    --sidebar-background: 0 0% 98%;
    --sidebar-foreground: 0 0% 0%;
    --sidebar-primary: 0 0% 0%;
    --sidebar-primary-foreground: 0 0% 100%;
    --sidebar-accent: 262 100% 87%;
    --sidebar-accent-foreground: 0 0% 0%;
    --sidebar-border: 0 0% 90%;
    --sidebar-ring: 262 100% 87%;

    --chart-1: 262 100% 87%;
    --chart-2: 0 0% 60%;
    --chart-3: 0 0% 40%;
    --chart-4: 0 0% 80%;
    --chart-5: 262 60% 70%;

    --font-display: "Inter Tight", ui-sans-serif, system-ui, sans-serif;
    --font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;

    --shadow-glow: 0 0 60px hsl(262 100% 87% / 0.3);
    --shadow-subtle: 0 2px 20px hsl(0 0% 0% / 0.05);
  }

  .dark {
    --background: 0 0% 0%;
    --foreground: 0 0% 100%;

    --card: 0 0% 6%;
    --card-foreground: 0 0% 100%;

    --popover: 0 0% 4%;
    --popover-foreground: 0 0% 100%;

    --primary: 0 0% 100%;
    --primary-foreground: 0 0% 0%;

    --secondary: 262 100% 87%;
    --secondary-foreground: 0 0% 0%;

    --muted: 0 0% 12%;
    --muted-foreground: 0 0% 60%;

    --accent: 262 100% 87%;
    --accent-foreground: 0 0% 0%;

    --destructive: 0 62% 30%;
    --destructive-foreground: 0 0% 100%;

    --border: 0 0% 15%;
    --input: 0 0% 15%;
    --ring: 262 100% 87%;

    --glass-bg: 0 0% 100% / 0.03;
    --glass-border: 0 0% 100% / 0.08;

    --sidebar-background: 0 0% 4%;
    --sidebar-foreground: 0 0% 100%;
    --sidebar-primary: 262 100% 87%;
    --sidebar-primary-foreground: 0 0% 0%;
    --sidebar-accent: 0 0% 12%;
    --sidebar-accent-foreground: 0 0% 100%;
    --sidebar-border: 0 0% 15%;
    --sidebar-ring: 262 100% 87%;

    --chart-1: 262 100% 87%;
    --chart-2: 0 0% 70%;
    --chart-3: 0 0% 50%;
    --chart-4: 0 0% 30%;
    --chart-5: 262 60% 75%;

    --shadow-glow: 0 0 80px hsl(262 100% 87% / 0.15);
    --shadow-subtle: 0 4px 30px hsl(0 0% 0% / 0.5);
  }
}

@layer base {
  * {
    @apply border-border;
  }

  body {
    @apply bg-background text-foreground antialiased;
    font-family: var(--font-sans);
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-display);
    font-weight: 700;
    letter-spacing: -0.02em;
  }
}

@layer components {
  .glass-panel {
    @apply backdrop-blur-xl border rounded-lg;
    background: hsl(0 0% 100% / 0.02);
    border-color: hsl(0 0% 100% / 0.06);
  }

  .glass-panel-strong {
    @apply backdrop-blur-2xl border rounded-lg;
    background: hsl(0 0% 100% / 0.04);
    border-color: hsl(0 0% 100% / 0.08);
  }

  .accent-glow {
    box-shadow: var(--shadow-glow);
  }

  .text-gradient-accent {
    @apply bg-clip-text text-transparent;
    background-image: linear-gradient(135deg, hsl(var(--accent)), hsl(262 100% 92%));
  }

  .phont-badge {
    @apply inline-flex items-center px-2 py-0.5 text-xs font-medium rounded-full;
    background: hsl(var(--accent) / 0.15);
    color: hsl(var(--accent));
    border: 1px solid hsl(var(--accent) / 0.3);
  }

  .nav-panel {
    @apply relative overflow-hidden transition-all duration-300;
    @apply glass-panel-strong hover:border-accent/30;
  }

  .nav-panel::before {
    content: '';
    @apply absolute inset-0 opacity-0 transition-opacity duration-300;
    background: linear-gradient(135deg, hsl(var(--accent) / 0.05), transparent);
  }

  .nav-panel:hover::before {
    @apply opacity-100;
  }

  .editorial-quote {
    @apply relative pl-4 border-l-2 border-accent italic;
    font-family: var(--font-display);
  }

  .speaking-bar {
    @apply h-2 rounded-full transition-all duration-500;
    background: linear-gradient(90deg, hsl(var(--accent)), hsl(262 100% 92%));
  }

  .feed-card {
    @apply glass-panel p-4 space-y-3;
    @apply border-l-2 border-l-accent/50;
  }
}

@layer utilities {
  .fade-in {
    animation: fadeIn 0.5s ease-out forwards;
  }

  .slide-up {
    animation: slideUp 0.4s ease-out forwards;
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes slideUp {
    from { 
      opacity: 0;
      transform: translateY(20px);
    }
    to { 
      opacity: 1;
      transform: translateY(0);
    }
  }

  .stagger-1 { animation-delay: 0.05s; }
  .stagger-2 { animation-delay: 0.1s; }
  .stagger-3 { animation-delay: 0.15s; }
  .stagger-4 { animation-delay: 0.2s; }
  .stagger-5 { animation-delay: 0.25s; }
}
```

---

## Main App Entry

**File: `src/pages/Index.tsx`**

```tsx
import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { HomeScreen } from "@/components/home/HomeScreen";
import { SocialContentPanel } from "@/components/panels/SocialContentPanel";
import { MockOutput } from "@/components/panels/MockOutput";
import { AnalysisPanel } from "@/components/panels/AnalysisPanel";
import { HandoutPanel } from "@/components/panels/HandoutPanel";
import { BusinessPanel } from "@/components/panels/BusinessPanel";
import { SocialWallPanel } from "@/components/panels/SocialWallPanel";
import { InfoScreen } from "@/components/info/InfoScreen";

type View = 'home' | 'info';
type Panel = 'social' | 'analysis' | 'handout' | 'business' | 'social-wall' | null;
type Feature = 'poster' | 'clips' | 'quotes' | 'press' | null;

const panelTitles: Record<string, string> = {
  'social': 'Social Content',
  'analysis': 'Analysis',
  'handout': 'Handout',
  'business': 'Business',
  'social-wall': 'Social Wall',
};

const featureTitles: Record<string, string> = {
  'poster': 'Post Generator',
  'clips': 'Highlight Clips',
  'quotes': 'Quote Cards',
  'press': 'Press Releases',
};

const Index = () => {
  const [view, setView] = useState<View>('home');
  const [activePanel, setActivePanel] = useState<Panel>(null);
  const [activeFeature, setActiveFeature] = useState<Feature>(null);

  const handleNavigate = (panel: string) => {
    setActivePanel(panel as Panel);
  };

  const handleSelectFeature = (feature: string) => {
    setActiveFeature(feature as Feature);
  };

  const handleBack = () => {
    if (activeFeature) {
      setActiveFeature(null);
    } else if (activePanel) {
      setActivePanel(null);
    } else if (view === 'info') {
      setView('home');
    }
  };

  const handleInfoClick = () => {
    setView('info');
  };

  const getTitle = () => {
    if (view === 'info') return 'Info';
    if (activeFeature && featureTitles[activeFeature]) {
      return featureTitles[activeFeature];
    }
    if (activePanel && panelTitles[activePanel]) {
      return panelTitles[activePanel];
    }
    return undefined;
  };

  const showBack = view === 'info' || Boolean(activePanel || activeFeature);
  const isHome = view === 'home' && !activePanel && !activeFeature;

  const renderContent = () => {
    if (view === 'info') {
      return <InfoScreen />;
    }

    if (activeFeature) {
      return <MockOutput type={activeFeature} />;
    }

    if (activePanel) {
      switch (activePanel) {
        case 'social':
          return <SocialContentPanel onSelectFeature={handleSelectFeature} />;
        case 'analysis':
          return <AnalysisPanel />;
        case 'handout':
          return <HandoutPanel />;
        case 'business':
          return <BusinessPanel />;
        case 'social-wall':
          return <SocialWallPanel />;
        default:
          return <HomeScreen onNavigate={handleNavigate} onInfoClick={handleInfoClick} />;
      }
    }

    return <HomeScreen onNavigate={handleNavigate} onInfoClick={handleInfoClick} />;
  };

  return (
    <div className="min-h-screen bg-background dark">
      <Header 
        title={getTitle()} 
        eventTitle={isHome ? "Future of Energy Summit" : undefined}
        eventYear={isHome ? "2025" : undefined}
        showBack={showBack} 
        onBack={handleBack}
        onInfoClick={handleInfoClick}
        showInfo={!showBack}
      />
      
      <main className="pt-0">
        {renderContent()}
      </main>
    </div>
  );
};

export default Index;
```

---

## Layout Header

**File: `src/components/layout/Header.tsx`**

```tsx
import { ArrowLeft, Info } from "lucide-react";
import { cn } from "@/lib/utils";
import phontLogo from "@/assets/phont-logo.png";

interface HeaderProps {
  title?: string;
  eventTitle?: string;
  eventYear?: string;
  showBack?: boolean;
  onBack?: () => void;
  onInfoClick?: () => void;
  showInfo?: boolean;
  className?: string;
}

export const Header = ({ 
  title, 
  eventTitle,
  eventYear,
  showBack, 
  onBack, 
  onInfoClick,
  showInfo = true,
  className 
}: HeaderProps) => {
  return (
    <header className={cn(
      "sticky top-0 z-40 glass-panel-strong border-b border-border/50",
      className
    )}>
      <div className="flex items-center justify-between h-16 px-4 max-w-4xl mx-auto">
        {/* Left side - Logo or Back */}
        <div className="flex items-center min-w-0">
          {showBack ? (
            <button 
              onClick={onBack}
              className="p-2 -ml-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-5 h-5" strokeWidth={1.5} />
            </button>
          ) : (
            <img src={phontLogo} alt="PHONT" className="h-6 w-auto object-contain" />
          )}
        </div>
        
        {/* Center/Right - Event or Panel Title */}
        <div className="text-right">
          {title ? (
            <h1 className="text-base font-display font-normal tracking-tight">{title}</h1>
          ) : eventTitle ? (
            <h1 className="text-base sm:text-lg font-display font-normal tracking-tight">
              {eventTitle} {eventYear && <span className="text-accent">{eventYear}</span>}
            </h1>
          ) : null}
        </div>
      </div>
    </header>
  );
};
```

---

## Home HomeScreen

**File: `src/components/home/HomeScreen.tsx`**

```tsx
import { Info } from "lucide-react";
import { CurrentlySpeaking } from "./CurrentlySpeaking";
import { FeatureGrid } from "./FeatureGrid";
import heroImage from "@/assets/hero-event.jpg";

interface HomeScreenProps {
  onNavigate: (panel: string) => void;
  onInfoClick?: () => void;
}

export const HomeScreen = ({ onNavigate, onInfoClick }: HomeScreenProps) => {
  const handleViewTranscript = () => {
    onNavigate('handout');
  };

  return (
    <div className="min-h-[calc(100dvh-4rem)] flex flex-col">
      {/* Hero Section - responsive height */}
      <section className="relative flex-shrink-0">
        {/* Hero Image - bigger */}
        <div className="relative h-36 sm:h-48 md:h-64 overflow-hidden">
          <img 
            src={heroImage} 
            alt="Event stage with dramatic lighting" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
          
          {/* Info Button - positioned in hero */}
          {onInfoClick && (
            <button 
              onClick={onInfoClick}
              className="absolute top-3 right-3 p-2 glass-panel rounded-full text-foreground/80 hover:text-foreground transition-colors"
            >
              <Info className="w-5 h-5" strokeWidth={1.5} />
            </button>
          )}
        </div>
        
        {/* Currently Speaking - moved down, still overlapping */}
        <div className="px-4 -mt-6 sm:-mt-10 relative z-10">
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
```

---

## Home CurrentlySpeaking

**File: `src/components/home/CurrentlySpeaking.tsx`**

```tsx
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import speakerImage from "@/assets/speaker-sarah.jpg";

interface CurrentlySpeakingProps {
  className?: string;
  onViewTranscript?: () => void;
}

export const CurrentlySpeaking = ({ className, onViewTranscript }: CurrentlySpeakingProps) => {
  return (
    <div className={cn("glass-panel-strong p-3 sm:p-4", className)}>
      <div className="flex items-center justify-between mb-2 sm:mb-3">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
            Currently Speaking
          </span>
        </div>
      </div>
      
      <div className="flex items-center gap-3 mb-2 sm:mb-3">
        <img 
          src={speakerImage} 
          alt="Dr. Sarah Mitchell" 
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover flex-shrink-0"
        />
        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold">Dr. Sarah Mitchell</p>
          <p className="text-xs text-muted-foreground">CEO, GreenTech Ventures</p>
        </div>
      </div>
      
      {/* Fixed 3 lines on mobile, 4 on larger */}
      <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground line-clamp-3 sm:line-clamp-4">
        ...and that's why we believe the transition to renewable energy is not just an environmental imperative, but also an economic opportunity. The companies that adapt now will be the leaders of tomorrow.
      </p>
      
      {/* View Transcript Button */}
      {onViewTranscript && (
        <button 
          onClick={onViewTranscript}
          className="mt-2 sm:mt-3 flex items-center gap-1 text-xs text-accent hover:text-accent/80 transition-colors"
        >
          <span>View full transcript</span>
          <ChevronRight className="w-3 h-3" strokeWidth={1.5} />
        </button>
      )}
    </div>
  );
};
```

---

## Home FeatureGrid

**File: `src/components/home/FeatureGrid.tsx`**

```tsx
import { useState } from "react";
import { Share2, BarChart3, FileText, Briefcase, MessageCircle, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface FeatureGridProps {
  onNavigate: (panel: string) => void;
}

interface GridItemProps {
  icon?: LucideIcon;
  label: string;
  subtitle: string;
  onClick?: () => void;
  isFeatureHeader?: boolean;
  delay?: number;
}

type ViewMode = 'current' | 'another' | 'event';

interface TalkSlot {
  id: string;
  time: string;
  title: string;
  speaker: string;
}

const GridItem = ({ icon: Icon, label, subtitle, onClick, isFeatureHeader, delay = 0 }: GridItemProps) => {
  if (isFeatureHeader) {
    return (
      <div 
        className="p-4 sm:p-5 flex flex-col justify-center opacity-0 slide-up"
        style={{ animationDelay: `${delay}ms` }}
      >
        <h2 className="text-2xl sm:text-3xl font-display font-normal tracking-tight mb-1 sm:mb-1.5">Features</h2>
        <p className="text-xs text-muted-foreground">Everything you need.</p>
      </div>
    );
  }

  return (
    <button
      onClick={onClick}
      className={cn(
        "nav-panel p-4 sm:p-5 text-left flex items-center gap-3 sm:gap-4 opacity-0 slide-up",
        "hover:border-accent/40"
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      {Icon && (
        <div className="flex-shrink-0">
          <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-foreground" strokeWidth={1} />
        </div>
      )}
      <div className="min-w-0">
        <h3 className="text-xs sm:text-sm font-display font-normal tracking-tight text-foreground mb-0.5">
          {label}
        </h3>
        <p className="text-xs text-muted-foreground leading-snug hidden sm:block">
          {subtitle}
        </p>
      </div>
    </button>
  );
};

export const FeatureGrid = ({ onNavigate }: FeatureGridProps) => {
  const [viewMode, setViewMode] = useState<ViewMode>('current');
  const [showTalkPicker, setShowTalkPicker] = useState(false);
  const [selectedTalk, setSelectedTalk] = useState<string | null>(null);

  const talkSlots: TalkSlot[] = [
    { id: '1', time: '09:00', title: 'Opening Keynote', speaker: 'James Wilson' },
    { id: '2', time: '10:30', title: 'Grid Modernization', speaker: 'Dr. Sarah Mitchell' },
    { id: '3', time: '14:00', title: 'Investor Panel', speaker: 'Marcus Chen' },
    { id: '4', time: '15:30', title: 'Policy Future', speaker: 'Elena Vasquez' },
    { id: '5', time: '17:00', title: 'Closing Remarks', speaker: 'David Park' },
  ];

  const handleViewModeClick = (mode: ViewMode) => {
    if (mode === 'another') {
      setShowTalkPicker(true);
    } else {
      setViewMode(mode);
      setSelectedTalk(null);
    }
  };

  const handleSelectTalk = (talkId: string) => {
    setSelectedTalk(talkId);
    setViewMode('another');
    setShowTalkPicker(false);
  };

  const panels = [
    { id: 'social', icon: Share2, label: 'Social Content', subtitle: 'From stage to feed' },
    { id: 'analysis', icon: BarChart3, label: 'Analysis', subtitle: 'Signal from speech' },
    { id: 'handout', icon: FileText, label: 'Handout', subtitle: 'What was said' },
    { id: 'business', icon: Briefcase, label: 'Business', subtitle: 'Value beyond stage' },
    { id: 'social-wall', icon: MessageCircle, label: 'Social Wall', subtitle: 'What resonated' },
  ];

  const selectedTalkData = talkSlots.find(t => t.id === selectedTalk);

  return (
    <>
      <div className="flex flex-col gap-3 sm:gap-4">
        {/* View Mode Pills */}
        <div className="opacity-0 fade-in flex gap-2 flex-shrink-0" style={{ animationDelay: '50ms' }}>
          <button
            onClick={() => handleViewModeClick('current')}
            className={cn(
              "px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs font-medium transition-all",
              viewMode === 'current'
                ? "bg-accent text-accent-foreground"
                : "glass-panel text-muted-foreground hover:text-foreground"
            )}
          >
            Current Talk
          </button>
          <button
            onClick={() => handleViewModeClick('another')}
            className={cn(
              "px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs font-medium transition-all",
              viewMode === 'another'
                ? "bg-accent text-accent-foreground"
                : "glass-panel text-muted-foreground hover:text-foreground"
            )}
          >
            {selectedTalkData ? selectedTalkData.time : 'Another Talk'}
          </button>
          <button
            onClick={() => handleViewModeClick('event')}
            className={cn(
              "px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs font-medium transition-all",
              viewMode === 'event'
                ? "bg-accent text-accent-foreground"
                : "glass-panel text-muted-foreground hover:text-foreground"
            )}
          >
            Whole Event
          </button>
        </div>

        {/* 2x3 Grid - auto height with more gap */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {/* Feature Header Cell */}
          <GridItem 
            label="Features" 
            subtitle="Everything you need." 
            isFeatureHeader 
            delay={100}
          />
          
          {/* Panel Items */}
          {panels.map((panel, index) => (
            <GridItem
              key={panel.id}
              icon={panel.icon}
              label={panel.label}
              subtitle={panel.subtitle}
              onClick={() => onNavigate(panel.id)}
              delay={150 + index * 50}
            />
          ))}
        </div>
      </div>

      {/* Talk Picker Overlay */}
      {showTalkPicker && (
        <div className="fixed inset-0 z-50 flex items-end justify-center">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            onClick={() => setShowTalkPicker(false)}
          />
          
          {/* Sheet */}
          <div className="relative w-full max-w-lg mx-4 mb-4 glass-panel-strong rounded-2xl p-6 slide-up">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-display font-normal">Select Talk</h3>
              <button 
                onClick={() => setShowTalkPicker(false)}
                className="p-2 -mr-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-5 h-5" strokeWidth={1.5} />
              </button>
            </div>
            
            <div className="space-y-2">
              {talkSlots.map((talk) => (
                <button
                  key={talk.id}
                  onClick={() => handleSelectTalk(talk.id)}
                  className={cn(
                    "w-full p-4 rounded-xl text-left transition-all",
                    "glass-panel hover:border-accent/40",
                    selectedTalk === talk.id && "border-accent/60"
                  )}
                >
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-medium text-accent">{talk.time}</span>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-display font-normal">{talk.title}</p>
                      <p className="text-xs text-muted-foreground">{talk.speaker}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
```

---

## Panels SocialContentPanel

**File: `src/components/panels/SocialContentPanel.tsx`**

```tsx
import { Image, Video, Quote, FileText } from "lucide-react";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import samplePost from "@/assets/sample-post.png";
import sampleClips from "@/assets/sample-clips.jpg";
import sampleQuotes from "@/assets/sample-quotes.png";
import samplePress from "@/assets/sample-press.jpg";

interface SocialContentPanelProps {
  onSelectFeature: (feature: string) => void;
}

interface GridItemProps {
  icon: LucideIcon;
  label: string;
  subtitle: string;
  image: string;
  onClick: () => void;
  delay?: number;
}

const GridItem = ({ icon: Icon, label, subtitle, image, onClick, delay = 0 }: GridItemProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "nav-panel p-0 overflow-hidden text-left aspect-[2/3] opacity-0 slide-up",
        "hover:border-accent/40 group"
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Sample Image */}
      <div className="relative h-2/3 overflow-hidden">
        <img 
          src={image} 
          alt={label}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
        <div className="absolute top-3 left-3">
          <Icon className="w-6 h-6 text-foreground drop-shadow-lg" strokeWidth={1} />
        </div>
      </div>
      
      {/* Label */}
      <div className="p-3 h-1/3 flex flex-col justify-center">
        <h3 className="text-sm font-display font-medium tracking-tight text-foreground mb-1">
          {label}
        </h3>
        <p className="text-xs text-muted-foreground leading-relaxed">
          {subtitle}
        </p>
      </div>
    </button>
  );
};

export const SocialContentPanel = ({ onSelectFeature }: SocialContentPanelProps) => {
  const features = [
    {
      id: 'poster',
      icon: Image,
      label: 'Post Generator',
      subtitle: 'Social media posts',
      image: samplePost,
    },
    {
      id: 'clips',
      icon: Video,
      label: 'Highlight Clips',
      subtitle: 'Video with subtitles',
      image: sampleClips,
    },
    {
      id: 'quotes',
      icon: Quote,
      label: 'Quote Cards',
      subtitle: 'Speaker + quote layout',
      image: sampleQuotes,
    },
    {
      id: 'press',
      icon: FileText,
      label: 'Press Releases',
      subtitle: 'Highlighted quotes',
      image: samplePress,
    },
  ];

  return (
    <div className="min-h-screen pb-8">
      <section className="px-4 pt-6">
        <div className="max-w-lg mx-auto">
          {/* Header */}
          <div className="mb-6 opacity-0 fade-in">
            <h2 className="text-2xl font-display font-normal tracking-tight mb-1">From Stage to Feed</h2>
            <p className="text-sm text-muted-foreground">
              Transform live speech into ready-to-publish content.
            </p>
          </div>
          
          {/* 2x2 Grid */}
          <div className="grid grid-cols-2 gap-3">
            {features.map((feature, index) => (
              <GridItem
                key={feature.id}
                icon={feature.icon}
                label={feature.label}
                subtitle={feature.subtitle}
                image={feature.image}
                onClick={() => onSelectFeature(feature.id)}
                delay={100 + index * 50}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
```

---

## Panels MockOutput

**File: `src/components/panels/MockOutput.tsx`**

```tsx
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
```

---

## Panels AnalysisPanel

**File: `src/components/panels/AnalysisPanel.tsx`**

```tsx
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
```

---

## Panels HandoutPanel

**File: `src/components/panels/HandoutPanel.tsx`**

```tsx
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
```

---

## Panels BusinessPanel

**File: `src/components/panels/BusinessPanel.tsx`**

```tsx
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
```

---

## Panels SocialWallPanel

**File: `src/components/panels/SocialWallPanel.tsx`**

```tsx
import { useState } from "react";
import { MessageCircle, Quote, Share2, Heart, User, Send } from "lucide-react";

export const SocialWallPanel = () => {
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState([
    { author: "Julia M.", text: "That micro-grid prediction is huge if accurate 📊", time: "2m ago", likes: 12 },
    { author: "Tech Reporter", text: "Finally someone addressing the regulatory gap honestly", time: "5m ago", likes: 28 },
    { author: "EnergySector", text: "Dr. Vasquez bringing the fire today 🔥", time: "8m ago", likes: 45 },
    { author: "SustainableNow", text: "This is exactly the urgency we need from industry leaders", time: "12m ago", likes: 19 },
    { author: "GridWatcher", text: "The interoperability discussion needs more airtime", time: "15m ago", likes: 8 },
  ]);

  const handleSubmitComment = () => {
    if (!commentText.trim()) return;
    
    const newComment = {
      author: "You",
      text: commentText,
      time: "Just now",
      likes: 0,
    };
    
    setComments([newComment, ...comments]);
    setCommentText("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmitComment();
    }
  };

  return (
    <div className="min-h-screen pb-24">
      <section className="px-4 pt-6">
        <div className="max-w-lg mx-auto space-y-6">
          
          {/* Most Quoted Statement */}
          <div className="opacity-0 slide-up" style={{ animationDelay: '100ms' }}>
            <div className="flex items-center gap-2 mb-3">
              <Quote className="w-4 h-4 text-accent" />
              <span className="text-xs text-muted-foreground uppercase tracking-wide">Most Quoted</span>
            </div>
            <div className="glass-panel-strong rounded-xl p-5 border-l-2 border-l-accent">
              <p className="text-lg font-display font-semibold leading-snug mb-3">
                "The cost of inaction now far exceeds the investment required for transformation."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-accent/20" />
                <div>
                  <p className="text-sm font-medium">Dr. Elena Vasquez</p>
                  <p className="text-xs text-muted-foreground">Shared 847 times</p>
                </div>
              </div>
            </div>
          </div>

          {/* Most Shared Post */}
          <div className="opacity-0 slide-up" style={{ animationDelay: '150ms' }}>
            <div className="flex items-center gap-2 mb-3">
              <Share2 className="w-4 h-4 text-accent" />
              <span className="text-xs text-muted-foreground uppercase tracking-wide">Most Shared</span>
            </div>
            <div className="glass-panel-strong rounded-xl p-5">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <span className="text-sm font-bold text-accent">T</span>
                </div>
                <div>
                  <p className="text-sm font-medium">@TechCrunch</p>
                  <p className="text-xs text-muted-foreground">Verified • 5.2M followers</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed mb-3">
                "40% of commercial buildings as micro-grids by 2030" — Bold prediction from Terraform CEO at #EnergyFuture25. Is this optimistic or inevitable? 🏢⚡
              </p>
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <span>1.2K retweets</span>
                <span>3.4K likes</span>
                <span>89 comments</span>
              </div>
            </div>
          </div>

          {/* Favourite Speaker */}
          <div className="opacity-0 slide-up" style={{ animationDelay: '200ms' }}>
            <div className="flex items-center gap-2 mb-3">
              <Heart className="w-4 h-4 text-accent" />
              <span className="text-xs text-muted-foreground uppercase tracking-wide">Audience Favourite</span>
            </div>
            <div className="glass-panel-strong rounded-xl p-5 flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent/40 to-accent/10 flex items-center justify-center">
                <User className="w-8 h-8 text-accent" />
              </div>
              <div>
                <p className="text-lg font-display font-bold">Dr. Elena Vasquez</p>
                <p className="text-sm text-muted-foreground">Chief Strategy Officer, GridSync</p>
                <div className="flex items-center gap-1 mt-1">
                  <Heart className="w-3 h-3 text-accent fill-accent" />
                  <span className="text-xs text-accent">Most engaging speaker</span>
                </div>
              </div>
            </div>
          </div>

          {/* Comment Input */}
          <div className="opacity-0 slide-up" style={{ animationDelay: '230ms' }}>
            <div className="glass-panel-strong rounded-xl p-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <User className="w-4 h-4 text-accent" />
                </div>
                <input
                  type="text"
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Add your reaction..."
                  className="flex-1 bg-transparent text-sm placeholder:text-muted-foreground focus:outline-none"
                />
                <button
                  onClick={handleSubmitComment}
                  disabled={!commentText.trim()}
                  className="p-2 text-accent hover:text-accent/80 disabled:text-muted-foreground disabled:cursor-not-allowed transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Live Comments */}
          <div className="opacity-0 slide-up" style={{ animationDelay: '250ms' }}>
            <div className="flex items-center gap-2 mb-3">
              <MessageCircle className="w-4 h-4 text-accent" />
              <span className="text-xs text-muted-foreground uppercase tracking-wide">Live Reactions</span>
              <span className="ml-auto phont-badge text-[10px]">Simulated</span>
            </div>
            <div className="space-y-2">
              {comments.map((comment, i) => (
                <div key={i} className="feed-card opacity-0 slide-up" style={{ animationDelay: `${300 + i * 50}ms` }}>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">{comment.author}</span>
                    <span className="text-xs text-muted-foreground">{comment.time}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{comment.text}</p>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Heart className="w-3 h-3" />
                    <span>{comment.likes}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Example indicator */}
          <p className="text-xs text-center text-muted-foreground pt-4">
            Example output • Curated signal feed
          </p>
        </div>
      </section>
    </div>
  );
};
```

---

## Panels FeatureTile

**File: `src/components/panels/FeatureTile.tsx`**

```tsx
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureTileProps {
  icon: LucideIcon;
  label: string;
  description: string;
  onClick: () => void;
  delay?: number;
}

export const FeatureTile = ({ 
  icon: Icon, 
  label, 
  description, 
  onClick,
  delay = 0
}: FeatureTileProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "nav-panel w-full p-4 text-left opacity-0 slide-up",
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 p-2 rounded-lg bg-accent/10 text-accent">
          <Icon className="w-4 h-4" />
        </div>
        <div className="flex-1 space-y-1">
          <h4 className="text-sm font-display font-semibold tracking-tight">
            {label}
          </h4>
          <p className="text-xs text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </button>
  );
};
```

---

## Info InfoScreen

**File: `src/components/info/InfoScreen.tsx`**

```tsx
import { ExternalLink } from "lucide-react";
import phontLogo from "@/assets/phont-logo.png";

export const InfoScreen = () => {
  return (
    <div className="min-h-screen pb-24">
      <section className="px-4 pt-8">
        <div className="max-w-lg mx-auto space-y-8">
          
          {/* Logo and tagline */}
          <div className="text-center space-y-4 opacity-0 fade-in">
            <img src={phontLogo} alt="PHONT" className="h-12 w-auto object-contain mx-auto" />
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
```

---

## Required Assets

Place these images in `src/assets/`:
- `phont-logo.png` - PHONT logo
- `hero-event.jpg` - Hero image for home screen
- `speaker-sarah.jpg` - Speaker avatar
- `sample-post.png` - Social post thumbnail
- `sample-clips.jpg` - Video clips thumbnail
- `sample-quotes.png` - Quote cards thumbnail
- `sample-press.jpg` - Press release thumbnail
- `thumb-post.jpg` - Post generator background
- `thumb-clips.jpg` - Clips generator background
- `thumb-quotes.jpg` - Quote cards background

---

## Dependencies

Make sure to install these packages:
```bash
npm install lucide-react @radix-ui/react-accordion class-variance-authority clsx tailwind-merge
```

---

## Utility Function

**File: `src/lib/utils.ts`**

```ts
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```
