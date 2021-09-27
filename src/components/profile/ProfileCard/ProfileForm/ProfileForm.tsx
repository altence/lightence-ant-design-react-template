import { Form } from 'antd';
import React, { useState } from 'react';
import { Card } from 'src/components/common/Card/Card';
import { ButtonsGroup } from './ButtonsGroup/ButtonsGroup';
import { Notifications } from './Notifications/Notifications';
import { Payments } from './Payments/Payments';
import { PersonalInfo } from './PersonalInfo/PersonalInfo';
import { SecuritySettings } from './SecuritySettings/SecuritySettings';

interface ProfileFormProps {
  menu: string;
  setCurrentMenu: (state: string) => void;
}

export const ProfileForm: React.FC<ProfileFormProps> = ({ menu, setCurrentMenu }) => {
  const [isFieldsChange, setFieldsChange] = useState(false);

  let currentMenu;

  const onFinish = (values: []) => {
    console.log(values);
  };

  switch (menu) {
    case 'info': {
      currentMenu = <PersonalInfo />;
      break;
    }

    case 'security': {
      currentMenu = <SecuritySettings />;
      break;
    }

    case 'notifications': {
      currentMenu = <Notifications />;
      break;
    }

    case 'payments': {
      currentMenu = <Payments />;
      break;
    }

    default: {
      currentMenu = null;
    }
  }

  return (
    <Card padding="1.875rem 1rem">
      <Form name={menu} layout="vertical" onFinish={onFinish} onFieldsChange={() => setFieldsChange(true)}>
        {currentMenu}
        {isFieldsChange && <ButtonsGroup setCurrentMenu={setCurrentMenu} />}
      </Form>
    </Card>
  );
};
