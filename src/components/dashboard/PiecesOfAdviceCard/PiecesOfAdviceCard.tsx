import React from 'react';
import { piecesOfAdviceData } from '../../../constants/piecesOfAdviceData';
import { DashboardCard } from '../DashboardCard/DashboardCard';
import * as S from './PiecesOfAdviceCard.styles';
import { useTranslation } from 'react-i18next';

export const PiecesOfAdviceCard: React.FC = () => {
  const { t } = useTranslation();

  return (
    <DashboardCard title={t('dashboard.piecesOfAdvice')}>
      <S.Wrapper>
        {piecesOfAdviceData.map((advice, index) => (
          <S.CardArticle
            key={index}
            imgUrl={advice.img}
            title={advice.title}
            date={advice.date}
            description={advice.text}
            avatar={advice.avatarUrl}
            author={advice.author}
            tags={advice.tags}
          />
        ))}
      </S.Wrapper>
    </DashboardCard>
  );
};
