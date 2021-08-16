import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { PiecesOfAdviceHeader } from './PiecesOfAdviceHeader/PiecesOfAdviceHeader';
import { Card } from '../../common/Card/Card';
import { piecesOfAdviceData } from '../../../constants/piecesOfAdviceData';
import { Advice } from './Advice/Advice';
import { media } from '../../../styles/theme';
import * as S from './PiecesOfAdviceCard.styles';

export const PiecesOfAdviceCard: React.FC = () => {
  const isDesktop = useMediaQuery({ query: media.xl });
  const isBigScreen = useMediaQuery({ query: media.xxl });

  return (
    <Card title={<PiecesOfAdviceHeader />} padding={(isBigScreen && '1rem') || '0.625rem'}>
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
