import React from 'react';
import { Select } from './Select';
import { Dates } from '../../constants/dates';

const months = Dates.getMonths();

export const MonthSelect: React.FC = () => {
  return <Select options={months} defaultValue="Month" />;
};
