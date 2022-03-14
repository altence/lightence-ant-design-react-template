// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { useCallback, useEffect, useRef } from 'react';
import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const Carousel = React.forwardRef<Slider, Settings>(
  ({ slidesToShow = 1, arrows = false, dots = false, infinite = true, centerMode = true, children, ...props }, ref) => {
    const carouselRef = useRef();

    const totalRef = ref || carouselRef;

    const handleScroll = useCallback(
      (event) => {
        const x = event.deltaX;
        const y = event.deltaY;

        if (x > 20 && -5 < y < 5) {
          return totalRef?.current?.slickNext();
        }

        if (x < -20 && -5 < y < 5) {
          return totalRef?.current?.slickPrev();
        }
      },
      [totalRef],
    );

    const handleMouseOn = useCallback(() => {
      document.body.style.overscrollBehaviorX = 'none';
    }, []);

    const handleMouseOff = useCallback(() => {
      document.body.style.overscrollBehaviorX = 'unset';
    }, []);

    useEffect(() => {
      if (totalRef.current) {
        const slickList = totalRef.current?.innerSlider?.list;

        slickList.addEventListener('wheel', handleScroll);

        slickList.addEventListener('mouseover', handleMouseOn);

        slickList.addEventListener('mouseout', handleMouseOff);

        return () => {
          slickList.removeEventListener('wheel', handleScroll);

          slickList.removeEventListener('mouseover', handleMouseOn);

          slickList.removeEventListener('mouseout', handleMouseOff);
        };
      }
    }, [totalRef, handleScroll, handleMouseOn, handleMouseOff]);

    return (
      <Slider
        ref={totalRef}
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
