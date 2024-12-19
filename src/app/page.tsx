import type { Metadata } from "next";
import HomePage from './home/page'

// SEO
export const metadata: Metadata = {
  title: 'Zenomyai',
  description: 'ChatBot de inteligencia artifical personalizado',
  keywords: [
    'Inteligencia Artificial para empresas',
    'Chatbots con IA',
    'Plataforma de IA en Chile',
    'Soluciones de machine learning',
    'Zenomy AI suscripción',
    'Zenomy'
  ]

}

export default function Home() {
  return (
    
    <HomePage />

  );
}
