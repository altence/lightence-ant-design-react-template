import React from 'react';
import { PiecesOfAdviceHeader } from './PiecesOfAdviceHeader';
import { Card } from '../../../components/common/Card/Card';
import { advices } from '../../../constants/advices';
import { Advice } from './Advice';
import * as S from './PiecesOfAdviceCard.styles';

export const PiecesOfAdviceCard: React.FC = () => {
  return (
    <Card $large title={<PiecesOfAdviceHeader />}>
      <S.Wrapper>
        {advices.map((advice) => (
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
