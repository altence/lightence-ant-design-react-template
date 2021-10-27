import React from 'react';
import { MenuItemProps, Menu, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import { Badge, BadgeType } from 'components/common/Badge/Badge';

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
      <Row gutter={[20, 20]} justify="space-between" align="middle">
        <Col flex={1}>
          <Link to={href}>{name}</Link>
        </Col>
        <Col>
          <Badge severity={notificationsSeverity} count={notificationsCount} />
        </Col>
      </Row>
    </Menu.Item>
  );
};
