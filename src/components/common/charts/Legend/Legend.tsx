import React from 'react';
import * as S from './Legend.styles';
import { BasePopover } from '@app/components/common/BasePopover/BasePopover';
import { getChartColors } from '@app/components/common/charts/BaseChart';
import { useTheme } from 'styled-components';

export interface LegendItem {
  name: string;
  value: number | string;
  description: string;
}

interface LegendProps {
  legendItems: LegendItem[];
  activeItemIndex: number | null;
}

export const Legend: React.FC<LegendProps> = ({ legendItems, activeItemIndex }) => {
  const theme = useTheme();
  const colors = getChartColors(theme);

  return (
    <>
      {legendItems.map((item, index) => (
        <S.LegendWrapper key={index} isSelected={index === activeItemIndex}>
          <S.LegendInfo>
            <S.LegendColor style={{ backgroundColor: colors[index] }} />
            <S.LegendDescription>
              <S.LegendTitle>{item.name}</S.LegendTitle>
            </S.LegendDescription>
            <S.Values>{item.value}</S.Values>
            <BasePopover content={<S.PopoverContent>{item.description}</S.PopoverContent>} trigger="hover">
              <S.InfoStyled />
            </BasePopover>
          </S.LegendInfo>
        </S.LegendWrapper>
      ))}
    </>
  );
};
