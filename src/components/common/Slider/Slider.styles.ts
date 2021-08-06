import styled from 'styled-components';
import { Swiper } from 'swiper/react';

export const Slider = styled(Swiper)`
  & .swiper-button-prev,
  & .swiper-button-next {
    color: ${(props) => props.theme.colors.primary};
  }
`;
