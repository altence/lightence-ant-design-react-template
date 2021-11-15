import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { SiderMenuLink } from './SiderMenuLink/SiderMenuLink';
import * as S from './SiderContent.styles';
import { sidebarNavigation } from './sidebarNavigation';

interface SiderContentProps {
  toggleSider: () => void;
}

const SiderContent: React.FC<SiderContentProps> = ({ toggleSider }) => {
  const { t } = useTranslation();

  const location = useLocation();

  const navigationMenu = useMemo(
    () =>
      sidebarNavigation.map((nav, index) =>
        nav.children && nav.children.length > 0 ? (
          <S.Submenu
            key={index}
            title={t(nav.title)}
            icon={nav.icon}
            isActive={nav.children.some((child) => child.url === location.pathname)}
          >
            {nav.children.map((childNav, index) => (
              <SiderMenuLink
                key={nav.title + index}
                href={childNav.url || ''}
                title={t(childNav.title)}
                isActive={childNav.url === location.pathname}
              />
            ))}
          </S.Submenu>
        ) : (
          <SiderMenuLink
            key={index}
            href={nav.url || ''}
            title={t(nav.title)}
            isActive={nav.url === location.pathname}
            icon={nav.icon}
          />
        ),
      ),
    [location.pathname],
  );

  return (
    <S.Menu mode="inline" onClick={toggleSider} selectable={false}>
      {navigationMenu}
    </S.Menu>
  );
};

export default SiderContent;
