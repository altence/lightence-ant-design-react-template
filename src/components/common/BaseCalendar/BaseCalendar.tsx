import type { Calendar } from 'antd';
import * as S from './BaseCalendar.styles';

export type BaseCalendarProps = React.ComponentProps<typeof Calendar>;

export const BaseCalendar: React.FC<BaseCalendarProps> = (props) => {
  return <S.Calendar {...props} />;
};
