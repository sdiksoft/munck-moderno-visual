
import { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Início', href: '#inicio' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Equipamentos', href: '#equipamentos' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200/50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Enhanced Logo */}
          <div className="flex-shrink-0">
            <div className="text-3xl font-bold">
              <span className="bg-gradient-to-r from-orange-600 to-orange-700 bg-clip-text text-transparent">Log</span>
              <span className="text-gray-800">Munck</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-orange-600 transition-all duration-300 font-medium relative group py-2"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-600 to-orange-700 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Enhanced Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-sm text-gray-600 bg-gray-50/80 px-4 py-2 rounded-full">
              <Phone className="h-4 w-4 text-orange-600" />
              <span className="font-medium">(11) 99999-9999</span>
            </div>
            <Button className="bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white px-6 py-2.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              Solicitar Orçamento
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Enhanced Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-gray-200/50 bg-white/95 backdrop-blur-md">
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-orange-600 transition-colors duration-200 font-medium py-3 px-2 rounded-lg hover:bg-orange-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-6 border-t border-gray-200/50 space-y-4">
                <div className="flex items-center space-x-3 text-sm text-gray-600 bg-gray-50 px-4 py-3 rounded-lg">
                  <Phone className="h-4 w-4 text-orange-600" />
                  <span className="font-medium">(11) 99999-9999</span>
                </div>
                <Button className="w-full bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white py-3 rounded-xl shadow-lg">
                  Solicitar Orçamento
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
