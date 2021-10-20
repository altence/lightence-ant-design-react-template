import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu } from './Menu/Menu';
import { navigation } from 'constants/navigation';
import { notificationsSeverities } from 'constants/notificationsSeverities';
import * as S from './SiderContent.styles';

const SiderContent: React.FC = () => {
  const { t } = useTranslation();

  const notificationSeverity = useMemo(
    () => (id: number) => notificationsSeverities.find((nf) => nf.id === id)?.name,
    [],
  );

  return (
    <S.Menu mode="inline">
      {navigation.map((nav, index) =>
        nav.url ? (
          <Menu
            key={index}
            icon={<nav.icon />}
            href={nav.url}
            name={t(nav.name)}
            notificationsCount={nav.meta?.notifications.count}
            {...(nav.meta && { notificationsSeverity: notificationSeverity(nav.meta.notifications.severity) })}
          />
        ) : (
          <S.Submenu key={index} title={t(nav.name)} icon={<nav.icon />}>
            {nav.menus?.map((menu, index) => (
              <Menu
                key={index}
                name={t(menu.name)}
                href={menu.url}
                notificationsSeverity={notificationSeverity(menu.meta.notifications.severity)}
                notificationsCount={menu.meta.notifications.count}
              />
            ))}
          </S.Submenu>
        ),
      )}
    </S.Menu>
  );
};

export default SiderContent;
