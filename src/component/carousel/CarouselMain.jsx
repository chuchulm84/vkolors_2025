import React from 'react'
import { Carousel } from 'antd';
import img1 from '../../image/v13.jpg'
import img2 from '../../image/v14.jpg'
import img3 from '../../image/v16.jpg'



export const CarouselMain = () => {
    return (
        <div className="container-carousel">
            <Carousel autoplay>
                <div className="container-carousel1">
                  <img src={img1} alt="" className=" img-carousel"/>
                </div>
                <div className="container-carousel1">
                  <img src={img2} alt="" className=" img-carousel"/>
                </div>
                <div className="container-carousel1">
                  <img src={img3} alt="" className=" img-carousel"/>
                </div>
              
            </Carousel>
            
        </div>
    )
}



