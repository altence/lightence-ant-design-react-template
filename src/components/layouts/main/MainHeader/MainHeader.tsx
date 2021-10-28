import React from 'react';
import * as S from './MainHeader.styles';

export const MainHeader: React.FC = ({ children }) => {
  return <S.Header>{children}</S.Header>;
};
