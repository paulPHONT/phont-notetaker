import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { BottomNav } from "@/components/layout/BottomNav";
import { HomeScreen } from "@/components/home/HomeScreen";
import { SocialContentPanel } from "@/components/panels/SocialContentPanel";
import { MockOutput } from "@/components/panels/MockOutput";
import { AnalysisPanel } from "@/components/panels/AnalysisPanel";
import { HandoutPanel } from "@/components/panels/HandoutPanel";
import { BusinessPanel } from "@/components/panels/BusinessPanel";
import { SocialWallPanel } from "@/components/panels/SocialWallPanel";
import { InfoScreen } from "@/components/info/InfoScreen";

type Tab = 'home' | 'panels' | 'info';
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
  const [activeTab, setActiveTab] = useState<Tab>('home');
  const [activePanel, setActivePanel] = useState<Panel>(null);
  const [activeFeature, setActiveFeature] = useState<Feature>(null);

  const handleNavigate = (panel: string) => {
    setActivePanel(panel as Panel);
    setActiveTab('panels');
  };

  const handleSelectFeature = (feature: string) => {
    setActiveFeature(feature as Feature);
  };

  const handleBack = () => {
    if (activeFeature) {
      setActiveFeature(null);
    } else if (activePanel) {
      setActivePanel(null);
      setActiveTab('home');
    }
  };

  const handleTabChange = (tab: Tab) => {
    setActiveTab(tab);
    if (tab === 'home') {
      setActivePanel(null);
      setActiveFeature(null);
    }
  };

  const getTitle = () => {
    if (activeFeature && featureTitles[activeFeature]) {
      return featureTitles[activeFeature];
    }
    if (activePanel && panelTitles[activePanel]) {
      return panelTitles[activePanel];
    }
    return undefined;
  };

  const showBack = Boolean(activePanel || activeFeature);

  const renderContent = () => {
    // Info tab
    if (activeTab === 'info') {
      return <InfoScreen />;
    }

    // Feature view (inside Social Content)
    if (activeFeature) {
      return <MockOutput type={activeFeature} />;
    }

    // Panel views
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

    // Home screen
    return <HomeScreen onNavigate={handleNavigate} />;
  };

  return (
    <div className="min-h-screen bg-background dark">
      <Header 
        title={getTitle()} 
        showBack={showBack} 
        onBack={handleBack} 
      />
      
      <main className="pt-0">
        {renderContent()}
      </main>
      
      <BottomNav 
        activeTab={activeTab} 
        onTabChange={handleTabChange} 
      />
    </div>
  );
};

export default Index;
