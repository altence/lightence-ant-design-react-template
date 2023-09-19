import { BaseCarousel } from '@app/components/common/BaseCarousel/BaseCarousel';
import styled from 'styled-components';

export const ScreeningsCarousel = styled(BaseCarousel)`
  margin: 0 1rem;

  .slick-disabled {
    display: none !important;
  }

  .slick-slide > div {
    display: flex;
    justify-content: center;
  }
`;
