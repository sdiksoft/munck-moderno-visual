
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  const whatsappNumber = "5585986161559";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="text-2xl font-bold mb-4">
              Log<span className="text-orange-500">Munck</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Mais de 15 anos oferecendo soluções completas em locação de 
              muncks e equipamentos pesados com qualidade e segurança.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/logmunck" className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center hover:bg-orange-700 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/logmunck/" className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center hover:bg-orange-700 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-3">
              {[
                { name: 'Início', href: '#inicio' },
                { name: 'Serviços', href: '#servicos' },
                { name: 'Sobre Nós', href: '#sobre' },
                { name: 'Equipamentos', href: '#equipamentos' },
                { name: 'Contato', href: '#contato' }
              ].map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-orange-500 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Serviços</h3>
            <ul className="space-y-3">
              {[
                'Locação de Muncks',
                'Operadores Certificados',
                'Transporte de Cargas',
                'Consultoria Técnica',
                'Manutenção Preventiva'
              ].map((service, index) => (
                <li key={index}>
                  <span className="text-gray-400">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="space-y-4">
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 group hover:text-green-400 transition-colors"
              >
                <Phone className="h-5 w-5 text-orange-500 flex-shrink-0 group-hover:text-green-400 transition-colors" />
                <div>
                  <div className="text-white group-hover:text-green-400 transition-colors">(85) 98616-1559</div>
                  <div className="text-sm text-gray-400">WhatsApp disponível</div>
                </div>
              </a>
              <a 
                href="mailto:contato@logmunck.com.br"
                className="flex items-center space-x-3 group hover:text-blue-400 transition-colors"
              >
                <Mail className="h-5 w-5 text-orange-500 flex-shrink-0 group-hover:text-blue-400 transition-colors" />
                <div>
                  <div className="text-white group-hover:text-blue-400 transition-colors">contato@logmunck.com.br</div>
                  <div className="text-sm text-gray-400">Resposta em 24h</div>
                </div>
              </a>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-orange-500 flex-shrink-0" />
                <div>
                  <div className="text-white">R. Gatasse Kalume, 22</div>
                  <div className="text-sm text-gray-400">Messejana, Fortaleza - CE</div>
                  <div className="text-sm text-gray-400">CEP: 60842-340</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-orange-500 flex-shrink-0" />
                <div>
                  <div className="text-white">24h por dia</div>
                  <div className="text-sm text-gray-400">Emergências e suporte</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 LogMunck. Todos os direitos reservados.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-orange-500 transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-orange-500 transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
