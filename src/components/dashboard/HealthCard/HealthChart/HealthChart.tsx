import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { EChartsOption } from 'echarts';
import { useTranslation } from 'react-i18next';
import { Chart as CommonChart } from '../../../common/Chart/Chart';
import { Pie } from 'constants/healthChartData';
import { useResponsive } from 'hooks/useResponsive';
import * as S from './HealthChart.styles';
import { getHealthChartData } from 'api/health.api';
import { CaretUpOutlined } from '@ant-design/icons';

interface ChartProps {
  data: { value: number; name: string; description: string; color: string; dayUp: number }[];
  colors: string[];
  onSelect: (e: { selected: { dataIndex: number[] }[] }) => void;
}

const Chart = React.memo<ChartProps>(({ data, colors, onSelect }) => {
  const { isTablet } = useResponsive();
  const { t } = useTranslation();

  const option = {
    tooltip: {
      trigger: 'item',
    },
    legend: {
      show: false,
    },
    color: colors,
    series: [
      {
        type: 'pie',
        radius: ['55%', '80%'],
        center: ['50%', 85],
        avoidLabelOverlap: false,
        labelLine: false,
        selectedMode: 'single',
        selectedOffset: 3,
        label: {
          show: false,
          position: 'center',
          formatter: (label: EChartsOption) => {
            return `{a|${label.value}}\n{b|${t('dashboard.health.percent')}}`;
          },
          textStyle: {
            rich: {
              a: {
                fontFamily: 'Montserrat',
                fontSize: 45,
                fontWeight: 800,
                padding: 0,
                color: '#0059AB',
              },
              b: {
                fontFamily: 'Montserrat',
                fontSize: 14,
              },
            },
          },
        },
        data,
        emphasis: {
          label: {
            show: true,
          },
        },
      },
    ],
  };
  return data.length ? (
    <CommonChart
      option={option}
      {...{ height: 200, width: isTablet ? 175 : '100%' }}
      onEvents={{ selectchanged: onSelect }}
    />
  ) : null;
});

export const HealthChart: React.FC = () => {
  const [chartData, setChartData] = useState<Pie[]>([]);
  const [selectedSeries, setSelectedSeries] = useState<number[]>([]);
  const { t } = useTranslation();

  useEffect(() => {
    getHealthChartData().then((res) => setChartData(res));
  }, []);

  const data = useMemo(
    () =>
      chartData.map((item) => {
        return {
          ...item,
          name: t(item.name),
          description: t(item.description),
        };
      }),
    [chartData.length],
  );
  const colors = useMemo(() => chartData.map((item) => item.color), [chartData.length]);

  const onSelect = useCallback(
    (e: { selected: { dataIndex: number[] }[] }) => {
      if (e.selected.length) {
        setSelectedSeries(e.selected[0].dataIndex);
      } else {
        setSelectedSeries([]);
      }
    },
    [setSelectedSeries],
  );

  return (
    <S.ChartWrapper>
      <Chart data={data} colors={colors} onSelect={onSelect} />
      <S.Legend>
        {data.map((item, index) => (
          <S.LegendWrapper key={index} isSelected={selectedSeries.includes(index)}>
            <S.LegendInfo>
              <S.LegendColor style={{ backgroundColor: colors[index] }} />
              <S.LegendDescription>
                <S.LegendTitle>
                  {item.name}
                  <S.Values>
                    <S.LegendPercent>{item.value}</S.LegendPercent>
                    <S.LegendDayUp>
                      <CaretUpOutlined /> {item.dayUp}%
                    </S.LegendDayUp>
                  </S.Values>
                </S.LegendTitle>
                <S.LegendText>{item.description}</S.LegendText>
              </S.LegendDescription>
            </S.LegendInfo>
          </S.LegendWrapper>
        ))}
      </S.Legend>
    </S.ChartWrapper>
  );
};
