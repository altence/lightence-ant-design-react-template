import React, { useContext, useEffect, useState } from 'react';
import { Card } from 'components/common/Card/Card';
import { Chart } from 'components/common/Chart/Chart';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from 'styled-components';

export const BarChart: React.FC = () => {
  const [data, setData] = useState<number[]>([100, 10, 200, 110, 140]);

  const { t } = useTranslation();

  const theme = useContext(ThemeContext);

  const option = {
    color: theme.colors.main.secondary,
    grid: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      containLabel: true,
    },
    xAxis: {
      max: 'dataMax',
    },
    yAxis: {
      type: 'category',
      data: ['A', 'B', 'C', 'D', 'E'],
      inverse: true,
      animationDuration: 300,
      animationDurationUpdate: 300,
    },
    series: [
      {
        realtimeSort: true,
        name: 'X',
        type: 'bar',
        data: data,
      },
    ],
    animationDuration: 0,
    animationDurationUpdate: 3000,
    animationEasing: 'linear',
    animationEasingUpdate: 'linear',
  };

  const run = (data: number[]) => {
    const newData = [...data];

    for (let i = 0; i < data.length; ++i) {
      if (Math.random() > 0.9) {
        newData[i] += Math.round(Math.random() * 2000);
      } else {
        newData[i] += Math.round(Math.random() * 200);
      }
    }

    return newData;
  };

  useEffect(() => {
    setInterval(() => {
      setInterval(() => run(data));
    }, 0);

    setInterval(() => {
      setData(() => run(data));
    }, 1000 * 3);
  }, []);

  const [chart, setChart] = useState(<Chart option={option} />);

  useEffect(() => {
    setChart(<Chart option={option} />);
  }, [data]);

  return <Card title={t('charts.bar')}>{chart}</Card>;
};
