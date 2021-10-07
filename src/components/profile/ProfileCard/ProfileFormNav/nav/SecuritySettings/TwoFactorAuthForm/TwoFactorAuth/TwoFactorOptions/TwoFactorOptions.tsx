import React, { useCallback, useEffect, useState } from 'react';
import { Radio, FormInstance } from 'antd';
import { EmailItem } from '../../../../PersonalInfo/EmailItem/EmailItem';
import { PhoneItem } from '../../../../PersonalInfo/PhoneItem/PhoneItem';
import * as S from './TwoFactorOptions.styles';

export const TwoFactorOptions: React.FC<{ form: FormInstance }> = ({ form }) => {
  const [currentOption, setCurrentOption] = useState<string>('phone');

  const onChange = useCallback(
    (event) => {
      setCurrentOption(event.target.value);
    },
    [setCurrentOption],
  );

  const onClickInput = useCallback(
    (mode: string) => () => {
      setCurrentOption(mode);
    },
    [setCurrentOption],
  );

  useEffect(() => {
    form.setFieldsValue({
      email: '',
      phone: '',
    });
  }, [currentOption]);

  return (
    <>
      <Radio.Group value={currentOption} defaultValue={1} onChange={onChange}>
        <S.RadioBtn value="phone" isActive={currentOption === 'phone'}>
          <PhoneItem required={currentOption === 'phone'} onClick={onClickInput('phone')} />
        </S.RadioBtn>
        <S.RadioBtn value="email" isActive={currentOption === 'email'}>
          <EmailItem required={currentOption === 'email'} onClick={onClickInput('email')} />
        </S.RadioBtn>
      </Radio.Group>
    </>
  );
};
