import React from 'react';
import SwiperCore, { Navigation, Swiper } from 'swiper';
import 'swiper/swiper.less';
import 'swiper/components/navigation/navigation.less';
import * as S from './Carousel.styles';

SwiperCore.use([Navigation]);

interface CarouselProps {
  spaceBetween?: number;
  slidesPerView?: number;
  navigation?: boolean;
  onSlideChange?: (swiper: Swiper) => void;
  breakpoints?: {
    [key: number]: {
      [key: string]: number;
    };
  };
  children: React.ReactNode;
}

export const Carousel: React.FC<CarouselProps> = ({
  spaceBetween = 24,
  slidesPerView = 3,
  breakpoints,
  navigation = false,
  onSlideChange,
  children,
}) => {
  return (
    <S.Carousel
      navigation={navigation}
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      breakpoints={breakpoints}
      onSlideChange={onSlideChange}
    >
      {children}
    </S.Carousel>
  );
};
