import React from 'react';
import { Dates } from '../../../../constants/Dates';
import * as S from './MapHeader.styles';

const today = Dates.getToday();

export const MapHeader: React.FC = () => {
  return (
    <S.Wrapper>
      Map
      <S.Text>{Dates.format(today, 'L')}</S.Text>
    </S.Wrapper>
  );
};
