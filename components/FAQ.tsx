import React, { useState } from 'react';
import { FAQItem } from '../types';
import { Plus, Minus } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

const faqs: FAQItem[] = [
    {
        question: "Quanto tempo dura o efeito?",
        answer: "De 3 a 5 meses, dependendo da estrutura do seu fio e dos seus cuidados home care. Nosso diagnóstico prevê a durabilidade estimada para o seu caso específico."
    },
    {
        question: "Tenho luzes/mechas, posso fazer?",
        answer: "Sim. Nosso diagnóstico microscópico garante a segurança química total e ajustamos o pH dos ativos para não haver incompatibilidade."
    },
    {
        question: "Emborracha o cabelo?",
        answer: "Jamais. Nosso método é focado na preservação da queratina natural. Diferente de progressivas ácidas comuns, nutrimos a fibra durante o processo."
    }
];

const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-24 bg-olive-deep text-taupe-warm">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div>
                        <RevealOnScroll>
                            <h2 className="font-serif text-5xl mb-6 font-medium text-white">Dúvidas Frequentes</h2>
                            <p className="font-sans font-medium text-gray-300 mb-8">
                                Transparência é o nosso compromisso. Entenda como trabalhamos com a ciência a seu favor.
                            </p>
                        </RevealOnScroll>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <RevealOnScroll key={index} delay={index * 100}>
                                <div className="border-b border-white/10 pb-4">
                                    <button 
                                        className="w-full flex justify-between items-center py-4 text-left focus:outline-none"
                                        onClick={() => toggle(index)}
                                    >
                                        <span className="font-serif text-xl italic text-sand-organic font-medium">{faq.question}</span>
                                        {openIndex === index ? <Minus className="text-white/70" /> : <Plus className="text-white/70" />}
                                    </button>
                                    <div 
                                        className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
                                    >
                                        <p className="font-sans font-normal text-gray-200 pb-4 leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            </RevealOnScroll>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;