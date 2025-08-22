
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import EquipmentSection from '@/components/EquipmentSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen font-inter">
      {/* Skip to main content link */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 bg-orange-600 text-white px-4 py-2 rounded-md font-medium hover:bg-orange-700 transition-colors"
      >
        Pular para o conteúdo principal
      </a>
      
      <Header />
      
      <main id="main-content">
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <EquipmentSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
