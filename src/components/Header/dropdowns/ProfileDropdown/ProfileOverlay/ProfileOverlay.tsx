import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import * as S from './ProfileOverlay.styles';

export const ProfileOverlay: React.FC = ({ ...props }) => {
  const { t } = useTranslation();

  return (
    <S.ProfileDropdownOverlay selectable={false} {...props}>
      <Menu.Item key={0}>
        <S.Text>
          <Link to="/profile">{t('profile.title')}</Link>
        </S.Text>
      </Menu.Item>
      <S.ItemsDivider />
      <Menu.Item key={1}>
        <S.Text>
          <Link to="/logout">{t('header.logout')}</Link>
        </S.Text>
      </Menu.Item>
    </S.ProfileDropdownOverlay>
  );
};
