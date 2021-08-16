import React from 'react';
import { CardProps as AntCardProps } from 'antd';
import { useMediaQuery } from 'react-responsive';
import { media } from '../../../styles/theme';
import * as S from './Card.styles';

export interface CardProps extends AntCardProps {
  className?: string;
  padding?: string | number;
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ className, padding, children, ...props }) => {
  const isDesktop = useMediaQuery({ query: media.xl });

  return (
    <S.Card
      size={(isDesktop && 'default') || 'small'}
      className={className}
      bordered={false}
      padding={padding}
      {...props}
    >
      {children}
    </S.Card>
  );
};
