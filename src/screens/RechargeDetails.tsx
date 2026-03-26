import { ChevronRight, Contact, PlayCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { PACKS } from '../constants';
import { Operator, Screen } from '../types';

export default function RechargeDetailsScreen({ operator, onProceed }: { operator: Operator; onProceed: () => void }) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="max-w-4xl mx-auto space-y-8 pb-64 md:pb-12"
    >
      {/* Operator Context */}
      <section className="flex items-center gap-4 md:gap-6 bg-surface-container-low p-4 md:p-6 rounded-2xl">
        <div className="w-16 md:w-20 h-16 md:h-20 bg-surface-container-lowest rounded-xl flex items-center justify-center shadow-sm overflow-hidden">
          <img 
            src={operator.logo} 
            alt={operator.name} 
            className="w-12 md:w-16 h-12 md:h-16 object-contain rounded-sm"
            referrerPolicy="no-referrer"
          />
        </div>
        <div>
          <p className="text-on-surface-variant text-[9px] md:text-[10px] font-medium uppercase tracking-wider">Operator</p>
          <h2 className="text-on-surface text-base md:text-lg font-bold font-headline">{operator.name} Axiata</h2>
        </div>
        <button className="ml-auto text-primary text-xs md:text-sm font-semibold hover:underline">Change</button>
      </section>

      {/* Input Section */}
      <section className="grid md:grid-cols-2 gap-6 md:gap-8">
        <div className="space-y-1.5 md:space-y-2">
          <label className="text-on-surface font-semibold text-xs md:text-sm px-1">Mobile Number</label>
          <div className="relative group">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium text-sm md:text-base">+94</span>
            <input 
              type="tel" 
              placeholder="77 123 4567" 
              defaultValue="77 123 4567"
              className="w-full pl-12 md:pl-14 pr-10 md:pr-12 py-3.5 md:py-4 bg-surface-container-low border-none rounded-xl focus:ring-2 focus:ring-primary transition-all text-on-surface font-semibold text-base md:text-lg placeholder:text-outline-variant"
            />
            <Contact className="absolute right-4 top-1/2 -translate-y-1/2 text-primary" size={20} />
          </div>
        </div>

        <div className="space-y-1.5 md:space-y-2">
          <label className="text-on-surface font-semibold text-xs md:text-sm px-1">Amount (LKR)</label>
          <div className="relative">
            <input 
              type="text" 
              placeholder="0.00" 
              className="w-full px-4 py-4 md:py-5 bg-surface-container-lowest shadow-sm border-none rounded-xl focus:ring-2 focus:ring-primary transition-all text-on-surface font-extrabold text-2xl md:text-3xl placeholder:text-outline-variant"
            />
            <div className="absolute right-3 md:right-4 top-1/2 -translate-y-1/2 flex gap-1.5 md:gap-2">
              <button className="bg-surface-container-high px-2.5 md:px-3 py-1 rounded-full text-[9px] md:text-[10px] font-bold text-primary hover:bg-primary hover:text-white transition-colors">Rs. 100</button>
              <button className="bg-surface-container-high px-2.5 md:px-3 py-1 rounded-full text-[9px] md:text-[10px] font-bold text-primary hover:bg-primary hover:text-white transition-colors">Rs. 500</button>
            </div>
          </div>
        </div>
      </section>

      {/* Packs Section */}
      <section className="space-y-3 md:space-y-4">
        <div className="flex items-center justify-between px-1">
          <h3 className="font-headline font-bold text-base md:text-lg">Browse Packs</h3>
          <div className="flex gap-1 bg-surface-container-low p-1 rounded-full">
            <button className="px-3 md:px-4 py-1 rounded-full bg-primary text-white text-[10px] md:text-xs font-semibold">Data</button>
            <button className="px-3 md:px-4 py-1 rounded-full text-on-surface-variant text-[10px] md:text-xs font-semibold hover:bg-surface-container-high transition-colors">Voice</button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {PACKS.map((pack) => (
            <div 
              key={pack.id}
              className={`${
                pack.tag ? 'col-span-2 md:col-span-1 bg-primary text-white' : 'bg-surface-container-lowest border border-outline-variant/10'
              } relative overflow-hidden rounded-xl p-4 md:p-5 cursor-pointer active:scale-[0.98] transition-all shadow-sm`}
            >
              <div className="relative z-10">
                {pack.tag && (
                  <span className="bg-tertiary text-white px-2 py-0.5 rounded text-[9px] md:text-[10px] font-bold uppercase tracking-widest">
                    {pack.tag}
                  </span>
                )}
                <h4 className={`font-bold font-headline mt-1.5 md:mt-2 ${pack.tag ? 'text-xl md:text-2xl font-black' : 'text-sm md:text-on-surface'}`}>
                  {pack.name}
                </h4>
                <p className={`${pack.tag ? 'text-primary-container' : 'text-on-surface-variant'} text-[10px] md:text-xs font-medium`}>
                  {pack.description}
                </p>
                <div className="mt-3 md:mt-4 flex items-baseline justify-between">
                  <div className="flex items-baseline gap-1">
                    <span className={`${pack.tag ? 'text-2xl md:text-3xl' : 'text-primary text-base md:text-lg'} font-bold`}>Rs. {pack.price}</span>
                    <span className={`text-[9px] md:text-[10px] ${pack.tag ? 'opacity-70' : 'text-on-surface-variant'}`}>/ {pack.validity}</span>
                  </div>
                </div>
              </div>
              {pack.tag && (
                <>
                  <div className="absolute -right-4 -bottom-4 w-24 h-24 md:w-32 md:h-32 bg-primary-container rounded-full blur-3xl opacity-30"></div>
                  <PlayCircle className="absolute right-4 md:right-6 top-4 md:top-6 opacity-20" size={48} md:size={64} fill="currentColor" />
                </>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Proceed Button */}
      <div className="md:pt-8">
        <div className="md:relative fixed bottom-28 md:bottom-0 left-0 w-full px-6 pt-20 pb-4 z-40 max-w-md md:max-w-none left-1/2 -translate-x-1/2 md:translate-x-0 md:left-0 bg-gradient-to-t from-background via-background/95 to-transparent">
          <button 
            onClick={onProceed}
            className="w-full bg-secondary text-white py-5 rounded-xl font-bold text-lg shadow-[0_12px_24px_-8px_rgba(160,58,15,0.4)] flex items-center justify-center gap-2 hover:opacity-90 active:scale-95 transition-all md:max-w-md md:mx-auto"
          >
            Proceed to Pay
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
