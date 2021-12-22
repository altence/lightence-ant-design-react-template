import React from 'react';
import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const Carousel: React.FC<Settings> = ({
  slidesToShow = 1,
  arrows = false,
  dots = false,
  infinite = true,
  centerMode = true,
  children,
  ...props
}) => {
  return (
    <Slider
      slidesToShow={slidesToShow}
      arrows={arrows}
      dots={dots}
      infinite={infinite}
      centerMode={centerMode}
      {...props}
    >
      {children}
    </Slider>
  );
};
