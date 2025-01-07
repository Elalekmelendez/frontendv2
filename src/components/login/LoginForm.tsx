"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import { SocialLoginButtons, SubmitButton, InputField } from '@/components/common';
import { useRouter } from 'next/navigation';

const LoginForm = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const router = useRouter();

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Manejar la respuesta exitosa, por ejemplo, redirigir al usuario
        const data = await response.json();
        console.log('Login successful', data);
        router.push('/chat'); // Redirige al usuario a la página de destino
      } else {
        // Manejar el error de inicio de sesión
        const errorData = await response.json();
        console.error('Login failed:', errorData.message || 'Unknown error');
      }
    } catch (error: any) {
      console.error('Error during login:', error.message || error.toString());
    }
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
