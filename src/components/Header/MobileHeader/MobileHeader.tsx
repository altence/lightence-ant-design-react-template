import React from 'react';
import { Col, Row } from 'antd';
import { Burger } from 'components/common/Burger/Burger';
import { NotificationsDropdown } from '../dropdowns/NotificationsDropdown/NotificationsDropdown';
import { ProfileDropdown } from '../dropdowns/ProfileDropdown/ProfileDropdown';
import { SearchDropdown } from '../dropdowns/SearchDropdown/SearchDropdown';
import { SettingsDropdown } from '../dropdowns/SettingsDropdown/SettingsDropdown';

interface MobileHeaderProps {
  toggleSider: () => void;
}

export const MobileHeader: React.FC<MobileHeaderProps> = ({ toggleSider }) => {
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
                <NotificationsDropdown />
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
        <Burger onClick={toggleSider} />
      </Col>
    </Row>
  );
};
