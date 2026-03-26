import { Bolt, Home, History, Tag, User } from 'lucide-react';
import { Screen } from '../types';

interface TopBarProps {
  showBack?: boolean;
  onBack?: () => void;
  currentScreen: Screen;
  onNavigate: (screen: Screen) => void;
}

export default function TopBar({ showBack, onBack, currentScreen, onNavigate }: TopBarProps) {
  const navItems = [
    { id: Screen.HOME, label: 'Home', icon: Home },
    { id: Screen.HISTORY, label: 'History', icon: History },
    { id: Screen.OFFERS, label: 'Offers', icon: Tag },
    { id: Screen.ACCOUNT, label: 'Account', icon: User },
  ];

  return (
    <header className="bg-background/80 backdrop-blur-xl sticky top-0 z-50 border-b border-surface-container-low">
      <div className="flex justify-between items-center px-6 h-16 w-full max-w-7xl mx-auto">
        <div className="flex items-center gap-3 md:gap-8">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => onNavigate(Screen.HOME)}>
            {showBack ? (
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  onBack?.();
                }}
                className="text-primary hover:bg-surface-container-low p-2 rounded-full transition-colors active:scale-95"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
              </button>
            ) : (
              <Bolt className="text-primary text-2xl" />
            )}
            <h1 className="text-xl font-bold tracking-tighter text-primary font-headline">RechargeLK</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = currentScreen === item.id;
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-200 ${
                    isActive 
                      ? 'bg-primary text-white shadow-lg shadow-primary/20' 
                      : 'text-on-surface-variant hover:bg-surface-container-low hover:text-primary'
                  }`}
                >
                  <Icon size={18} />
                  <span className="text-sm font-semibold font-headline">{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex flex-col items-end">
            <span className="text-sm font-bold text-on-surface font-headline">John Doe</span>
            <span className="text-[10px] text-on-surface-variant uppercase tracking-widest font-medium">Premium Member</span>
          </div>
          <div className="h-10 w-10 rounded-full overflow-hidden border-2 border-primary-container shadow-sm">
            <img 
              alt="User profile" 
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=100"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
