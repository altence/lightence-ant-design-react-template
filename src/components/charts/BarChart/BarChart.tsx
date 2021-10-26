import React, { useEffect, useState } from 'react';
import { Card } from 'components/common/Card/Card';
import { Chart } from 'components/common/Chart/Chart';

export const BarChart: React.FC = () => {
  const [data, setData] = useState<number[]>([100, 10, 200, 110, 140]);

  const option = {
    xAxis: {
      max: 'dataMax',
    },
    yAxis: {
      type: 'category',
      data: ['A', 'B', 'C', 'D', 'E'],
      inverse: true,
      animationDuration: 300,
      animationDurationUpdate: 300,
      max: 2,
    },
    series: [
      {
        realtimeSort: true,
        name: 'X',
        type: 'bar',
        data: data,
        label: {
          show: true,
          position: 'right',
          valueAnimation: true,
        },
      },
    ],
    animationDuration: 0,
    animationDurationUpdate: 3000,
    animationEasing: 'linear',
    animationEasingUpdate: 'linear',
  };

  useEffect(() => {
    setInterval(() => {
      setData(() => {
        const newData = [...data];

        for (let i = 0; i < data.length; ++i) {
          if (Math.random() > 0.9) {
            newData[i] += Math.round(Math.random() * 2000);
          } else {
            newData[i] += Math.round(Math.random() * 200);
          }
        }

        return newData;
      });
    }, 1000 * 3);
  }, []);

  const [chart, setChart] = useState(<Chart option={option} />);

  useEffect(() => {
    setChart(<Chart option={option} />);
  }, [data]);

  return <Card title="Bar chart">{chart}</Card>;
};
