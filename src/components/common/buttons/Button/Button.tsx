import React from 'react';
import { ButtonProps as AntButtonProps } from 'antd';
import { useResponsive } from 'hooks/useResponsive';
import * as S from './Button.styles';
import { ButtonType } from 'antd/lib/button';

export interface ButtonProps extends AntButtonProps {
  className?: string;
  type: ButtonType;
}

export const Button: React.FC<ButtonProps> = ({ className, type = 'ghost', children, ...props }) => {
  const { isTablet } = useResponsive();

  return (
    <S.Button type={type} size={(isTablet && 'large') || 'middle'} className={className} {...props}>
      {children}
    </S.Button>
  );
};
