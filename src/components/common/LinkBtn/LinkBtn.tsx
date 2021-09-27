import React from 'react';
import * as S from './LinkBtn.styles';

interface LinkBtnProps {
  [key: string]: string;
}

export const LinkBtn: React.FC<LinkBtnProps> = ({ children, ...props }) => {
  return (
    <S.LinkButton type="link" {...props}>
      {children}
    </S.LinkButton>
  );
};
