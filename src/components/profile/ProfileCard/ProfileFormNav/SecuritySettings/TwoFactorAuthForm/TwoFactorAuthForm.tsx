import React, { useState } from 'react';
import { Form } from 'antd';
import { TwoFactorAuth } from './TwoFactorAuth/TwoFactorAuth';
import { TwoFactorOptions } from './TwoFactorAuth/TwoFactorOptions/TwoFactorOptions';
import { LinkBtn } from 'components/common/LinkBtn/LinkBtn';

export const TwoFactorAuthForm: React.FC = () => {
  const [isFieldsChange, setFieldsChange] = useState(false);
  const [isEnabled, setEnabled] = useState(false);

  return (
    <>
      <TwoFactorAuth setEnabled={setEnabled} />
      {isEnabled && (
        <Form
          name="twoFactorAuthForm"
          onFinish={(values) => console.log(values)}
          onFieldsChange={() => setFieldsChange(true)}
        >
          <TwoFactorOptions />
          {isFieldsChange && <LinkBtn htmlType="submit">Verify</LinkBtn>}
        </Form>
      )}
    </>
  );
};
