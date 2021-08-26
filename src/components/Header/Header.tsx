import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { Button } from 'antd';
import hamburgerIcon from '../../assets/icons/hamburger.svg';
import theme from '../../styles/theme';
import { SearchDropdown } from './SearchDropdown/SearchDropdown';
import { ProfileDropdown } from './ProfileDropdown/ProfileDropdown';
import { NotificationDropdown } from './NotificationDropdown/NotificationDropdown';
import { SettingsDropdown } from './SettingsDropdown/SettingsDropdown';
import { ExportDropdown } from './ExportDropdown/ExportDropdown';
import * as S from './Header.styles';

const hamburger = <img src={hamburgerIcon} alt="Toggle Sider" />;

interface HeaderProps {
  toggleSider?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ toggleSider }) => {
  const isTablet = useMediaQuery({ query: theme.media.md });

  return (
    <S.Wrapper>
      <S.TopWrapper>
        {!isTablet && (
          <S.MenuWrapper>
            <Button size="small" type="text" icon={hamburger} onClick={toggleSider} />
          </S.MenuWrapper>
        )}

        <SearchDropdown />

        <S.ButtonsWrapper>
          <ProfileDropdown />
          <NotificationDropdown />
          <SettingsDropdown />
        </S.ButtonsWrapper>
      </S.TopWrapper>

      <S.BottomWrapper>
        <S.Title>Dashboard</S.Title>
        <ExportDropdown />
      </S.BottomWrapper>
    </S.Wrapper>
  );
};
