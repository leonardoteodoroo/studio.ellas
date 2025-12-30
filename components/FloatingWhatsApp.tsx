import React from 'react';
import { MessageCircle } from 'lucide-react';

// Using the link from the Footer/App
const WHATSAPP_LINK = "https://wa.me/5562993214412";

const FloatingWhatsApp: React.FC = () => {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 bg-[#25D366] md:bg-emerald-deep text-white rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:bg-[#20bd5a] md:hover:bg-emerald-muted transition-all duration-300 hover:scale-110 group border border-white/20"
      aria-label="Falar no WhatsApp"
    >
      {/* Pulse Effect - Keeping it subtle */}
      <span className="absolute w-full h-full rounded-full bg-[#25D366] md:bg-emerald-deep opacity-30 animate-ping"></span>
      
      {/* Icon */}
      <MessageCircle size={32} className="relative z-10 fill-white/20" />
      
      {/* Tooltip for Desktop */}
      <span className="absolute right-full mr-4 bg-white text-olive-deep px-4 py-2 rounded-lg shadow-xl text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap hidden md:block">
        Agende sua avaliação
      </span>
    </a>
  );
};

export default FloatingWhatsApp;