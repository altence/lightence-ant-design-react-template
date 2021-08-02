import React from 'react';
import { Select } from '../../../components/common/Select';

const options: string[] = [
  'Statistics item',
  'Statistics item',
  'Statistics item',
  'Statistics item',
  'Statistics item',
];

export const ScreeningsChartSelect: React.FC = () => {
  return <Select options={options} defaultValue="Statistics" />;
};
