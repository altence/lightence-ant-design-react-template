import React from 'react';
import * as S from './Legend.styles';
import { getChartColors } from '../../../../styles/theme';

interface LegendItem {
  title: string;
  value: number;
  description?: string;
}

interface LegendProps {
  legendItems: LegendItem[];
  activeItemIndex: number | null;
}

const colors = getChartColors();

export const Legend: React.FC<LegendProps> = ({ legendItems, activeItemIndex }) => {
  return (
    <S.Legend>
      {legendItems.map((item, index) => (
        <S.LegendWrapper key={index} isSelected={index === activeItemIndex}>
          <S.LegendInfo>
            <S.LegendColor style={{ backgroundColor: colors[index] }} />
            <S.LegendDescription>
              <S.LegendTitle>
                {item.title}
                <S.Values>
                  <S.LegendPercent>{item.value}</S.LegendPercent>
                </S.Values>
              </S.LegendTitle>
              <S.LegendText>{item.description}</S.LegendText>
            </S.LegendDescription>
          </S.LegendInfo>
        </S.LegendWrapper>
      ))}
    </S.Legend>
  );
};
