import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import * as S from './ProfileOverlay.styles';
import { DropdownMenu } from '@app/components/header/Header/Header.styles';

export const ProfileOverlay: React.FC = ({ ...props }) => {
  const { t } = useTranslation();

  return (
    <DropdownMenu selectable={false} {...props}>
      <S.MenuItem key={0}>
        <S.Text>
          <Link to="/profile">{t('profile.title')}</Link>
        </S.Text>
      </S.MenuItem>
      <S.ItemsDivider />
      <S.MenuItem key={1}>
        <S.Text>
          <Link to="/logout">{t('header.logout')}</Link>
        </S.Text>
      </S.MenuItem>
    </DropdownMenu>
  );
};
