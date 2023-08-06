import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

export const NavBar = () => {
  const [siderbarIsOpen, setSidebarIsOpen] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div>
      <nav className='nav__hero'>
        <div className='container nav__container'>
          <div className='logo'>
            <img
              src='/images/logo02.png'
              alt=''
              className='logo__navBar'
              data-aos='fade-down-right'
            />
          </div>

          <div className='links ' data-aos='fade-left'>
            <i
              className='fa fa-bars   open-sidebar'
              onClick={() => setSidebarIsOpen(!siderbarIsOpen)}
            ></i>
          </div>

          <aside className={siderbarIsOpen ? "open" : ""}>
            <ul>
              <li>
                <div className='categories'>
                  <div className='container-links'>
                    <div>
                      <Link to='/'>
                        <button className='link'>Inicio</button>
                      </Link>
                    </div>
                    <div>
                      <Link to='/catalogo/inicio'>
                        <button className='link'>Productos</button>
                      </Link>
                    </div>
                    <div>
                      <Link to='/nosotros'>
                        <button className='link'>Nosotros</button>
                      </Link>
                    </div>
                    <div className='close'>
                      <i
                        className='far fa-window-close close-sidebar'
                        onClick={() => setSidebarIsOpen(false)}
                      ></i>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </aside>
        </div>
      </nav>
    </div>
  );
};
