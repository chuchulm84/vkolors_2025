import React, { useEffect } from "react";
import imgA from "../../../image/vk4.png";
import Aos from "aos";
import "aos/dist/aos.css";

export const ClaseAScreen = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="containerClass " data-aos="fade-down">
      <div className="row top">
        <div className="col-1 container-text">
          <h1>Pintura Clase A </h1>
          <p>
            La Linea Optikolor es la clase “A” Premium de caucho emulsionada, de
            Pinturas VKOLOR, formulada con materias primas de la más alta
            calidad para brindar un máximo cubrimiento y durabilidad.
          </p>

          <h3>Componentes principales</h3>
          <p>
            Pintura formulada a base de dispersión Acrovinílica, espesada con
            ésteres de celulosa, utilizando como carga principal Carbonato de
            Calcio y Bioxido de Titanio y estabilizantes de reología.
          </p>

          <h3>Rendimiento</h3>
          <p>
            Teórico 50 m2 por galón por mano, dependiendo de la técnica de
            aplicación y la porosidad del sustrato a pintar.
          </p>

          <h3>Acabado</h3>
          <p>Mate</p>

          <h3>Secamiento al tacto</h3>
          <p>30 minutos.</p>

          <h3>Secado para repintado</h3>
          <p>4 horas.</p>

          <h3>Preparación de la superficie</h3>
          <p>
            Debe estar limpia seca, libre de polvo y grasas o pintura vieja mal
            adherida. Se recomienda en superficies de concreto que las mismas
            estén niveladas y lisas y sin grietas.
          </p>

          <h3>Presentación</h3>
          <p>
            Galón <br />
            Cuñete de 4 Galones
            <br />
            Cuñete de 5 Galones
          </p>

          <h3>Aplicación</h3>
          <p>
            Brocha, rodillo o pistola; agítese antes de aplicar. Es importante
            para su aplicación utilizar equipos básicos de protección como
            guantes, lentes, etc.
          </p>

          <h3>Precauciones</h3>
          <p>
            Manténgase este producto fuera del alcance de los niños, no ingiera,
            no induzca el vómito, use en áreas ventiladas, en caso de contacto
            con la piel u ojos, lave con abundante agua fresca y consulte al
            médico.
          </p>
        </div>
        <div style={{ height: "100hv", width: "6%", marginTop: "3px" }}>
          <svg
            viewBox="0 0 500 150"
            preserveAspectRatio="none"
            style={{ height: "912px", width: "100%" }}
          >
            <path
              d="M211.90,-9.36 C-58.96,96.22 410.55,61.69 98.47,156.42 L500.00,150.00 L500.00,0.00 Z"
              style={{
                stroke: "none",
                fill: "#ffffff",
                // filter: "drop-shadow(4px 4px 10px #a08a4e)",
                filter: "drop-shadow(4px 4px 10px #96acad)",
              }}
            ></path>
          </svg>
        </div>

        <div className="col-1">
          <div className="container-image">
            <img src={imgA} alt="" className="imgPinturascreen " />
          </div>
        </div>
      </div>
    </div>
  );
};
