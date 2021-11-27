import { useState, useEffect, useContext } from 'react';
import * as echarts from 'echarts';
import { Card } from 'components/common/Card/Card';
import { Chart } from 'components/common/Chart/Chart';
import { ThemeContext } from 'styled-components';
import { useTranslation } from 'react-i18next';
import Data from './data.json';

interface DataRow {
  id: string;
  fromDatasetId: string;
  transform: {
    type: string;
    config: { and: [{ dimension: string; gte: number }, { dimension: string; '=': string }] };
  };
}

interface SeriesRow {
  type: string;
  datasetId: string;
  showSymbol: boolean;
  name: string;
  endLabel: {
    show: boolean;
    formatter: (params: { value: string }) => string;
  };
  labelLayout: {
    moveOverlap: string;
  };
  emphasis: {
    focus: string;
  };
  encode: {
    x: string;
    y: string;
    label: [string, string];
    itemName: string;
    tooltip: [string];
  };
}

export const LineRaceChart: React.FC = () => {
  const [data, setData] = useState<DataRow[]>([]);
  const [series, setSeries] = useState<SeriesRow[]>([]);
  const rawData = JSON.parse(JSON.stringify(Data));
  const theme = useContext(ThemeContext);
  const { t } = useTranslation();

  useEffect(() => {
    setTimeout(() => {
      runAnimation();
    }, 200);
  }, []);

  const runAnimation = () => {
    const countries = ['Finland', 'France', 'Germany', 'Iceland', 'Norway', 'Poland', 'Russia', 'United Kingdom'];
    const datasetWithFilters: DataRow[] = [];
    const seriesList: SeriesRow[] = [];

    echarts.util.each(countries, function (country) {
      const datasetId = 'dataset_' + country;
      datasetWithFilters.push({
        id: datasetId,
        fromDatasetId: 'dataset_raw',
        transform: {
          type: 'filter',
          config: {
            and: [
              { dimension: 'Year', gte: 1950 },
              { dimension: 'Country', '=': country },
            ],
          },
        },
      });
      seriesList.push({
        type: 'line',
        datasetId: datasetId,
        showSymbol: false,
        name: country,
        endLabel: {
          show: true,
          formatter: function (params) {
            return params.value[3] + ': ' + params.value[0];
          },
        },
        labelLayout: {
          moveOverlap: 'shiftY',
        },
        emphasis: {
          focus: 'series',
        },
        encode: {
          x: 'Year',
          y: 'Income',
          label: ['Country', 'Income'],
          itemName: 'Year',
          tooltip: ['Income'],
        },
      });
    });
    setData(datasetWithFilters);
    setSeries(seriesList);
  };
  const option = {
    animationDuration: 10000,
    dataset: [
      {
        id: 'dataset_raw',
        source: rawData,
      },
      ...data,
    ],
    title: {
      text: t('charts.lineTitle'),
      left: '1.8%',
      textStyle: {
        fontSize: theme.commonFontSizes.xxl,
        fontWeight: theme.commonFontWeight.bold,
        color: theme.colors.text.main,
        lineHeight: 31,
      },
    },
    tooltip: {
      order: 'valueDesc',
      trigger: 'axis',
    },
    xAxis: {
      type: 'category',
      nameLocation: 'middle',
    },
    yAxis: {
      name: '',
    },
    grid: {
      left: 65,
      top: 60,
      bottom: 60,
      right: 150,
    },
    series: series,
  };

  return (
    <Card padding="1.875rem 0 0 0">
      <Chart option={option} height={'24.0625rem'} />
    </Card>
  );
};
