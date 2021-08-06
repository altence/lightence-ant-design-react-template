import React from 'react';
import { CardProps as AntCardProps } from 'antd';
import * as S from './Card.styles';

export interface CardProps extends AntCardProps {
  className?: string;
  padding?: string | number;
  children: React.ReactNode;
  $small?: boolean;
  $medium?: boolean;
  $large?: boolean;
}

export const Card: React.FC<CardProps> = ({ className, padding, children, ...props }) => {
  return (
    <S.Card className={className} bordered={false} padding={padding} {...props}>
      {children}
    </S.Card>
  );
};
