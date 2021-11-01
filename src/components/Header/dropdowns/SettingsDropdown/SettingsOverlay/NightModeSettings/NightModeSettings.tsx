import React, { useContext } from 'react';
import { NightModeContext } from 'context/NightModeContext';
import { MoonIcon } from 'components/common/icons/MoonIcon';
import { SunIcon } from 'components/common/icons/SunIcon';
import { NightTimePicker } from './NightTimePicker/NightTimePicker';
import * as S from './NightModeSettings.styles';

export const NightModeSettings: React.FC = () => {
  const { isNightMode, setNightMode, nightTime, setNightTime } = useContext(NightModeContext);

  return (
    <>
      <S.ButtonGroup isNightMode={isNightMode}>
        <S.Btn size="small" type="link" icon={<MoonIcon />} onClick={() => setNightMode(true)} />
        <S.Btn size="small" type="link" icon={<SunIcon />} onClick={() => setNightMode(false)} />
      </S.ButtonGroup>

      {isNightMode && <NightTimePicker nightTime={nightTime} setNightTime={setNightTime} />}
    </>
  );
};
