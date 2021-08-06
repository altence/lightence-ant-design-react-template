import React from 'react';
import { BarChartOutlined, CheckOutlined, FileTextOutlined } from '@ant-design/icons';
import * as S from './Diagram.styles';

export const Diagram: React.FC = () => {
  return (
    <S.Wrapper>
      <S.DiagramItem isActive>
        <S.IconWrapper>
          <CheckOutlined />
        </S.IconWrapper>
      </S.DiagramItem>
      <S.Divider type="vertical" />
      <S.DiagramItem>
        <S.IconWrapper>
          <BarChartOutlined />
        </S.IconWrapper>
      </S.DiagramItem>
      <S.Divider type="vertical" />
      <S.DiagramItem>
        <S.IconWrapper>
          <FileTextOutlined />
        </S.IconWrapper>
      </S.DiagramItem>
      <S.Divider type="vertical" />
    </S.Wrapper>
  );
};
