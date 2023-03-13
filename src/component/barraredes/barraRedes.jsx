import React from "react";

const BarraRedes = () => {
  return (
    <div className='contenedor'>
      <ul>
        <li>
          <a href='https://www.instagram.com/vkolorpinturas/' target='_blank'>
            <i className='fab fa-instagram insta iconBarra ins'></i>
            Instagram
          </a>
        </li>
        <li>
          <a
            href='https://wa.me/+584242015915/?text=%20Bienvenido%20a%20Vkolors%20tu%20mejor%20opción%20en%20pinturas'
            target='_blank'
          >
            <i class='fab fa-whatsapp whatsa iconBarra what'></i>
            Whatsapp
          </a>
        </li>
        <li>
          <a href='https://www.facebook.com/PVKOLOR' target='_blank'>
            <i className='fab fa-facebook faceb f iconBarra'></i>
            Facebook
          </a>
        </li>
      </ul>
    </div>
  );
};

export default BarraRedes;
