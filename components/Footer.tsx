import React from 'react';
import Button from './Button';
import { Instagram, MessageCircle, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-cream pt-24 pb-12 border-t border-olive-deep/10">
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20">
                    <h2 className="font-serif text-5xl text-olive-deep mb-8 font-medium">Sua autoestima não pode esperar.</h2>
                    <p className="font-sans text-gray-600 mb-10 font-medium text-lg">
                        Agende agora sua avaliação e descubra o que é um cabelo de elite.
                    </p>
                    <div className="flex flex-col md:flex-row gap-6 w-full md:w-auto">
                        <a href="https://wa.me/5562993214412" target="_blank" rel="noopener noreferrer">
                            <Button variant="primary" className="w-full md:w-auto">Agendar Minha Transformação</Button>
                        </a>
                        <a href="https://wa.me/5562993214412" target="_blank" rel="noopener noreferrer">
                            <Button variant="outline" className="flex items-center justify-center gap-2 w-full md:w-auto">
                                <MessageCircle size={18} />
                                Falar no WhatsApp
                            </Button>
                        </a>
                    </div>
                </div>

                <div className="border-t border-gray-200 pt-12 flex flex-col md:flex-row justify-between items-start md:items-center text-sm text-gray-600 font-sans font-medium gap-8">
                    <div className="mb-4 md:mb-0 text-left">
                        <div className="flex items-start gap-2 mb-2">
                            <MapPin size={16} className="text-sand-organic mt-1 shrink-0" />
                            <p className="max-w-xs">Rua cp6 qd108 lt 73, Goiânia, Brazil 74477258</p>
                        </div>
                        <p>&copy; {new Date().getFullYear()} Studio Ellas. Todos os direitos reservados.</p>
                    </div>
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                        <a href="https://www.instagram.com/studio.ellas.goiania/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-sand-organic transition-colors">
                            <Instagram size={16} />
                            @studio.ellas.goiania
                        </a>
                        <div className="hidden md:block h-4 w-px bg-gray-300"></div>
                        <span className="uppercase tracking-widest text-xs font-bold text-olive-deep">Mariana Ajauro</span>
                    </div>
                </div>


                <div className="w-full flex justify-start mt-6 border-t border-gray-100/10 pt-4">
                    <a
                        href="https://instagram.com/leonardoteodoro.of"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[8px] uppercase tracking-widest text-olive-deep hover:text-sand-organic transition-colors duration-300"
                    >
                        Site by Leonardo Teodoro
                    </a>
                </div>
            </div>
        </footer >
    );
};

export default Footer;