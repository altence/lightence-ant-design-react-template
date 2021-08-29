import React from 'react';
import { useTranslation } from 'react-i18next';
import { Dates } from '../../../../constants/Dates';
import * as S from './MapHeader.styles';

const today = Dates.getToday();

export const MapHeader: React.FC = () => {
  const { t } = useTranslation();

  return (
    <S.Wrapper>
      {t('dashboard.map.title')}
      <S.Text>{Dates.format(today, 'L')}</S.Text>
    </S.Wrapper>
  );
};
