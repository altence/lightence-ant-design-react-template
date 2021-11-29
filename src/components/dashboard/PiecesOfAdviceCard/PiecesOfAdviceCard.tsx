import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { PiecesOfAdviceHeader } from './PiecesOfAdviceHeader/PiecesOfAdviceHeader';
import { piecesOfAdviceData } from '../../../constants/piecesOfAdviceData';
import { DashboardCard } from '../DashboardCard/DashboardCard';
import theme from '../../../styles/theme';
import * as S from './PiecesOfAdviceCard.styles';

export const PiecesOfAdviceCard: React.FC = () => {
  const isDesktop = useMediaQuery({ query: theme.media.xl });

  return (
    <DashboardCard id="advice" title={<PiecesOfAdviceHeader />}>
      <S.Wrapper>
        {piecesOfAdviceData.map((advice) => (
          <S.Advice
            key={advice.id}
            imgUrl={(isDesktop && advice.imgUrlHighResol) || advice.imgUrl}
            title={advice.title}
            date={advice.date}
            description={advice.description}
          />
        ))}
      </S.Wrapper>
    </DashboardCard>
  );
};
