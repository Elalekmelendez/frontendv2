"use client";

import React, { useEffect, useState } from "react";
import { useMercadoPago } from "./useMercadoPago";

interface CardFormProps {
  publicKey: string;
  onTokenGenerated: (token: string) => void;
}

const CardForm: React.FC<CardFormProps> = ({ publicKey, onTokenGenerated }) => {
  const mercadoPago = useMercadoPago(publicKey);
  const [formData, setFormData] = useState({
    cardholderName: "",
    identificationType: "DNI",
    identificationNumber: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
  });

  useEffect(() => {
    if (mercadoPago) {
      const cardNumberElement = mercadoPago.fields.create("cardNumber", {
        placeholder: "Número de la tarjeta",
      });
      const expirationDateElement = mercadoPago.fields.create("expirationDate", {
        placeholder: "MM/AA",
      });
      const securityCodeElement = mercadoPago.fields.create("securityCode", {
        placeholder: "Código de seguridad",
      });

      cardNumberElement.mount("#cardNumber");
      expirationDateElement.mount("#expirationDate");
      securityCodeElement.mount("#securityCode");
    }
  }, [mercadoPago]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (mercadoPago) {
      try {
        const token = await mercadoPago.createCardToken({
          cardholderName: formData.cardholderName,
          identificationType: formData.identificationType,
          identificationNumber: formData.identificationNumber,
        });

        onTokenGenerated(token.id);
      } catch (error) {
        console.error("Error al generar el token:", error);
      }
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="w-full max-w-lg mx-auto p-8">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-lg font-medium mb-6">Payment Information</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-6">
            <div className="col-span-2 sm:col-span-1">
              <label
                htmlFor="cardNumber"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Card Number
              </label>
              <input
                type="text"
                name="cardNumber"
                id="cardNumber"
                placeholder="0000 0000 0000 0000"
                className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
                onChange={handleInputChange}
              />
            </div>
            <div className="col-span-2 sm:col-span-1">
              <label
                htmlFor="expirationDate"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Expiration Date
              </label>
              <input
                type="text"
                name="expirationDate"
                id="expirationDate"
                placeholder="MM / YY"
                className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
                onChange={handleInputChange}
              />
            </div>
            <div className="col-span-2 sm:col-span-1">
              <label
                htmlFor="cvv"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                CVV
              </label>
              <input
                type="text"
                name="cvv"
                id="cvv"
                placeholder={"000"}
                className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
                onChange={handleInputChange}
              />
            </div>

            <div className="col-span-2 sm:col-span-1">
              <label
                htmlFor="cardholderName"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Card Holder
              </label>
              <input
                type="text"
                name="cardholderName"
                id="cardholderName"
                placeholder="Full Name"
                className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
                onChange={handleInputChange}
              />
            </div>

            <div className="col-span-2 sm:col-span-1">
              <label
                htmlFor="identificationNumber"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                RUT
              </label>
              <input
                type="text"
                name="identificationNumber"
                id="identificationNumber"
                placeholder=""
                className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="mt-8">
            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-blue-600 text-white font-medium py-3 rounded-lg focus:outline-none"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CardForm;
