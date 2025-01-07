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
            answer: "ZenomyAI utiliza los más altos estándares de seguridad para proteger tus datos.",
        },
        {
            id: 3,
            question: "¿Qué planes de suscripción ofrecen?",
            answer: "Ofrecemos una variedad de planes adaptados a las necesidades de tu negocio.",
        },
        {
            id: 4,
            question: "¿Cómo puedo registrarme en ZenomyAI?",
            answer: "Puedes registrarte directamente en nuestro sitio web en la sección de suscripciones.",
        },
        {
            id: 5,
            question: "¿Ofrecen soporte técnico?",
            answer: "Sí, nuestro equipo de soporte técnico está disponible para ayudarte en todo momento.",
        },
        {
            id: 6,
            question: "¿Puedo probar ZenomyAI antes de suscribirme?",
            answer: "Ofrecemos una prueba gratuita para que conozcas nuestras funcionalidades.",
        },
    ];

    return (
        <div className="mt-28 px-4 sm:px-10">
            <div className="max-w-7xl mx-auto space-y-6">
                <div className="mb-10">
                    <h2 className="md:text-4xl text-3xl font-semibold mb-6">Preguntas Frecuentes</h2>
                    <p>
                        Explore common questions and find answers to help you make the most out of our services. If you
                        don&apos;t see your question here, feel free to contact us for assistance.
                    </p>
                </div>
                <div className="divide-y">
                    {questions.map((item, index) => (
                        <div key={item.id}>
                            <button
                                type="button"
                                onClick={() => toggleQuestion(index)}
                                className="w-full text-base text-left font-semibold py-6 flex items-center"
                            >
                                <span className="mr-4">{item.question}</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className={`w-3.5 fill-current ml-auto shrink-0 transform transition-transform ${openIndex === index ? "rotate-180" : "rotate-0"
                                        }`}
                                    viewBox="0 0 124 124"
                                >
                                    <path
                                        d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z"
                                        data-original="#000000"
                                    />
                                </svg>
                            </button>
                            <div
                                className={`overflow-hidden  ease-in-out ${openIndex === index ? "max-h-screen" : "max-h-0"
                                    }`}
                            >
                                <div className="py-4">
                                    <p>{item.answer}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Faqs;
