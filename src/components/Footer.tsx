
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  const whatsappNumber = "5585986161559";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <footer className="bg-gray-900 text-white" role="contentinfo">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <section aria-labelledby="company-info">
            <h2 id="company-info" className="text-2xl font-bold mb-4">
              Log<span className="text-orange-500">Munck</span>
            </h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Mais de 15 anos oferecendo soluções completas em locação de 
              muncks e equipamentos pesados com qualidade e segurança.
            </p>
            <div className="flex space-x-4" role="list" aria-label="Redes sociais">
              <a 
                href="https://www.facebook.com/logmunck" 
                className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center hover:bg-orange-700 transition-colors focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                aria-label="Visite nossa página no Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="h-5 w-5" aria-hidden="true" />
              </a>
              <a 
                href="https://www.instagram.com/logmunck/" 
                className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center hover:bg-orange-700 transition-colors focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                aria-label="Visite nossa página no Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>
          </section>

          {/* Quick Links */}
          <section aria-labelledby="quick-links">
            <h3 id="quick-links" className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <nav aria-label="Links rápidos da página">
              <ul className="space-y-3">
                {[
                  { name: 'Início', href: '#inicio' },
                  { name: 'Serviços', href: '#servicos' },
                  { name: 'Sobre Nós', href: '#sobre' },
                  { name: 'Equipamentos', href: '#equipamentos' },
                  { name: 'Contato', href: '#contato' }
                ].map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      className="text-gray-400 hover:text-orange-500 transition-colors focus:text-orange-500 focus:underline focus:outline-none"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </section>

          {/* Services */}
          <section aria-labelledby="services-list">
            <h3 id="services-list" className="text-lg font-semibold mb-4">Serviços</h3>
            <ul className="space-y-3" aria-label="Lista de serviços oferecidos">
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
          </section>

          {/* Contact Info */}
          <section aria-labelledby="contact-footer">
            <h3 id="contact-footer" className="text-lg font-semibold mb-4">Contato</h3>
            <address className="space-y-4 not-italic">
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 group hover:text-green-400 transition-colors focus:text-green-400 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-md p-1 -m-1"
                aria-label="Contato via WhatsApp: (85) 98616-1559"
              >
                <Phone className="h-5 w-5 text-orange-500 flex-shrink-0 group-hover:text-green-400 transition-colors" aria-hidden="true" />
                <div>
                  <div className="text-white group-hover:text-green-400 transition-colors">(85) 98616-1559</div>
                  <div className="text-sm text-gray-400">WhatsApp disponível</div>
                </div>
              </a>
              <a 
                href="mailto:contato@logmunck.com.br"
                className="flex items-center space-x-3 group hover:text-blue-400 transition-colors focus:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-md p-1 -m-1"
                aria-label="Enviar e-mail para contato@logmunck.com.br"
              >
                <Mail className="h-5 w-5 text-orange-500 flex-shrink-0 group-hover:text-blue-400 transition-colors" aria-hidden="true" />
                <div>
                  <div className="text-white group-hover:text-blue-400 transition-colors">contato@logmunck.com.br</div>
                  <div className="text-sm text-gray-400">Resposta em 24h</div>
                </div>
              </a>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-orange-500 flex-shrink-0" aria-hidden="true" />
                <div>
                  <div className="text-white">R. Gatasse Kalume, 22</div>
                  <div className="text-sm text-gray-400">Messejana, Fortaleza - CE</div>
                  <div className="text-sm text-gray-400">CEP: 60842-340</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-orange-500 flex-shrink-0" aria-hidden="true" />
                <div>
                  <div className="text-white">24h por dia</div>
                  <div className="text-sm text-gray-400">Emergências e suporte</div>
                </div>
              </div>
            </address>
          </section>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 LogMunck. Todos os direitos reservados.
            </div>
            <nav className="flex space-x-6 text-sm text-gray-400" aria-label="Links legais">
             Acreditamos em Deus.
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
