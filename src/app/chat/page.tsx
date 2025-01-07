"use client";
import Link from "next/link";
import home_image from '@public/home_image.png'

const ChatPage: React.FC = () => {



    return (
        <>
            <div
                className="h-[91.4vh] w-full bg-cover bg-center relative"
                style={{ backgroundImage: `url(${home_image.src})` }}
            >
                {/* Overlay con opacidad */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>

                {/* Contenido */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full space-y-6 text-center">
                    {/* Título */}
                    <h1 className="text-5xl font-bold text-white animate-pulse">
                        ¡Próximamente!
                    </h1>

                    {/* Subtítulo */}
                    <p className="text-lg text-gray-300 max-w-md">
                        Estamos trabajando en algo increíble para ti. ¡Mantente atento!
                    </p>

                    {/* Botón */}
                    <Link href="/">
                        <button className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 px-8 rounded-lg text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform">
                            Inicio
                        </button>
                    </Link>
                </div>

                {/* Círculo animado de fondo */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-80 h-80 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 blur-3xl opacity-30 animate-spin-slow"></div>
                </div>
            </div>



            {/* <SideBar /> */}
            {/* <Chatbot /> */}
        </>
    )
}

export default ChatPage;