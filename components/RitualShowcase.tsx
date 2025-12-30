import React, { useState } from 'react';
import { Ritual } from '../types';
import { Sparkles } from 'lucide-react';

const rituals: Ritual[] = [
  {
    id: '1',
    title: 'Liso Egípcio',
    subtitle: 'A Assinatura do Studio',
    description: 'Nossa progressiva exclusiva. Liso absoluto com balanço natural, brilho espelhado e durabilidade excepcional. O fim da dependência da chapinha.',
    image: 'https://cdn.shopify.com/s/files/1/0668/4275/5223/files/259a5e8a-f1d0-4612-91f4-2baa0117b588.jpg?v=1767073884'
  },
  {
    id: '2',
    title: 'Botox & Selagem',
    subtitle: 'Alinhamento e Tratamento',
    description: 'Redução de volume e frizz com reposição de massa. Ideal para quem busca praticidade e fios disciplinados sem perder o movimento.',
    image: 'https://cdn.shopify.com/s/files/1/0668/4275/5223/files/84784250-45bd-4638-adc1-9d5336709bf1.jpg?v=1767073695'
  },
  {
    id: '3',
    title: 'Cronograma Capilar',
    subtitle: 'Hidratação & Nutrição',
    description: 'Protocolos personalizados de Hidratação, Nutrição e Reconstrução para recuperar a saúde da fibra capilar pós-química.',
    image: 'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=2574&auto=format&fit=crop'
  }
];

const RitualShowcase: React.FC = () => {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section className="py-24 md:py-32 bg-cream">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-20 text-center">
          <span className="text-sand-organic font-sans uppercase tracking-[0.2em] text-xs font-bold">Nossos Pilares</span>
          <h2 className="text-olive-deep font-serif text-5xl mt-4 font-medium">Transformação & <span className="italic">Tratamento</span>.</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {rituals.map((ritual) => (
            <div 
              key={ritual.id}
              className="group relative cursor-pointer overflow-hidden h-[500px] md:h-[600px] transition-all duration-700 ease-in-out shadow-xl"
              onMouseEnter={() => setActiveId(ritual.id)}
              onMouseLeave={() => setActiveId(null)}
            >
              <div className="absolute inset-0 z-0">
                {/* Overall darken for image */}
                <div className="absolute inset-0 bg-olive-deep/20 group-hover:bg-olive-deep/10 z-10 transition-colors duration-500"></div>
                <img 
                  src={ritual.image} 
                  alt={ritual.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[50%] group-hover:grayscale-0"
                  loading="lazy"
                />
              </div>

              {/* Stronger Gradient overlay at bottom for text readability */}
              {/* Changed from 'via-black/20' to 'via-black/60' and expanded the gradient height */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10 opacity-90"></div>

              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-sand-organic font-sans uppercase text-xs tracking-widest mb-2 block border-l-2 border-sand-organic pl-3 font-bold drop-shadow-md">
                  {ritual.subtitle}
                </span>
                <h3 className="text-white font-serif text-4xl mb-4 italic font-medium drop-shadow-lg">{ritual.title}</h3>
                <p className={`text-gray-100 font-sans font-medium leading-relaxed transition-all duration-500 overflow-hidden drop-shadow-md ${activeId === ritual.id ? 'max-h-40 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                  {ritual.description}
                </p>
                
                {/* Authority Symbol - Invisible Science */}
                <div className={`flex items-center gap-2 mt-6 transition-opacity duration-500 ${activeId === ritual.id ? 'opacity-100' : 'opacity-0'}`}>
                    <Sparkles className="w-4 h-4 text-sand-organic" />
                    <span className="text-xs text-white/90 uppercase tracking-widest font-semibold drop-shadow-md">Procedimento Seguro</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RitualShowcase;