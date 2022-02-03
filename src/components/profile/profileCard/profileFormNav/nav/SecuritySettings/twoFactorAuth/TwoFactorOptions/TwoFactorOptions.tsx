import React from 'react';
import { useTranslation } from 'react-i18next';
import { RadioChangeEvent } from 'antd';
import { Radio, RadioGroup } from '@app/components/common/Radio/Radio';
import { useAppSelector } from '@app/hooks/reduxHooks';
import { TwoFactorAuthOptionState } from '../TwoFactorAuth';

interface TwoFactorOptionsProps {
  selectedOption: TwoFactorAuthOptionState;
  setSelectedOption: (state: TwoFactorAuthOptionState) => void;
}

export const TwoFactorOptions: React.FC<TwoFactorOptionsProps> = ({ selectedOption, setSelectedOption }) => {
  const user = useAppSelector((state) => state.user.user);

  const { t } = useTranslation();

  const handleRadio = user?.twoFactorAuth.enabled
    ? () => null
    : (e: RadioChangeEvent) => setSelectedOption(e.target.value);

  return (
    <>
      <RadioGroup value={selectedOption} onChange={handleRadio}>
        <Radio value="phone">{t('common.phone')}</Radio>
        <Radio value="email">{t('common.email')}</Radio>
      </RadioGroup>
    </>
  );
};
