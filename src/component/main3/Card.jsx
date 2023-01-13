import React from "react";
import { Link } from "react-router-dom";

export const Card = ({ name, description, image, link }) => {
  console.log("name", name, "description", description, "image", image);
  return (
    <section className='card'>
      <h2 className='card-title'>{name}</h2>
      <div style={{ height: "100px" }}>
        <p className='card-description'>{description}</p>
      </div>

      <div style={{ height: "340px" }}>
        <img src={image} alt='' className='medium ' />
      </div>

      <div className='container-button'>
        <Link to={link} className='product'>
          DETALLES DEL PRODUCTO
        </Link>
      </div>
    </section>
  );
};
