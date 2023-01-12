import React, { useEffect } from 'react'

import FotoMain3 from '../../image/v5.jpg'
import Aos from "aos"
import "aos/dist/aos.css"


export const Main2 = () => {

    useEffect(() => {
        Aos.init({ duration: 2000});
        
      }, []);


    return (
        <div className="background-section-main3 ">

        <div class=" texto__main__2">

            <div> <h3>Fabricamos pinturas</h3></div>
           
        </div>

            <div className="container__seccion-3 ">
                <div className="col-1" data-aos="fade-right">
                    <div>
                        <p>
                            En Pinturas Vkolor de Venezuela sabemos que son tiempos de verdaderos retos,
                            y en el sector industrial hemos cumplido con ser proveedores confiables,
                            comprometidos con mantener la calidad de nuestros productos a precios competitivos.
                            Nos dedicamos a la fabricación de pinturas y recubrimientos arquitectónicos e industriales,
                            impermeabilizantes anticorrosivos y productos para aceras y pisos.
                            Dentro de las pinturas arquitectónicas tenemos tres líneas: Vkolor Profesional,
                            nuestra línea superior; Vkolor Hogar siendo nuestra línea intermedia y la línea Vkolor Industrial.
                        </p>
                    </div> 
                </div>
            
                <div className=" col-1" data-aos="fade-left">
                    <img src={FotoMain3} className="imagen__main3 " alt=""/>
                </div>
        
            </div>
        </div>

    )
}
