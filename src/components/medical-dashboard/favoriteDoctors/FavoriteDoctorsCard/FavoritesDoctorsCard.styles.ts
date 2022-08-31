import styled from 'styled-components';

export const CarouselWrapper = styled.div`
  margin-left: -1.25rem;
  margin-right: -1.25rem;
`;

export const SliderArrow = styled.div`
  z-index: 1;
  width: unset;
  height: unset;

  &.slick-prev {
    left: 1.25rem;
  }

  &.slick-next {
    right: 1.25rem;
  }

  &:before {
    color: var(--primary-color) !important;
    font-size: 2rem !important;
    position: absolute;
    left: -6px;
    top: -6px;
  }
`;
