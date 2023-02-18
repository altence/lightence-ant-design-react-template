import React from 'react';
import { BaseCardProps } from '@app/components/common/BaseCard/BaseCard';
import * as S from './NFTCard.styles';

interface NFTCardProps extends BaseCardProps {
  isSider?: boolean;
}

export const NFTCard: React.FC<NFTCardProps> = ({ isSider = false, ...props }) => {
  return <S.Card $isSider={isSider} autoHeight={false} padding={[24, 20]} {...props} />;
};
