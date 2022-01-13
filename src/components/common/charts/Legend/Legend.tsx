import React from 'react';
import * as S from './Legend.styles';
import { getChartColors } from '../../../../styles/theme';
import { Popover } from '@app/components/common/Popover/Popover';
import { InfoCircleOutlined } from '@ant-design/icons';

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
            </S.LegendDescription>
            <S.Values>{item.value}</S.Values>
            <Popover content={<S.PopoverContent>{item.description}</S.PopoverContent>} trigger="hover">
              <S.InfoStyled />
            </Popover>
          </S.LegendInfo>
        </S.LegendWrapper>
      ))}
    </>
  );
};
