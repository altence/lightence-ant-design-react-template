import React from 'react';
import * as S from './MoonSunSwitch.styles';
import { MoonIcon } from '@app/components/common/icons/MoonIcon';
import { SunIcon } from '@app/components/common/icons/SunIcon';

interface MoonSunSwitchProps {
  isMoonActive: boolean;
  onClickMoon: () => void;
  onClickSun: () => void;
}

export const MoonSunSwitch: React.FC<MoonSunSwitchProps> = ({ isMoonActive, onClickMoon, onClickSun }) => {
  return (
    <S.ButtonGroup $isFirstActive={isMoonActive}>
      <S.Btn size="small" type="link" icon={<MoonIcon />} onClick={onClickMoon} />
      <S.Btn size="small" type="link" icon={<SunIcon />} onClick={onClickSun} />
    </S.ButtonGroup>
  );
};
