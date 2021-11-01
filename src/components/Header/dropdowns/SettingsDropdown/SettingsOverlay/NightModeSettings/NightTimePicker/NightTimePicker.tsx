import { Space } from 'antd';
import React from 'react';
import { TimeRangePicker } from 'components/common/pickers/TimeRangePicker';
import * as S from './NightTimePicker.styles';
import { useTranslation } from 'react-i18next';

interface NightTimePickerProps {
  nightTime: number[];
  setNightTime: (nightTime: number[]) => void;
}

export const NightTimePicker: React.FC<NightTimePickerProps> = ({ nightTime, setNightTime }) => {
  const { t } = useTranslation();

  return (
    <>
      <Space size={[50, 20]}>
        <S.PickerLabel>{t('header.nightMode.from')}</S.PickerLabel>
        <S.PickerLabel>{t('header.nightMode.to')}</S.PickerLabel>
      </Space>
      <TimeRangePicker timeRange={nightTime} setTimeRange={setNightTime} />
    </>
  );
};
