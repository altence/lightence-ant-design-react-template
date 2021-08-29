import React from 'react';
import { useTranslation } from 'react-i18next';
import { ScreeningsSelect } from '../ScreeningsSelect/ScreeningsSelect';
import { Dates } from '../../../../constants/Dates';
import * as S from './ScreeningsHeader.styles';

const months = Dates.getMonths();
const statistics = ['Statistics 1', 'Statistics 2', 'Statistics 3'];

export const ScreeningsHeader: React.FC = () => {
  const { t } = useTranslation();

  return (
    <S.Wrapper>
      {t('dashboard.latestScreenings.title')}
      <S.SelectsWrapper>
        <ScreeningsSelect options={months} placeholder={t('dashboard.latestScreenings.months')} />
        <ScreeningsSelect options={statistics} placeholder={t('dashboard.latestScreenings.statistics')} />
      </S.SelectsWrapper>
    </S.Wrapper>
  );
};
