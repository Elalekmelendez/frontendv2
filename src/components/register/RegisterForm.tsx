import React from 'react'
import { InputField, SubmitButton, SocialLoginButtons } from '../common';

const RegisterForm = () => (
    <form className="bg-white rounded-xl px-6 py-8 space-y-6 max-w-md md:ml-auto w-full">
        <h3 className="text-3xl font-extrabold mb-12">Bienvenidos</h3>
        <InputField type="email" placeholder="Correo electrónico" />
        <InputField type="password" placeholder="Contraseña" />
        <InputField type="password" placeholder="Confirma tu contraseña" />
        <SubmitButton text="Registrar" />
        <p className="my-6 text-sm text-gray-400 text-center">o continuar con</p>
        <SocialLoginButtons />
    </form>
);

export default RegisterForm