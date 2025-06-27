
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const EquipmentSection = () => {
  const equipment = [
    {
      name: 'Munck 3 Toneladas',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop&crop=center',
      capacity: '3 Toneladas',
      reach: '8 metros',
      ideal: 'Obras residenciais',
      gradient: 'from-orange-500/20 to-orange-600/20'
    },
    {
      name: 'Munck 15 Toneladas',
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=300&fit=crop&crop=center',
      capacity: '15 Toneladas',
      reach: '15 metros',
      ideal: 'Obras comerciais',
      gradient: 'from-blue-500/20 to-blue-600/20'
    },
    {
      name: 'Munck 30 Toneladas',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop&crop=center',
      capacity: '30 Toneladas',
      reach: '25 metros',
      ideal: 'Grandes construções',
      gradient: 'from-green-500/20 to-green-600/20'
    },
    {
      name: 'Munck 50 Toneladas',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop&crop=center',
      capacity: '50 Toneladas',
      reach: '35 metros',
      ideal: 'Obras industriais',
      gradient: 'from-purple-500/20 to-purple-600/20'
    },
    {
      name: 'Guindauto 70 Toneladas',
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=300&fit=crop&crop=center',
      capacity: '70 Toneladas',
      reach: '45 metros',
      ideal: 'Projetos especiais',
      gradient: 'from-red-500/20 to-red-600/20'
    },
    {
      name: 'Equipamentos Auxiliares',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop&crop=center',
      capacity: 'Variável',
      reach: 'Conforme necessidade',
      ideal: 'Suporte às operações',
      gradient: 'from-indigo-500/20 to-indigo-600/20'
    }
  ];

  return (
    <section id="equipamentos" className="py-24 bg-gradient-to-br from-white via-gray-50/50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-orange-200/30 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-tr from-blue-200/30 to-transparent rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-gradient-to-r from-orange-100 to-blue-100 px-6 py-3 rounded-full text-sm font-medium text-gray-700 mb-6 border border-orange-200/50">
            🏗️ Nossa Frota Completa
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nossos <span className="bg-gradient-to-r from-orange-600 to-orange-700 bg-clip-text text-transparent">Equipamentos</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Frota completa e moderna para atender projetos de todos os portes 
            com máxima segurança e eficiência.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {equipment.map((item, index) => (
            <Card key={index} className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/90 backdrop-blur-sm hover:scale-105 relative">
              {/* Card gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent group-hover:from-black/60 transition-all duration-500"></div>
              </div>
              
              <CardContent className="p-8 relative z-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-gray-800 transition-colors">{item.name}</h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600 font-medium">Capacidade:</span>
                    <span className="font-bold text-orange-600 text-lg">{item.capacity}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600 font-medium">Alcance:</span>
                    <span className="font-bold text-blue-600 text-lg">{item.reach}</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-600 font-medium">Ideal para:</span>
                    <span className="font-bold text-gray-900">{item.ideal}</span>
                  </div>
                </div>
                
                <Button className="w-full bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  Solicitar Orçamento
                  <ArrowRight className="ml-2 h-4 w-4" />
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
