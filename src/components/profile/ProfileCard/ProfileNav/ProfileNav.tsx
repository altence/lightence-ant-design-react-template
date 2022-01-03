import React from 'react';
import { useTranslation } from 'react-i18next';
import { profileNavData } from '@app/constants/profileNavData';
import { useLocation, useNavigate } from 'react-router-dom';
import * as S from './ProfileNav.styles';

export const ProfileNav: React.FC = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();
  const location = useLocation();

  return (
    <S.Wrapper>
      {profileNavData.map((item) => (
        <S.Btn
          key={item.id}
          icon={<item.Icon />}
          type="text"
          color={item.color}
          onClick={() => navigate(item.href)}
          isActive={`/profile/${item.href}` === location.pathname}
        >
          {t(item.name)}
        </S.Btn>
      ))}
    </S.Wrapper>
  );
};
