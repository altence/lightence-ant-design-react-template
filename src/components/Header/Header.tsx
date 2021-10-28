import React from 'react';
import { Col, Row } from 'antd';
import { SearchDropdown } from './SearchDropdown/SearchDropdown';
import { ProfileDropdown } from './ProfileDropdown/ProfileDropdown';
import { NotificationDropdown } from './NotificationDropdown/NotificationDropdown';
import { SettingsDropdown } from './SettingsDropdown/SettingsDropdown';
import { Burger } from 'components/common/Burger/Burger';
import { useResponsive } from 'hooks/useResponsive';

interface HeaderProps {
  toggleSider?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ toggleSider }) => {
  const { mobileOnly } = useResponsive();

  return (
    <Row gutter={[20, 20]} align="middle" justify="space-between">
      <Col>
        <Row gutter={[30, 30]} align="middle">
          <Col>
            <ProfileDropdown />
          </Col>
          <Col>
            <Row gutter={[30, 30]} align="middle">
              <Col>
                <NotificationDropdown />
              </Col>
              <Col>
                <SearchDropdown />
              </Col>
              <Col>
                <SettingsDropdown />
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>

      {mobileOnly && (
        <Col>
          <Burger onClick={toggleSider} />
        </Col>
      )}
    </Row>
  );
};
