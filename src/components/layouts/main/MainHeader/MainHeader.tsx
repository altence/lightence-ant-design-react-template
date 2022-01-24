import React from 'react';
import * as S from './MainHeader.styles';

interface MainHeaderProps {
  isTwoColumnsLayout: boolean;
}

export const MainHeader: React.FC<MainHeaderProps> = ({ isTwoColumnsLayout, children }) => {
  return <S.Header $isTwoColumnsLayoutHeader={isTwoColumnsLayout}>{children}</S.Header>;
};
