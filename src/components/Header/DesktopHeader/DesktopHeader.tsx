import React from 'react';
import { Col, Row } from 'antd';
import { NotificationDropdown } from '../NotificationDropdown/NotificationDropdown';
import { ProfileDropdown } from '../ProfileDropdown/ProfileDropdown';
import { SearchDropdown } from '../SearchDropdown/SearchDropdown';
import { SettingsDropdown } from '../SettingsDropdown/SettingsDropdown';

export const DesktopHeader: React.FC = () => {
  return (
    <Row justify="space-between" align="middle">
      <Col xl={10} xxl={8}>
        <SearchDropdown />
      </Col>

      <Col>
        <Row gutter={[30, 30]} align="middle">
          <Col>
            <NotificationDropdown />
          </Col>

          <Col>
            <SettingsDropdown />
          </Col>

          <Col>
            <ProfileDropdown />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
