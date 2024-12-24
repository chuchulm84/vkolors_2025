import React from "react";

export const Footer = () => {
  return (
    <div className='container-fuid-footer img__footer'>
      <div className='content__footer '>
        <div className='seccion__footer-2'>
          <div className='constainter-text'>
            <div className='section-text'>
              <img src='/images/location.svg' alt='' className='icon-footer' />
              <p className=''>
                Tercera Transversal, entre Los Cármenes y Los Jabillos
              </p>
              <p className=''>
                Parroquia Santa Rosalía, El Cementerio Caracas.
              </p>
            </div>
            <div className='section-text'>
              <img src='/images/phone.svg' alt='' className='icon-footer ' />
              <p className=''> 0424-2015915</p>
            </div>

            <div className='section-text'>
              <img src='/images/mail.svg' alt='' className='icon-footer' />
              <p className=''>ventas@vkolor.com</p>
            </div>
          </div>
          <div className='container-map'>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d245.20314864749253!2d-66.91344894720412!3d10.48091795892768!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c2a5f373a38e04d%3A0x61942de803dc75f2!2s1040%20Trans.%203%2C%20Caracas%201040%2C%20Distrito%20Capital!5e0!3m2!1ses!2sve!4v1734486406753!5m2!1ses!2sve'
              className='map'
              allowfullscreen=''
              loading='lazy'
              referrerpolicy='no-referrer-when-downgrade'
            ></iframe>
          </div>
        </div>
      </div>
      <div className='line'></div>

      <div className='container__li '>
        <div className='redContainer '>
          <div className='copy'>
            <p>&copy;2025 TODOS LOS DERECHOS RESERVADOS</p>
          </div>
          <div className='container-red'>
            <div className='red'>
              <a
                href='https://www.instagram.com/vkolorpinturas/'
                target='blank'
              >
                <i className='fab fa-instagram redes ins'></i>
              </a>
            </div>
            <div className='red'>
              <a
                href='https://wa.me/+584242015915/?text=%20Bienvenido%20a%20Vkolors%20tu%20mejor%20opción%20en%20pinturas'
                target='blank'
              >
                <i class='fab fa-whatsapp redes what'></i>
              </a>
            </div>
            <div className='red'>
              <a href='https://www.facebook.com/PVKOLOR' target='blank'>
                <i className='fab fa-facebook redes f'></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
