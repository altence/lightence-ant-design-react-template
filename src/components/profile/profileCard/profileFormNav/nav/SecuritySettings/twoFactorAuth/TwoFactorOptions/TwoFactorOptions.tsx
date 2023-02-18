import React, { useCallback, useEffect, useMemo } from 'react';
import { BaseRadio } from '@app/components/common/BaseRadio/BaseRadio';
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

  useEffect(() => {
    if (user?.email.verified && user?.phone.verified) {
      setSelectedOption(null);
    }
  }, [setSelectedOption, user?.email.verified, user?.phone.verified]);

  return (
    <>
      <BaseRadio.Group value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
        <S.RadioBtn value="phone" $isActive={isPhoneActive} disabled={user?.phone.verified}>
          <PhoneItem required={isPhoneActive} onClick={onClickInput('phone')} verified={user?.phone.verified} />
        </S.RadioBtn>
        <S.RadioBtn value="email" $isActive={isEmailActive} disabled={user?.email.verified}>
          <EmailItem required={isEmailActive} onClick={onClickInput('email')} verified={user?.email.verified} />
        </S.RadioBtn>
      </BaseRadio.Group>
    </>
  );
};
