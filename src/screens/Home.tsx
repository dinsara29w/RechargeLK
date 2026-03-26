import { ArrowRight, RefreshCw, QrCode } from 'lucide-react';
import { motion } from 'motion/react';
import { OPERATORS, OFFERS } from '../constants';
import { Screen, Operator } from '../types';

export default function HomeScreen({ onSelectOperator, onNavigate }: { onSelectOperator: (op: Operator) => void; onNavigate: (s: Screen) => void }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8 pb-64 md:pb-12"
    >
      {/* Hero Section */}
      <section className="relative grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="space-y-3 md:space-y-4">
          <h2 className="text-3xl md:text-6xl font-extrabold tracking-tight font-headline text-on-surface leading-tight">
            Instant <span className="text-primary">Connection.</span>
          </h2>
          <p className="text-on-surface-variant text-base md:text-xl max-w-md">Top up any Sri Lankan number in seconds with our secure and lightning-fast platform.</p>
          
          <div className="hidden md:flex items-center gap-4 pt-4">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                  <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" />
                </div>
              ))}
            </div>
            <p className="text-sm font-medium text-on-surface-variant">
              <span className="text-primary font-bold">10k+</span> users recharged today
            </p>
          </div>
        </div>

        <div className="bg-surface-container-lowest p-1 md:p-4 rounded-3xl shadow-[0_20px_50px_rgba(24,47,80,0.08)] ring-1 ring-outline-variant/15">
          <div className="bg-surface-container-low rounded-2xl p-5 md:p-8 space-y-5 md:space-y-6">
            <div className="space-y-1 md:space-y-2">
              <label className="text-[10px] md:text-sm font-bold text-on-surface-variant uppercase tracking-widest px-1">Enter Mobile Number</label>
              <div className="flex items-center bg-white rounded-2xl px-4 md:px-5 py-3 md:py-4 shadow-sm ring-1 ring-outline-variant/10 focus-within:ring-2 focus-within:ring-primary transition-all">
                <span className="text-on-surface-variant font-bold mr-2 md:mr-3 text-lg md:text-xl">+94</span>
                <input 
                  className="bg-transparent border-none focus:ring-0 text-xl md:text-2xl font-bold tracking-widest placeholder:text-outline-variant w-full text-on-surface" 
                  placeholder="7X XXX XXXX" 
                  type="tel"
                />
              </div>
            </div>
            <button 
              onClick={() => onSelectOperator(OPERATORS[0])}
              className="w-full signature-gradient text-white py-4 md:py-5 rounded-2xl font-bold text-lg md:text-xl shadow-lg shadow-primary/20 hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-3"
            >
              Recharge Now
              <ArrowRight size={20} className="md:w-6 md:h-6" />
            </button>
          </div>
        </div>
      </section>

      {/* Carrier Selection */}
      <section className="space-y-3 md:space-y-4">
        <div className="flex justify-between items-end px-1">
          <h3 className="text-lg md:text-xl font-bold font-headline">Select Operator</h3>
          <span className="text-primary text-xs md:text-sm font-semibold cursor-pointer">View all</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {OPERATORS.map((op) => (
            <button 
              key={op.id}
              onClick={() => onSelectOperator(op)}
              className="bg-surface-container-lowest p-4 md:p-5 rounded-2xl flex flex-col items-start gap-3 md:gap-4 hover:bg-surface-container-low transition-colors ring-1 ring-outline-variant/10 group text-left"
            >
              <div className="w-14 md:w-16 h-14 md:h-16 rounded-xl bg-surface-container-low flex items-center justify-center group-hover:bg-white transition-colors overflow-hidden">
                <img src={op.logo} alt={op.name} className="w-10 md:w-12 h-10 md:h-12 object-contain rounded" referrerPolicy="no-referrer" />
              </div>
              <div>
                <p className="font-bold text-sm md:text-base text-on-surface">{op.name}</p>
                <p className="text-[9px] md:text-[10px] text-on-surface-variant uppercase tracking-widest">{op.tagline}</p>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Hot Offers */}
      <section className="space-y-3 md:space-y-4">
        <h3 className="text-lg md:text-2xl font-bold font-headline text-on-surface px-1">Hot Offers</h3>
        <div className="flex overflow-x-auto pb-4 gap-4 md:gap-6 snap-x no-scrollbar -mx-6 px-6">
          {OFFERS.map((offer) => (
            <div 
              key={offer.id}
              className="snap-center shrink-0 w-[280px] md:w-[380px] h-[160px] md:h-[220px] rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-10 relative overflow-hidden flex flex-col justify-between text-white shadow-xl ring-1 ring-white/10"
            >
              <div 
                className="absolute inset-0 opacity-100 -z-10" 
                style={{ background: offer.color }}
              ></div>
              <div 
                className="absolute inset-0 bg-cover bg-center -z-20 opacity-20" 
                style={{ backgroundImage: `url(${offer.image})` }}
              ></div>
              
              <div className="space-y-3">
                <span className="bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest inline-block">
                  {offer.tag}
                </span>
                <h4 className="text-3xl font-extrabold tracking-tight">{offer.title}</h4>
              </div>

              <div className="flex justify-between items-end">
                <p className="text-sm font-medium opacity-90 max-w-[120px] leading-tight">
                  {offer.subtitle}
                </p>
                <button className="bg-white text-on-surface px-6 py-2.5 rounded-full text-xs font-bold hover:scale-105 transition-transform shadow-md">
                  Claim
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Balance Visualizer */}
      <section className="bg-surface-container-low p-6 md:p-10 rounded-2xl grid md:grid-cols-3 gap-8 items-center">
        <div className="flex justify-between items-center md:col-span-1">
          <h3 className="font-bold text-on-surface text-lg">Quick Balance Check</h3>
          <RefreshCw className="text-primary cursor-pointer md:hidden" size={20} />
        </div>
        <div className="space-y-4 md:col-span-2 grid md:grid-cols-2 gap-8">
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-medium text-on-surface-variant">
              <span>Main Balance</span>
              <span>Rs. 452.00</span>
            </div>
            <div className="h-2 w-full bg-surface-container-high rounded-full overflow-hidden">
              <div className="h-full signature-gradient w-2/3"></div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-medium text-on-surface-variant">
              <span>Any-time Data</span>
              <span>12.4 GB / 20 GB</span>
            </div>
            <div className="h-2 w-full bg-surface-container-high rounded-full overflow-hidden">
              <div className="h-full bg-tertiary w-3/4"></div>
            </div>
          </div>
        </div>
        <div className="hidden md:flex justify-end">
          <button className="bg-white p-3 rounded-xl text-primary shadow-sm hover:scale-110 transition-transform">
            <RefreshCw size={24} />
          </button>
        </div>
      </section>

      {/* FAB */}
      <button className="fixed bottom-24 right-6 signature-gradient w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-lg hover:scale-105 active:scale-95 transition-all z-40">
        <QrCode size={32} />
      </button>
    </motion.div>
  );
}
