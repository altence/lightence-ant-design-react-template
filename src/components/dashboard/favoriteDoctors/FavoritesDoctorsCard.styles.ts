import styled from 'styled-components';

export const CarouselWrapper = styled.div`
  margin-left: -1.25rem;
  margin-right: -1.25rem;
`;

export const SliderArrow = styled.div`
  z-index: 1;

  &.slick-prev {
    left: 1.25rem;
  }

  &.slick-next {
    right: 1.25rem;
  }

  &:before {
    color: ${(props) => props.theme.colors.main.primary};
    font-size: 2rem;
  }
`;
