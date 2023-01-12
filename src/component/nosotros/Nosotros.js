import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../image/logo02.png";

export const Nosotros = () => {
  return (
    <>
      <div className="containerNosotros">
        <div>
          <Link to="/">
            <button className="linkNosotros">Inicio</button>
          </Link>
        </div>

        <img src={img1} alt="" />
        <div className="containerText">
          <h1>
            En Pinturas Vkolor de Venezuela sabemos que son tiempos de
            verdaderos retos y en el sector industrial hemos cumplido con ser
            proveedores confiables, comprometidos con mantener la calidad de
            nuestros productos a precios competitivos. Nos dedicamos a la
            fabricación de pinturas y recubrimientos arquitectónicos e
            industriales, impermeabilizantes anticorrosivos y productos para
            aceras y pisos. Dentro de las pinturas arquitectónicas tenemos tres
            líneas: Vkolor Profesional, nuestra línea superior, Vkolor Hogar
            siendo nuestra línea intermedia y la línea Vkolor Industrial.
          </h1>
        </div>
      </div>
    </>
  );
};
