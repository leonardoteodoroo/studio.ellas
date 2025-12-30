import React from 'react';
import RevealOnScroll from './RevealOnScroll';

const ServicesMenu: React.FC = () => {
  const categories = [
    {
      title: "Cabelos & Química",
      items: [
        "Progressiva Liso Egípcio",
        "Selagem Térmica",
        "Botox Capilar",
        "Coloração & Nuances",
        "Cronograma Capilar",
        "Químicas em Geral"
      ]
    },
    {
      title: "Corte & Styling",
      items: [
        "Corte Personalizado",
        "Corte Bordado",
        "Escova Modelada",
        "Penteados para Eventos"
      ]
    },
    {
      title: "Olhar & Face",
      items: [
        "Design de Sobrancelha",
        "Design com Henna",
        "Maquiagem Profissional",
        "Depilação Facial"
      ]
    },
    {
      title: "Spa de Unhas",
      items: [
        "Manicure Classic",
        "Pedicure Spa",
        "Esmaltação em Gel",
        "Blindagem"
      ]
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="text-center mb-16">
            <RevealOnScroll>
                <span className="text-sand-organic font-sans uppercase tracking-[0.2em] text-xs font-bold">Menu Completo</span>
                <h2 className="text-olive-deep font-serif text-4xl md:text-5xl mt-4 font-medium">
                    Beleza <span className="italic text-sand-organic">&</span> Bem-estar
                </h2>
                <div className="w-24 h-px bg-olive-deep/10 mx-auto mt-6"></div>
            </RevealOnScroll>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {categories.map((category, idx) => (
                <RevealOnScroll key={idx} delay={idx * 150}>
                    <div className="text-center md:text-left">
                        <h3 className="font-serif text-2xl text-olive-deep mb-6 italic border-b border-sand-organic/20 pb-2 inline-block md:block">
                            {category.title}
                        </h3>
                        <ul className="space-y-4">
                            {category.items.map((item, itemIdx) => (
                                <li key={itemIdx} className="font-sans text-gray-600 font-medium hover:text-sand-organic transition-colors duration-300 cursor-default">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </RevealOnScroll>
            ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesMenu;