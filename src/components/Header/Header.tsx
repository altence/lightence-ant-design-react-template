import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { useTranslation } from 'react-i18next';
import hamburgerIcon from '../../assets/icons/hamburger.svg';
import { SearchDropdown } from './SearchDropdown/SearchDropdown';
import { ProfileDropdown } from './ProfileDropdown/ProfileDropdown';
import { NotificationDropdown } from './NotificationDropdown/NotificationDropdown';
import { SettingsDropdown } from './SettingsDropdown/SettingsDropdown';
import { useResponsive } from 'hooks/useResponsive';
import * as S from './Header.styles';
import { Button } from 'components/common/buttons/Button/Button';

const hamburger = <img src={hamburgerIcon} alt="Toggle Sider" />;

interface HeaderProps {
  toggleSider?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ toggleSider }) => {
  const { mobileOnly } = useResponsive();
  const { t } = useTranslation();

  return (
    <S.Wrapper>
      <S.TopWrapper>
        {mobileOnly && (
          <S.MenuWrapper>
            <Button type="text" size="small" icon={hamburger} onClick={toggleSider} />
          </S.MenuWrapper>
        )}

        <SearchDropdown />

        <S.ButtonsWrapper>
          <ProfileDropdown />
          <NotificationDropdown />
          <SettingsDropdown />
        </S.ButtonsWrapper>
      </S.TopWrapper>

      {/* <S.BottomWrapper>
        <S.Title>{t('dashboard.title')}</S.Title>
        <ExportDropdown />
      </S.BottomWrapper> */}
    </S.Wrapper>
  );
};
