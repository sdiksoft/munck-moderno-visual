
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
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
      subtitle: 'WhatsApp disponível'
    },
    {
      icon: Mail,
      title: 'E-mail',
      info: 'contato@logmunck.com.br',
      subtitle: 'Resposta em 24h'
    },
    {
      icon: MapPin,
      title: 'Endereço',
      info: 'São Paulo - SP',
      subtitle: 'Atendemos toda região'
    },
    {
      icon: Clock,
      title: 'Horário',
      info: '24h por dia',
      subtitle: 'Emergências e suporte'
    }
  ];

  return (
    <section id="contato" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Entre em <span className="text-orange-600">Contato</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Solicite seu orçamento sem compromisso. Nossa equipe está pronta 
            para atender suas necessidades.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            {contactInfo.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-orange-600 font-medium">{item.info}</p>
                    <p className="text-sm text-gray-600">{item.subtitle}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Contact Form */}
          <Card className="lg:col-span-2 border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">Solicitar Orçamento</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nome *
                  </label>
                  <Input placeholder="Seu nome completo" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Telefone *
                  </label>
                  <Input placeholder="(11) 99999-9999" />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    E-mail *
                  </label>
                  <Input type="email" placeholder="seu@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Cidade
                  </label>
                  <Input placeholder="Sua cidade" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tipo de Equipamento
                </label>
                <Input placeholder="Ex: Munck 15 toneladas" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Descrição do Projeto
                </label>
                <Textarea 
                  placeholder="Descreva seu projeto, localização, duração estimada e outras informações relevantes..."
                  rows={4}
                />
              </div>

              <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white text-lg py-3">
                Enviar Solicitação
              </Button>

              <p className="text-sm text-gray-600 text-center">
                * Campos obrigatórios. Responderemos em até 2 horas.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
