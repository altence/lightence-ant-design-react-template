import React from 'react';
import { useTranslation } from 'react-i18next';
import { Dates } from '../../../constants/Dates';
import * as S from './ArticleCard.styles.';

interface ArticleCardProps {
  author?: React.ReactNode;
  keywords?: boolean;
  imgUrl: string;
  title: string;
  date: number;
  description: string;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ imgUrl, title, date, description, author, keywords }) => {
  const { t } = useTranslation();

  return (
    <S.Wrapper>
      {keywords ? (
        <S.Keywords placeholder={t('common.keywords')} />
      ) : (
        <S.BtnMore type="ghost">{t('common.moreDetails')}</S.BtnMore>
      )}
      <S.Image src={imgUrl} preview={false} />
      <S.InfoWrapper>
        {author && <S.Author>{author}</S.Author>}
        <S.InfoHeader>
          <S.Title>{title}</S.Title>
          <S.Text>{Dates.format(date, 'L')}</S.Text>
        </S.InfoHeader>
        <S.Description>{description}</S.Description>
      </S.InfoWrapper>
    </S.Wrapper>
  );
};
