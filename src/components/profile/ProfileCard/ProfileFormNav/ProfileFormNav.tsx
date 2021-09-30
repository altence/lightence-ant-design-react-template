import React from 'react';
import { Card } from 'components/common/Card/Card.styles';
import { ProfileForm } from '../ProfileForm/ProfileForm';
import { Notifications } from './Notifications/Notifications';
import { Payments } from './Payments/Payments';
import { PersonalInfo } from './PersonalInfo/PersonalInfo';
import { SecuritySettings } from './SecuritySettings/SecuritySettings';

interface ProfileFormNavProps {
  menu: string;
  setCurrentMenu: (state: string) => void;
}

export const ProfileFormNav: React.FC<ProfileFormNavProps> = ({ menu, setCurrentMenu }) => {
  let currentMenu;

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

  return menu === 'payments' ? (
    currentMenu
  ) : (
    <Card padding="1.875rem 1rem">
      {menu === 'security' ? (
        currentMenu
      ) : (
        <ProfileForm menu={menu} setCurrentMenu={setCurrentMenu}>
          {currentMenu}
        </ProfileForm>
      )}
    </Card>
  );
};
