import React, { useState } from 'react';
import { Input } from 'components/common/inputs/Input/Input';
import { LinkOutlined } from '@ant-design/icons';
import { FormItem } from 'components/profile/ProfileCard/ProfileFormNav/ProfileForm/ProfileForm.styles';

interface InputItemProps {
  name: string;
  Addon: React.FC;
}

export const InputItem: React.FC<InputItemProps> = ({ name, Addon }) => {
  const [isLinked] = useState(true);

  return (
    <FormItem name={name}>
      <Input addonBefore={<Addon />} addonAfter={isLinked && <LinkOutlined />} />
    </FormItem>
  );
};
