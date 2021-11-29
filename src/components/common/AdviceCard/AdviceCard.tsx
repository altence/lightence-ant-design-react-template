import React from 'react';
import { Dates } from '../../../constants/Dates';
import { useTranslation } from 'react-i18next';
import * as S from './AdviceCard.styles';

interface AdviceCardProps {
  imgUrl: string;
  title: string;
  date: number;
  description: string;
  className?: string;
}

export const AdviceCard: React.FC<AdviceCardProps> = ({
  imgUrl,
  title,
  date,
  description,
  className = 'advice-card',
}) => {
  const { t } = useTranslation();
  return (
    <S.Wrapper className={className}>
      <S.BtnMore type="ghost">{t('common.moreDetails')}</S.BtnMore>
      <S.Image src={imgUrl} preview={false} width="100%" />
      <S.InfoWrapper>
        <S.InfoHeader>
          <S.Title>{title}</S.Title>
          <S.DateTime>{Dates.format(date, 'MM.DD.YYYY')}</S.DateTime>
        </S.InfoHeader>
        <S.Description>{description}</S.Description>
      </S.InfoWrapper>
    </S.Wrapper>
  );
};
