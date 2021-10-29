import React, { useContext } from 'react';
import { Switch } from 'antd';
import { TimeRangePicker } from 'components/common/pickers/TimeRangePicker';
import { useTranslation } from 'react-i18next';
import { NightModeContext } from 'context/NightModeContext';

export const NightModeSettings: React.FC = () => {
  const { t } = useTranslation();
  const { isNightMode, setNightMode, nightTime, setNightTime } = useContext(NightModeContext);

  return (
    <>
      <Switch
        defaultChecked={isNightMode}
        checkedChildren={t('header.nightModeOn')}
        unCheckedChildren={t('header.nightModeOff')}
        onChange={setNightMode}
      />
      <TimeRangePicker timeRange={nightTime} setTimeRange={setNightTime} />
    </>
  );
};
