import React, { useState } from 'react';
import { Input } from 'antd';
import { FormItem } from '../../../ProfileForm.styles';
import { LinkOutlined } from '@ant-design/icons';

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
