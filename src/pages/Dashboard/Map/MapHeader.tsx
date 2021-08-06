import React from 'react';
import { Dates } from '../../../constants/dates';
import * as S from './MapHeader.styles';

const today = Dates.getToday();

export const MapHeader: React.FC = () => {
  return (
    <S.Wrapper>
      Map
      <S.Text>{today.toLocaleDateString()}</S.Text>
    </S.Wrapper>
  );
};
