import React, { useState } from 'react';
import { Radio } from 'antd';
import { EmailItem } from '../../../../PersonalInfo/EmailItem/EmailItem';
import { PhoneItem } from '../../../../PersonalInfo/PhoneItem/PhoneItem';
import * as S from './TwoFactorOptions.styles';

export const TwoFactorOptions: React.FC = () => {
  const [currentOption, setCurrentOption] = useState<number>(1);

  return (
    <Radio.Group value={currentOption} defaultValue={1} onChange={(event) => setCurrentOption(event.target.value)}>
      <S.RadioBtn value={1} isActive={currentOption === 1}>
        <PhoneItem required={currentOption === 1} onClick={() => setCurrentOption(1)} />
      </S.RadioBtn>
      <S.RadioBtn value={2} isActive={currentOption === 2}>
        <EmailItem required={currentOption === 2} onClick={() => setCurrentOption(2)} />
      </S.RadioBtn>
    </Radio.Group>
  );
};
