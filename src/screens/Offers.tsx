import { Gift, Stars, Zap, Timer, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

const CATEGORIES = ['All', 'Data', 'Voice', 'Cashback', 'Rewards'];

const OFFERS_LIST = [
  { id: '1', title: '10GB Extra Data', desc: 'Valid for 7 days on any top-up above Rs. 500', type: 'Data', points: 200, color: 'bg-primary' },
  { id: '2', title: '15% Cashback', desc: 'Get instant cashback on your first Visa payment', type: 'Cashback', points: 0, color: 'bg-secondary' },
  { id: '3', title: 'Night Time Unlimited', desc: 'Unlimited data from 12 AM to 5 AM', type: 'Data', points: 150, color: 'bg-tertiary' },
  { id: '4', title: 'Triple Talk Time', desc: '3x talk time on all Mobitel recharges', type: 'Voice', points: 100, color: 'bg-primary-container' },
];

export default function OffersScreen() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-5xl mx-auto space-y-8 pb-12"
    >
      <div>
        <h2 className="text-3xl font-extrabold tracking-tight font-headline text-on-surface">Offers</h2>
        <p className="text-on-surface-variant text-sm">Exclusive deals just for you</p>
      </div>

      {/* Points Summary */}
      <section className="signature-gradient p-6 rounded-2xl text-white flex justify-between items-center shadow-lg">
        <div className="space-y-1">
          <p className="text-xs font-bold uppercase tracking-widest opacity-80">Available Points</p>
          <div className="flex items-center gap-2">
            <Stars size={24} fill="currentColor" />
            <span className="text-3xl font-black font-headline">2,450</span>
          </div>
        </div>
        <button className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-xl text-xs font-bold hover:bg-white/30 transition-all">
          Redeem
        </button>
      </section>

      {/* Categories */}
      <div className="flex gap-3 overflow-x-auto no-scrollbar -mx-6 px-6">
        {CATEGORIES.map((cat, i) => (
          <button 
            key={cat}
            className={`px-5 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all ${
              i === 0 ? 'bg-primary text-white' : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Offers List */}
      <div className="grid md:grid-cols-2 gap-6">
        {OFFERS_LIST.map((offer) => (
          <div 
            key={offer.id}
            className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm border border-outline-variant/5 group cursor-pointer"
          >
            <div className={`h-2 ${offer.color}`}></div>
            <div className="p-5 flex gap-4">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${offer.color} bg-opacity-10 text-on-surface`}>
                {offer.type === 'Data' ? <Zap size={24} /> : offer.type === 'Cashback' ? <Gift size={24} /> : <Timer size={24} />}
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <h4 className="font-bold text-on-surface text-lg">{offer.title}</h4>
                  {offer.points > 0 && (
                    <span className="text-[10px] font-bold bg-tertiary/10 text-tertiary px-2 py-0.5 rounded">
                      {offer.points} PTS
                    </span>
                  )}
                </div>
                <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">{offer.desc}</p>
                <div className="mt-4 flex items-center text-primary font-bold text-xs gap-1 group-hover:translate-x-1 transition-transform">
                  Claim Now <ChevronRight size={14} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
