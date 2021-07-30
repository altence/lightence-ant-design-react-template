import React from 'react';
import { Select } from './Select';
import { dates } from '../../constants/dates';

const months = dates.getMonths();

export const MonthSelect: React.FC = () => {
  return <Select options={months} defaultValue="Month" />;
};
