import { useState } from 'react';
import TopBar from './components/TopBar';
import BottomNav from './components/BottomNav';
import HomeScreen from './screens/Home';
import RechargeDetailsScreen from './screens/RechargeDetails';
import PaymentScreen from './screens/Payment';
import SuccessScreen from './screens/Success';
import HistoryScreen from './screens/History';
import OffersScreen from './screens/Offers';
import AccountScreen from './screens/Account';
import { Screen, Operator } from './types';
import { OPERATORS } from './constants';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>(Screen.HOME);
  const [selectedOperator, setSelectedOperator] = useState<Operator>(OPERATORS[0]);

  const handleSelectOperator = (op: Operator) => {
    setSelectedOperator(op);
    setCurrentScreen(Screen.RECHARGE_DETAILS);
  };

  const handleBack = () => {
    if (currentScreen === Screen.RECHARGE_DETAILS) setCurrentScreen(Screen.HOME);
    if (currentScreen === Screen.PAYMENT) setCurrentScreen(Screen.RECHARGE_DETAILS);
    if (currentScreen === Screen.SUCCESS) setCurrentScreen(Screen.HOME);
    if ([Screen.HISTORY, Screen.OFFERS, Screen.ACCOUNT].includes(currentScreen)) setCurrentScreen(Screen.HOME);
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case Screen.HOME:
        return <HomeScreen onSelectOperator={handleSelectOperator} onNavigate={setCurrentScreen} />;
      case Screen.RECHARGE_DETAILS:
        return <RechargeDetailsScreen operator={selectedOperator} onProceed={() => setCurrentScreen(Screen.PAYMENT)} />;
      case Screen.PAYMENT:
        return <PaymentScreen onPay={() => setCurrentScreen(Screen.SUCCESS)} />;
      case Screen.SUCCESS:
        return <SuccessScreen onReset={() => setCurrentScreen(Screen.HOME)} />;
      case Screen.HISTORY:
        return <HistoryScreen />;
      case Screen.OFFERS:
        return <OffersScreen />;
      case Screen.ACCOUNT:
        return <AccountScreen />;
      default:
        return <HomeScreen onSelectOperator={handleSelectOperator} onNavigate={setCurrentScreen} />;
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <TopBar 
        showBack={![Screen.HOME, Screen.HISTORY, Screen.OFFERS, Screen.ACCOUNT, Screen.SUCCESS].includes(currentScreen)} 
        onBack={handleBack}
        currentScreen={currentScreen}
        onNavigate={setCurrentScreen}
      />
      
      <main className="flex-1 w-full max-w-7xl mx-auto px-6 py-8 overflow-x-hidden">
        {renderScreen()}
      </main>

      <BottomNav currentScreen={currentScreen} onNavigate={setCurrentScreen} />
    </div>
  );
}
