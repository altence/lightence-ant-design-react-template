import React from 'react';
import * as S from './PageTitle.styles';

export const PageTitle: React.FC = ({ children }) => {
  return <S.Text>{children}</S.Text>;
};
