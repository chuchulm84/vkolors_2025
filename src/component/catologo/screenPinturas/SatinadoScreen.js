import React, { useEffect } from "react";
import img from "../../../image/vk6.png";
import Aos from "aos";
import "aos/dist/aos.css";

export const Satinado = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="containerClass" data-aos="fade-left">
      <div className="row top">
        <div className="col-1 container-text">
          <h1>Pintura Satinada </h1>
          <p>
            La Linea Kolor Satinado es la clase “A” de pintura Satinada, de
            Pinturas VKOLOR, formulada con materias primas de la más alta
            calidad para brindar un máximo cubrimiento y durabilidad.
          </p>

          <h3>Componentes principales</h3>
          <p>
            Pintura formulada a base de dispersión Acrovinílica, espesada con
            ésteres de celulosa, utilizando como carga principal Carbonato de
            Calcio y Bioxido de Titanio, estabilizantes de reología y
            emulsionantes especiales de alta gama que le dan la apariencia de la
            seda.
          </p>

          <h3>Rendimiento</h3>
          <p>
            Teórico 50 m2 por galón por mano, dependiendo de la técnica de
            aplicación y la porosidad del sustrato a pintar.
          </p>

          <h3>Preparación de la superficie</h3>
          <p>
            Debe estar limpia seca, libre de polvo y grasas o pintura vieja mal
            adherida. Se recomienda en superficies de concreto que las mismas
            estén niveladas y lisas y sin grietas.
          </p>

          <h3>Aplicación</h3>
          <p>
            Brocha, rodillo o pistola; agítese antes de aplicar. Es importante
            para su aplicación utilizar equipos básicos de protección como
            guantes, lentes, etc.
          </p>

          <h3>Secado para repintado</h3>
          <p>4 horas.</p>
        </div>
        <div className="col-1">
          <div className="container-image">
            <img src={img} alt="" className=" imgPinturascreenSati" />
          </div>
        </div>
      </div>
    </div>
  );
};
