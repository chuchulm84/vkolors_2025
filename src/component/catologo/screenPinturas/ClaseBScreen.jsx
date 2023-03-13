import React from "react";

export const ClaseBScreen = () => {
  return (
    <div className='containerClass'>
      <div className='row top'>
        <div className='col-1 container-text'>
          <h1>Pintura caucho Clase A </h1>
          <p>
            La Linea Kolor Mix es la clase A de caucho emulsionada, de Pinturas
            VKOLOR, formulada con materias primas de la más alta calidad, para
            brindar buen cubrimiento y durabilidad.
          </p>

          <h3>Componentes principales</h3>
          <p>
            Pintura formulada a base de dispersión Acrovinílica, espesada con
            ésteres de celulosa, utilizando como carga principal Carbonato de
            Calcio y Bioxido de Titanio y estabilizantes de reología.
          </p>

          <h3>Rendimiento</h3>
          <p>
            Teórico 45 m2 por galón por mano, dependiendo de la técnica de
            aplicación y la porosidad del sustrato a pintar.
          </p>

          <h3>Preparación de la superficie</h3>
          <p>
            Debe estar limpia seca, libre de polvo y grasas o pintura vieja mal
            adherida. Se recomienda en superficies de concreto que las mismas
            estén niveladas y lisas y sin grietas.
          </p>

          <h3>Aplicación</h3>
          <p>
            Brocha, rodillo o pistola; agítese antes de aplicar. Es importante
            para su aplicación utilizar equipos básicos de protección como
            guantes, lentes, etc.
          </p>

          <h3>Secado para repintado</h3>
          <p>4 horas.</p>

          <h3>Presentación</h3>
          <p>
            Galón <br />
            Cuñete de 4 Galones
          </p>
        </div>
        <div className='col-1 '>
          <div className='container-image'>
            <img src='/images/vk5.png' alt='' className=' imgPinturascreenB ' />
          </div>
        </div>
      </div>
    </div>
  );
};
