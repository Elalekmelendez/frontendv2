import React from 'react'
import { InputProps } from '@/interfaces/chat/Input'


const Input: React.FC<InputProps> = ({ inputRef, input, handleInputChange, handleKeyDown, isLoading }) => {
    return (
        <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder="Escribe tu mensaje aquí..."
            className={`flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 text-black ${isLoading ? "bg-gray-200 cursor-not-allowed" : "focus:ring-green-500"
                }`}
            disabled={isLoading}
        />
    )
}

export default Input