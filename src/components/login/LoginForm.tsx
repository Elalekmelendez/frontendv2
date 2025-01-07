"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import { SocialLoginButtons, SubmitButton, InputField } from '@/components/common';

const LoginForm = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form /*onSubmit={handleSubmit}*/ className="bg-white rounded-xl px-6 py-8 space-y-6 max-w-md md:ml-auto w-full">
      <h3 className="text-3xl font-extrabold mb-12">Bienvenidos</h3>
      <InputField
        type="email"
        placeholder="Correo electrónico"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <InputField
        type="password"
        placeholder="Contraseña"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />
      <div className="text-sm text-right">
        <Link href="#" className="text-blue-600 font-semibold hover:underline">
          ¿Olvidaste tu contraseña?
        </Link>
      </div>
      <SubmitButton text="Iniciar Sesión" />
      <p className="my-6 text-sm text-gray-400 text-center">o continuar con</p>
      <SocialLoginButtons />
    </form>
  );
};

export default LoginForm;
