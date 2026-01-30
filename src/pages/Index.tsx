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
  'social': 'Social Content API',
  'analysis': 'Analysis',
  'handout': 'Handout',
  'business': 'Business',
  'social-wall': 'Social Wall',
};

const featureTitles: Record<string, string> = {
  'poster': 'Poster Generator',
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
          return <HomeScreen onNavigate={handleNavigate} />;
      }
    }

    return <HomeScreen onNavigate={handleNavigate} />;
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
