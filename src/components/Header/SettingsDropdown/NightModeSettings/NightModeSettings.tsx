import React, { useContext } from 'react';
import { Switch } from 'antd';
import { TimePicker } from '../ThemePicker/AutoThemePicker/TimePicker/TimePicker';
import { useTranslation } from 'react-i18next';
import { NightModeContext } from '../../../../context/NightModeContext';

export const NightModeSettings: React.FC = () => {
  const { t } = useTranslation();
  const { isNightMode, setNightMode } = useContext(NightModeContext);

  return (
    <>
      <Switch
        defaultChecked={isNightMode}
        checkedChildren={t('header.nightModeOn')}
        unCheckedChildren={t('header.nightModeOff')}
        onChange={setNightMode}
      />
      {/*<TimePicker setNightTime={changeNightTime} />*/}
    </>
  );
};
