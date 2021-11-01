import React, { useMemo } from 'react';
import { LocalizedDatePicker } from './LocalizedDatePicker';
import { AppDate, Dates } from 'constants/Dates';
import { notification } from 'antd';
import { useTranslation } from 'react-i18next';

const clearDate = Dates.getToday().hour(0).minute(0).second(0).millisecond(0);
const clearDateMs = +clearDate;

interface TimePickerProps {
  timeRange: number[];
  setTimeRange: (timeRange: number[]) => void;
}

export const TimeRangePicker: React.FC<TimePickerProps> = ({ timeRange, setTimeRange }) => {
  const { t } = useTranslation();

  const timeRangePrepared = useMemo(() => timeRange.map((time) => clearDate.add(time)), [timeRange]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onChange = (timeRange: any) => {
    const timeRangeSinceTodayMs = timeRange
      .map((time: AppDate) => time.subtract(clearDateMs, 'ms'))
      .map((time: AppDate) => +time);

    setTimeRange(timeRangeSinceTodayMs);

    notification.open({ message: t('common.saved') });
  };

  return (
    <LocalizedDatePicker.RangePicker
      value={[timeRangePrepared[0], timeRangePrepared[1]]}
      picker="time"
      format="HH:mm"
      onChange={onChange}
      allowClear={false}
      order={false}
    />
  );
};
