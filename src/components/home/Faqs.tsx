"use client";
import React, { useState } from "react";

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const questions = [
    {
      id: 1,
      question: "¿Qué hace ZenomyAI por mi negocio?",
      answer:
        "ZenomyAI automatiza tareas, optimiza procesos y proporciona análisis basados en inteligencia artificial para mejorar tu productividad y toma de decisiones.",
    },
    {
      id: 2,
      question: "¿Es seguro usar ZenomyAI?",
      answer:
        "ZenomyAI utiliza los más altos estándares de seguridad para proteger tus datos.",
    },
    {
      id: 3,
      question: "¿Qué planes de suscripción ofrecen?",
      answer:
        "Ofrecemos una variedad de planes adaptados a las necesidades de tu negocio.",
    },
    {
      id: 4,
      question: "¿Cómo puedo registrarme en ZenomyAI?",
      answer:
        "Puedes registrarte directamente en nuestro sitio web en la sección de suscripciones.",
    },
    {
      id: 5,
      question: "¿Ofrecen soporte técnico?",
      answer:
        "Sí, nuestro equipo de soporte técnico está disponible para ayudarte en todo momento.",
    },
    {
      id: 6,
      question: "¿Puedo probar ZenomyAI antes de suscribirme?",
      answer:
        "Ofrecemos una prueba gratuita para que conozcas nuestras funcionalidades.",
    },
  ];

  return (
    <section className="bg-background-light dark:bg-background-dark py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-10">
        {/* Título */}
        <div className="mb-10 text-center">
          <h2 className="md:text-4xl text-3xl font-semibold text-primary dark:text-primary-dark mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="text-base text-primary-light dark:text-primary-dark">
            Encuentra respuestas a las preguntas más comunes sobre nuestros
            servicios. Si no encuentras la respuesta que buscas, no dudes en
            contactarnos.
          </p>
        </div>

        {/* Preguntas */}
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          {questions.map((item, index) => (
            <div key={item.id} className="py-4">
              <button
                type="button"
                onClick={() => toggleQuestion(index)}
                className="w-full flex items-center justify-between text-left bg-white text-primary dark:bg-gray-800 dark:text-primary-dark font-semibold py-4 px-4 focus:outline-none transition-all rounded-lg shadow-sm hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <span>{item.question}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`w-4 h-4 transition-transform ${
                    openIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 01.707.293l5 5a1 1 0 11-1.414 1.414L10 5.414 5.707 9.707a1 1 0 01-1.414-1.414l5-5A1 1 0 0110 3z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <div
                className={`transition-all duration-300 overflow-hidden ${
                  openIndex === index ? "max-h-screen" : "max-h-0"
                }`}
              >
                <p className="text-primary-light dark:text-primary-dark text-base mt-2">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faqs;
