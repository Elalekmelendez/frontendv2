import React from 'react';

const StartNow = () => {
    return (
        <div className="mt-28 px-4 sm:px-10 bg-gradient-to-r from-[#7DC3D7] via-[#9EB4BE] to-[#E8E8E8]">
            <div className="min-h-[400px] relative h-full max-w-3xl mx-auto flex flex-col justify-center items-center text-center px-6 py-16">
                {/* Título */}
                <h2 className="md:text-4xl text-3xl font-extrabold text-[#1D343E] mb-6">
                    Tu trabajo, donde sea que estés
                </h2>

                {/* Descripción */}
                <p className="text-base leading-relaxed text-[#435D69] max-w-2xl">
                    Accede a ZenomyAI desde cualquier lugar y en cualquier momento.
                    Nuestra plataforma basada en la nube te permite gestionar tus tareas,
                    analizar datos y optimizar tu negocio con herramientas impulsadas por inteligencia artificial, estés donde estés.
                </p>

                {/* Botón */}
                <button className="bg-[#1D343E] hover:bg-[#435D69] text-white shadow-md flex items-center transition-all font-semibold rounded-lg px-6 py-3 mt-8">
                    Comienza ahora
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-[14px] fill-current ml-2"
                        viewBox="0 0 492.004 492.004"
                    >
                        <path
                            d="M484.14 226.886 306.46 49.202c-5.072-5.072-11.832-7.856-19.04-7.856-7.216 0-13.972 2.788-19.044 7.856l-16.132 16.136c-5.068 5.064-7.86 11.828-7.86 19.04 0 7.208 2.792 14.2 7.86 19.264L355.9 207.526H26.58C11.732 207.526 0 219.15 0 234.002v22.812c0 14.852 11.732 27.648 26.58 27.648h330.496L252.248 388.926c-5.068 5.072-7.86 11.652-7.86 18.864 0 7.204 2.792 13.88 7.86 18.948l16.132 16.084c5.072 5.072 11.828 7.836 19.044 7.836 7.208 0 13.968-2.8 19.04-7.872l177.68-177.68c5.084-5.088 7.88-11.88 7.86-19.1.016-7.244-2.776-14.04-7.864-19.12z"
                            data-original="#000000"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default StartNow;
