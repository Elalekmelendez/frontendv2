import {SubscriptionCard} from "@/components/subscriptions";
import React from "react";

const subscriptions = () => {
  const plans = [
    {
      title: "Arranque",
      description: "Ideal para particulares.",
      price: "$9.990 CLP",
      subPrice: "/ Mes",
      features: [
        "50 Image generations",
        "500 Credits",
        "Customer Support",
        "50GB Cloud Storage",
        "Unlimited Book Mark",
        "Unlimited basic feature",
      ],
    },
    {
      title: "Profesional",
      description: "Ideal para equipos pequeños.",
      price: "$59.990 CLP",
      subPrice: "/ Mes",
      features: [
        "100 Image generations",
        "1000 Credits",
        "Customer Support",
        "100GB Cloud Storage",
        "Unlimited Book Mark",
        "Unlimited basic feature",
      ],
    },
    {
      title: "Empresarial",
      description: "Ideal para equipos grandes.",
      price: "Cotización Personalziada.",
      features: [
        "500 Image generations",
        "5000 Credits",
        "Customer Support",
        "500GB Cloud Storage",
        "Unlimited Book Mark",
        "Unlimited basic feature",
      ],
    },
  ];

  return (
    <div className="font-[sans-serif] relative before:absolute before:w-full before:h-1/2 max-lg:before:h-1/4 before:bg-gradient-to-r before:from-gray-700 before:via-purple-700 before:to-gray-700 before:z-10">
      <div className="max-w-6xl max-md:max-w-xl mx-auto py-10 px-4 relative z-20">
        <div className="max-w-5xl mx-auto font-[sans-serif] p-4">
          <div className="text-center">
            <h2 className="text-white text-4xl font-bold">Suscripciones</h2>
          </div>
          <div className="flex mx-auto bg-gray-100 rounded-full max-w-[250px] p-1 mt-8">
            <button className="text-white w-full text-sm bg-blue-500 py-2 px-4 rounded-full">
              Mensual
            </button>
            <button className="w-full text-sm py-2 px-4 rounded-full">Anual</button>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 max-lg:gap-8 mt-8 max-md:max-w-sm max-md:mx-auto">
            {plans.map((plan, index) => (
              <SubscriptionCard key={index} plan={plan} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};





export default subscriptions;
