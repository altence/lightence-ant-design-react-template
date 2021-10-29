import React from 'react';
import { Col, Row } from 'antd';
import { Burger } from 'components/common/Burger/Burger';
import { NotificationDropdown } from '../NotificationDropdown/NotificationDropdown';
import { ProfileDropdown } from '../ProfileDropdown/ProfileDropdown';
import { SearchDropdown } from '../SearchDropdown/SearchDropdown';
import { SettingsDropdown } from '../SettingsDropdown/SettingsDropdown';

interface MobileHeaderProps {
  toggleSlider: () => void;
}

export const MobileHeader: React.FC<MobileHeaderProps> = ({ toggleSlider }) => {
  return (
    <Row justify="space-between" align="middle">
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

      <Col>
        <Burger onClick={toggleSlider} />
      </Col>
    </Row>
  );
};
