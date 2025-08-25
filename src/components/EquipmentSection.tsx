
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { ArrowRight } from 'lucide-react';

const EquipmentSection = () => {
  const whatsappNumber = "5585986161559";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Olá! Gostaria de solicitar um orçamento para locação de equipamentos.`;
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
      name: 'Equipamentos Auxiliares',
      image: '/lovable-uploads/4615cd26-fd68-46ff-8871-a4a7584f6a72.png',
      capacity: 'Variável',
      reach: 'Conforme necessidade',
      ideal: 'Suporte às operações',
      gradient: 'from-indigo-500/20 to-indigo-600/20'
    }
  ];

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
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
          role="region"
          aria-label="Carrossel de equipamentos"
        >
          <CarouselContent className="ml-0">
            {equipment.map((item, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <article className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/90 backdrop-blur-sm hover:scale-105 relative focus-within:ring-2 focus-within:ring-orange-500 focus-within:ring-offset-2 rounded-lg h-full">
                  {/* Card gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} aria-hidden="true"></div>
                  
                  <Card className="h-full border-0 bg-transparent">
                    <div className="aspect-[4/3] overflow-hidden relative">
                      <img
                        src={item.image}
                        alt={`${item.name} - Equipamento da LogMunck com capacidade de ${item.capacity} e alcance de ${item.reach}, ideal para ${item.ideal}`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent group-hover:from-black/60 transition-all duration-500" aria-hidden="true"></div>
                    </div>
                    
                    <CardContent className="p-8 relative z-10">
                      <h3 className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-gray-800 transition-colors">{item.name}</h3>
                      
                      <dl className="space-y-4 mb-8" aria-label={`Especificações do ${item.name}`}>
                        <div className="flex justify-between items-center py-2 border-b border-gray-100">
                          <dt className="text-gray-600 font-medium">Capacidade:</dt>
                          <dd className="font-bold text-orange-600 text-lg">{item.capacity}</dd>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b border-gray-100">
                          <dt className="text-gray-600 font-medium">Alcance:</dt>
                          <dd className="font-bold text-blue-600 text-lg">{item.reach}</dd>
                        </div>
                        <div className="flex justify-between items-center py-2">
                          <dt className="text-gray-600 font-medium">Ideal para:</dt>
                          <dd className="font-bold text-gray-900">{item.ideal}</dd>
                        </div>
                      </dl>
                      
                      <a 
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-block"
                      >
                        <Button 
                          className="w-full bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                          aria-label={`Solicitar orçamento para ${item.name} via WhatsApp`}
                        >
                          Solicitar Orçamento
                          <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                        </Button>
                      </a>
                    </CardContent>
                  </Card>
                </article>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" aria-label="Equipamento anterior" />
          <CarouselNext className="right-4" aria-label="Próximo equipamento" />
        </Carousel>
      </div>
    </section>
  );
};

export default EquipmentSection;
