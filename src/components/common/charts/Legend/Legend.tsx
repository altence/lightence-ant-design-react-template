import React from 'react';
import * as S from './Legend.styles';
import { getChartColors } from '../../../../styles/theme';

export interface LegendItem {
  name: string;
  value: number | string;
  description: string;
}

interface LegendProps {
  legendItems: LegendItem[];
  activeItemIndex: number | null;
}

const colors = getChartColors();

export const Legend: React.FC<LegendProps> = ({ legendItems, activeItemIndex }) => {
  return (
    <>
      {legendItems.map((item, index) => (
        <S.LegendWrapper key={index} isSelected={index === activeItemIndex}>
          <S.LegendInfo>
            <S.LegendColor style={{ backgroundColor: colors[index] }} />
            <S.LegendDescription>
              <S.LegendTitle>{item.name}</S.LegendTitle>
              <S.LegendText>{item.description}</S.LegendText>
            </S.LegendDescription>
            <S.Values>{item.value}</S.Values>
          </S.LegendInfo>
        </S.LegendWrapper>
      ))}
    </>
  );
};
