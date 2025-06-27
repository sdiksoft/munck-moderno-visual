
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const EquipmentSection = () => {
  const equipment = [
    {
      name: 'Munck 3 Toneladas',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop&crop=center',
      capacity: '3 Toneladas',
      reach: '8 metros',
      ideal: 'Obras residenciais'
    },
    {
      name: 'Munck 15 Toneladas',
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=300&fit=crop&crop=center',
      capacity: '15 Toneladas',
      reach: '15 metros',
      ideal: 'Obras comerciais'
    },
    {
      name: 'Munck 30 Toneladas',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop&crop=center',
      capacity: '30 Toneladas',
      reach: '25 metros',
      ideal: 'Grandes construções'
    },
    {
      name: 'Munck 50 Toneladas',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop&crop=center',
      capacity: '50 Toneladas',
      reach: '35 metros',
      ideal: 'Obras industriais'
    },
    {
      name: 'Guindauto 70 Toneladas',
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=300&fit=crop&crop=center',
      capacity: '70 Toneladas',
      reach: '45 metros',
      ideal: 'Projetos especiais'
    },
    {
      name: 'Equipamentos Auxiliares',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop&crop=center',
      capacity: 'Variável',
      reach: 'Conforme necessidade',
      ideal: 'Suporte às operações'
    }
  ];

  return (
    <section id="equipamentos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nossos <span className="text-orange-600">Equipamentos</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Frota completa e moderna para atender projetos de todos os portes 
            com máxima segurança e eficiência.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {equipment.map((item, index) => (
            <Card key={index} className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{item.name}</h3>
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Capacidade:</span>
                    <span className="font-medium text-orange-600">{item.capacity}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Alcance:</span>
                    <span className="font-medium text-blue-600">{item.reach}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Ideal para:</span>
                    <span className="font-medium text-gray-900">{item.ideal}</span>
                  </div>
                </div>
                <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white">
                  Solicitar Orçamento
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EquipmentSection;
