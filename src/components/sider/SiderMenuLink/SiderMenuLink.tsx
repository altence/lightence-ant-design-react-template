import React from 'react';
import { MenuItemProps, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import { Badge, BadgeType } from 'components/common/Badge/Badge';
import * as S from './SiderMenuLink.styles';

interface SiderMenuLinkProps extends MenuItemProps {
  href: string;
  name: string;
  notificationsCount?: number;
  notificationsSeverity?: BadgeType;
  isActive: boolean;
}

export const SiderMenuLink: React.FC<SiderMenuLinkProps> = ({
  icon,
  href,
  name,
  notificationsCount,
  notificationsSeverity,
  isActive,
  ...props
}) => (
  <Link to={href}>
    <S.MenuItem icon={icon} {...props} isActive={isActive}>
      <Row gutter={[20, 20]} justify="space-between" align="middle">
        <Col flex={1}>{name}</Col>
        {!!notificationsCount && (
          <Col>
            <Badge severity={notificationsSeverity} count={notificationsCount} />
          </Col>
        )}
      </Row>
    </S.MenuItem>
  </Link>
);
