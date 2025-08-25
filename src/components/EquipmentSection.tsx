
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import type { CarouselApi } from '@/components/ui/carousel';

const EquipmentSection = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const whatsappNumber = "5585986161559";
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de solicitar um orçamento para locação de equipamentos.");
  const whatsappLink = `https://web.whatsapp.com/send?phone=${whatsappNumber}&text=${whatsappMessage}`;
  
  const equipment = [
    {
      name: 'Munck 3 Toneladas',
      image: '/lovable-uploads/19194b7c-35ef-4355-870d-3e6317b89010.png',
      capacity: '3 Toneladas',
      reach: '8 metros',
      ideal: 'Obras residenciais',
      gradient: 'from-orange-500/20 to-orange-600/20'
    },
    {
      name: 'Munck 15 Toneladas',
      image: '/lovable-uploads/924e47e1-05be-4f46-8dce-93fbcf155b10.png',
      capacity: '15 Toneladas',
      reach: '15 metros',
      ideal: 'Obras comerciais',
      gradient: 'from-blue-500/20 to-blue-600/20'
    },
    {
      name: 'Munck 30 Toneladas',
      image: '/lovable-uploads/47bd4ea9-c4b4-4f88-b0d4-99a823a8139c.png',
      capacity: '30 Toneladas',
      reach: '25 metros',
      ideal: 'Grandes construções',
      gradient: 'from-green-500/20 to-green-600/20'
    },
    {
      name: 'Munck 50 Toneladas',
      image: '/lovable-uploads/a5d97657-489a-4148-887a-b69ec8284927.png',
      capacity: '50 Toneladas',
      reach: '35 metros',
      ideal: 'Obras industriais',
      gradient: 'from-purple-500/20 to-purple-600/20'
    },
    {
      name: 'Guindaste 70 Toneladas',
      image: '/lovable-uploads/436f6ecf-7a6a-4b51-a9d7-e7d3d07347a8.png',
      capacity: '70 Toneladas',
      reach: '45 metros',
      ideal: 'Projetos especiais',
      gradient: 'from-red-500/20 to-red-600/20'
    },
    {
      name: 'Guindaste 110 Toneladas',
      image: '/lovable-uploads/5fc049a1-8aa8-4c5a-9311-fd65c67a531a.png',
      capacity: '110 Toneladas',
      reach: '68 metros',
      ideal: 'Grandes projetos industriais',
      gradient: 'from-teal-500/20 to-teal-600/20'
    },
    {
      name: 'Equipamentos Auxiliares',
      image: '/lovable-uploads/4615cd26-fd68-46ff-8871-a4a7584f6a72.png',
      capacity: 'Variável',
      reach: 'Conforme necessidade',
      ideal: 'Suporte às operações',
      gradient: 'from-indigo-500/20 to-indigo-600/20'
    }
  ];

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section id="equipamentos" className="py-24 bg-gradient-to-br from-white via-gray-50/50 to-white relative overflow-hidden" aria-labelledby="equipment-heading">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-orange-200/30 to-transparent rounded-full blur-3xl" aria-hidden="true"></div>
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-tr from-blue-200/30 to-transparent rounded-full blur-3xl" aria-hidden="true"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <header className="text-center mb-20">
          <div className="inline-flex items-center bg-gradient-to-r from-orange-100 to-blue-100 px-6 py-3 rounded-full text-sm font-medium text-gray-700 mb-6 border border-orange-200/50" aria-label="Seção de destaque">
            <span aria-hidden="true">🏗️</span> Nossa Frota Completa
          </div>
          <h2 id="equipment-heading" className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nossos <span className="bg-gradient-to-r from-orange-600 to-orange-700 bg-clip-text text-transparent">Equipamentos</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Frota completa e moderna para atender projetos de todos os portes 
            com máxima segurança e eficiência.
          </p>
        </header>

        <Carousel 
          setApi={setApi}
          opts={{
            align: "center",
            loop: true,
          }}
          className="w-full"
          role="region"
          aria-label="Carrossel de equipamentos"
        >
          <CarouselContent className="ml-0 -mx-4">
            {equipment.map((item, index) => {
              const isCenter = index === (current - 1);
              return (
                <CarouselItem 
                  key={index} 
                  className={`px-4 basis-[300px] md:basis-[350px] lg:basis-[400px] transition-all duration-500 ${
                    isCenter 
                      ? 'scale-110 z-20' 
                      : 'scale-90 opacity-60 z-10'
                  }`}
                >
                  <article className={`group overflow-hidden border-0 transition-all duration-500 relative focus-within:ring-2 focus-within:ring-orange-500 focus-within:ring-offset-2 rounded-lg ${
                    isCenter 
                      ? 'shadow-2xl hover:shadow-3xl h-[450px]' 
                      : 'shadow-lg hover:shadow-xl h-[400px]'
                  }`}>
                    <Card className="h-full border-0 bg-transparent relative overflow-hidden rounded-lg">
                      {/* Background image covering entire card */}
                      <div className="absolute inset-0">
                        <img
                          src={item.image}
                          alt={`${item.name} - Equipamento da LogMunck com capacidade de ${item.capacity} e alcance de ${item.reach}, ideal para ${item.ideal}`}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        {/* Gradient overlays */}
                        <div className={`absolute inset-0 bg-gradient-to-t transition-all duration-500 ${
                          isCenter 
                            ? 'from-black/85 via-black/40 to-black/20 group-hover:from-black/90' 
                            : 'from-black/90 via-black/60 to-black/40'
                        }`} aria-hidden="true"></div>
                        <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} transition-opacity duration-500 ${
                          isCenter ? 'opacity-20 group-hover:opacity-40' : 'opacity-10'
                        }`} aria-hidden="true"></div>
                      </div>
                      
                      {/* Content overlay with flex layout */}
                      <CardContent className="absolute inset-0 p-6 flex flex-col justify-between relative z-10 h-full">
                        {/* Title at top */}
                        <div>
                          <h3 className={`font-bold text-white mb-4 group-hover:text-white transition-colors ${
                            isCenter ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl'
                          }`}>{item.name}</h3>
                        </div>
                        
                        {/* Specifications and button at bottom */}
                        <div className="space-y-4">
                          <dl className="space-y-3" aria-label={`Especificações do ${item.name}`}>
                            <div className="flex justify-between items-center">
                              <dt className={`text-white/80 font-medium ${isCenter ? 'text-base' : 'text-sm'}`}>Capacidade:</dt>
                              <dd className={`font-bold text-orange-400 ${isCenter ? 'text-lg' : 'text-base'}`}>{item.capacity}</dd>
                            </div>
                            <div className="flex justify-between items-center">
                              <dt className={`text-white/80 font-medium ${isCenter ? 'text-base' : 'text-sm'}`}>Alcance:</dt>
                              <dd className={`font-bold text-blue-400 ${isCenter ? 'text-lg' : 'text-base'}`}>{item.reach}</dd>
                            </div>
                            <div className="flex justify-between items-center">
                              <dt className={`text-white/80 font-medium ${isCenter ? 'text-base' : 'text-sm'}`}>Ideal para:</dt>
                              <dd className={`font-bold text-white ${isCenter ? 'text-base' : 'text-sm'}`}>{item.ideal}</dd>
                            </div>
                          </dl>
                          
                          <a 
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full inline-block"
                          >
                            <Button 
                              className={`w-full bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 ${
                                isCenter ? 'py-3 text-base' : 'py-2 text-sm'
                              }`}
                              aria-label={`Solicitar orçamento para ${item.name} via WhatsApp`}
                            >
                              Solicitar Orçamento
                              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                            </Button>
                          </a>
                        </div>
                      </CardContent>
                    </Card>
                  </article>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="left-4 shadow-lg bg-white/90 hover:bg-white" aria-label="Equipamento anterior" />
          <CarouselNext className="right-4 shadow-lg bg-white/90 hover:bg-white" aria-label="Próximo equipamento" />
        </Carousel>
      </div>
    </section>
  );
};

export default EquipmentSection;
