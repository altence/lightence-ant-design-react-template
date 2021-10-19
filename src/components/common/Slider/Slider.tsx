import React from 'react';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/swiper.less';
import 'swiper/components/navigation/navigation.less';
import * as S from './Slider.styles';

SwiperCore.use([Navigation]);

interface SliderProps {
  spaceBetween: number;
  slidesPerView: number;
  navigation?: boolean;
  setCurrentIndex?: (index: number) => void;
  breakpoints?: {
    [key: number]: {
      [key: string]: number;
    };
  };
  children: React.ReactNode;
}

export const Slider: React.FC<SliderProps> = ({
  spaceBetween,
  slidesPerView,
  breakpoints,
  navigation = false,
  setCurrentIndex,
  children,
}) => {
  return (
    <S.Slider
      navigation={navigation}
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      breakpoints={breakpoints}
      {...(setCurrentIndex && { onSlideChange: (swiper) => setCurrentIndex(swiper.activeIndex) })}
    >
      {children}
    </S.Slider>
  );
};
