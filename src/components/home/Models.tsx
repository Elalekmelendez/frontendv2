"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartbeat, faDumbbell, faAppleAlt, faBrain, faWalking, faPiggyBank, faChartBar, faCreditCard, faBitcoin, faUniversity, faGraduationCap, faUserGraduate, faLanguage, faSearch, faShoppingCart, faHeadset, faClipboardList, faStore, faBuilding, faHotel, faUtensils, faCalendarAlt, faUsers, faBriefcase, faFileInvoiceDollar, faChalkboardTeacher, faFileContract, faGavel, faClipboardCheck } from "@fortawesome/free-solid-svg-icons";

const categoryIcons = {
  "Salud y Bienestar": faHeartbeat,
  "Finanzas y Banca": faPiggyBank,
  Educación: faGraduationCap,
  "Comercio y Retail": faShoppingCart,
  "Turismo y Hospitalidad": faHotel,
  "Recursos Humanos": faUsers,
  Legal: faGavel,
};

const models = [
  {
    id: 1,
    category: "Salud y Bienestar",
    date: "Próximamente...",
    title: "Asistente Médico",
  },
  {
    id: 6,
    category: "Finanzas y Banca",
    date: "Próximamente...",
    title: "Asistente Financiero",
  },
  {
    id: 11,
    category: "Educación",
    date: "Próximamente...",
    title: "Asistente Educativo",
  },
  {
    id: 16,
    category: "Comercio y Retail",
    date: "Próximamente...",
    title: "Asistente de Ventas",
  },
  {
    id: 21,
    category: "Turismo y Hospitalidad",
    date: "Próximamente...",
    title: "Asistente de Reservas",
  },
  {
    id: 26,
    category: "Recursos Humanos",
    date: "Próximamente...",
    title: "Asistente de Reclutamiento",
  },
  {
    id: 31,
    category: "Legal",
    date: "Próximamente...",
    title: "Asistente Legal",
  },
];

const ArticleCard = ({ title, date, category }) => (
  <div className="cursor-pointer rounded-lg shadow-sm hover:shadow-lg transition-all p-6 bg-white border border-gray-200">
    <div className="flex items-center mb-4">
      <div className="w-12 h-12 bg-[#7DC3D7] text-white flex items-center justify-center rounded-full shadow-md">
        <FontAwesomeIcon icon={categoryIcons[category]} className="w-6 h-6" />
      </div>
      <h3 className="text-xl font-semibold text-[#1D343E] ml-4">{title}</h3>
    </div>
    <span className="block text-sm text-[#435D69]">{date}</span>
  </div>
);

const Models = () => {
  const [visibleItems, setVisibleItems] = useState(6);

  const loadMore = () => {
    setVisibleItems((prev) => Math.min(prev + 6, models.length));
  };

  return (
    <div className="px-4 sm:px-10 mt-28">
      <div className="max-w-7xl mx-auto">
        <div>
          <h2 className="md:text-4xl text-3xl font-bold text-[#1D343E] mb-8">
            Explora Nuestros Próximos Modelos de IA
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {models.slice(0, visibleItems).map((model) => (
            <ArticleCard key={model.id} {...model} />
          ))}
        </div>
        {visibleItems < models.length && (
          <div className="flex justify-center mt-10">
            <button
              onClick={loadMore}
              className="bg-[#7DC3D7] hover:bg-[#9EB4BE] text-white font-semibold rounded-lg px-6 py-3 shadow-md transition-all"
            >
              Cargar más
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Models;
