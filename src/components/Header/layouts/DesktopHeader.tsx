import React from 'react';
import { Col, Row } from 'antd';
import { NotificationsDropdown } from '../dropdowns/NotificationsDropdown/NotificationsDropdown';
import { ProfileDropdown } from '../dropdowns/ProfileDropdown/ProfileDropdown';
import { HeaderSearch } from '../HeaderSearch/HeaderSearch';
import { SettingsDropdown } from '../dropdowns/SettingsDropdown/SettingsDropdown';

import * as S from '../Header.styles';

interface DesktopHeaderProps {
  withDivider: boolean;
}

export const DesktopHeader: React.FC<DesktopHeaderProps> = ({ withDivider }) => {
  return (
    <Row justify="space-between" align="middle">
      <Col xl={10} xxl={8}>
        <HeaderSearch />
      </Col>

      <S.ProfileColumn xl={10} xxl={7} $withDivider={withDivider}>
        <Row align="middle" justify="end" gutter={[30, 30]}>
          <Col>
            <NotificationsDropdown />
          </Col>

          <Col>
            <SettingsDropdown />
          </Col>

          <Col>
            <ProfileDropdown />
          </Col>
        </Row>
      </S.ProfileColumn>
    </Row>
  );
};
