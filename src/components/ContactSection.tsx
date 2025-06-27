
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefone',
      info: '(11) 99999-9999',
      subtitle: 'WhatsApp disponível',
      gradient: 'from-green-500 to-green-600'
    },
    {
      icon: Mail,
      title: 'E-mail',
      info: 'contato@logmunck.com.br',
      subtitle: 'Resposta em 24h',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: MapPin,
      title: 'Endereço',
      info: 'São Paulo - SP',
      subtitle: 'Atendemos toda região',
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
    <section id="contato" className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-orange-100/40 to-transparent rounded-full -translate-x-32 -translate-y-32 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-blue-100/40 to-transparent rounded-full translate-x-32 translate-y-32 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-gradient-to-r from-orange-100 to-blue-100 px-6 py-3 rounded-full text-sm font-medium text-gray-700 mb-6 border border-orange-200/50">
            📞 Fale Conosco
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Entre em <span className="bg-gradient-to-r from-orange-600 to-orange-700 bg-clip-text text-transparent">Contato</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Solicite seu orçamento sem compromisso. Nossa equipe está pronta 
            para atender suas necessidades com rapidez e eficiência.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Enhanced Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            {contactInfo.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="flex items-start space-x-4 p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 group hover:scale-105">
                  <div className={`w-14 h-14 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <IconComponent className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2 text-lg">{item.title}</h3>
                    <p className="text-orange-600 font-bold text-lg mb-1">{item.info}</p>
                    <p className="text-sm text-gray-600">{item.subtitle}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Enhanced Contact Form */}
          <Card className="lg:col-span-2 border-0 shadow-2xl bg-white/90 backdrop-blur-sm overflow-hidden relative">
            {/* Form background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 via-white to-blue-50/50"></div>
            
            <CardHeader className="relative z-10 pb-8">
              <CardTitle className="text-3xl text-gray-900 font-bold">Solicitar Orçamento</CardTitle>
              <p className="text-gray-600 mt-2">Preencha o formulário e receba uma proposta personalizada</p>
            </CardHeader>
            <CardContent className="space-y-8 relative z-10">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-3">
                    Nome Completo *
                  </label>
                  <Input 
                    placeholder="Seu nome completo" 
                    className="h-12 border-2 border-gray-200 rounded-xl focus:border-orange-500 transition-colors bg-white/80"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-3">
                    Telefone *
                  </label>
                  <Input 
                    placeholder="(11) 99999-9999" 
                    className="h-12 border-2 border-gray-200 rounded-xl focus:border-orange-500 transition-colors bg-white/80"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-3">
                    E-mail *
                  </label>
                  <Input 
                    type="email" 
                    placeholder="seu@email.com" 
                    className="h-12 border-2 border-gray-200 rounded-xl focus:border-orange-500 transition-colors bg-white/80"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-3">
                    Cidade
                  </label>
                  <Input 
                    placeholder="Sua cidade" 
                    className="h-12 border-2 border-gray-200 rounded-xl focus:border-orange-500 transition-colors bg-white/80"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-3">
                  Tipo de Equipamento
                </label>
                <Input 
                  placeholder="Ex: Munck 15 toneladas" 
                  className="h-12 border-2 border-gray-200 rounded-xl focus:border-orange-500 transition-colors bg-white/80"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-3">
                  Descrição do Projeto
                </label>
                <Textarea 
                  placeholder="Descreva seu projeto, localização, duração estimada e outras informações relevantes..."
                  rows={4}
                  className="border-2 border-gray-200 rounded-xl focus:border-orange-500 transition-colors resize-none bg-white/80"
                />
              </div>

              <Button className="w-full bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white text-lg py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <Send className="mr-2 h-5 w-5" />
                Enviar Solicitação
              </Button>

              <p className="text-sm text-gray-600 text-center bg-gray-50/80 p-4 rounded-xl">
                <strong>* Campos obrigatórios.</strong> Responderemos em até 2 horas úteis.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
