import React from 'react';
import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Carousel = React.forwardRef<any, Settings>(
  ({ slidesToShow = 1, arrows = false, dots = false, infinite = true, centerMode = true, children, ...props }, ref) => {
    return (
      <Slider
        ref={ref}
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
  },
);
