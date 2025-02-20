import React, { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import Aos from "aos";
import "aos/dist/aos.css";
import { NavBar } from "../Navabar/NavBar";

export const Header = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const { articulos, isLoading } = useFetch();

  console.log("articulos", articulos);

  return (
    <header className='hero'>
      <img src='/images/v23.png' alt='' className='img__header' />

      <NavBar />

      <section className=' hero__main'>
        <h1 className=''>
          <img
            src='./images/nuevo_logo_principal-removebg-preview.png'
            alt=''
            className='image-center'
          />
          Le damos <span className='title--active'>Color a tus ideas</span>
        </h1>
      </section>
    </header>
  );
};
