import React from 'react';
import { Col } from 'antd';
import * as S from './NFTCardHeader.styles';

interface NFTCardHeaderProps {
  title: string;
}

export const NFTCardHeader: React.FC<NFTCardHeaderProps> = ({ title, children }) => {
  return (
    <S.WrapperRow justify="space-between">
      <Col>
        <S.Title level={5}>{title}</S.Title>
      </Col>

      {children && <Col>{children}</Col>}
    </S.WrapperRow>
  );
};
