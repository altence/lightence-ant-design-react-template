import React from 'react';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import * as S from './CalendarSwitch.styles';
import { Button } from '../buttons/Button/Button';
import { useTranslation } from 'react-i18next';

interface MonthSwitchProps {
  dateFormatted: string;
  onIncrease: () => void;
  onDecrease: () => void;
  onToday: () => void;
}

export const CalendarSwitch: React.FC<MonthSwitchProps> = ({ dateFormatted, onIncrease, onDecrease, onToday }) => {
  const { t } = useTranslation();

  return (
    <S.CalendarSwitch>
      <S.Text>{dateFormatted}</S.Text>
      <S.ButtonGroup>
        <Button type="text" onClick={onDecrease} size="small">
          <LeftOutlined />
        </Button>
        <Button type="text" onClick={onToday} size="small">
          {t('common.today').toUpperCase()}
        </Button>
        <Button type="text" onClick={onIncrease} size="small">
          <RightOutlined />
        </Button>
      </S.ButtonGroup>
    </S.CalendarSwitch>
  );
};
