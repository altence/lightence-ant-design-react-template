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
      spaceBetween={24}
      slidesPerView={1}
      navigation
      breakpoints={{
        1600: {
          slidesPerView: 2,
        },
        1800: {
          slidesPerView: 3,
        },
      }}
    >
      {children}
    </S.Slider>
  );
};
