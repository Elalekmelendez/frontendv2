import React from 'react';
import Image from 'next/image';

const Innovation = () => {
    return (
        <div className="px-4 sm:px-10 mt-28 bg-white py-16">
            <div className="max-w-7xl w-full mx-auto">
                <div className="grid md:grid-cols-2 items-center gap-10">
                    {/* Imagen */}
                    <div className="w-full h-full">
                        <Image
                            src="https://readymadeui.com/team-image.webp"
                            alt="Premium Benefits"
                            width={500}
                            height={500}
                            className="w-full h-full object-cover rounded-md shadow-sm"
                        />
                    </div>

                    {/* Contenido */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-semibold text-[#1D343E] mb-6">
                            Innovación impulsada por IA para tu negocio
                        </h2>
                        <p className="text-base leading-relaxed text-[#435D69]">
                            Potencia tu empresa con ideas frescas y soluciones innovadoras gracias a ZenomyAI.
                            Nuestra plataforma utiliza inteligencia artificial avanzada para automatizar tareas,
                            optimizar procesos y ofrecerte estrategias precisas que impulsan tu crecimiento y productividad.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Innovation;
