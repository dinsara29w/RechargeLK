import { Home, History, Tag, User } from 'lucide-react';
import { Screen } from '../types';

export default function BottomNav({ currentScreen, onNavigate }: { currentScreen: Screen; onNavigate: (screen: Screen) => void }) {
  const tabs = [
    { id: Screen.HOME, label: 'Home', icon: Home },
    { id: Screen.HISTORY, label: 'History', icon: History },
    { id: Screen.OFFERS, label: 'Offers', icon: Tag },
    { id: Screen.ACCOUNT, label: 'Account', icon: User },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-6 pt-3 bg-white/80 backdrop-blur-xl rounded-t-[2rem] shadow-[0_-4px_20px_0_rgba(24,47,80,0.06)] max-w-md left-1/2 -translate-x-1/2 border-t border-white/20">
      {tabs.map((tab) => {
        const isActive = currentScreen === tab.id;
        const Icon = tab.icon;
        
        return (
          <button
            key={tab.id}
            onClick={() => onNavigate(tab.id as Screen)}
            className={`flex flex-col items-center justify-center transition-all duration-200 px-4 py-1.5 rounded-xl active:scale-90 ${
              isActive 
                ? 'text-primary bg-surface-container-low' 
                : 'text-on-surface-variant opacity-70 hover:opacity-100'
            }`}
          >
            <Icon size={24} fill={isActive ? 'currentColor' : 'none'} />
            <span className="text-[11px] font-medium tracking-wide mt-0.5 font-headline">{tab.label}</span>
          </button>
        );
      })}
    </nav>
  );
}
