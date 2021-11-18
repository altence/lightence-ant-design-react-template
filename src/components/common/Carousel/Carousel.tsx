import React from 'react';
import Slider, { ResponsiveObject } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface CarouselProps {
  className?: string;
  slidesToShow?: number;
  arrows?: boolean;
  dots?: boolean;
  infinite?: boolean;
  nextArrow?: JSX.Element;
  prevArrow?: JSX.Element;
  responsive?: ResponsiveObject[];
}

export const Carousel: React.FC<CarouselProps> = ({
  className,
  slidesToShow = 1,
  arrows = false,
  dots = false,
  infinite = false,
  nextArrow,
  prevArrow,
  responsive,
  children,
}) => {
  return (
    <Slider
      className={className}
      slidesToShow={slidesToShow}
      arrows={arrows}
      dots={dots}
      infinite={infinite}
      nextArrow={nextArrow}
      prevArrow={prevArrow}
      responsive={responsive}
    >
      {children}
    </Slider>
  );
};
