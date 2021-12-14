import React from 'react';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import * as S from './MonthSwitch.styles';
import { AppDate, Dates } from 'constants/Dates';

interface MonthSwitchProps {
  date: AppDate;
  onIncrease: () => void;
  onDecrease: () => void;
}

export const MonthSwitch: React.FC<MonthSwitchProps> = ({ date, onIncrease, onDecrease }) => {
  return (
    <S.MonthSwitch>
      <LeftOutlined onClick={onDecrease} />
      <S.Text>{Dates.format(date, 'MMMM YYYY')}</S.Text>
      <RightOutlined onClick={onIncrease} />
    </S.MonthSwitch>
  );
};
