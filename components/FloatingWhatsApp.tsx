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
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:bg-[#20bd5a] transition-all duration-300 hover:scale-110 group"
      aria-label="Falar no WhatsApp"
    >
      {/* Outer Glow/Pulse */}
      <span className="absolute w-full h-full rounded-full bg-[#25D366] opacity-30 animate-ping"></span>

      {/* Icon */}
      <MessageCircle size={36} className="relative z-10 fill-white text-white" />

      {/* Red Notification Dot */}
      <span className="absolute top-3 right-3 w-3.5 h-3.5 bg-red-500 border-2 border-white rounded-full z-20">
        <span className="absolute inset-0 rounded-full bg-red-500 animate-ping opacity-75"></span>
      </span>
    </a>
  );
};

export default FloatingWhatsApp;