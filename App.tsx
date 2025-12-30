import React from 'react';
import HeroLuxury from './components/HeroLuxury';
import VillainSection from './components/VillainSection';
import RitualShowcase from './components/RitualShowcase';
import ServicesMenu from './components/ServicesMenu';
import ScienceOverlay from './components/ScienceOverlay';
import MarianaProfile from './components/MarianaProfile';
import TheFinalTouch from './components/TheFinalTouch';
import BotoxUpsell from './components/BotoxUpsell';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

const App: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-cream overflow-x-hidden selection:bg-sand-organic selection:text-white">
      <HeroLuxury />
      <VillainSection />
      <RitualShowcase />
      <ServicesMenu />
      <ScienceOverlay />
      <MarianaProfile />
      <TheFinalTouch />
      <FAQ />
      <BotoxUpsell />
      <Footer />
      
      {/* Floating WhatsApp Button (Replaces Sticky Footer) */}
      <FloatingWhatsApp />
    </div>
  );
};

export default App;