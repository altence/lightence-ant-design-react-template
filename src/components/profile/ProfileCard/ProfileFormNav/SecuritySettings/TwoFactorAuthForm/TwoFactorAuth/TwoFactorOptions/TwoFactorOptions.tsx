import React, { useState } from 'react';
import { Radio } from 'antd';
import { EmailItem } from '../../../../PersonalInfo/EmailItem/EmailItem';
import { PhoneItem } from '../../../../PersonalInfo/PhoneItem/PhoneItem';
import * as S from './TwoFactorOptions.styles';

export const TwoFactorOptions: React.FC = () => {
  const [currentOption, setCurrentOption] = useState<number>(1);

  return (
    <Radio.Group defaultValue={1} onChange={(event) => setCurrentOption(event.target.value)}>
      <S.RadioBtn value={1} isActive={currentOption === 1}>
        <PhoneItem />
      </S.RadioBtn>
      <S.RadioBtn value={2} isActive={currentOption === 2}>
        <EmailItem />
      </S.RadioBtn>
    </Radio.Group>
  );
};
