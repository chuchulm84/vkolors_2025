import React from "react";

export const Footer = () => {
  return (
    <div className='container-fuid-footer img__footer'>
      <div className='content__footer '>
        <div className='seccion__footer-2'>
          <div className='constainter-text'>
            <div className='section-text'>
              <img src='/images/location.svg' alt='' className='icon-footer' />
              <p className=''>Esquina miracielos a Hospital</p>
              <p className=''>EDIF: Sur 2 Local 14 Caracas Venezuela.</p>
            </div>
            <div className='section-text'>
              <img src='/images/phone.svg' alt='' className='icon-footer ' />
              <p className=''> 0424-2015915</p>
            </div>

            <div className='section-text'>
              <img src='/images/mail.svg' alt='' className='icon-footer' />
              <p className=''>francis@vkolor.com</p>
            </div>
          </div>
          <div className='container-map'>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d980.7515902702582!2d-66.91702087081501!3d10.500164118179153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c2a5ed8339a6509%3A0xc5f1f9872a59d0f!2sEdificio%20Sur%202!5e0!3m2!1ses!2sve!4v1654728177050!5m2!1ses!2sve'
              className='map'
              allowfullscreen=''
              loading='lazy'
              referrerpolicy='no-referrer-when-downgrade'
            />
          </div>
        </div>
      </div>
      <div className='line'></div>

      <div className='container__li '>
        <div className='redContainer '>
          <div className='copy'>
            <p>&copy;2023 TODOS LOS DERECHOS RESERVADOS</p>
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
