import React from "react";

const Input = () => {
  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        placeholder="Escribe tu mensaje..."
        className="flex-1 px-4 py-3 border rounded-lg shadow-sm focus:outline-none text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-[#7DC3D7]"
      />
      <button
        className="px-6 py-3 bg-[#7DC3D7] text-white rounded-lg hover:bg-[#9EB4BE] transition-all"
      >
        Enviar
      </button>
    </div>
  );
};

export default Input;
