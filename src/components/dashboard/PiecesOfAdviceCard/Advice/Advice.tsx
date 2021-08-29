import React from 'react';
import { useTranslation } from 'react-i18next';
import { Advice as AdviceProps } from '../../../../constants/piecesOfAdviceData';
import { Dates } from '../../../../constants/Dates';
import * as S from './Advice.styles';

export const Advice: React.FC<AdviceProps> = ({ imgUrl, title, date, description }) => {
  const { t } = useTranslation();

  return (
    <S.Wrapper>
      <S.BtnMore type="ghost">{t('dashboard.piecesOfAdvice.moreDetails')}</S.BtnMore>
      <S.Image src={imgUrl} preview={false} />
      <S.InfoWrapper>
        <S.InfoHeader>
          <S.Title>{t(title)}</S.Title>
          <S.Text>{Dates.format(date, 'L')}</S.Text>
        </S.InfoHeader>
        <S.Description>{t(description)}</S.Description>
      </S.InfoWrapper>
    </S.Wrapper>
  );
};
