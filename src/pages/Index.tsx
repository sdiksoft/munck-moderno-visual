
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
      <Header />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <EquipmentSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
