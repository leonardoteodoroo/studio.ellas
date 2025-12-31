import React from 'react';
import RevealOnScroll from './RevealOnScroll';
import Button from './Button';

const TheFinalTouch: React.FC = () => {
  return (
    <section className="py-24 bg-taupe-warm/20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="bg-white p-8 md:p-0 shadow-2xl overflow-hidden">
          <div className="flex flex-col md:flex-row h-full">

            <div className="w-full md:w-1/2 p-12 md:p-24 flex flex-col justify-center">
              <RevealOnScroll>
                <span className="text-sand-organic uppercase tracking-widest text-xs font-bold mb-4 block">Experiência Completa</span>
                <h2 className="font-serif text-4xl md:text-5xl text-olive-deep mb-6 font-medium">O toque final.</h2>
                <p className="font-sans font-medium text-gray-600 mb-8 leading-relaxed">
                  Enquanto cuidamos da saúde dos seus fios, aproveite nossa Manicure e Pedicure de Luxo.
                  Saia completa, impecável e relaxada. Um momento de pausa no seu dia agitado.
                </p>
                <a href="https://wa.me/5562993214412" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline">Adicionar ao Pacote</Button>
                </a>
              </RevealOnScroll>
            </div>

            <div className="w-full md:w-1/2 h-96 md:h-auto relative">
              <img
                src="https://cdn.shopify.com/s/files/1/0668/4275/5223/files/ce88704f-0a7d-4b2e-beb5-549a2e58e556.jpg?v=1767074750"
                alt="Luxury Spa Hand Treatment"
                className="absolute inset-0 w-full h-full object-cover grayscale-[30%]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-olive-deep/20"></div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default TheFinalTouch;