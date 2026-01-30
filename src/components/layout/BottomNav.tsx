import { Home, LayoutGrid, Info } from "lucide-react";
import { cn } from "@/lib/utils";

interface BottomNavProps {
  activeTab: 'home' | 'panels' | 'info';
  onTabChange: (tab: 'home' | 'panels' | 'info') => void;
}

export const BottomNav = ({ activeTab, onTabChange }: BottomNavProps) => {
  const tabs = [
    { id: 'home' as const, icon: Home, label: 'Home' },
    { id: 'panels' as const, icon: LayoutGrid, label: 'Panels' },
    { id: 'info' as const, icon: Info, label: 'Info' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 glass-panel-strong border-t border-border/50">
      <div className="flex items-center justify-around h-16 max-w-lg mx-auto">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={cn(
                "flex flex-col items-center justify-center gap-1 px-6 py-2 transition-all duration-200",
                isActive 
                  ? "text-accent" 
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <Icon className={cn("w-5 h-5", isActive && "drop-shadow-[0_0_8px_hsl(var(--accent))]")} />
              <span className="text-xs font-medium">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
