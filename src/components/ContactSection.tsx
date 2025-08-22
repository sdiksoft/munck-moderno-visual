
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ContactSection = () => {
  const whatsappNumber = "5585986161559";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefone',
      info: '(85) 98616-1559',
      subtitle: 'WhatsApp disponível',
      gradient: 'from-green-500 to-green-600',
      link: whatsappLink
    },
    {
      icon: Mail,
      title: 'E-mail',
      info: 'contato@logmunck.com.br',
      subtitle: 'Resposta em 24h',
      gradient: 'from-blue-500 to-blue-600',
      link: 'mailto:contato@logmunck.com.br'
    },
    {
      icon: MapPin,
      title: 'Endereço',
      info: 'R. Gatasse Kalume, 22',
      subtitle: 'Messejana, Fortaleza - CE, 60842-340',
      gradient: 'from-orange-500 to-orange-600'
    },
    {
      icon: Clock,
      title: 'Horário',
      info: '24h por dia',
      subtitle: 'Emergências e suporte',
      gradient: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <section id="contato" className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden" aria-labelledby="contact-heading">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-orange-100/40 to-transparent rounded-full -translate-x-32 -translate-y-32 blur-3xl" aria-hidden="true"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-blue-100/40 to-transparent rounded-full translate-x-32 translate-y-32 blur-3xl" aria-hidden="true"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <header className="text-center mb-20">
          <div className="inline-flex items-center bg-gradient-to-r from-orange-100 to-blue-100 px-6 py-3 rounded-full text-sm font-medium text-gray-700 mb-6 border border-orange-200/50" aria-label="Seção de destaque">
            <span aria-hidden="true">📞</span> Fale Conosco
          </div>
          <h2 id="contact-heading" className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Entre em <span className="bg-gradient-to-r from-orange-600 to-orange-700 bg-clip-text text-transparent">Contato</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Solicite seu orçamento sem compromisso. Nossa equipe está pronta 
            para atender suas necessidades com rapidez e eficiência.
          </p>
        </header>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Enhanced Contact Info */}
          <aside className="lg:col-span-1 space-y-6" role="complementary" aria-label="Informações de contato">
            {contactInfo.map((item, index) => {
              const IconComponent = item.icon;
              const content = (
                <div className="flex items-start space-x-4 p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 group hover:scale-105 focus-within:ring-2 focus-within:ring-orange-500 focus-within:ring-offset-2">
                  <div className={`w-14 h-14 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg`} aria-hidden="true">
                    <IconComponent className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2 text-lg">{item.title}</h3>
                    <p className="text-orange-600 font-bold text-lg mb-1">{item.info}</p>
                    <p className="text-sm text-gray-600">{item.subtitle}</p>
                  </div>
                </div>
              );

              return item.link ? (
                <a
                  key={index}
                  href={item.link}
                  target={item.link.startsWith('mailto:') ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  className="block"
                  aria-label={`${item.title}: ${item.info}. ${item.subtitle}`}
                >
                  {content}
                </a>
              ) : (
                <div key={index} tabIndex={0} role="region" aria-label={`${item.title}: ${item.info}. ${item.subtitle}`}>
                  {content}
                </div>
              );
            })}
          </aside>

          {/* Enhanced Contact Form */}
          <main className="lg:col-span-2">
            <Card className="border-0 shadow-2xl bg-white/90 backdrop-blur-sm overflow-hidden relative">
              {/* Form background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 via-white to-blue-50/50" aria-hidden="true"></div>
              
              <CardHeader className="relative z-10 pb-8">
                <CardTitle className="text-3xl text-gray-900 font-bold">Solicitar Orçamento</CardTitle>
                <p className="text-gray-600 mt-2">Preencha o formulário e receba uma proposta personalizada</p>
              </CardHeader>
              <CardContent className="space-y-8 relative z-10">
                <form className="space-y-8" noValidate>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="nome" className="block text-sm font-bold text-gray-700 mb-3">
                        Nome Completo *
                      </label>
                      <Input 
                        id="nome"
                        name="nome"
                        placeholder="Seu nome completo" 
                        className="h-12 border-2 border-gray-200 rounded-xl focus:border-orange-500 transition-colors bg-white/80 focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                        required
                        aria-describedby="nome-error"
                      />
                    </div>
                    <div>
                      <label htmlFor="telefone" className="block text-sm font-bold text-gray-700 mb-3">
                        Telefone *
                      </label>
                      <Input 
                        id="telefone"
                        name="telefone"
                        type="tel"
                        placeholder="(85) 98616-1559" 
                        className="h-12 border-2 border-gray-200 rounded-xl focus:border-orange-500 transition-colors bg-white/80 focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                        required
                        aria-describedby="telefone-error"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-3">
                        E-mail *
                      </label>
                      <Input 
                        id="email"
                        name="email"
                        type="email" 
                        placeholder="seu@email.com" 
                        className="h-12 border-2 border-gray-200 rounded-xl focus:border-orange-500 transition-colors bg-white/80 focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                        required
                        aria-describedby="email-error"
                      />
                    </div>
                    <div>
                      <label htmlFor="cidade" className="block text-sm font-bold text-gray-700 mb-3">
                        Cidade
                      </label>
                      <Input 
                        id="cidade"
                        name="cidade"
                        placeholder="Sua cidade" 
                        className="h-12 border-2 border-gray-200 rounded-xl focus:border-orange-500 transition-colors bg-white/80 focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="equipamento" className="block text-sm font-bold text-gray-700 mb-3">
                      Tipo de Equipamento
                    </label>
                    <Input 
                      id="equipamento"
                      name="equipamento"
                      placeholder="Ex: Munck 15 toneladas" 
                      className="h-12 border-2 border-gray-200 rounded-xl focus:border-orange-500 transition-colors bg-white/80 focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                    />
                  </div>

                  <div>
                    <label htmlFor="descricao" className="block text-sm font-bold text-gray-700 mb-3">
                      Descrição do Projeto
                    </label>
                    <Textarea 
                      id="descricao"
                      name="descricao"
                      placeholder="Descreva seu projeto, localização, duração estimada e outras informações relevantes..."
                      rows={4}
                      className="border-2 border-gray-200 rounded-xl focus:border-orange-500 transition-colors resize-none bg-white/80 focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                    />
                  </div>

                  <a 
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                    aria-label="Enviar formulário via WhatsApp"
                  >
                    <Button 
                      type="button"
                      className="w-full bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white text-lg py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                    >
                      <Send className="mr-2 h-5 w-5" aria-hidden="true" />
                      Enviar via WhatsApp
                    </Button>
                  </a>

                  <div className="text-sm text-gray-600 text-center bg-gray-50/80 p-4 rounded-xl" role="note" aria-label="Informações importantes sobre o formulário">
                    <strong>* Campos obrigatórios.</strong> Responderemos em até 2 horas úteis.
                  </div>
                </form>
              </CardContent>
            </Card>
          </main>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
