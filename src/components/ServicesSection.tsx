
import { Truck, Wrench, Clock, Shield } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ServicesSection = () => {
  const services = [
    {
      icon: Truck,
      title: 'Locação de Muncks',
      description: 'Frota completa de muncks com diferentes capacidades para atender suas necessidades específicas.',
      features: ['Muncks 3 a 70 toneladas', 'Equipamentos revisados', 'Entrega no local'],
      gradient: 'from-orange-500 to-orange-600'
    },
    {
      icon: Wrench,
      title: 'Operadores Certificados',
      description: 'Profissionais qualificados e certificados para operação segura dos equipamentos.',
      features: ['Certificação ABNT', 'Experiência comprovada', 'Treinamento contínuo'],
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: Clock,
      title: 'Atendimento 24h',
      description: 'Suporte técnico e atendimento disponível 24 horas por dia, 7 dias por semana.',
      features: ['Emergências', 'Suporte técnico', 'Manutenção preventiva'],
      gradient: 'from-green-500 to-green-600'
    },
    {
      icon: Shield,
      title: 'Segurança Garantida',
      description: 'Todos os equipamentos passam por rigorosos testes de segurança e manutenção.',
      features: ['Certificados de segurança', 'Inspeções regulares', 'Seguro completo'],
      gradient: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <section id="servicos" className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden" aria-labelledby="services-heading">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-orange-100/50 to-transparent rounded-full -translate-x-48 -translate-y-48 blur-3xl" aria-hidden="true"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-blue-100/50 to-transparent rounded-full translate-x-48 translate-y-48 blur-3xl" aria-hidden="true"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <header className="text-center mb-20">
          <div className="inline-flex items-center bg-gradient-to-r from-orange-100 to-blue-100 px-6 py-3 rounded-full text-sm font-medium text-gray-700 mb-6 border border-orange-200/50" aria-label="Seção de destaque">
            <span aria-hidden="true">⚡</span> Nossos Serviços Principais
          </div>
          <h2 id="services-heading" className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Soluções <span className="bg-gradient-to-r from-orange-600 to-orange-700 bg-clip-text text-transparent">Completas</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Oferecemos soluções completas em locação de equipamentos pesados com 
            qualidade e confiabilidade para seu projeto.
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" role="list">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <article key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:bg-white hover:scale-105 relative overflow-hidden focus-within:ring-2 focus-within:ring-orange-500 focus-within:ring-offset-2 rounded-lg" role="listitem">
                {/* Card background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-gray-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true"></div>
                
                <Card className="h-full border-0 bg-transparent">
                  <CardHeader className="text-center pb-6 relative z-10">
                    <div className={`w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`} aria-hidden="true">
                      <IconComponent className="h-10 w-10 text-white" />
                    </div>
                    <CardTitle className="text-xl text-gray-900 mb-3">{service.title}</CardTitle>
                    <CardDescription className="text-gray-600 leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <ul className="space-y-3" aria-label={`Características do serviço ${service.title}`}>
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600 group-hover:text-gray-700 transition-colors">
                          <div className={`w-3 h-3 bg-gradient-to-r ${service.gradient} rounded-full mr-3 flex-shrink-0 shadow-sm`} aria-hidden="true"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
