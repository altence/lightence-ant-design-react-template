import { BaseCol } from '@app/components/common/BaseCol/BaseCol';
import React, { PropsWithChildren } from 'react';
import * as S from './NFTCardHeader.styles';

interface NFTCardHeaderProps {
  title: string;
}

export const NFTCardHeader: React.FC<PropsWithChildren<NFTCardHeaderProps>> = ({ title, children }) => {
  return (
    <S.WrapperRow justify="space-between">
      <BaseCol>
        <S.Title level={5}>{title}</S.Title>
      </BaseCol>

      {children && <BaseCol>{children}</BaseCol>}
    </S.WrapperRow>
  );
};
