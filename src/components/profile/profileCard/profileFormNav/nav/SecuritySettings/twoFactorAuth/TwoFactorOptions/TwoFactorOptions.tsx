import React, { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { RadioGroup } from '@app/components/common/Radio/Radio';
import { EmailItem } from '@app/components/profile/profileCard/profileFormNav/nav/PersonalInfo/EmailItem/EmailItem';
import { PhoneItem } from '@app/components/profile/profileCard/profileFormNav/nav/PersonalInfo/PhoneItem/PhoneItem';
import { useAppSelector } from '@app/hooks/reduxHooks';
import { TwoFactorAuthOption } from '@app/interfaces/interfaces';
import { TwoFactorAuthOptionState } from '../TwoFactorAuth';
import * as S from './TwoFactorOptions.styles';

interface TwoFactorOptionsProps {
  selectedOption: TwoFactorAuthOptionState;
  setSelectedOption: (state: TwoFactorAuthOptionState) => void;
}

export const TwoFactorOptions: React.FC<TwoFactorOptionsProps> = ({ selectedOption, setSelectedOption }) => {
  const user = useAppSelector((state) => state.user.user);

  const { t } = useTranslation();

  const { isEmailActive, isPhoneActive } = useMemo(
    () => ({
      isPhoneActive: selectedOption === 'phone',
      isEmailActive: selectedOption === 'email',
    }),
    [selectedOption],
  );

  const onClickInput = useCallback(
    (mode: TwoFactorAuthOption) => () => {
      setSelectedOption(mode);
    },
    [setSelectedOption],
  );

  return (
    <>
      <RadioGroup
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
        disabled={user?.twoFactorAuth.enabled}
      >
        <S.RadioBtn value="phone" $isActive={isPhoneActive}>
          <PhoneItem
            required={isPhoneActive}
            onClick={onClickInput('phone')}
            isSuccess={user?.twoFactorAuth.type === 'phone'}
            successText={t('common.enabled')}
            inputProps={{
              disabled: true,
            }}
          />
        </S.RadioBtn>
        <S.RadioBtn value="email" $isActive={isEmailActive}>
          <EmailItem
            required={isEmailActive}
            onClick={onClickInput('email')}
            isSuccess={user?.twoFactorAuth.type === 'email'}
            successText={t('common.enabled')}
            inputProps={{
              disabled: true,
            }}
          />
        </S.RadioBtn>
      </RadioGroup>
    </>
  );
};
