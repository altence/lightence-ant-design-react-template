import { FC } from 'react';
import type { CalendarProps } from 'antd';
import type { Dayjs } from 'dayjs';
import * as S from './BaseCalendar.styles';

export type BaseCalendarProps = CalendarProps<Dayjs>;

export const BaseCalendar: FC<BaseCalendarProps> = (props) => {
  return <S.Calendar {...props} />;
};
