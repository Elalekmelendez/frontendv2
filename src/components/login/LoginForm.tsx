"use client";
import React from 'react';
import { SocialLoginButtons } from '../common/ui';
import useLogin from '@/hooks/useLogin';

const LoginForm = () => {


    const { email, setEmail, password, setPassword, handleLogin } = useLogin();

    return (
        <form
            onSubmit={handleLogin}
            className="bg-white rounded-xl px-6 py-8 space-y-6 max-w-md md:ml-auto w-full"
        >
            <h3 className="text-3xl font-extrabold mb-12">Bienvenidos</h3>
            <div>
                <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-gray-100 focus:bg-transparent w-full text-sm px-4 py-3.5 rounded-md outline-gray-800"
                    placeholder="Correo electrónico"
                />
            </div>
            <div>
                <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-gray-100 focus:bg-transparent w-full text-sm px-4 py-3.5 rounded-md outline-gray-800"
                    placeholder="Contraseña"
                />
            </div>
            <div className="text-sm text-right">
                <a href="#" className="text-blue-600 font-semibold hover:underline">
                    ¿Olvidaste tu contraseña?
                </a>
            </div>
            <button
                type="submit"
                className="w-full shadow-xl py-3 px-6 text-sm font-semibold rounded-md text-white bg-gray-800 hover:bg-[#222] focus:outline-none"
            >
                Iniciar Sesión
            </button>
            <p className="my-6 text-sm text-gray-400 text-center">o continuar con</p>
            <SocialLoginButtons />
        </form>
    );
};

export default LoginForm;
