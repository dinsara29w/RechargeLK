import { Search, Filter, ChevronRight, Clock, CheckCircle, XCircle } from 'lucide-react';
import { motion } from 'motion/react';

const TRANSACTIONS = [
  { id: '1', date: 'Oct 24, 2023', time: '14:32', amount: '1,450.00', number: '+94 77 123 4567', operator: 'Dialog', status: 'success' },
  { id: '2', date: 'Oct 20, 2023', time: '09:15', amount: '500.00', number: '+94 71 987 6543', operator: 'Mobitel', status: 'success' },
  { id: '3', date: 'Oct 15, 2023', time: '18:45', amount: '2,000.00', number: '+94 77 123 4567', operator: 'Dialog', status: 'failed' },
  { id: '4', date: 'Oct 10, 2023', time: '11:20', amount: '100.00', number: '+94 78 555 1234', operator: 'Hutch', status: 'success' },
  { id: '5', date: 'Oct 05, 2023', time: '16:10', amount: '750.00', number: '+94 70 111 2222', operator: 'Airtel', status: 'success' },
];

export default function HistoryScreen() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto space-y-6 pb-12"
    >
      <div className="flex justify-between items-end px-1">
        <div>
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight font-headline text-on-surface">History</h2>
          <p className="text-on-surface-variant text-xs md:text-sm">Your recent transactions</p>
        </div>
        <div className="flex gap-2">
          <button className="p-2 bg-surface-container-low rounded-xl text-primary hover:bg-surface-container-high transition-colors">
            <Search size={18} md:size={20} />
          </button>
          <button className="p-2 bg-surface-container-low rounded-xl text-primary hover:bg-surface-container-high transition-colors">
            <Filter size={18} md:size={20} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
        {TRANSACTIONS.map((tx) => (
          <div 
            key={tx.id}
            className="bg-surface-container-lowest p-4 md:p-6 rounded-2xl flex items-center gap-3 md:gap-4 hover:bg-surface-container-low transition-colors cursor-pointer shadow-sm border border-outline-variant/5"
          >
            <div className={`w-10 md:w-12 h-10 md:h-12 rounded-xl flex items-center justify-center shrink-0 ${
              tx.status === 'success' ? 'bg-tertiary/10 text-tertiary' : 'bg-secondary/10 text-secondary'
            }`}>
              {tx.status === 'success' ? <CheckCircle size={20} md:size={24} /> : <XCircle size={20} md:size={24} />}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-start gap-2">
                <h4 className="font-bold text-on-surface text-sm md:text-base truncate">{tx.operator}</h4>
                <span className="font-bold text-on-surface text-sm md:text-base shrink-0">Rs. {tx.amount}</span>
              </div>
              <div className="flex justify-between items-center mt-0.5 md:mt-1">
                <p className="text-[10px] md:text-xs text-on-surface-variant font-medium truncate">{tx.number}</p>
                <p className="text-[9px] md:text-[10px] text-on-surface-variant opacity-70 shrink-0">{tx.date}</p>
              </div>
            </div>
            <ChevronRight className="text-on-surface-variant opacity-30 shrink-0" size={18} md:size={20} />
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center py-8 opacity-40">
        <Clock size={48} className="mb-2" />
        <p className="text-xs font-medium">Showing last 30 days</p>
      </div>
    </motion.div>
  );
}
