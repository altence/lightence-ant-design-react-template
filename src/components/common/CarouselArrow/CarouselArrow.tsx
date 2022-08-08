import { WithChildrenProps } from '@app/types/generalTypes';
import React from 'react';
import { CustomArrowProps } from 'react-slick';
import * as S from './CarouselArrow.styles';

export const CarouselArrow: React.FC<WithChildrenProps<CustomArrowProps>> = ({ children, ...props }) => {
  return <S.ArrowWrapper {...props}>{children}</S.ArrowWrapper>;
};
