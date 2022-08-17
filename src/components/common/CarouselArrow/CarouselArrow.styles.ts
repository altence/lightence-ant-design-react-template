import styled from 'styled-components';
import { CustomArrowProps } from 'react-slick';

export const ArrowWrapper = styled.div.withConfig({
  shouldForwardProp: (prop) => !['currentSlide', 'slideCount'].includes(prop),
})<CustomArrowProps>`
  font-size: 1rem;

  color: var(--text-main-color);

  &:before {
    display: none;
  }

  &:hover,
  &:focus {
    color: var(--text-main-color);
  }
`;
