import React from 'react'
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



const ArticleCard: React.FC<ArticleCardProps> = ({ category, title, date, image }) => (
    <div className="cursor-pointer rounded overflow-hidden group">
        <div>
            <span className="block text-gray-400 mb-2">{date}</span>
            <h3 className="text-xl font-semibold group-hover:text-blue-500 transition-all">{title}</h3>
            <div className="mt-4">
                <Image src={home_image} width={300} alt='foto blog' />
            </div>
        </div>
        <hr className="my-6" />
    </div>
)

const Models = () => {
    return (
        <div className="px-4 sm:px-10 mt-28">
            <div className="max-w-7xl mx-auto">
                <div>
                    <h2 className="md:text-4xl text-3xl font-bold">
                        Explora Nuestros Próximos Modelos de IA
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
                    {models.map((model) => (
                        <ArticleCard key={model.id} {...model} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Models
