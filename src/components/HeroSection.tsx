
import { ArrowRight, CheckCircle, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background with enhanced gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-blue-50">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-transparent to-blue-500/5"></div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-orange-400/20 to-orange-600/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-blue-400/20 to-blue-600/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-up">
            <div className="inline-flex items-center bg-gradient-to-r from-orange-100 to-blue-100 px-4 py-2 rounded-full text-sm font-medium text-gray-700 mb-6 border border-orange-200/50">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
              Disponível 24h • Atendimento Imediato
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              Locação de{' '}
              <span className="bg-gradient-to-r from-orange-600 to-orange-700 bg-clip-text text-transparent">
                Muncks
              </span>{' '}
              e{' '}
              <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                Equipamentos
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-lg">
              Soluções completas em locação de muncks, guindautos e equipamentos pesados 
              para sua obra. Qualidade, segurança e confiabilidade garantidas há mais de 15 anos.
            </p>
            
            {/* Enhanced Features */}
            <div className="grid grid-cols-2 gap-6 mb-10">
              {[
                'Equipamentos modernos',
                'Operadores certificados',
                'Atendimento 24h',
                'Melhor custo-benefício'
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 group">
                  <div className="w-6 h-6 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Solicitar Orçamento Grátis
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-gray-300 hover:border-gray-400 bg-white/80 backdrop-blur-sm px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Ver Equipamentos
              </Button>
            </div>
          </div>

          {/* Enhanced Image */}
          <div className="relative">
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-orange-100 to-blue-100 hover:scale-105 transition-transform duration-700">
              <img
                src="/lovable-uploads/40e4834f-f0a0-4f50-b776-42be001fadfc.png"
                alt="Equipamentos LogMunck em operação"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Enhanced floating stats */}
            <div className="absolute -bottom-8 -left-8 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-white/20 hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-orange-700 bg-clip-text text-transparent">15+</div>
              <div className="text-sm text-gray-600 font-medium">Anos de experiência</div>
            </div>
            <div className="absolute -top-8 -right-8 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-white/20 hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">500+</div>
              <div className="text-sm text-gray-600 font-medium">Projetos realizados</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
