import React from 'react';
import { healthChartData } from '../../../../constants/healthChart';
import * as S from './HealthLegend.styles';

export const HealthLegend: React.FC = () => {
  return (
    <S.Wrapper>
      {healthChartData.map((item) => (
        <S.Item key={item.id}>
          <S.Icon style={{ backgroundColor: item.color }} />
          <S.InfoWrapper>
            <S.TitleWrapper>
              <S.Title>{item.title}</S.Title>
              <S.Title>{item.value}</S.Title>
            </S.TitleWrapper>
            <S.Description>{item.description}</S.Description>
          </S.InfoWrapper>
        </S.Item>
      ))}
    </S.Wrapper>
  );
};
