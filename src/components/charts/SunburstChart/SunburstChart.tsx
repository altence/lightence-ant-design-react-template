import { Card } from 'components/common/Card/Card';
import { Chart } from 'components/common/Chart/Chart';
import { hexToRGB } from 'helpers/hexToRGB';
import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from 'styled-components';

export const SunburstChart: React.FC = () => {
  const { t } = useTranslation();

  const theme = useContext(ThemeContext);

  const item1 = {
    color: theme.colors.main.error,
  };

  const item2 = {
    color: theme.colors.main.warning,
  };

  const item3 = {
    color: theme.colors.main.success,
  };
  const data = [
    {
      children: [
        {
          value: 5,
          children: [
            {
              value: 1,
              itemStyle: item1,
            },
            {
              value: 2,
              children: [
                {
                  value: 1,
                  itemStyle: item2,
                },
              ],
            },
            {
              children: [
                {
                  value: 1,
                },
              ],
            },
          ],
          itemStyle: item1,
        },
        {
          value: 10,
          children: [
            {
              value: 6,
              children: [
                {
                  value: 1,
                  itemStyle: item1,
                },
                {
                  value: 1,
                },
                {
                  value: 1,
                  itemStyle: item2,
                },
                {
                  value: 1,
                },
              ],
              itemStyle: item3,
            },
            {
              value: 2,
              children: [
                {
                  value: 1,
                },
              ],
              itemStyle: item3,
            },
            {
              children: [
                {
                  value: 1,
                  itemStyle: item2,
                },
              ],
            },
          ],
          itemStyle: item1,
        },
      ],
      itemStyle: item1,
    },
    {
      value: 9,
      children: [
        {
          value: 4,
          children: [
            {
              value: 2,
              itemStyle: item2,
            },
            {
              children: [
                {
                  value: 1,
                  itemStyle: item1,
                },
              ],
            },
          ],
          itemStyle: item1,
        },
        {
          children: [
            {
              value: 3,
              children: [
                {
                  value: 1,
                },
                {
                  value: 1,
                  itemStyle: item2,
                },
              ],
            },
          ],
          itemStyle: item3,
        },
      ],
      itemStyle: item2,
    },
    {
      value: 7,
      children: [
        {
          children: [
            {
              value: 1,
              itemStyle: item3,
            },
            {
              value: 3,
              children: [
                {
                  value: 1,
                  itemStyle: item2,
                },
                {
                  value: 1,
                },
              ],
              itemStyle: item2,
            },
            {
              value: 2,
              children: [
                {
                  value: 1,
                },
                {
                  value: 1,
                  itemStyle: item1,
                },
              ],
              itemStyle: item1,
            },
          ],
          itemStyle: item3,
        },
      ],
      itemStyle: item1,
    },
    {
      children: [
        {
          value: 6,
          children: [
            {
              value: 1,
              itemStyle: item2,
            },
            {
              value: 2,
              children: [
                {
                  value: 2,
                  itemStyle: item2,
                },
              ],
              itemStyle: item1,
            },
            {
              value: 1,
              itemStyle: item3,
            },
          ],
          itemStyle: item3,
        },
        {
          value: 3,
          children: [
            {
              value: 1,
            },
            {
              children: [
                {
                  value: 1,
                  itemStyle: item2,
                },
              ],
            },
            {
              value: 1,
            },
          ],
          itemStyle: item3,
        },
      ],
      itemStyle: item1,
    },
  ];

  const option = {
    series: {
      radius: ['15%', '80%'],
      type: 'sunburst',
      sort: undefined,
      emphasis: {
        focus: 'ancestor',
      },
      data: data,
      label: {
        rotate: 'radial',
      },
      levels: [],
      itemStyle: {
        color: theme.colors.main.primary,
        borderWidth: 2,
      },
    },
  };

  return (
    <Card title={t('charts.sunburst')}>
      <Chart option={option} />
    </Card>
  );
};
