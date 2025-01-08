import React from "react";
import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ handleSendMessage, isLoading }) => {
  return (
    <button
      onClick={handleSendMessage}
      disabled={isLoading}
      className={`ml-2 px-6 py-3 font-semibold text-white transition-all rounded-lg shadow-md ${
        isLoading
          ? "bg-gray-300 cursor-not-allowed"
          : "bg-[#7DC3D7] hover:bg-[#9EB4BE]"
      }`}
    >
      {isLoading ? (
        <svg
          className="w-5 h-5 animate-spin mx-auto"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.591C100 78.205 77.614 100.591 50 100.591 22.386 100.591 0 78.205 0 50.591 0 22.977 22.386 0.591 50 0.591 77.614 0.591 100 22.977 100 50.591ZM9.081 50.591C9.081 73.19 27.401 91.509 50 91.509 72.599 91.509 90.919 73.19 90.919 50.591 90.919 27.992 72.599 9.672 50 9.672 27.401 9.672 9.081 27.992 9.081 50.591Z"
            fill="#E5E7EB"
          />
        </svg>
      ) : (
        "Enviar"
      )}
    </button>
  );
};

export default Button;
