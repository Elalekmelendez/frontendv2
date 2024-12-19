import React from 'react'
import FeatureItem from './FeatureItem';

interface Plan {
    title: string;
    description: string;
    price: string;
    subPrice?: string;
    features: string[];
  }
  
  const SubscriptionCard = ({ plan }: { plan: Plan }) => {
    const { title, description, price, subPrice, features } = plan;
    return (
      <div className="bg-gray-100 rounded-3xl overflow-hidden p-8">
        <div className="text-left">
          <h4 className="text-gray-800 font-semibold text-2xl">{title}</h4>
          <p className="text-gray-600 text-sm mt-2">{description}</p>
          <h3 className="text-gray-800 font-semibold text-2xl mt-4">
            {price}
            {subPrice && (
              <sub className="text-sm font-medium text-gray-600 ml-1">{subPrice}</sub>
            )}
          </h3>
          <button
            type="button"
            className="w-full mt-8 px-5 py-2.5 text-sm bg-blue-600 text-white hover:bg-blue-700 rounded-full"
          >
            Adquirir
          </button>
        </div>
        <div className="mt-8">
          <h4 className="text-gray-800 font-semibold text-lg mb-4">Plan Incluye</h4>
          <ul className="space-y-4">
            {features.map((feature, index) => (
              <FeatureItem key={index} feature={feature} />
            ))}
          </ul>
        </div>
      </div>
    );
  };

export default SubscriptionCard