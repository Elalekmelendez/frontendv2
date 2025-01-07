import React from 'react';

interface InputFieldProps {
  type: string;
  placeholder: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({ type, placeholder, name, value, onChange }) => (
  <div>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      required
      className="bg-gray-100 focus:bg-transparent w-full text-sm px-4 py-3.5 rounded-md outline-gray-800"
      placeholder={placeholder}
    />
  </div>
);

export default InputField;
