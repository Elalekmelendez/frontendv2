"use client";
import React, { useState } from 'react'
import Image from 'next/image'
import home_image from '@public/home_image.png'
import { ArticleCardProps } from '@/interfaces/ArticleCard.interface'

const models = [
    {
        id: 1,
        category: "Salud y Bienestar",
        date: "Proximamente...",
        title: "Asistente Médico",
        image: "medical-assistant.png",
    },
    {
        id: 2,
        category: "Salud y Bienestar",
        date: "Proximamente...",
        title: "Asistente de Fitness",
        image: "fitness-assistant.png",
    },
    {
        id: 3,
        category: "Salud y Bienestar",
        date: "Proximamente...",
        title: "Asistente de Nutrición",
        image: "nutrition-assistant.png",
    },
    {
        id: 4,
        category: "Salud y Bienestar",
        date: "Proximamente...",
        title: "Asistente Psicológico",
        image: "psychological-assistant.png",
    },
    {
        id: 5,
        category: "Salud y Bienestar",
        date: "Proximamente...",
        title: "Asistente de Rehabilitación Física",
        image: "rehabilitation-assistant.png",
    },
    {
        id: 6,
        category: "Finanzas y Banca",
        date: "Proximamente...",
        title: "Asistente Financiero",
        image: "financial-assistant.png",
    },
    {
        id: 7,
        category: "Finanzas y Banca",
        date: "Proximamente...",
        title: "Asistente de Seguros",
        image: "insurance-assistant.png",
    },
    {
        id: 8,
        category: "Finanzas y Banca",
        date: "Proximamente...",
        title: "Asistente de Pagos",
        image: "payment-assistant.png",
    },
    {
        id: 9,
        category: "Finanzas y Banca",
        date: "Proximamente...",
        title: "Asistente de Criptomonedas",
        image: "crypto-assistant.png",
    },
    {
        id: 10,
        category: "Finanzas y Banca",
        date: "Proximamente...",
        title: "Asistente de Préstamos",
        image: "loan-assistant.png",
    },
    {
        id: 11,
        category: "Educación",
        date: "Proximamente...",
        title: "Asistente Educativo",
        image: "educational-assistant.png",
    },
    {
        id: 12,
        category: "Educación",
        date: "Proximamente...",
        title: "Asistente de Tutoría",
        image: "tutoring-assistant.png",
    },
    {
        id: 13,
        category: "Educación",
        date: "Proximamente...",
        title: "Asistente Infantil",
        image: "child-assistant.png",
    },
    {
        id: 14,
        category: "Educación",
        date: "Proximamente...",
        title: "Asistente para Idiomas",
        image: "language-assistant.png",
    },
    {
        id: 15,
        category: "Educación",
        date: "Proximamente...",
        title: "Asistente para Investigación",
        image: "research-assistant.png",
    },
    {
        id: 16,
        category: "Comercio y Retail",
        date: "Proximamente...",
        title: "Asistente de Ventas",
        image: "sales-assistant.png",
    },
    {
        id: 17,
        category: "Comercio y Retail",
        date: "Proximamente...",
        title: "Asistente de Atención al Cliente",
        image: "customer-support-assistant.png",
    },
    {
        id: 18,
        category: "Comercio y Retail",
        date: "Proximamente...",
        title: "Asistente de Inventarios",
        image: "inventory-assistant.png",
    },
    {
        id: 19,
        category: "Comercio y Retail",
        date: "Proximamente...",
        title: "Asistente de Tienda Virtual",
        image: "virtual-store-assistant.png",
    },
    {
        id: 20,
        category: "Comercio y Retail",
        date: "Proximamente...",
        title: "Asistente de Marketplace",
        image: "marketplace-assistant.png",
    },
    {
        id: 21,
        category: "Turismo y Hospitalidad",
        date: "Proximamente...",
        title: "Asistente de Reservas",
        image: "reservation-assistant.png",
    },
    {
        id: 22,
        category: "Turismo y Hospitalidad",
        date: "Proximamente...",
        title: "Asistente Turístico",
        image: "tourism-assistant.png",
    },
    {
        id: 23,
        category: "Turismo y Hospitalidad",
        date: "Proximamente...",
        title: "Asistente de Cruceros",
        image: "cruise-assistant.png",
    },
    {
        id: 24,
        category: "Turismo y Hospitalidad",
        date: "Proximamente...",
        title: "Asistente de Restaurantes",
        image: "restaurant-assistant.png",
    },
    {
        id: 25,
        category: "Turismo y Hospitalidad",
        date: "Proximamente...",
        title: "Asistente de Eventos",
        image: "events-assistant.png",
    },
    {
        id: 26,
        category: "Recursos Humanos",
        date: "Proximamente...",
        title: "Asistente de Reclutamiento",
        image: "recruitment-assistant.png",
    },
    {
        id: 27,
        category: "Recursos Humanos",
        date: "Proximamente...",
        title: "Asistente de Gestión de Personal",
        image: "personal-management-assistant.png",
    },
    {
        id: 28,
        category: "Recursos Humanos",
        date: "Proximamente...",
        title: "Asistente de Nómina",
        image: "payroll-assistant.png",
    },
    {
        id: 29,
        category: "Recursos Humanos",
        date: "Proximamente...",
        title: "Asistente de Capacitación",
        image: "training-assistant.png",
    },
    {
        id: 30,
        category: "Recursos Humanos",
        date: "Proximamente...",
        title: "Asistente de Encuestas de Clima",
        image: "climate-survey-assistant.png",
    },
    {
        id: 31,
        category: "Legal",
        date: "Proximamente...",
        title: "Asistente Legal",
        image: "legal-assistant.png",
    },
    {
        id: 32,
        category: "Legal",
        date: "Proximamente...",
        title: "Asistente de Patentes",
        image: "patents-assistant.png",
    },
    {
        id: 33,
        category: "Legal",
        date: "Proximamente...",
        title: "Asistente de Litigios",
        image: "litigation-assistant.png",
    },
    {
        id: 34,
        category: "Legal",
        date: "Proximamente...",
        title: "Asistente Notarial",
        image: "notary-assistant.png",
    },
    {
        id: 35,
        category: "Legal",
        date: "Proximamente...",
        title: "Asistente de Cumplimiento Normativo",
        image: "compliance-assistant.png",
    },
];



