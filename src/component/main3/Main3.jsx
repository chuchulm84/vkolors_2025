import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import Aos from "aos";
import "aos/dist/aos.css";
import data from "../DataCard";
import { Card } from "./Card";

export const Main3 = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className='projects'>
      <h2 className='subtitle'>Catálogo de productos</h2>
      <p className='copy__section'>
        Tenemos la mejor gama de productos para su hogar
      </p>

      <div className='cards'>
        {data.products.map((e) => (
          <Card
            name={e.name}
            description={e.description}
            image={e.image}
            link={e.link}
          />
        ))}
      </div>
    </section>
  );
};
