import { useState, useEffect } from 'react';

export const useWhatsApp = (phoneNumber: string, message: string) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const isMobileDevice = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      
      setIsMobile(isMobileDevice || (isTouchDevice && window.innerWidth <= 768));
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const getWhatsAppLink = () => {
    const encodedMessage = encodeURIComponent(message);
    
    if (isMobile) {
      // Para mobile, usa wa.me que abre o app nativo
      return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    } else {
      // Para desktop, usa web.whatsapp.com
      return `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
    }
  };

  return {
    whatsappLink: getWhatsAppLink(),
    isMobile
  };
};