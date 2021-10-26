import React from 'react';
import { CardProps as AntCardProps } from 'antd';
import { defaultPaddings } from 'constants/defaultPaddings';
import { useResponsive } from 'hooks/useResponsive';
import * as S from './Card.styles';

export interface CardProps extends AntCardProps {
  className?: string;
  padding?: string | number | [number, number];
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ className, padding, children, ...props }) => {
  const { isTablet, isDesktop, isBigScreen } = useResponsive();

  return (
    <S.Card
      size={(isBigScreen && 'default') || 'small'}
      className={className}
      bordered={false}
      padding={
        padding ||
        (isDesktop && defaultPaddings.desktop) ||
        (isTablet && defaultPaddings.tablet) ||
        defaultPaddings.mobile
      }
      {...props}
    >
      {children}
    </S.Card>
  );
};
