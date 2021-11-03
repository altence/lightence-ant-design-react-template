import React from 'react';
import { MenuItemProps, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import { Badge } from 'components/common/Badge/Badge';
import { NotificationType } from 'components/common/Notification/Notification';
import * as S from './SiderMenuLink.styles';

interface SiderMenuLinkProps extends MenuItemProps {
  href: string;
  name: string;
  notificationsCount?: number;
  notificationsSeverity?: NotificationType;
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
  <S.MenuItem icon={icon} {...props} isActive={isActive}>
    <Link to={href}>
      <Row gutter={[20, 20]} justify="space-between" align="middle">
        <Col flex={1}>{name}</Col>
        {!!notificationsCount && (
          <Col>
            <Badge severity={notificationsSeverity} count={notificationsCount} />
          </Col>
        )}
      </Row>
    </Link>
  </S.MenuItem>
);
