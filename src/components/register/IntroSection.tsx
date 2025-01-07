import Link from 'next/link';
import React from 'react'
import Image from 'next/image';
import logo_zenomy from '../../../public/logo-zenomy.png';

const IntroSection = () => (
    <div>
        <Link href="/chat">
            <Image src={logo_zenomy} width={260} alt="Logo Zenomy" className="mb-12" />
        </Link>
        <h2 className="text-4xl font-extrabold lg:leading-[50px] text-white">
            Registro Sencillo para tu Asistente Inteligente
        </h2>
        <p className="text-sm mt-6 text-white">
            Optimiza, automatiza y transforma tu flujo de trabajo con nuestras herramientas personalizadas.
        </p>
        <p className="text-sm mt-6 text-white">
            ¿Ya tienes una cuenta?{' '}
            <Link href="login" className="text-white font-semibold underline ml-1">
                Inicia sesión
            </Link>
        </p>
    </div>
);

export default IntroSection