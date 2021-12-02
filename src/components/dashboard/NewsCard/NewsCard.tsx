import React from 'react';
import { dashboardNews } from '../../../constants/dashboardNews';
import { DashboardCard } from '../DashboardCard/DashboardCard';
import * as S from './NewsCard.styles';
import { useTranslation } from 'react-i18next';

export const NewsCard: React.FC = () => {
  const { t } = useTranslation();

  return (
    <DashboardCard title={t('dashboard.news')}>
      <S.Wrapper>
        {dashboardNews.map((advice, index) => (
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
