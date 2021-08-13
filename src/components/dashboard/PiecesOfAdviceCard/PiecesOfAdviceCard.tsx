import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { PiecesOfAdviceHeader } from './PiecesOfAdviceHeader/PiecesOfAdviceHeader';
import { Card } from '../../common/Card/Card';
import { piecesOfAdviceData } from '../../../constants/piecesOfAdviceData';
import { Advice } from './Advice/Advice';
import { media } from '../../../styles/theme';
import * as S from './PiecesOfAdviceCard.styles';

export const PiecesOfAdviceCard: React.FC = () => {
  const isPC = useMediaQuery({ query: media.xl });

  return (
    <Card title={<PiecesOfAdviceHeader />} padding="0.625rem">
      <S.Wrapper>
        {piecesOfAdviceData.map((advice) => (
          <Advice
            key={advice.id}
            imgUrl={(isPC && advice.imgUrlHighResol) || advice.imgUrl}
            title={advice.title}
            date={advice.date}
            description={advice.description}
          />
        ))}
      </S.Wrapper>
    </Card>
  );
};