const ArticleCard: React.FC<ArticleCardProps> = ({ title, date }) => (
    <div className="cursor-pointer rounded overflow-hidden group">
        <div>
            <span className="block text-gray-400 mb-2">{date}</span>
            <h3 className="text-xl font-semibold group-hover:text-blue-500 transition-all">{title}</h3>
            <div className="mt-4">
                <Image src={home_image} width={300} height={300} alt='foto blog' />
            </div>
        </div>
        <hr className="my-6" />
    </div>
);

const Models = () => {
    const [visibleItems, setVisibleItems] = useState(9);

    const loadMore = () => {
        setVisibleItems((prev) => Math.min(prev + 9, models.length));
    };

    return (
        <div className="px-4 sm:px-10 mt-28">
            <div className="max-w-7xl mx-auto">
                <div>
                    <h2 className="md:text-4xl text-3xl font-bold">
                        Explora Nuestros Próximos Modelos de IA
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
                    {models.slice(0, visibleItems).map((model) => (
                        <ArticleCard key={model.id} {...model} />
                    ))}
                </div>
                {visibleItems < models.length && (
                    <div className="flex justify-center mt-10">
                        <button
                            onClick={loadMore}
                        className="bg-black hover:bg-[#222] text-white flex items-center transition-all font-semibold rounded-md px-5 py-4 mt-8">
                            Cargar más
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-[14px] fill-current ml-2"
                                viewBox="0 0 492.004 492.004"
                            >
                                <path
                                    d="M484.14 226.886 306.46 49.202c-5.072-5.072-11.832-7.856-19.04-7.856-7.216 0-13.972 2.788-19.044 7.856l-16.132 16.136c-5.068 5.064-7.86 11.828-7.86 19.04 0 7.208 2.792 14.2 7.86 19.264L355.9 207.526H26.58C11.732 207.526 0 219.15 0 234.002v22.812c0 14.852 11.732 27.648 26.58 27.648h330.496L252.248 388.926c-5.068 5.072-7.86 11.652-7.86 18.864 0 7.204 2.792 13.88 7.86 18.948l16.132 16.084c5.072 5.072 11.828 7.836 19.044 7.836 7.208 0 13.968-2.8 19.04-7.872l177.68-177.68c5.084-5.088 7.88-11.88 7.86-19.1.016-7.244-2.776-14.04-7.864-19.12z"
                                    data-original="#000000"
                                />
                            </svg>
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Models;