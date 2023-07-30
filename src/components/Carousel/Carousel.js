import React from 'react';
import CarouselComp from 'react-bootstrap/Carousel';
import Image1 from '../../Assets/images/carousel-1.png';
import Image2 from '../../Assets/images/carousel-2.webp';
import Image3 from '../../Assets/images/carousel-3.webp';

export const Carousel = () => {
  return (
    <CarouselComp>
      <CarouselComp.Item>
        <img
          className="d-block w-100"
          src={Image1}
          alt="First slide"
        />
      </CarouselComp.Item>
      <CarouselComp.Item>
        <img
          className="d-block w-100"
          src={Image2}
          alt="Second slide"
        />
      </CarouselComp.Item>
      <CarouselComp.Item>
        <img
          className="d-block w-100"
          src={Image3}
          alt="Third slide"
        />
      </CarouselComp.Item>
    </CarouselComp>
  );
}
