import React from 'react';
import { CardProps } from 'antd';
import { useResponsive } from '@app/hooks/useResponsive';
import * as S from './BaseCard.styles';
import type { WidthCategories } from '@app/styles/themes/types';

export interface BaseCardProps extends CardProps {
  className?: string;
  padding?: string | number | readonly [number, number];
  autoHeight?: boolean;
}

export const defaultPaddings = {
  xs: [30, 16],
  md: [40, 30],
  xl: [50, 60],
} as const satisfies WidthCategories;

export const BaseCard: React.FC<BaseCardProps> = ({
  className,
  padding,
  size,
  autoHeight = true,
  children,
  ...props
}) => {
  const { isTablet, breakpoint } = useResponsive();

  return (
    <S.Card
      size={size ?? (isTablet ? 'default' : 'small')}
      className={className}
      bordered={false}
      $padding={padding || padding === 0 ? padding : defaultPaddings[breakpoint]}
      $autoHeight={autoHeight}
      {...props}
    >
      {children}
    </S.Card>
  );
};
