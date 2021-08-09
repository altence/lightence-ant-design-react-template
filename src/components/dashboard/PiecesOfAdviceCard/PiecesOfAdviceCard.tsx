import React from 'react';
import { PiecesOfAdviceHeader } from './PiecesOfAdviceHeader/PiecesOfAdviceHeader';
import { Card } from '../../common/Card/Card';
import { piecesOfAdviceData } from '../../../constants/piecesOfAdvice';
import { Advice } from './Advice/Advice';
import * as S from './PiecesOfAdviceCard.styles';

export const PiecesOfAdviceCard: React.FC = () => {
  return (
    <Card title={<PiecesOfAdviceHeader />} padding="0.875rem 1.25rem">
      <S.Wrapper>
        {piecesOfAdviceData.map((advice) => (
          <Advice
            key={advice.id}
            imgUrl={advice.imgUrl}
            title={advice.title}
            date={advice.date}
            description={advice.description}
          />
        ))}
      </S.Wrapper>
    </Card>
  );
};
