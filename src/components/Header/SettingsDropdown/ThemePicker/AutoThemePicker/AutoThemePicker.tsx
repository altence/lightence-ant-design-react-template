import React, { useContext, useEffect, useState } from 'react';
import { Switch } from 'antd';
import { ThemeSwitchContext } from '../../../../../context/ThemeSwitchContext';
import { TimePicker } from './TimePicker/TimePicker';

export const AutoThemePicker: React.FC = () => {
  const { isAutoSwitchEnabled, changeAutoSwitchEnabled, changeNightTime } = useContext(ThemeSwitchContext);

  const [isEnabled, setEnabled] = useState(isAutoSwitchEnabled);

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
        checkedChildren="Auto change enabled"
        unCheckedChildren="Auto change disabled"
        onChange={handleSwitch}
      />
      <TimePicker setNightTime={changeNightTime} />
    </>
  );
};
