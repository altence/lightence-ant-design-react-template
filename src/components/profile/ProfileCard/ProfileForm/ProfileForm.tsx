import React, { useState } from 'react';
import { Form } from 'antd';
import { ButtonsGroup } from './ButtonsGroup/ButtonsGroup';

interface ProfileFormProps {
  menu: string;
  setCurrentMenu: (state: string) => void;
}

export const ProfileForm: React.FC<ProfileFormProps> = ({ menu, setCurrentMenu, children }) => {
  const [isFieldsChange, setFieldsChange] = useState(false);

  const onFinish = (values: []) => {
    console.log(values);
  };

  return (
    <Form name={menu} layout="vertical" onFinish={onFinish} onFieldsChange={() => setFieldsChange(true)}>
      {children}
      {isFieldsChange && <ButtonsGroup setCurrentMenu={setCurrentMenu} />}
    </Form>
  );
};
