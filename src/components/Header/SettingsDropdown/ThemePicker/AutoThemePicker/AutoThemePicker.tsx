import React, { useContext, useEffect, useState } from 'react';
import { Switch } from 'antd';
import { useTranslation } from 'react-i18next';
import { TimePicker } from './TimePicker/TimePicker';
import { ThemeContext } from '../../../../../context/ThemeContext';

export const AutoThemePicker: React.FC = () => {
  return <div>123</div>;
  // const { isAutoSwitchEnabled, changeAutoSwitchEnabled, changeNightTime } = useContext(ThemeContext);
  //
  // const [isEnabled, setEnabled] = useState(isAutoSwitchEnabled);
  //
  // const { t } = useTranslation();
  //
  // useEffect(() => {
  //   setEnabled(isAutoSwitchEnabled);
  // }, [isAutoSwitchEnabled]);
  //
  // const handleSwitch = (value: boolean) => {
  //   changeAutoSwitchEnabled(value);
  //
  //   localStorage.setItem('autoChange', JSON.stringify(value));
  // };
  //
  // return (
  //   <>
  //     <Switch
  //       checked={isEnabled}
  //       checkedChildren={t('header.autoChangeOn')}
  //       unCheckedChildren={t('header.autoChangeOff')}
  //       onChange={handleSwitch}
  //     />
  //     <TimePicker setNightTime={changeNightTime} />
  //   </>
  // );
};
