import React, { useEffect } from "react";

export const PinturaImpermeabilizanteScreen = () => {
  return (
    <div className='containerClass'>
      <div className='row top'>
        <div className='col-1 container-text'>
          <h1>Pintura Impermeabilizante </h1>
          <p>
            La Linea Imper Kolor es una pintura con propiedades flexibles que le
            permite elongaciones y contracciones adaptándose al sustrato donde
            sea colocada tomando en cuenta que cada sustrato presenta, ante los
            cambios de temperatura, expansión y contracción. Asimismo su
            composición química a base de polímeros estireno acrílicos con
            cargas elásticas como Mica y Talco combinadas con Sulfato de Bario
            de alta resistencia química y baja absorción de agua, hacen de este
            producto el mejor del mercado en la materia.
          </p>

          <h3>Componentes principales</h3>
          <p>
            Pintura formulada a base de dispersión Estireno Acrílica, espesada
            con ésteres de celulosa, utilizando como carga principal Carbonato
            de Calcio, Bioxido de Titanio, Sulfato de bario, Talco y Mica
            estabilizantes de reología e hidrofugantes.
          </p>

          <h3>Rendimiento</h3>
          <p>
            Cada galón rinde 7 m2 a 8 m2 por capa, dependiendo de la porosidad
            de la superficie.
          </p>

          <h3>Acabado</h3>
          <p>Mate.</p>

          <h3>Aplicación</h3>
          <p>
            Completamente limpia la superficie, libre de polvo y grasa, se
            fondea a manera de (Primer) la superficie, para ello se toma una
            pequeña porción de producto y se liga con una y media (1 ½ )porción
            de agua y se mesclan en un envase aparte, queda una pintura mucho
            menos viscosa y un tanto traslúsida, la cual se aplica al sustrato o
            piso, preferiblemente con una escoba de cerda fina, restregando como
            si estuviese lavando el piso a fin de lograr la mejor penetración, y
            unión con cualquier partícula de polvo que pudiere quedar; el agua
            no reduce la efectividad del producto en el fondeado ya que esta
            químicamente calculada y además se evapora en su totalidad y solo
            queda la resina estireno acrílica en la concentración necesaria para
            emprimerar la superficie, se deja secar por 2 horas si el clima esta
            calido y por 3 horas si no lo es, luego cuando se pueda caminar
            sobre él sin sentir pegajosidad en los zapatos, se aplica la primera
            mano pero del producto sin diluir, puede ya utilizarse brocha o
            rodillo, o se continua con la escoba, 12 horas después se aplica la
            segunda mano con el mismo método.
          </p>
          {/* <h3>Secamiento al tacto</h3>
          <p>60 minutos.</p> */}

          <h3>Secado para repintado</h3>
          <p>12 horas.</p>

          <h3>Presentación</h3>
          <p>
            Galón <br />
            Cuñete de 4 Galones
          </p>
        </div>
        <div className='col-1 container-text'>
          <div className='container-image'>
            <img
              src='/images/vk1.png'
              alt=''
              className='imgPinturascreen-imper  '
            />
          </div>
        </div>
      </div>
    </div>
  );
};
