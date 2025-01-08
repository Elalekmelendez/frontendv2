import React from 'react';
import {
  Hero,
  Features,
  Innovation,
  Security,
  StartNow,
  Models,
  Faqs,
} from '@/components/home';

const Home = () => {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Zenomy | Optimiza tu negocio con IA</title>
      <meta
        name="description"
        content="Descubre cómo ZenomyAI puede revolucionar tu empresa con herramientas de inteligencia artificial avanzadas."
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@200;300;400;600;700;800&family=Inter:wght@100;300;400;500;700&display=swap"
        rel="stylesheet"
      />

      <div className="bg-white dark:bg-black transition-colors font-nunito-sans">
        <Hero />
        <Features />
        <Innovation />
        <Security />
        <StartNow />
        <Models />
        <Faqs />
      </div>
    </>
  );
};

export default Home;
