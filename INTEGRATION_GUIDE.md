# PHONT Live Integration Guide

This guide explains how to integrate the PHONT Live prototype into another Lovable project as a subpage.

---

## Overview

PHONT Live is a mobile-first web app prototype showcasing the transformation of live-transcribed event content into communication, analysis, and business intelligence.

**Key Features:**
- Currently Speaking section with live transcript display
- 5 navigation panels: Social Content, Analysis, Handout, Business, Social Wall
- Social Content sub-features: Post Generator, Highlight Clips, Quote Cards, Press Releases
- Info screen with FAQ accordion
- Dark theme optimized for event environments

---

## Files to Copy

### 1. Components (Required)

Copy the entire `src/components/` directory structure:

```
src/components/
├── home/
│   ├── CurrentlySpeaking.tsx    # Live speaker transcript section
│   ├── FeatureGrid.tsx          # 5-panel navigation grid
│   └── HomeScreen.tsx           # Main home layout
├── info/
│   └── InfoScreen.tsx           # FAQ/Info accordion screen
├── layout/
│   └── Header.tsx               # App header with back navigation
├── panels/
│   ├── AnalysisPanel.tsx        # Analysis feature panel
│   ├── BusinessPanel.tsx        # Business intelligence panel
│   ├── FeatureTile.tsx          # Reusable tile component
│   ├── HandoutPanel.tsx         # Handout generation panel
│   ├── MockOutput.tsx           # Mock output display for features
│   ├── SocialContentPanel.tsx   # Social content sub-navigation
│   └── SocialWallPanel.tsx      # Social wall panel
└── NavLink.tsx                  # Navigation link component
```

### 2. Assets (Required)

Copy the entire `src/assets/` directory:

```
src/assets/
├── hero-event.jpg        # Hero image for home screen
├── phont-logo.png        # PHONT logo
├── sample-clips.jpg      # Sample clips output
├── sample-post.png       # Sample social post
├── sample-poster.jpg     # Sample poster
├── sample-press.jpg      # Sample press release
├── sample-quotes.jpg     # Sample quotes (jpg)
├── sample-quotes.png     # Sample quotes (png)
├── speaker-sarah.jpg     # Speaker avatar
├── thumb-clips.jpg       # Clips thumbnail
├── thumb-post.jpg        # Post thumbnail
└── thumb-quotes.jpg      # Quotes thumbnail
```

### 3. Page Component

Copy `src/pages/Index.tsx` and rename it for your route (e.g., `PhontPage.tsx`):

```tsx
// src/pages/PhontPage.tsx
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

const PhontPage = () => {
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

export default PhontPage;
```

---

## Route Setup

Add the route in your target project's `App.tsx`:

```tsx
import PhontPage from "./pages/PhontPage";

// Inside your Routes component:
<Route path="/phont" element={<PhontPage />} />
```

---

## Dependencies Required

Ensure these packages are installed in your target project:

```bash
# Core UI (likely already installed in Lovable projects)
lucide-react
@radix-ui/react-accordion
@radix-ui/react-avatar

# Fonts (optional - for matching typography)
@fontsource/inter
@fontsource/inter-tight
```

---

## Design System Notes

This prototype uses Lovable's default dark theme with semantic tokens. Key classes used:

- `bg-background` - Main background
- `text-foreground` - Primary text
- `text-muted-foreground` - Secondary text
- `bg-card` - Card backgrounds
- `bg-muted` - Muted backgrounds
- `border-border` - Border colors
- `bg-primary` / `text-primary-foreground` - Primary accent

**Important:** The `dark` class is applied to the root container to force dark mode.

---

## Customization Points

### Event Details
Update in `PhontPage.tsx`:
```tsx
eventTitle={isHome ? "Your Event Name" : undefined}
eventYear={isHome ? "2025" : undefined}
```

### Speaker Info
Update in `CurrentlySpeaking.tsx`:
- Speaker name, title, and avatar
- Transcript content

### Panel Content
Each panel component can be customized:
- `AnalysisPanel.tsx` - Analysis features
- `BusinessPanel.tsx` - Business intelligence features
- `HandoutPanel.tsx` - Handout generation
- `SocialContentPanel.tsx` - Social media features
- `SocialWallPanel.tsx` - Social wall display

---

## Quick Start Prompt

If you prefer to have Lovable rebuild this in your project, use this prompt:

```
Create a /phont subpage with a mobile-first dark-themed event speaker interface:

1. Home screen with:
   - Header showing event name and year
   - "Currently Speaking" section with speaker avatar, name, title, and live transcript
   - 5-panel grid navigation: Social Content, Analysis, Handout, Business, Social Wall

2. Social Content panel with 4 sub-features:
   - Post Generator, Highlight Clips, Quote Cards, Press Releases
   - Each shows a mock output preview

3. Other panels show placeholder content

4. Info screen with FAQ accordion

5. Navigation: back button in header, info icon on home

Use dark theme throughout. All content is placeholder/prototype.
```

---

## File Checklist

- [ ] `src/components/home/CurrentlySpeaking.tsx`
- [ ] `src/components/home/FeatureGrid.tsx`
- [ ] `src/components/home/HomeScreen.tsx`
- [ ] `src/components/info/InfoScreen.tsx`
- [ ] `src/components/layout/Header.tsx`
- [ ] `src/components/panels/AnalysisPanel.tsx`
- [ ] `src/components/panels/BusinessPanel.tsx`
- [ ] `src/components/panels/FeatureTile.tsx`
- [ ] `src/components/panels/HandoutPanel.tsx`
- [ ] `src/components/panels/MockOutput.tsx`
- [ ] `src/components/panels/SocialContentPanel.tsx`
- [ ] `src/components/panels/SocialWallPanel.tsx`
- [ ] `src/components/NavLink.tsx`
- [ ] `src/assets/*` (all image files)
- [ ] `src/pages/PhontPage.tsx` (renamed from Index.tsx)
- [ ] Route added to `App.tsx`

---

## Support

This is a prototype with placeholder content. All data is fictional and for demonstration purposes only.
