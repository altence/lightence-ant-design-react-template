import React, { useMemo } from 'react';
import { Col, Row } from 'antd';
import { useTranslation } from 'react-i18next';
import { LeftOutlined } from '@ant-design/icons';
import { useResponsive } from 'hooks/useResponsive';
import { ScreeningsProps } from '../interfaces';
import * as S from './DesktopScreenings.styles';

interface CollapseProps {
  isMenuOpen: boolean;
  setMenuOpen: (state: boolean) => void;
}

type DesktopScreeningsProps = ScreeningsProps & CollapseProps;

export const DesktopScreenings: React.FC<DesktopScreeningsProps> = ({ screeningsItems, isMenuOpen, setMenuOpen }) => {
  const { isDesktop } = useResponsive();

  const { t } = useTranslation();

  const colItems = useMemo(
    () =>
      screeningsItems.map((item, index) => (
        <Col key={index} span={24}>
          {item}
        </Col>
      )),
    [screeningsItems],
  );

  const handleClick = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <Row
      gutter={[
        { xs: 10, sm: 10, xl: 22 },
        { xs: 10, sm: 10, xl: 22 },
      ]}
    >
      <Col span={24}>
        <Row justify={isMenuOpen ? 'space-between' : 'center'}>
          {isMenuOpen && (
            <Col>
              <S.Title>{t('medical-dashboard.latestScreenings.friends')}</S.Title>
            </Col>
          )}

          {isDesktop && (
            <Col>
              <LeftOutlined onClick={handleClick} rotate={isMenuOpen ? 0 : 180} />
            </Col>
          )}
        </Row>
      </Col>

      {colItems}
    </Row>
  );
};
