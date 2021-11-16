import React from 'react';
import { Col, Row } from 'antd';
import { NotificationsDropdown } from '../dropdowns/NotificationsDropdown/NotificationsDropdown';
import { ProfileDropdown } from '../dropdowns/ProfileDropdown/ProfileDropdown';
import { HeaderSearch } from '../HeaderSearch/HeaderSearch';
import { SettingsDropdown } from '../dropdowns/SettingsDropdown/SettingsDropdown';
import * as S from '../Header.styles';

interface MobileHeaderProps {
  toggleSider: () => void;
  isSiderOpened: boolean;
}

export const MobileHeader: React.FC<MobileHeaderProps> = ({ toggleSider, isSiderOpened }) => {
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
                <HeaderSearch />
              </Col>

              <Col>
                <SettingsDropdown />
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>

      <S.BurgerCol>
        <S.MobileBurger onClick={toggleSider} isCross={isSiderOpened} />
      </S.BurgerCol>
    </Row>
  );
};
