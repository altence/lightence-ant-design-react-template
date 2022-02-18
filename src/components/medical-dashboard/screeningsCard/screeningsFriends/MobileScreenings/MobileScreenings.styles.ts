import { Carousel } from 'components/common/Carousel/Carousel';
import styled from 'styled-components';

export const ScreeningsCarousel = styled(Carousel)`
  margin: 0 1rem;

  .slick-disabled {
    display: none !important;
  }

  .slick-slide > div {
    display: flex;
    justify-content: center;
  }
`;
