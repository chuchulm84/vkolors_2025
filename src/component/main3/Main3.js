import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import p1 from "../../image/p1.png";
import p2 from "../../image/vk2.png";
import p3 from "../../image/p3.png";
import h1 from "../../image/h1.jpg";
import h2 from "../../image/h2.jpg";
import h3 from "../../image/h3.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

export const Main3 = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="projects">
      <h2 className="subtitle">Catálogo de productos</h2>
      <p className="copy__section">
        Tenemos la mejor gama de productos para su hogar
      </p>

      <Link
        to="/catalogo/inicio"
        //  data-aos="fade-up"
      >
        <button className="buttonCatalogo">Catálogo de Productos</button>
      </Link>

      <article className="container-bg">
        <div className="bg-container-card">
          <div
            className="card"
            //  data-aos="fade-right"
          >
            <img src={p1} className="background__img" alt="vkolors" />
          </div>
          <div
            className="background"
            //  data-aos="fade-left"
          >
            <img src={h2} className="background__img" alt="vkolors" />
            <div className="background__text">
              <h3 className="background__title">Pintura Impermeabilizante </h3>
              {/* <p className="background__copy">
                La realidad aumentada transformará por completo la educación
              </p> */}
            </div>
          </div>
        </div>

        <div className="bg-container-card1">
          <div
            className="card"
            //  data-aos="fade-right"
          >
            <img src={p2} className="background__img" alt="vkolors" />
          </div>
          <div
            className="background"
            //  data-aos="fade-left"
          >
            <img src={h1} className="background__img" alt="vkolors" />
            <div className="background__text">
              <h3 className="background__title">Fondo de Herrería </h3>
              {/* <p className="background__copy">La realidad aumentada transformará por completo la educación</p> */}
            </div>
          </div>
        </div>

        <div className="bg-container-card2">
          <div
            className="card"
            //  data-aos="fade-right"
          >
            <img src={p3} className="background__img" alt="vkolors" />
          </div>
          <div
            className="background"
            // data-aos="fade-left"
          >
            <img src={h3} className="background__img" alt="vkolors" />
            <div className="background__text">
              <h3 className="background__title">Pasta Profesional </h3>
              {/* <p className="background__copy">La realidad aumentada transformará por completo la educación</p> */}
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};
