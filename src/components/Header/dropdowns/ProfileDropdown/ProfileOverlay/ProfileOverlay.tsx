import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { DropdownMenu } from 'components/Header/Header.styles';
import { H3 } from 'components/common/typography/H3/H3';

export const ProfileOverlay: React.FC = () => {
  const { t } = useTranslation();

  return (
    <DropdownMenu>
      <Menu.Item>
        <H3>
          <Link to="/profile">{t('profile.title')}</Link>
        </H3>
      </Menu.Item>
      <Menu.Item>
        <H3>
          <Link to="/logout">{t('header.logout')}</Link>
        </H3>
      </Menu.Item>
    </DropdownMenu>
  );
};
