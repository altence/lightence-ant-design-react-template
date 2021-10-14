import React from 'react';
import { CardProps as AntCardProps } from 'antd';
import { useMediaQuery } from 'react-responsive';
import theme from '../../../styles/theme';
import * as S from './Card.styles';
import { defaultPaddings } from 'constants/defaultPaddings';

export interface CardProps extends AntCardProps {
  className?: string;
  padding?: string | number | [number, number];
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ className, padding, children, ...props }) => {
  const isTablet = useMediaQuery({ query: theme.media.md });
  const isDesktop = useMediaQuery({ query: theme.media.xl });
  const isBigScreen = useMediaQuery({ query: theme.media.xxl });

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
