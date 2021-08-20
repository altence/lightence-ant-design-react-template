import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { PiecesOfAdviceHeader } from './PiecesOfAdviceHeader/PiecesOfAdviceHeader';
import { Card } from '../../common/Card/Card';
import { piecesOfAdviceData } from '../../../constants/piecesOfAdviceData';
import { Advice } from './Advice/Advice';
import theme from '../../../styles/theme';
import * as S from './PiecesOfAdviceCard.styles';

export const PiecesOfAdviceCard: React.FC = () => {
  const isDesktop = useMediaQuery({ query: theme.media.xl });

  return (
    <Card title={<PiecesOfAdviceHeader />}>
      <S.Wrapper>
        {piecesOfAdviceData.map((advice) => (
          <Advice
            key={advice.id}
            imgUrl={(isDesktop && advice.imgUrlHighResol) || advice.imgUrl}
            title={advice.title}
            date={advice.date}
            description={advice.description}
          />
        ))}
      </S.Wrapper>
    </Card>
  );
};
