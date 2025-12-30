import React from 'react';
import RevealOnScroll from './RevealOnScroll';

const VillainSection: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-olive-deep text-taupe-warm relative overflow-hidden">
      {/* Subtle organic shape in background */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-sand-organic/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          <RevealOnScroll>
             <h2 className="font-serif text-4xl md:text-6xl mb-8 leading-tight font-medium text-white">
               O "Liso" que vira <br/>
               <span className="italic text-sand-organic">pesadelo.</span>
             </h2>
             <div className="w-24 h-px bg-sand-organic/50 mb-8"></div>
             <p className="font-sans text-lg font-medium leading-relaxed text-gray-200 max-w-md">
                Você já passou por isso. Fios elásticos, emborrachados, progressivas que somem na primeira lavagem. 
                O choque térmico de Goiânia não perdoa amadorismo.
             </p>
          </RevealOnScroll>

          <div className="space-y-8 mt-8 md:mt-0">
            {[
              "Fios elásticos e emborrachados após a química.",
              "Progressivas que 'somem' na primeira lavagem.",
              "Sol intenso e ar-condicionado fritando seu cabelo."
            ].map((pain, index) => (
              <RevealOnScroll key={index} delay={index * 200}>
                <div className="flex items-start space-x-4 p-6 border-l border-white/20 hover:border-sand-organic transition-colors duration-300 bg-white/5 rounded-r-lg">
                  <span className="text-sand-organic font-serif italic text-2xl font-semibold">0{index + 1}.</span>
                  <p className="font-sans text-white font-medium">{pain}</p>
                </div>
              </RevealOnScroll>
            ))}
            
            <RevealOnScroll delay={800}>
              <p className="mt-8 font-serif text-2xl text-sand-organic italic font-medium">
                Chega de jogar tempo e dinheiro fora.
              </p>
            </RevealOnScroll>
          </div>

        </div>
      </div>
    </section>
  );
};

export default VillainSection;