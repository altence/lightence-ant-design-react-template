import React from 'react';
import { Row, Col, Space } from 'antd';
import { CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons';
import { useResponsive } from 'hooks/useResponsive';
import { getDifference } from 'utils/utils';
import * as S from './ScreeningsFriend.styles';

interface ScreeningsFriendProps {
  name: string;
  src: string;
  value: number;
  prevValue: number;
  isPrimary: boolean;
  isSecondary: boolean;
  onClick?: () => void;
  isMenuOpen: boolean;
}

export const ScreeningsFriend: React.FC<ScreeningsFriendProps> = ({
  name,
  src,
  value,
  prevValue,
  isPrimary,
  isSecondary,
  onClick,
  isMenuOpen,
}) => {
  const isDowngrade = value < prevValue;

  const { isTablet: isTabletOrHigher, mobileOnly } = useResponsive();

  return (
    <S.ScreeningsRow
      onClick={onClick}
      justify={isMenuOpen ? 'space-between' : 'center'}
      $isActive={isPrimary || isSecondary}
      wrap={false}
    >
      <Col>
        <Row gutter={[10, 0]} align="middle" wrap={false}>
          <Col>
            <S.Avatar
              {...(mobileOnly && { size: 'large' })}
              shape="square"
              src={src}
              alt="Friend avatar"
              $isPrimary={isPrimary}
              $isSecondary={isSecondary}
            />
          </Col>

          {isTabletOrHigher && isMenuOpen && (
            <Col>
              <S.Name $isPrimary={isPrimary} $isSecondary={isSecondary}>
                {name}
              </S.Name>
            </Col>
          )}
        </Row>
      </Col>

      {isTabletOrHigher && isMenuOpen && (
        <Col>
          <S.Percentage $isDowngrade={isDowngrade}>
            <Space size={0}>
              {isDowngrade ? <CaretDownOutlined /> : <CaretUpOutlined />}
              <S.Percentage $isDowngrade={isDowngrade}>{getDifference(value, prevValue)}</S.Percentage>
            </Space>
          </S.Percentage>
        </Col>
      )}
    </S.ScreeningsRow>
  );
};
