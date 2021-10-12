import { ButtonProps } from 'antd';
import React from 'react';
import * as S from './LinkBtn.styles';

interface LinkBtnProps extends ButtonProps {
  children: React.ReactNode;
}

export const LinkBtn: React.FC<LinkBtnProps> = ({ children, ...props }) => {
  return (
    <S.LinkButton type="link" {...props}>
      {children}
    </S.LinkButton>
  );
};
