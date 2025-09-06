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
      <img src='/images/v9.jpg' alt='' className='img__header' />

      <NavBar />

      <section className=' hero__main'>
        <h1 className=''>
          Le damos <span className='title--active'>Color a tus ideas</span>
        </h1>
      </section>
    </header>
  );
};
