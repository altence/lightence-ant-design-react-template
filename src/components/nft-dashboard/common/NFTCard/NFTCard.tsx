import React from 'react';
import { Card } from '@app/components/common/Card/Card';
import * as S from './NFTCard.styles';

export const NFTCard: typeof Card = ({ ...props }) => {
  return <S.Card autoHeight={false} padding={[24, 20]} {...props} />;
};
