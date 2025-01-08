import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faRobot, faExpand, faHeadset } from '@fortawesome/free-solid-svg-icons';

const Features = () => {
  return (
    <section className="bg-white px-4 sm:px-10 py-16">
      <div className="max-w-screen-lg mx-auto text-center">
        {/* Título */}
        <h2 className="text-3xl md:text-4xl font-semibold text-[#1D343E] mb-12">
          Por qué elegir ZenomyAI para tu negocio
        </h2>

        {/* Contenido */}
        <div className="grid md:grid-cols-2 gap-8 text-left">
          {/* Feature 1 */}
          <div className="flex items-start">
            <div className="bg-[#7DC3D7] text-white rounded-lg p-4 mr-4 flex-shrink-0">
              <FontAwesomeIcon icon={faChartLine} className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#1D343E] mb-2">
                Análisis avanzado en tiempo real
              </h3>
              <p className="text-base leading-relaxed text-[#435D69]">
                Obtén insights valiosos y actualizados que transforman datos en
                decisiones estratégicas para optimizar el rendimiento de tu negocio.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-start">
            <div className="bg-[#7DC3D7] text-white rounded-lg p-4 mr-4 flex-shrink-0">
              <FontAwesomeIcon icon={faRobot} className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#1D343E] mb-2">
                Automatización inteligente
              </h3>
              <p className="text-base leading-relaxed text-[#435D69]">
                Simplifica procesos repetitivos con nuestras herramientas de
                inteligencia artificial diseñadas para ahorrar tiempo y recursos.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex items-start">
            <div className="bg-[#7DC3D7] text-white rounded-lg p-4 mr-4 flex-shrink-0">
              <FontAwesomeIcon icon={faExpand} className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#1D343E] mb-2">
                Escalabilidad sin límites
              </h3>
              <p className="text-base leading-relaxed text-[#435D69]">
                Diseñado para adaptarse al crecimiento de tu negocio, desde pequeñas
                empresas hasta grandes corporaciones.
              </p>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="flex items-start">
            <div className="bg-[#7DC3D7] text-white rounded-lg p-4 mr-4 flex-shrink-0">
              <FontAwesomeIcon icon={faHeadset} className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#1D343E] mb-2">
                Soporte dedicado
              </h3>
              <p className="text-base leading-relaxed text-[#435D69]">
                Nuestro equipo de expertos está disponible para ayudarte a sacar el
                máximo provecho de nuestras soluciones.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
