import { ArrowRight, ChevronRight, CreditCard, Landmark, Wallet, Calendar, ShieldCheck, Lock, Shield } from 'lucide-react';
import { motion } from 'motion/react';
import { Screen } from '../types';

export default function PaymentScreen({ onPay }: { onPay: () => void }) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="space-y-6 pb-64 md:pb-12"
    >
      <div className="grid md:grid-cols-3 gap-12 items-start">
        {/* Left Column: Payment Methods */}
        <div className="md:col-span-2 space-y-6 md:space-y-8">
          {/* Payment Options Headline */}
          <div className="px-1">
            <h3 className="font-headline text-xl md:text-2xl font-bold text-on-surface mb-1 md:mb-2">Select Payment Method</h3>
            <p className="text-on-surface-variant text-base md:text-lg">Choose your preferred way to pay</p>
          </div>

          {/* Wallets Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            <button className="bg-surface-container-lowest p-4 md:p-6 rounded-2xl flex flex-col items-center justify-center gap-2 md:gap-3 border border-transparent hover:border-primary/20 transition-all active:scale-95 group shadow-sm">
              <div className="w-12 md:w-14 h-12 md:h-14 rounded-full bg-surface-container-low flex items-center justify-center group-hover:bg-primary-container/20">
                <Wallet className="text-primary" size={24} md:size={32} />
              </div>
              <span className="font-bold text-xs md:text-sm text-on-surface">Genie</span>
            </button>
            <button className="bg-surface-container-lowest p-4 md:p-6 rounded-2xl flex flex-col items-center justify-center gap-2 md:gap-3 border border-transparent hover:border-primary/20 transition-all active:scale-95 group shadow-sm">
              <div className="w-12 md:w-14 h-12 md:h-14 rounded-full bg-surface-container-low flex items-center justify-center group-hover:bg-primary-container/20">
                <Landmark className="text-primary" size={24} md:size={32} />
              </div>
              <span className="font-bold text-xs md:text-sm text-on-surface">FriMi</span>
            </button>
            <button className="bg-surface-container-lowest p-4 md:p-6 rounded-2xl flex flex-col items-center justify-center gap-2 md:gap-3 border border-transparent hover:border-primary/20 transition-all active:scale-95 group shadow-sm">
              <div className="w-12 md:w-14 h-12 md:h-14 rounded-full bg-surface-container-low flex items-center justify-center group-hover:bg-primary-container/20">
                <CreditCard className="text-primary" size={24} md:size={32} />
              </div>
              <span className="font-bold text-xs md:text-sm text-on-surface">Visa</span>
            </button>
            <button className="bg-surface-container-lowest p-4 md:p-6 rounded-2xl flex flex-col items-center justify-center gap-2 md:gap-3 border border-transparent hover:border-primary/20 transition-all active:scale-95 group shadow-sm">
              <div className="w-12 md:w-14 h-12 md:h-14 rounded-full bg-surface-container-low flex items-center justify-center group-hover:bg-primary-container/20">
                <Landmark className="text-primary" size={24} md:size={32} />
              </div>
              <span className="font-bold text-xs md:text-sm text-on-surface">Bank</span>
            </button>
          </div>

          {/* List Options */}
          <div className="space-y-3 md:space-y-4">
            <button className="w-full bg-surface-container-lowest p-4 md:p-6 rounded-2xl flex items-center gap-4 md:gap-5 hover:bg-surface-container-low transition-colors active:scale-[0.99] shadow-sm border border-outline-variant/5">
              <div className="w-10 md:w-12 h-10 md:h-12 rounded-xl bg-surface-container-high flex items-center justify-center">
                <CreditCard className="text-on-surface-variant" size={20} md:size={24} />
              </div>
              <div className="flex-1 text-left">
                <h4 className="font-bold text-on-surface text-sm md:text-base">Cards</h4>
                <p className="text-[10px] md:text-xs text-on-surface-variant">Visa, Mastercard, AMEX</p>
              </div>
              <ChevronRight className="text-on-surface-variant" size={20} md:size={24} />
            </button>
            
            <button className="w-full bg-surface-container-lowest p-4 md:p-6 rounded-2xl flex items-center gap-4 md:gap-5 hover:bg-surface-container-low transition-colors active:scale-[0.99] shadow-sm border border-outline-variant/5">
              <div className="w-10 md:w-12 h-10 md:h-12 rounded-xl bg-surface-container-high flex items-center justify-center">
                <Landmark className="text-on-surface-variant" size={20} md:size={24} />
              </div>
              <div className="flex-1 text-left">
                <h4 className="font-bold text-on-surface text-sm md:text-base">Direct Bank Transfer</h4>
                <p className="text-[10px] md:text-xs text-on-surface-variant">BOC, Sampath, HNB, Commercial</p>
              </div>
              <ChevronRight className="text-on-surface-variant" size={20} md:size={24} />
            </button>

            <button className="w-full bg-surface-container-lowest p-4 md:p-6 rounded-2xl flex items-center gap-4 md:gap-5 hover:bg-surface-container-low transition-colors active:scale-[0.99] shadow-sm border border-outline-variant/5">
              <div className="w-10 md:w-12 h-10 md:h-12 rounded-xl bg-surface-container-high flex items-center justify-center">
                <Calendar className="text-on-surface-variant" size={20} md:size={24} />
              </div>
              <div className="flex-1 text-left">
                <h4 className="font-bold text-on-surface text-sm md:text-base">Koko Pay</h4>
                <p className="text-[10px] md:text-xs text-on-surface-variant">3 Easy installments, 0% interest</p>
              </div>
              <div className="bg-secondary/10 px-2.5 py-0.5 rounded text-[9px] md:text-[10px] font-bold text-secondary uppercase tracking-wider">New</div>
            </button>
          </div>
        </div>

        {/* Right Column: Summary & Pay */}
        <div className="space-y-6 md:sticky md:top-24">
          {/* Summary Section */}
          <section className="bg-surface-container-lowest rounded-3xl p-8 shadow-[0_8px_30px_rgba(24,47,80,0.06)] ring-1 ring-outline-variant/10">
            <div className="flex justify-between items-start mb-6">
              <div>
                <p className="text-on-surface-variant text-[10px] font-bold uppercase tracking-widest">Payment Summary</p>
                <h2 className="text-3xl font-black font-headline tracking-tight text-on-surface mt-2">LKR 1,450.00</h2>
              </div>
              <div className="bg-tertiary/10 px-3 py-1.5 rounded-full flex items-center gap-1.5">
                <ShieldCheck className="text-tertiary" size={14} fill="currentColor" />
                <span className="text-tertiary font-bold text-[10px] uppercase tracking-wider">Secure</span>
              </div>
            </div>
            <div className="space-y-4 pt-6 border-t border-surface-container-low">
              <div className="flex justify-between text-sm">
                <span className="text-on-surface-variant font-medium">Reload Type</span>
                <span className="font-bold">Prepaid Top-up</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-on-surface-variant font-medium">Mobile Number</span>
                <span className="font-bold">+94 77 123 4567</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-on-surface-variant font-medium">Carrier</span>
                <span className="font-bold text-primary">Dialog Axiata</span>
              </div>
            </div>

            <div className="md:mt-10">
              <div className="md:relative fixed bottom-28 md:bottom-0 left-0 w-full px-6 pt-20 pb-4 z-40 max-w-md md:max-w-none left-1/2 -translate-x-1/2 md:translate-x-0 md:left-0 bg-gradient-to-t from-background via-background/95 to-transparent">
                <button 
                  onClick={onPay}
                  className="w-full h-16 signature-gradient text-white font-bold rounded-2xl flex items-center justify-center gap-3 shadow-xl shadow-primary/20 hover:opacity-90 active:scale-95 transition-all md:max-w-md md:mx-auto"
                >
                  <span className="font-headline text-xl">Pay Now</span>
                  <ArrowRight size={24} />
                </button>
              </div>
            </div>
          </section>

          {/* Security Info */}
          <div className="flex flex-col items-center gap-4 py-4 opacity-50">
            <div className="flex gap-6">
              <Shield size={24} />
              <Lock size={24} />
              <ShieldCheck size={24} />
            </div>
            <p className="text-[10px] text-center max-w-[240px] leading-relaxed font-medium">
              Your payment information is encrypted and processed through secure Sri Lankan banking gateways.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
