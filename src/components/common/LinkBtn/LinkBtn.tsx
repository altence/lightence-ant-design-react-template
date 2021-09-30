import React from 'react';
import * as S from './LinkBtn.styles';

interface LinkBtnProps {
  children: React.ReactNode;
  [key: string]: React.ReactNode;
}

export const LinkBtn: React.FC<LinkBtnProps> = ({ children, ...props }) => {
  return (
    <S.LinkButton type="link" {...props}>
      {children}
    </S.LinkButton>
  );
};
