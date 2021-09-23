import React from 'react';
import dayjsGenerateConfig from 'rc-picker/lib/generate/dayjs';
import generatePicker from 'antd/es/date-picker/generatePicker';
import { AppDate, Dates } from '../../../../../../constants/Dates';
import { initialNightTime } from '../../../../../../constants/initialNightTime';

const DatePicker = generatePicker<AppDate>(dayjsGenerateConfig);

interface TimePickerProps {
  setNightTime: (state: AppDate[]) => void;
}

export const TimePicker: React.FC<TimePickerProps> = ({ setNightTime }) => {
  const localNightTime = localStorage.getItem('nightTime');

  const handleChange = (dates: any) => {
    const nightTime = [dates[0], dates[1]];

    setNightTime(nightTime);

    localStorage.setItem('nightTime', JSON.stringify(nightTime));
  };

  return (
    <DatePicker.RangePicker
      value={(localNightTime && JSON.parse(localNightTime).map((el: string) => Dates.getDate(el))) || initialNightTime}
      picker="time"
      format="HH:mm"
      onChange={handleChange}
      allowClear={false}
    />
  );
};
