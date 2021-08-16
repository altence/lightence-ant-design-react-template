import React from 'react';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/swiper.less';
import 'swiper/components/navigation/navigation.less';
import * as S from './Slider.styles';

SwiperCore.use([Navigation]);

interface SliderProps {
  children: React.ReactNode;
}

export const Slider: React.FC<SliderProps> = ({ children }) => {
  return (
    <S.Slider
      navigation
      spaceBetween={10}
      slidesPerView={3}
      breakpoints={{
        500: {
          slidesPerView: 4,
        },
        768: {
          slidesPerView: 5,
        },
      }}
    >
      {children}
    </S.Slider>
  );
};
