import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { BookingForm } from './components/BookingForm';
import { Footer } from './components/Footer';
import { AIConsultant } from './components/AIConsultant';
import { NavigationProvider, useNavigation } from './contexts/NavigationContext';

const MainContent: React.FC = () => {
  const { currentPage } = useNavigation();

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Hero />;
      case 'about':
        return <About />;
      case 'services':
        return <Services />;
      case 'booking':
        return <BookingForm />;
      default:
        return <Hero />;
    }
  };

  return (
    <main className="animate-fade-in-down">
      {renderPage()}
    </main>
  );
};

function App() {
  return (
    <NavigationProvider>
      <div className="min-h-screen bg-spa-milk text-gray-800 font-sans selection:bg-spa-green selection:text-white scroll-smooth flex flex-col">
        <Header />
        <div className="flex-grow">
          <MainContent />
        </div>
        <Footer />
        <AIConsultant />
      </div>
    </NavigationProvider>
  );
}

export default App;
