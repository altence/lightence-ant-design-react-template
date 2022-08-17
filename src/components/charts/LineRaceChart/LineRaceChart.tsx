import React, { useState, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Card } from '@app/components/common/Card/Card';
import { BaseChart } from '@app/components/common/charts/BaseChart';
import Data from './data.json';
import { useAppSelector } from '@app/hooks/reduxHooks';
import { themeObject } from '@app/styles/themes/themeVariables';

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
    color?: string;
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
  const { t } = useTranslation();

  const theme = useAppSelector((state) => state.theme.theme);

  const runAnimation = useCallback(() => {
    const countries = ['Finland', 'Germany', 'Iceland', 'Norway', 'United Kingdom'];
    const datasetWithFilters: DataRow[] = [];
    const seriesList: SeriesRow[] = [];

    countries.forEach((country) => {
      const datasetId = `dataset_${country}`;
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
          formatter: (params) => `${params.value[3]}: ${params.value[0]}`,
          color: themeObject[theme].textMain,
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
  }, [theme]);

  useEffect(() => {
    setTimeout(() => {
      runAnimation();
    }, 200);
  }, [runAnimation]);

  const option = {
    animationDuration: 10000,
    dataset: [
      {
        id: 'dataset_raw',
        source: rawData,
      },
      ...data,
    ],
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
      right: 150,
      top: 20,
      bottom: 30,
    },
    series: series,
  };

  return (
    <Card padding="0 0 1.875rem" title={t('charts.lineRace')}>
      <BaseChart option={option} height="24rem" />
    </Card>
  );
};
