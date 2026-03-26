import { User, Settings, CreditCard, Bell, Shield, LogOut, ChevronRight, HelpCircle } from 'lucide-react';
import { motion } from 'motion/react';

const MENU_ITEMS = [
  { id: 'profile', label: 'Personal Profile', icon: User, desc: 'Edit your account details' },
  { id: 'payments', label: 'Payment Methods', icon: CreditCard, desc: 'Manage your cards and wallets' },
  { id: 'notifications', label: 'Notifications', icon: Bell, desc: 'Alerts and updates preferences' },
  { id: 'security', label: 'Security', icon: Shield, desc: 'Passwords and biometric login' },
  { id: 'help', label: 'Help & Support', icon: HelpCircle, desc: 'FAQs and contact us' },
  { id: 'settings', label: 'App Settings', icon: Settings, desc: 'Theme and language' },
];

export default function AccountScreen() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto space-y-8 pb-48 md:pb-12"
    >
      {/* Profile Header */}
      <section className="flex flex-col md:flex-row items-center text-center md:text-left gap-8 bg-surface-container-low p-8 rounded-[2rem]">
        <div className="relative">
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-3xl overflow-hidden border-4 border-primary-container shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200" 
              alt="User" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <button className="absolute bottom-0 right-0 bg-primary text-white p-2.5 rounded-xl shadow-md border-2 border-white">
            <Settings size={16} />
          </button>
        </div>
        <div className="flex-1">
          <h2 className="text-3xl font-extrabold font-headline text-on-surface">Chamath Perera</h2>
          <p className="text-on-surface-variant text-lg">+94 77 123 4567</p>
          <div className="mt-3 inline-flex items-center gap-2 bg-tertiary/10 text-tertiary px-4 py-1.5 rounded-full text-xs font-bold uppercase">
            <Shield size={12} fill="currentColor" /> Verified Member
          </div>
        </div>
        <div className="hidden md:flex gap-4">
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-outline-variant/10 text-center min-w-[120px]">
            <p className="text-[10px] font-bold text-on-surface-variant uppercase">Points</p>
            <p className="text-2xl font-black text-primary">2,450</p>
          </div>
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-outline-variant/10 text-center min-w-[120px]">
            <p className="text-[10px] font-bold text-on-surface-variant uppercase">Savings</p>
            <p className="text-2xl font-black text-tertiary">Rs. 840</p>
          </div>
        </div>
      </section>

      {/* Menu List */}
      <div className="grid md:grid-cols-2 gap-4">
        {MENU_ITEMS.map((item) => {
          const Icon = item.icon;
          return (
            <button 
              key={item.id}
              className="w-full bg-surface-container-lowest p-6 rounded-2xl flex items-center gap-4 hover:bg-surface-container-low transition-colors active:scale-[0.98] shadow-sm border border-outline-variant/5"
            >
              <div className="w-12 h-12 rounded-xl bg-surface-container-low flex items-center justify-center text-primary">
                <Icon size={24} />
              </div>
              <div className="flex-1 text-left">
                <h4 className="font-bold text-on-surface text-base">{item.label}</h4>
                <p className="text-xs text-on-surface-variant">{item.desc}</p>
              </div>
              <ChevronRight className="text-on-surface-variant opacity-30" size={24} />
            </button>
          );
        })}
      </div>

      {/* Logout */}
      <button className="w-full flex items-center justify-center gap-2 py-4 text-secondary font-bold hover:bg-secondary/5 rounded-2xl transition-colors">
        <LogOut size={20} />
        Sign Out
      </button>

      <div className="text-center opacity-30 py-4">
        <p className="text-[10px] font-medium">RechargeLK v2.4.1</p>
      </div>
    </motion.div>
  );
}
