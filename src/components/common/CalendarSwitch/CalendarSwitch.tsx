import React from 'react';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import * as S from './CalendarSwitch.styles';
import { BaseButton } from '../BaseButton/BaseButton';
import { useTranslation } from 'react-i18next';

export interface CalendarSwitchProps {
  dateFormatted: string;
  onIncrease: () => void;
  onDecrease: () => void;
  onToday: () => void;
}

export const CalendarSwitch: React.FC<CalendarSwitchProps> = ({ dateFormatted, onIncrease, onDecrease, onToday }) => {
  const { t } = useTranslation();

  return (
    <S.CalendarSwitch>
      <S.Text>{dateFormatted}</S.Text>
      <S.ButtonGroup>
        <BaseButton type="text" onClick={onDecrease} size="small">
          <LeftOutlined />
        </BaseButton>
        <BaseButton type="text" onClick={onToday} size="small">
          {t('common.today').toUpperCase()}
        </BaseButton>
        <BaseButton type="text" onClick={onIncrease} size="small">
          <RightOutlined />
        </BaseButton>
      </S.ButtonGroup>
    </S.CalendarSwitch>
  );
};
