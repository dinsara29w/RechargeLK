import { CheckCircle, Download, PlusCircle, Stars, ChevronRight, Copy, Radio } from 'lucide-react';
import { motion } from 'motion/react';
import { Screen } from '../types';

export default function SuccessScreen({ onReset }: { onReset: () => void }) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center pb-48 md:pb-12"
    >
      {/* Success Hero */}
      <section className="w-full flex flex-col items-center text-center mb-6 md:mb-10 pt-4 md:pt-8">
        <div className="relative mb-6 md:mb-8">
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', damping: 12, stiffness: 200 }}
            className="w-24 md:w-32 h-24 md:h-32 rounded-full bg-tertiary-container/20 flex items-center justify-center"
          >
            <div className="w-18 md:w-24 h-18 md:h-24 rounded-full bg-tertiary flex items-center justify-center shadow-2xl">
              <CheckCircle className="text-white text-4xl md:text-5xl" size={40} md:size={56} fill="currentColor" />
            </div>
          </motion.div>
          <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-secondary animate-pulse"></div>
          <div className="absolute bottom-2 -left-4 w-6 h-6 rounded-full bg-primary-container animate-bounce"></div>
        </div>
        <h2 className="font-headline text-3xl md:text-5xl font-black tracking-tight text-on-surface mb-3 md:mb-4">Recharge Successful!</h2>
        <p className="text-on-surface-variant text-base md:text-xl font-medium max-w-md px-4">Your connection is now active and ready. We've sent a confirmation SMS to your number.</p>
      </section>

      {/* Main Content Grid */}
      <div className="w-full max-w-2xl mx-auto space-y-6 md:space-y-8 px-4 md:px-0">
        {/* Receipt Card */}
        <div className="bg-surface-container-lowest rounded-3xl p-6 md:p-12 shadow-[0_20px_60px_rgba(24,47,80,0.08)] relative overflow-hidden ring-1 ring-outline-variant/10">
          {/* Receipt Edge */}
          <div className="absolute bottom-0 left-0 w-full h-1.5 flex justify-between px-1">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="w-3 h-3 bg-background rounded-full -mb-1.5"></div>
            ))}
          </div>

          <div className="flex flex-col items-center border-b border-surface-container-low pb-6 md:pb-8 mb-6 md:mb-8">
            <span className="text-[10px] md:text-xs font-bold text-primary uppercase tracking-[0.2em] mb-2 md:mb-3">Total Amount Paid</span>
            <span className="font-headline text-4xl md:text-6xl font-black text-on-surface">Rs. 1,450.00</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-5 md:gap-y-6">
            <div className="space-y-0.5 md:space-y-1">
              <span className="text-on-surface-variant text-[10px] md:text-xs font-bold uppercase tracking-widest">Mobile Number</span>
              <p className="text-on-surface font-bold text-lg md:text-xl">+94 77 123 4567</p>
            </div>
            <div className="space-y-0.5 md:space-y-1">
              <span className="text-on-surface-variant text-[10px] md:text-xs font-bold uppercase tracking-widest">Operator</span>
              <div className="flex items-center gap-2">
                <div className="w-5 md:w-6 h-5 md:h-6 rounded bg-surface-container-high flex items-center justify-center">
                  <Radio className="text-primary" size={12} md:size={14} />
                </div>
                <p className="text-on-surface font-bold text-lg md:text-xl">Dialog Axiata</p>
              </div>
            </div>
            <div className="space-y-0.5 md:space-y-1">
              <span className="text-on-surface-variant text-[10px] md:text-xs font-bold uppercase tracking-widest">Transaction ID</span>
              <div className="flex items-center gap-2">
                <p className="text-on-surface font-mono font-bold text-base md:text-lg">TXN-882944102</p>
                <Copy className="text-primary cursor-pointer hover:scale-110 transition-transform" size={16} md:size={18} />
              </div>
            </div>
            <div className="space-y-0.5 md:space-y-1">
              <span className="text-on-surface-variant text-[10px] md:text-xs font-bold uppercase tracking-widest">Date & Time</span>
              <p className="text-on-surface font-bold text-base md:text-lg">Oct 24, 2023 • 14:32</p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          <button className="w-full signature-gradient text-white py-4 md:py-5 rounded-2xl font-headline font-bold text-lg md:text-xl flex items-center justify-center gap-3 hover:opacity-90 active:scale-95 transition-all shadow-xl shadow-primary/20">
            <Download size={20} md:size={24} />
            Download Receipt
          </button>
          <button 
            onClick={onReset}
            className="w-full bg-surface-container-low text-primary py-4 md:py-5 rounded-2xl font-headline font-bold text-lg md:text-xl flex items-center justify-center gap-3 hover:bg-surface-container transition-colors border border-primary/10"
          >
            <PlusCircle size={20} md:size={24} />
            Recharge Another
          </button>
        </div>

        {/* Rewards Teaser */}
        <div className="p-6 bg-secondary-container/20 rounded-2xl flex items-center gap-6 border border-secondary-container/30">
          <div className="w-16 h-16 rounded-2xl bg-secondary-container flex items-center justify-center shrink-0 shadow-sm">
            <Stars className="text-on-secondary-container" size={32} fill="currentColor" />
          </div>
          <div className="flex-1">
            <p className="text-lg font-black text-on-secondary-container font-headline">You earned 45 points!</p>
            <p className="text-sm text-on-secondary-container/80 font-medium">Redeem them for data packs or cashback in the offers tab.</p>
          </div>
          <ChevronRight className="text-on-secondary-container opacity-50" size={24} />
        </div>
      </div>

      {/* Rewards Teaser */}
      <div className="mt-8 w-full p-4 bg-secondary-container/30 rounded-lg flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center shrink-0">
          <Stars className="text-on-secondary-container" size={24} fill="currentColor" />
        </div>
        <div>
          <p className="text-sm font-bold text-on-secondary-container">You earned 45 points!</p>
          <p className="text-xs text-on-secondary-container/80">Check your rewards in the offers tab.</p>
        </div>
        <ChevronRight className="text-on-secondary-container ml-auto" size={20} />
      </div>
    </motion.div>
  );
}
