import React from 'react';
import { AppDate } from '../../../../../../constants/Dates';
import dayjsGenerateConfig from 'rc-picker/lib/generate/dayjs';
import generatePicker from 'antd/es/date-picker/generatePicker';

const DatePicker = generatePicker<AppDate>(dayjsGenerateConfig);

interface TimePickerProps {
  setNightTime: any;
}

export const TimePicker: React.FC<TimePickerProps> = ({ setNightTime }) => {
  const handleChange = (dates: any) => {
    const nightTime = [dates[0].hour(), dates[1].hour()];

    setNightTime(nightTime);

    localStorage.setItem('nightTime', JSON.stringify(nightTime));
  };

  return <DatePicker.RangePicker picker="time" format="HH" onChange={handleChange} />;
};
