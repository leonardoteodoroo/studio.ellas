import React from 'react';
import RevealOnScroll from './RevealOnScroll';
import { Microscope } from 'lucide-react';

const ScienceOverlay: React.FC = () => {
  return (
    <section className="py-32 bg-white relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-16">
          
          {/* The Visual "Microscope" - Abstract representation */}
          <div className="w-full md:w-1/2 flex justify-center">
             <div className="relative w-80 h-80 md:w-96 md:h-96">
                <div className="absolute inset-0 rounded-full border border-olive-deep/10 animate-pulse"></div>
                <div className="absolute inset-8 rounded-full border border-olive-deep/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <img 
                        src="https://cdn.shopify.com/s/files/1/0668/4275/5223/files/fd392783-ee10-4148-bdc3-ddec6f629952.jpg?v=1767074192"
                        alt="Macro hair fiber"
                        className="w-64 h-64 rounded-full object-cover shadow-2xl grayscale opacity-90"
                        loading="lazy"
                    />
                </div>
                {/* Floating caption */}
                <div className="absolute -bottom-6 -right-6 bg-white p-4 shadow-xl max-w-xs border border-gray-100 z-10">
                    <div className="flex items-center gap-3">
                        <Microscope className="w-5 h-5 text-olive-deep" />
                        <span className="font-serif italic text-olive-deep text-lg font-medium">Onde a ciência encontra a seda</span>
                    </div>
                </div>
             </div>
          </div>

          <div className="w-full md:w-1/2">
            <RevealOnScroll>
                <h2 className="text-olive-deep font-serif text-5xl mb-8 leading-tight font-medium">
                    Não começamos com o shampoo. <br/>
                    <span className="text-sand-organic italic">Começamos com o diagnóstico.</span>
                </h2>
                <div className="space-y-6">
                    <p className="text-gray-700 font-sans font-normal leading-relaxed text-lg">
                        Identificamos a história do seu fio para criar um blend de ativos personalizado. 
                        No Studio Ellas, cada tratamento é calculado milimetricamente para a estrutura da sua fibra capilar.
                    </p>
                    <p className="text-gray-700 font-sans font-normal leading-relaxed">
                        Sem promessas vazias, apenas resultados seguros baseados em análise biológica.
                    </p>
                </div>
                
                {/* The "Surprise" Element: Animated Luxury Seal */}
                <div className="mt-12 flex items-center gap-8 border-t border-gray-200 pt-10">
                    
                    {/* Rotating Badge */}
                    <div className="relative w-28 h-28 shrink-0">
                        {/* Rotating Text Ring */}
                        <div className="absolute inset-0 animate-[spin_10s_linear_infinite]">
                            <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                                <path 
                                    id="circlePath" 
                                    d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" 
                                    fill="transparent" 
                                />
                                <text>
                                    <textPath 
                                        href="#circlePath" 
                                        className="font-sans text-[11px] font-bold uppercase tracking-[0.25em] fill-olive-deep"
                                        startOffset="0%"
                                    >
                                        Studio Ellas • Biosegurança • Excellence •
                                    </textPath>
                                </text>
                            </svg>
                        </div>
                        
                        {/* Center Icon: Four-Point Star (Sparkle) - Symbolizing Precision and Shine */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <svg 
                                viewBox="0 0 24 24" 
                                fill="currentColor" 
                                className="w-12 h-12 text-sand-organic drop-shadow-sm"
                            >
                                <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
                            </svg>
                        </div>
                    </div>

                    {/* Companion Text */}
                    <div className="flex flex-col justify-center">
                        <span className="font-serif italic text-2xl text-olive-deep leading-none mb-2">
                            "A beleza é uma ciência exata."
                        </span>
                        <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">
                            Selo de Autenticidade & Cuidado
                        </span>
                    </div>

                </div>
            </RevealOnScroll>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ScienceOverlay;