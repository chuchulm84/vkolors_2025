import React from "react";
import { Link } from "react-router-dom";

export const Nosotros = () => {
  return (
    <>
      <div className='containerNosotros'>
        <div>
          <Link to='/'>
            <button className='linkNosotros'>Inicio</button>
          </Link>
        </div>

        <img src='/images/logo02.png' alt='' />
        <div className='containerText'>
          <h1>
            Pinturas Vkolor de Venezuela: Innovación y Calidad para el Sector
            Industrial y Arquitectónico
          </h1>
          <p>
            En Pinturas Vkolor de Venezuela, entendemos los desafíos que
            enfrentan nuestros clientes en un entorno de constante cambio. Por
            eso, hemos consolidado nuestro compromiso como proveedores
            confiables en el sector industrial, ofreciendo soluciones que
            combinan calidad superior, innovación tecnológica y precios
            competitivos.
          </p>
          <p>
            Nos especializamos en la fabricación de pinturas y recubrimientos
            que abarcan diversas necesidades:
          </p>
          <ul>
            <li>
              Pinturas arquitectónicas para espacios residenciales y
              comerciales.
            </li>
            <li>
              Impermeabilizantes y recubrimientos anticorrosivos diseñados para
              proteger infraestructuras de alto impacto.
            </li>
            <li>
              Productos especializados para aceras y pisos, ideales para
              garantizar durabilidad y estética.
            </li>
          </ul>

          <h2>Líneas de Pinturas Arquitectónicas</h2>
          <ol>
            <li>
              Vkolor Profesional: Nuestra línea premium, diseñada para proyectos
              que demandan acabados de alta calidad, resistencia y durabilidad
              superior. Ideal para arquitectos, contratistas y profesionales del
              sector.
            </li>
            <li>
              Vkolor Hogar: La opción perfecta para quienes buscan estilo y
              funcionalidad en sus espacios. Esta línea intermedia combina un
              excelente rendimiento con precios accesibles.
            </li>
            <li>
              Vkolor Industrial: Pensada para ambientes de alto tráfico y
              condiciones extremas. Su fórmula especializada asegura resistencia
              y protección duradera.
            </li>
          </ol>
          <h2>Compromiso con la Innovación y el Medio Ambiente</h2>
          <p>
            En Pinturas Vkolor, no solo trabajamos para superar las expectativas
            de nuestros clientes, sino que también mantenemos un firme
            compromiso con el cuidado del medio ambiente. Nuestros procesos de
            fabricación priorizan el uso de materiales sostenibles y tecnologías
            que minimizan el impacto ambiental.
          </p>
          <h3>Por qué Elegir Pinturas Vkolor</h3>
          <ul>
            <li>Más de [número de años] años de experiencia en el mercado.</li>
            <li>
              Una red de distribución confiable en todo el territorio nacional.
            </li>
            <li>
              Equipo técnico altamente capacitado para asesorarte en cada
              proyecto.
            </li>
            <li>
              Innovación constante en productos y procesos para garantizar
              resultados excepcionales.
            </li>
          </ul>
          <p>
            Confía en <b>Pinturas Vkolor de Venezuela</b> para dar color y
            protección a tus proyectos. Contáctanos hoy mismo y descubre cómo
            podemos ayudarte a transformar tus espacios con
            <b>soluciones de calidad y alto desempeño.</b>
          </p>
        </div>
      </div>
    </>
  );
};
