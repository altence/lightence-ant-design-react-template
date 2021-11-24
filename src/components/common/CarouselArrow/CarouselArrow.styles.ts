import styled from 'styled-components';
import { CustomArrowProps } from 'react-slick';

export const ArrowWrapper = styled.div.withConfig({
  shouldForwardProp: (prop) => !['currentSlide', 'slideCount'].includes(prop),
})<CustomArrowProps>``;
