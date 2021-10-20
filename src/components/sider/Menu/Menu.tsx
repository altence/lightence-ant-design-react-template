import React from 'react';
import { MenuItemProps } from 'antd';
import { Link } from 'react-router-dom';
import * as S from './Menu.styles';
import { BadgeType } from 'components/common/Badge/Badge';

interface MenuProps extends MenuItemProps {
  href: string;
  name: string;
  notificationsCount?: number;
  notificationsSeverity?: BadgeType;
}

export const Menu: React.FC<MenuProps> = ({
  icon,
  href,
  name,
  notificationsCount,
  notificationsSeverity,
  ...props
}) => {
  return (
    <S.MenuItem icon={icon} {...props}>
      <S.MenuContentWrapper>
        <Link to={href}>{name}</Link>
        <S.NotificationBadge size="small" severity={notificationsSeverity} count={notificationsCount} />
      </S.MenuContentWrapper>
    </S.MenuItem>
  );
};
