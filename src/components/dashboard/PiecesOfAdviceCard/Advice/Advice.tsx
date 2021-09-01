import React from 'react';
import { useTranslation } from 'react-i18next';
import { Advice as AdviceProps } from '../../../../constants/piecesOfAdviceData';
import { Dates } from '../../../../constants/Dates';
import * as S from './Advice.styles';

interface AdviceExtendedProps extends AdviceProps {
  author?: React.ReactNode;
  keywords?: boolean;
}

export const Advice: React.FC<AdviceExtendedProps> = ({ imgUrl, title, date, description, author, keywords }) => {
  const { t } = useTranslation();

  return (
    <S.Wrapper>
      {keywords ? (
        <S.Keywords placeholder="Any keywords?" />
      ) : (
        <S.BtnMore type="ghost">{t('dashboard.piecesOfAdvice.moreDetails')}</S.BtnMore>
      )}
      <S.Image src={imgUrl} preview={false} />
      <S.InfoWrapper>
        {author && <S.Author>{author}</S.Author>}
        <S.InfoHeader>
          <S.Title>{t(title)}</S.Title>
          <S.Text>{Dates.format(date, 'L')}</S.Text>
        </S.InfoHeader>
        <S.Description>{t(description)}</S.Description>
      </S.InfoWrapper>
    </S.Wrapper>
  );
};
