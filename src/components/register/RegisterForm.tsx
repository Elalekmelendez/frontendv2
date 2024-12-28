"use client";
import React from 'react';
import { SocialLoginButtons } from '../common';
import useRegister from '@/hooks/useRegister';

const RegisterForm = () => {

    const {
        email,
        setEmail,
        password,
        setPassword,
        confirmPassword,
        setConfirmPassword,
        handleRegister,
        name,
        setName
    } = useRegister();


    return (
        <form
            className="bg-white rounded-xl px-6 py-8 space-y-6 max-w-md md:ml-auto w-full"
            onSubmit={handleRegister}
        >
            <h3 className="text-3xl font-extrabold mb-12">Bienvenidos</h3>
            <input
                type="name"
                placeholder="Nombre"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-gray-100 focus:bg-transparent w-full text-sm px-4 py-3.5 rounded-md outline-gray-800"

            />
            <input
                type="email"
                placeholder="Correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-100 focus:bg-transparent w-full text-sm px-4 py-3.5 rounded-md outline-gray-800"

            />
            <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-gray-100 focus:bg-transparent w-full text-sm px-4 py-3.5 rounded-md outline-gray-800"

            />
            <input
                type="password"
                placeholder="Confirma tu contraseña"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="bg-gray-100 focus:bg-transparent w-full text-sm px-4 py-3.5 rounded-md outline-gray-800"

            />
            <button
                type="submit"
                className="w-full shadow-xl py-3 px-6 text-sm font-semibold rounded-md text-white bg-gray-800 hover:bg-[#222] focus:outline-none"
            >
                Registrar
            </button>
            <p className="my-6 text-sm text-gray-400 text-center">o continuar con</p>
            <SocialLoginButtons />
        </form>
    );
};

export default RegisterForm;
