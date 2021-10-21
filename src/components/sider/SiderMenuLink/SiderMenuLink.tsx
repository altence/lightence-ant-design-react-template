import React from 'react';
import { MenuItemProps, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { Badge, BadgeType } from 'components/common/Badge/Badge';
import * as S from './SiderMenuLink.styles';

interface SiderMenuLinkProps extends MenuItemProps {
  href: string;
  name: string;
  notificationsCount?: number;
  notificationsSeverity?: BadgeType;
}

export const SiderMenuLink: React.FC<SiderMenuLinkProps> = ({
  icon,
  href,
  name,
  notificationsCount,
  notificationsSeverity,
  ...props
}) => {
  return (
    <Menu.Item icon={icon} {...props}>
      <S.MenuContentWrapper>
        <Link to={href}>{name}</Link>
        <Badge severity={notificationsSeverity} count={notificationsCount} />
      </S.MenuContentWrapper>
    </Menu.Item>
  );
};
