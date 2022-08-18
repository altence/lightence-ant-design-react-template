import React from 'react';
import { CardProps as AntCardProps } from 'antd';
import { defaultPaddings } from '@app/constants/defaultPaddings';
import { useResponsive } from '@app/hooks/useResponsive';
import * as S from './Card.styles';

export interface CardProps extends AntCardProps {
  className?: string;
  padding?: string | number | [number, number];
  autoHeight?: boolean;
}

export const Card: React.FC<CardProps> = ({ className, padding, size, autoHeight = true, children, ...props }) => {
  const { isTablet, isDesktop } = useResponsive();

  return (
    <S.Card
      size={size ? size : isTablet ? 'default' : 'small'}
      className={className}
      bordered={false}
      $padding={
        padding || padding === 0
          ? padding
          : (isDesktop && defaultPaddings.desktop) || (isTablet && defaultPaddings.tablet) || defaultPaddings.mobile
      }
      $autoHeight={autoHeight}
      {...props}
    >
      {children}
    </S.Card>
  );
};
