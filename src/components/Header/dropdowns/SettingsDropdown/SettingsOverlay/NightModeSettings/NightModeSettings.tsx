import React, { useContext } from 'react';
import { NightModeContext } from 'context/NightModeContext';
import { NightTimePicker } from './NightTimePicker/NightTimePicker';
import { Switch } from '@app/components/common/Switch/Switch';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

export const NightModeSettings: React.FC = () => {
  const { isNightMode, setNightMode, nightTime, setNightTime } = useContext(NightModeContext);

  const handleChange = (checked: boolean) => {
    setNightMode(checked);
  };

  const { t } = useTranslation();

  return (
    <>
      <SwitchContainer>
        <span>{t('common.auto')}</span>
        <Switch checkedChildren="On" unCheckedChildren="Off" defaultChecked={isNightMode} onChange={handleChange} />
      </SwitchContainer>
      {isNightMode && <NightTimePicker nightTime={nightTime} setNightTime={setNightTime} />}
    </>
  );
};

export const SwitchContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
