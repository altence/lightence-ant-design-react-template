import { ComponentProps, FC } from 'react';
import type { Calendar } from 'antd';
import * as S from './BaseCalendar.styles';

export type BaseCalendarProps = ComponentProps<typeof Calendar>;

export const BaseCalendar: FC<BaseCalendarProps> = (props) => {
  return <S.Calendar {...props} />;
};
