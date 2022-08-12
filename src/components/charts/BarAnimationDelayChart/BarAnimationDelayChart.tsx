import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Card } from '@app/components/common/Card/Card';
import { BaseChart } from '@app/components/common/charts/BaseChart';
import { useAppSelector } from '@app/hooks/reduxHooks';
import { themeObject } from '@app/styles/themes/themeVariables';

export const BarAnimationDelayChart: React.FC = () => {
  const { t } = useTranslation();
  const theme = useAppSelector((state) => state.theme.theme);

  const [data, setData] = useState<{ data1: number[]; data2: number[]; xAxisData: string[] }>({
    data1: [],
    data2: [],
    xAxisData: [],
  });

  useEffect(() => {
    const xAxisData: string[] = [];
    const data1: number[] = [];
    const data2: number[] = [];

    setTimeout(() => {
      for (let i = 0; i < 100; i++) {
        xAxisData.push(`A${i}`);
        data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
        data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5);
      }
      setData({ data1, data2, xAxisData });
    }, 200);
  }, []);

  const option = {
    legend: {
      data: [t('charts.females'), t('charts.males')],
      left: 20,
      top: 0,
      textStyle: {
        color: themeObject[theme].textMain,
      },
    },
    grid: {
      left: 20,
      right: 20,
      bottom: 0,
      top: 70,
      containLabel: true,
    },
    tooltip: {},
    xAxis: {
      data: data.xAxisData,
      splitLine: {
        show: false,
      },
    },
    yAxis: {
      name: t('charts.averageValue'),
      nameTextStyle: {
        padding: [0, -24],
        align: 'left',
      },
    },
    series: [
      {
        name: t('charts.females'),
        type: 'bar',
        data: data.data1,
        color: themeObject[theme].chartColor2,
        emphasis: {
          focus: 'series',
        },
        animationDelay: (idx: number) => idx * 10,
      },
      {
        name: t('charts.males'),
        type: 'bar',
        data: data.data2,
        color: themeObject[theme].chartColor3,
        emphasis: {
          focus: 'series',
        },
        animationDelay: (idx: number) => idx * 10 + 100,
      },
    ],
    animationEasing: 'elasticOut',
  };
  return (
    <Card padding="0 0 1.875rem" title={t('charts.barLabel')}>
      <BaseChart option={option} />
    </Card>
  );
};
