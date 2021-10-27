import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { SiderMenuLink } from './SiderMenuLink/SiderMenuLink';
import { navigation } from 'constants/navigation';
import { notificationsSeverities } from 'constants/notificationsSeverities';
import * as S from './SiderContent.styles';

interface SiderContentProps {
  toggleSider: () => void;
}

const SiderContent: React.FC<SiderContentProps> = ({ toggleSider }) => {
  const { t } = useTranslation();

  const location = useLocation();

  const getNotificationSeverity = (id: number) => notificationsSeverities.find((nf) => nf.id === id)?.name;

  const navMenu = useMemo(
    () =>
      navigation.map((nav, index) =>
        !nav.menus && nav.url ? (
          <SiderMenuLink
            key={index}
            icon={<nav.icon />}
            href={nav.url}
            name={t(nav.title)}
            isActive={nav.url === location.pathname}
            {...(nav.meta && {
              notificationsSeverity: getNotificationSeverity(nav.meta.notifications.severity),
              notificationsCount: nav.meta?.notifications.count,
            })}
          />
        ) : (
          <S.Submenu
            key={index}
            title={t(nav.title)}
            icon={<nav.icon />}
            isActive={nav.menus?.some((el) => el.url === location.pathname)}
          >
            {nav.menus?.map((menu, index) => (
              <SiderMenuLink
                key={`${nav.name}${index}`}
                name={t(menu.title)}
                href={menu.url}
                notificationsSeverity={getNotificationSeverity(menu.meta.notifications.severity)}
                notificationsCount={menu.meta.notifications.count}
                isActive={menu.url === location.pathname}
              />
            ))}
          </S.Submenu>
        ),
      ),
    [getNotificationSeverity],
  );

  return (
    <S.Menu mode="inline" onClick={toggleSider}>
      {navMenu}
    </S.Menu>
  );
};

export default SiderContent;
