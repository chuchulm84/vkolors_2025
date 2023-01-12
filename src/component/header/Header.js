import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../image/logo02.png";
import logo1 from "../../image/logo01.png";
import imgHeader from "../../image/v9.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import { NavBar } from "../Navabar/NavBar";

export const Header = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <header className="hero">
      <img src={imgHeader} alt="" className="img__header" />

      <NavBar />

      <section className=" hero__main">
        <h1 className="">
          Le damos <span className="title--active">Color a tus ideas</span>
        </h1>
      </section>
    </header>
  );
};
