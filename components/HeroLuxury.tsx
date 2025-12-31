import React from 'react';
import Button from './Button';
import RevealOnScroll from './RevealOnScroll';

const HeroLuxury: React.FC = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      {/* Background Video Simulation (Using an image with slow zoom) */}
      <div className="absolute inset-0 z-0">
        {/* Layer 1: Base Dimming */}
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        {/* Layer 2: Strategic Gradient to darken text areas */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70 z-10"></div>
        {/* Layer 3: Animation Darkening (3s) */}
        <div className="absolute inset-0 bg-black/60 z-10 animate-darken"></div>

        {/* Brand Image - Luxury Hair Texture */}
        <img
          src="https://cdn.shopify.com/s/files/1/0668/4275/5223/files/photo-1580618672591-eb180b1a973f.avif?v=1767074664"
          alt="Luxury Hair Texture"
          className="w-full h-full object-cover animate-slow-zoom grayscale-[20%]"
        />
      </div>

      <div className="relative z-20 container mx-auto px-6 md:px-12 text-center md:text-left">
        <div className="max-w-4xl mx-auto md:mx-0">
          <RevealOnScroll>
            <h2 className="text-taupe-warm font-sans text-sm uppercase tracking-[0.3em] mb-4 font-semibold drop-shadow-md">
              Studio Ellas • Mariana Ajauro
            </h2>
          </RevealOnScroll>

          <RevealOnScroll delay={300}>
            {/* Added drop-shadow-xl to ensure readability against any background */}
            <h1 className="text-white font-serif text-5xl md:text-7xl lg:text-8xl leading-tight mb-8 font-normal italic drop-shadow-2xl">
              O cabelo dos seus sonhos <br />
              <span className="not-italic font-medium text-white drop-shadow-2xl">não precisa custar a saúde dos seus fios.</span>
            </h1>
          </RevealOnScroll>

          <RevealOnScroll delay={600}>
            <p className="text-gray-50 font-sans text-lg md:text-xl font-medium max-w-xl mb-12 leading-relaxed opacity-100 drop-shadow-lg text-shadow-sm">
              Recupere a liberdade de usar seu cabelo liso, brilhante e com movimento natural — sem medo do efeito rebote.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={900}>
            <Button variant="luxury">
              Quero meu cabelo impecável
            </Button>
          </RevealOnScroll>
        </div>
      </div>

      {/* Scroll indicator */}
      {/* O PAI cuida apenas da posição fixa no centro */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">

        {/* O FILHO cuida da animação e da cor */}
        <div className="animate-bounce text-white/70 drop-shadow-md">
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>

      </div>
    </section>
  );
};

export default HeroLuxury;