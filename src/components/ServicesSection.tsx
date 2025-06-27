
import { Truck, Wrench, Clock, Shield } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ServicesSection = () => {
  const services = [
    {
      icon: Truck,
      title: 'Locação de Muncks',
      description: 'Frota completa de muncks com diferentes capacidades para atender suas necessidades específicas.',
      features: ['Muncks 3 a 70 toneladas', 'Equipamentos revisados', 'Entrega no local']
    },
    {
      icon: Wrench,
      title: 'Operadores Certificados',
      description: 'Profissionais qualificados e certificados para operação segura dos equipamentos.',
      features: ['Certificação ABNT', 'Experiência comprovada', 'Treinamento contínuo']
    },
    {
      icon: Clock,
      title: 'Atendimento 24h',
      description: 'Suporte técnico e atendimento disponível 24 horas por dia, 7 dias por semana.',
      features: ['Emergências', 'Suporte técnico', 'Manutenção preventiva']
    },
    {
      icon: Shield,
      title: 'Segurança Garantida',
      description: 'Todos os equipamentos passam por rigorosos testes de segurança e manutenção.',
      features: ['Certificados de segurança', 'Inspeções regulares', 'Seguro completo']
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nossos <span className="text-orange-600">Serviços</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Oferecemos soluções completas em locação de equipamentos pesados com 
            qualidade e confiabilidade para seu projeto.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
