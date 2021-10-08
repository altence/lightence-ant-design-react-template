import React from 'react';
import { CardProps as AntCardProps } from 'antd';
import { useMediaQuery } from 'react-responsive';
import theme from '../../../styles/theme';
import * as S from './Card.styles';

export interface CardProps extends AntCardProps {
  className?: string;
  padding?: string | number | [number, number];
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ className, padding, children, ...props }) => {
  const isBigScreen = useMediaQuery({ query: theme.media.xxl });

  return (
    <S.Card
      size={(isBigScreen && 'default') || 'small'}
      className={className}
      bordered={false}
      padding={padding}
      {...props}
    >
      {children}
    </S.Card>
  );
};
