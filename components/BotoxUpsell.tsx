import React from 'react';
import RevealOnScroll from './RevealOnScroll';
import Button from './Button';
import { Sparkles } from 'lucide-react';

const BotoxUpsell: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="relative rounded-2xl overflow-hidden bg-olive-deep shadow-2xl">
            <div className="absolute inset-0">
                 {/* Image changed to facial/skin aesthetic - Woman with glowing skin */}
                 <img 
                    src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop"
                    alt="Estética Facial e Pele Radiante"
                    className="w-full h-full object-cover opacity-50 grayscale mix-blend-overlay"
                    loading="lazy"
                 />
                 {/* Stronger gradient to cover the text area completely */}
                 <div className="absolute inset-0 bg-gradient-to-r from-olive-deep via-olive-deep/90 to-transparent md:to-olive-deep/20"></div>
            </div>

            <div className="relative z-10 p-12 md:p-20 flex flex-col md:flex-row items-center justify-between gap-12">
                <div className="max-w-xl">
                    <RevealOnScroll>
                        <div className="flex items-center gap-2 mb-4">
                            <Sparkles className="w-5 h-5 text-sand-organic" />
                            <span className="text-sand-organic uppercase tracking-widest text-xs font-bold drop-shadow-sm">Estética Avançada</span>
                        </div>
                        <h2 className="font-serif text-4xl md:text-5xl text-white mb-6 font-medium drop-shadow-lg">
                            Botox Estético <br/>
                            <span className="italic text-taupe-warm">& Terapêutico</span>
                        </h2>
                        <div className="w-20 h-px bg-sand-organic/50 mb-6"></div>
                        <p className="font-sans font-medium text-gray-100 mb-8 leading-relaxed text-lg drop-shadow-md">
                            Muito além do cabelo. Complete sua transformação com a segurança da toxina botulínica aplicada por especialistas. 
                            Suavize linhas de expressão, previna o envelhecimento precoce e alivie tensões faciais com resultados naturais e sofisticados.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a href="https://wa.me/5562993214412" target="_blank" rel="noopener noreferrer">
                                <Button variant="primary" className="bg-sand-organic text-white border-sand-organic hover:bg-white hover:text-olive-deep shadow-lg">
                                    Agendar Avaliação Facial
                                </Button>
                            </a>
                        </div>
                    </RevealOnScroll>
                </div>
                
                {/* Visual Element representing Rejuvenation */}
                <div className="hidden md:block">
                    <div className="w-64 h-64 border border-white/20 rounded-full flex items-center justify-center relative animate-float backdrop-blur-sm bg-white/5">
                        <div className="absolute inset-4 border border-white/10 rounded-full"></div>
                        <div className="text-center p-6">
                            <span className="block text-3xl font-serif text-white italic mb-2 drop-shadow-lg">Rejuvenescimento</span>
                            <span className="text-xs uppercase tracking-widest text-white/80 drop-shadow-md">Preventivo & Corretivo</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default BotoxUpsell;