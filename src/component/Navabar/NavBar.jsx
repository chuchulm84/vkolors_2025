import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../image/logo02.png";
import logo1 from "../../image/logo01.png";
import imgHeader from "../../image/v9.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

export const NavBar = () => {
  const [siderbarIsOpen, setSidebarIsOpen] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div>
      <nav className="nav__hero">
        <div className="container nav__container">
          <div className="logo">
            <img
              src={logo}
              alt=""
              className="logo__navBar"
              data-aos="fade-down-right"
            />
          </div>

          <div className="links " data-aos="fade-left">
            <i
              className="fa fa-bars icon  open-sidebar"
              onClick={() => setSidebarIsOpen(!siderbarIsOpen)}
            ></i>
          </div>

          <aside className={siderbarIsOpen ? "open" : ""}>
            <ul>
              <li>
                <div className="categories">
                  <div>
                    <Link to="/">
                      <button className="link">Inicio</button>
                    </Link>
                  </div>
                  <div>
                    <Link to="/catalogo/inicio">
                      <button className="link">Productos</button>
                    </Link>
                  </div>
                  <div>
                    <Link to="/nosotros">
                      <button className="link">Nosotros</button>
                    </Link>
                  </div>
                </div>

                <div className="close">
                  <i
                    className="far fa-window-close close-sidebar"
                    onClick={() => setSidebarIsOpen(false)}
                  ></i>
                </div>
              </li>
            </ul>
          </aside>
        </div>
      </nav>
    </div>
  );
};
