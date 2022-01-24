import React from 'react';
import { Col, Row } from 'antd';
import { NotificationsDropdown } from '../dropdowns/NotificationsDropdown/NotificationsDropdown';
import { ProfileDropdown } from '../dropdowns/ProfileDropdown/ProfileDropdown';
import { HeaderSearch } from '../HeaderSearch/HeaderSearch';
import { SettingsDropdown } from '../dropdowns/SettingsDropdown/SettingsDropdown';

import * as S from '../Header.styles';

interface DesktopHeaderProps {
  isTwoColumnsLayout: boolean;
}

export const DesktopHeader: React.FC<DesktopHeaderProps> = ({ isTwoColumnsLayout }) => {
  const leftSide = isTwoColumnsLayout ? (
    <S.SearchColumn lg={16}>
      <Row justify="space-between">
        <Col xl={15} xxl={12}>
          <HeaderSearch />
        </Col>
        <Col>
          <S.GHButton />
        </Col>
      </Row>
    </S.SearchColumn>
  ) : (
    <>
      <Col lg={10} xxl={8}>
        <HeaderSearch />
      </Col>
      <Col>
        <S.GHButton />
      </Col>
    </>
  );

  return (
    <Row justify="space-between" align="middle">
      {leftSide}

      <S.ProfileColumn xl={8} xxl={8} $isTwoColumnsLayout={isTwoColumnsLayout}>
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
