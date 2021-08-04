import React from 'react';
import styled from 'styled-components';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper } from 'swiper/react';
import 'swiper/swiper.less';
import 'swiper/components/navigation/navigation.less';

SwiperCore.use([Navigation]);

interface SliderProps {
  spaceBetween: number;
  slidesPerView: number;
  children: React.ReactNode;
}

export const Slider: React.FC<SliderProps> = ({ spaceBetween, slidesPerView, children }) => {
  return (
    <SwiperStyled spaceBetween={spaceBetween} slidesPerView={slidesPerView} navigation>
      {children}
    </SwiperStyled>
  );
};

const SwiperStyled = styled(Swiper)`
  & .swiper-button-prev,
  & .swiper-button-next {
    color: ${(props) => props.theme.colors.primary};
  }
`;
