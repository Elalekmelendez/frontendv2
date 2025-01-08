import React from "react";
import Link from "next/link";
import Image from "next/image";
import home_image from "@public/home_image.png";

const Hero = () => {
  return (
    <section className="bg-background-light dark:bg-background-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-10 py-16 text-center">
        {/* Título */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-primary dark:text-primary-dark mb-6">
          Impulsa tu negocio con inteligencia artificial avanzada
        </h1>

        {/* Imagen con botón centrado y bordes redondeados */}
        <div
          className="relative w-full max-w-[960px] mx-auto mb-6 rounded-xl overflow-hidden"
          style={{ height: "300px" }}
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${home_image.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundAttachment: "fixed",
            }}
          ></div>
          <div className="absolute inset-0 bg-black/30"></div>

          {/* Botón centrado */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Link href="/subscriptions">
              <button className="bg-accent hover:bg-accent-hover text-white transition-all font-bold rounded-xl px-6 py-3 flex items-center justify-center">
                Comenzar ahora
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 fill-current ml-2"
                  viewBox="0 0 492.004 492.004"
                >
                  <path
                    d="M484.14 226.886 306.46 49.202c-5.072-5.072-11.832-7.856-19.04-7.856-7.216 0-13.972 2.788-19.044 7.856l-16.132 16.136c-5.068 5.064-7.86 11.828-7.86 19.04 0 7.208 2.792 14.2 7.86 19.264L355.9 207.526H26.58C11.732 207.526 0 219.15 0 234.002v22.812c0 14.852 11.732 27.648 26.58 27.648h330.496L252.248 388.926c-5.068 5.072-7.86 11.652-7.86 18.864 0 7.204 2.792 13.88 7.86 18.948l16.132 16.084c5.072 5.072 11.828 7.836 19.044 7.836 7.208 0 13.968-2.8 19.04-7.872l177.68-177.68c5.084-5.088 7.88-11.88 7.86-19.1.016-7.244-2.776-14.04-7.864-19.12z"
                    data-original="#000000"
                  />
                </svg>
              </button>
            </Link>
          </div>
        </div>

        {/* Descripción */}
        <p className="text-base leading-relaxed text-primary-light dark:text-primary-dark">
          Descubre el poder de ZenomyAI, la plataforma de análisis inteligente
          diseñada para automatizar tareas, optimizar procesos y ofrecerte
          estrategias basadas en datos reales.
        </p>
      </div>
    </section>
  );
};

export default Hero;
