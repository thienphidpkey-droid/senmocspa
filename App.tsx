import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { BookingForm } from './components/BookingForm';
import { Footer } from './components/Footer';
import { AIConsultant } from './components/AIConsultant';

function App() {
  return (
    <div className="min-h-screen bg-spa-milk text-gray-800 font-sans selection:bg-spa-green selection:text-white scroll-smooth">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <BookingForm />
      </main>
      <Footer />
      <AIConsultant />
    </div>
  );
}

export default App;