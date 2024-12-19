import React from 'react'

interface InputFieldProps {
    type: string;
    placeholder: string;
}

const InputField: React.FC<InputFieldProps> = ({ type, placeholder }) => (
    <div>
        <input
            type={type}
            required
            className="bg-gray-100 focus:bg-transparent w-full text-sm px-4 py-3.5 rounded-md outline-gray-800"
            placeholder={placeholder}
        />
    </div>
);


export default InputField