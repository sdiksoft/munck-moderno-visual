
import { Users, Award, MapPin, Target } from 'lucide-react';

const AboutSection = () => {
  const stats = [
    { icon: Users, value: '50+', label: 'Profissionais Qualificados' },
    { icon: Award, value: '15+', label: 'Anos de Experiência' },
    { icon: MapPin, value: '100+', label: 'Cidades Atendidas' },
    { icon: Target, value: '500+', label: 'Projetos Concluídos' }
  ];

  return (
    <section id="sobre" className="py-20 bg-white" aria-labelledby="about-heading">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <article>
            <h2 id="about-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Sobre a <span className="text-orange-600">LogMunck</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Com mais de 15 anos de experiência no mercado, a LogMunck é referência 
              em locação de equipamentos pesados. Nossa missão é fornecer soluções 
              eficientes e seguras para seus projetos de construção e obras especiais.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Contamos com uma frota moderna e bem conservada, além de profissionais 
              altamente qualificados que garantem a excelência em todos os serviços prestados.
            </p>

            {/* Mission, Vision, Values */}
            <div className="space-y-6">
              <section>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Nossa Missão</h3>
                <p className="text-gray-600">
                  Oferecer soluções completas em locação de equipamentos pesados, 
                  priorizando segurança, qualidade e satisfação do cliente.
                </p>
              </section>
              <section>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Nossa Visão</h3>
                <p className="text-gray-600">
                  Ser a empresa líder em locação de muncks e equipamentos pesados, 
                  reconhecida pela excelência e inovação.
                </p>
              </section>
            </div>
          </article>

          {/* Image and Stats */}
          <aside>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/lovable-uploads/904dfbda-67ec-4741-9046-dc1fb87cfb91.png"
                alt="Munck da LogMunck em operação em um canteiro de obras, demonstrando a qualidade e profissionalismo dos equipamentos da empresa"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mt-8" role="region" aria-label="Estatísticas da empresa">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center border focus-within:ring-2 focus-within:ring-orange-500 focus-within:ring-offset-2" tabIndex={0} role="region" aria-label={`${stat.label}: ${stat.value}`}>
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-3" aria-hidden="true">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-1" aria-label={`Número: ${stat.value}`}>{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
