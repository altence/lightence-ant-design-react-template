import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { DropdownMenu } from 'components/Header/Header.styles';
import * as S from './ProfileOverlay.styles';

export const ProfileOverlay: React.FC = () => {
  const { t } = useTranslation();

  return (
    <DropdownMenu>
      <Menu.Item>
        <S.Text>
          <Link to="/profile">{t('profile.title')}</Link>
        </S.Text>
      </Menu.Item>
      <Menu.Item>
        <S.Text>
          <Link to="/logout">{t('header.logout')}</Link>
        </S.Text>
      </Menu.Item>
    </DropdownMenu>
  );
};
