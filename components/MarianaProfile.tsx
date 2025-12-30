import React from 'react';
import RevealOnScroll from './RevealOnScroll';

const MarianaProfile: React.FC = () => {
  return (
    <section className="py-24 bg-cream overflow-hidden border-t border-olive-deep/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          
          {/* Image Side - Styled like a magazine cutout */}
          <div className="w-full md:w-5/12 relative order-2 md:order-1">
             <div className="absolute top-6 -left-6 w-full h-full border border-sand-organic/30 z-0 hidden md:block"></div>
             <div className="relative z-10 aspect-[3/4] overflow-hidden shadow-2xl">
                {/* Photo updated to Mariana's specific image */}
                <img 
                  src="https://cdn.shopify.com/s/files/1/0668/4275/5223/files/mariana.png?v=1767072721" 
                  alt="Mariana Ajauro - Especialista Capilar" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000 grayscale-[20%]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-olive-deep/10 mix-blend-multiply"></div>
             </div>
          </div>

          {/* Text Side */}
          <div className="w-full md:w-7/12 order-1 md:order-2">
            <RevealOnScroll>
              <span className="text-sand-organic uppercase tracking-[0.2em] text-xs font-bold mb-4 block flex items-center gap-3">
                <span className="w-8 h-px bg-sand-organic"></span>
                A Especialista
              </span>
              <h2 className="font-serif text-5xl md:text-6xl text-olive-deep mb-8 font-medium leading-tight">
                Mariana <br/>
                <span className="italic text-sand-organic">Ajauro</span>
              </h2>
              
              <div className="space-y-6 text-gray-700 font-sans font-medium leading-relaxed text-lg">
                <p className="text-2xl font-serif italic text-olive-deep/80 mb-6">
                  "Não vendo apenas alisamentos, entrego liberdade e autoestima blindada pela ciência."
                </p>
                <p className="font-normal text-gray-600">
                   Com anos de experiência e uma obsessão por saúde capilar, Mariana redefiniu o conceito de liso em Goiânia. 
                   Sua abordagem une a precisão clínica à estética de alto padrão, garantindo que cada fio tratado mantenha sua integridade biológica.
                </p>
                <p className="font-normal text-gray-600">
                   Fundadora do <strong>Studio Ellas</strong>, ela acredita que a elegância começa na saúde. Seu protocolo exclusivo analisa cada cliente microscopicamente, 
                   personalizando ativos para resultados que desafiam o tempo e o clima do cerrado.
                </p>
              </div>

              <div className="mt-12">
                 <div className="inline-block border-t border-olive-deep/30 pt-4">
                     <span className="font-serif italic text-3xl text-olive-deep block">Mariana Ajauro</span>
                     <span className="text-xs uppercase tracking-widest text-gray-500 block mt-1">CEO & Terapeuta Capilar</span>
                 </div>
              </div>
            </RevealOnScroll>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MarianaProfile;