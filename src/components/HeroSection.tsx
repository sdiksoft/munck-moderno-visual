
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-16">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-blue-50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-up">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Locação de <span className="text-orange-600">Muncks</span> e 
              <span className="text-blue-600"> Equipamentos</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Soluções completas em locação de muncks, guindautos e equipamentos pesados 
              para sua obra. Qualidade, segurança e confiabilidade garantidas.
            </p>
            
            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {[
                'Equipamentos modernos',
                'Operadores certificados',
                'Atendimento 24h',
                'Melhor custo-benefício'
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-8">
                Solicitar Orçamento
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-gray-300">
                Ver Equipamentos
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-orange-100 to-blue-100">
              <img
                src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=600&h=600&fit=crop&crop=center"
                alt="Munck em operação"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating stats */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-6 border">
              <div className="text-2xl font-bold text-orange-600">15+</div>
              <div className="text-sm text-gray-600">Anos de experiência</div>
            </div>
            <div className="absolute -top-6 -right-6 bg-white rounded-lg shadow-lg p-6 border">
              <div className="text-2xl font-bold text-blue-600">500+</div>
              <div className="text-sm text-gray-600">Projetos realizados</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
