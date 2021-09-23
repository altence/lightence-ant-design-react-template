import React, { useContext, useEffect, useState } from 'react';
import { Switch } from 'antd';
import { useTranslation } from 'react-i18next';
import { TimePicker } from './TimePicker/TimePicker';
import { ThemeSwitchContext } from '../../../../../context/ThemeSwitchContext';

export const AutoThemePicker: React.FC = () => {
  const { isAutoSwitchEnabled, changeAutoSwitchEnabled, changeNightTime } = useContext(ThemeSwitchContext);

  const [isEnabled, setEnabled] = useState(isAutoSwitchEnabled);

  const { t } = useTranslation();

  useEffect(() => {
    setEnabled(isAutoSwitchEnabled);
  }, [isAutoSwitchEnabled]);

  const handleSwitch = (value: boolean) => {
    changeAutoSwitchEnabled(value);

    localStorage.setItem('autoChange', JSON.stringify(value));
  };

  return (
    <>
      <Switch
        checked={isEnabled}
        checkedChildren={t('header.autoChangeOn')}
        unCheckedChildren={t('header.autoChangeOff')}
        onChange={handleSwitch}
      />
      <TimePicker setNightTime={changeNightTime} />
    </>
  );
};
