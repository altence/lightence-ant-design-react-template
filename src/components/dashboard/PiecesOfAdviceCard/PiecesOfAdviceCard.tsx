import React from 'react';
import { piecesOfAdviceData } from '../../../constants/piecesOfAdviceData';
import { DashboardCard } from '../DashboardCard/DashboardCard';
import * as S from './PiecesOfAdviceCard.styles';
import { useTranslation } from 'react-i18next';
import { ArticleCard } from '../../common/ArticleCard/ArticleCard';

export const PiecesOfAdviceCard: React.FC = () => {
  const { t } = useTranslation();

  return (
    <DashboardCard title={t('dashboard.piecesOfAdvice')}>
      <S.Wrapper>
        {piecesOfAdviceData.map((advice) => (
          <ArticleCard
            key={advice.id}
            imgUrl={advice.imgUrl}
            title={advice.title}
            date={advice.date}
            description={advice.description}
          />
        ))}
      </S.Wrapper>
    </DashboardCard>
  );
};
