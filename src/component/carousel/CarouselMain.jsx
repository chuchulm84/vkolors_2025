import React from "react";
import { Carousel } from "antd";

export const CarouselMain = () => {
  return (
    <div className='container-carousel'>
      <Carousel autoplay>
        <div className='container-carousel1'>
          <img src='/images/v13.jpg' alt='' className=' img-carousel' />
        </div>
        <div className='container-carousel1'>
          <img src='/images/v14.jpg' alt='' className=' img-carousel' />
        </div>
        <div className='container-carousel1'>
          <img src='/images/v16.jpg' alt='' className=' img-carousel' />
        </div>
      </Carousel>
    </div>
  );
};
