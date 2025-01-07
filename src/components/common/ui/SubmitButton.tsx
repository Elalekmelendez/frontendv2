import React from 'react'

interface SubmitButtonProps {
    text: string;
    disabled?: boolean;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ text, disabled }) => (
    <button
        type="submit"
        className="w-full shadow-xl py-3 px-6 text-sm font-semibold rounded-md text-white bg-gray-800 hover:bg-[#222] focus:outline-none"
        disabled={disabled}
    >
        {text}
    </button>
);

export default SubmitButton
