import React from 'react';
import { FooterIntro, FooterLinks } from '@/components/footer';

const Footer = () => {
  return (
    <footer className="mt-auto">
      <div className="px-4 sm:px-10">
        <div className="grid max-sm:grid-cols-1 max-xl:grid-cols-2 xl:grid-cols-5 gap-8 max-w-7xl mx-auto">
          {/* <FooterIntro /> */}
          {/* <FooterLinks title="Sobre Nosotros" links={aboutLinks} /> */}
          {/* <FooterLinks title="Servicios" links={servicesLinks} /> */}
          {/* <FooterLinks title="Próximos modelos" links={modelsLinks} /> */}
        </div>
      </div>
      <hr className="my-9" />
      <p className="text-center mb-6">
        © 2025 ZenomyAI. Todos los derechos reservados. Desarrollado por Wime
      </p>
    </footer>

  );
};






// Datos para enlaces "Sobre Nosotros"
const aboutLinks = [
  { href: '#', text: 'Nuestra historia' },
  { href: '#', text: 'Misión y Visión' },
  { href: '#', text: 'Equipo' },
  { href: '#', text: 'Testimonios' },
];

// Datos para enlaces "Servicios"
const servicesLinks = [
  { href: '#', text: 'Automatización' },
  { href: '#', text: 'Análisis de datos' },
  { href: '#', text: 'Chatbot Personalizado' },
  { href: '#', text: 'Seguridad' },
];

const modelsLinks = [
  { href: '#', text: 'Salud y bienestar' },
  { href: '#', text: 'Finanzas y Banca' },
  { href: '#', text: 'Educación' },
  { href: '#', text: 'Comercio y Retail' },
];

export default Footer;
