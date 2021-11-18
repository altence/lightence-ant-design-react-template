import React from 'react';
import { Row, Col, Space } from 'antd';
import { CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons';
import { getDifference } from 'utils/utils';
import * as S from './ScreeningsFriend.styles';
import { useResponsive } from 'hooks/useResponsive';

interface ScreeningsFriendProps {
  name: string;
  src: string;
  value: number;
  prevValue: number;
  isPrimary: boolean;
  isSecondary: boolean;
  onClick?: () => void;
}

export const ScreeningsFriend: React.FC<ScreeningsFriendProps> = ({
  name,
  src,
  value,
  prevValue,
  isPrimary,
  isSecondary,
  onClick,
}) => {
  const isDowngrade = value < prevValue;

  const { isTablet: isTabletOrHigher, mobileOnly } = useResponsive();

  return (
    <S.ScreeningsRow onClick={onClick} justify="space-between" isActive={isPrimary || isSecondary}>
      <Col>
        <Row gutter={[10, 0]} align="middle">
          <Col>
            <S.Avatar
              {...(mobileOnly && { size: 'large' })}
              shape="square"
              src={src}
              alt="Friend avatar"
              isPrimary={isPrimary}
              isSecondary={isSecondary}
            />
          </Col>

          {isTabletOrHigher && (
            <Col>
              <S.Name>{name}</S.Name>
            </Col>
          )}
        </Row>
      </Col>

      {isTabletOrHigher && (
        <Col>
          <S.Percentage isDowngrade={isDowngrade}>
            <Space size={0}>
              {isDowngrade ? <CaretDownOutlined /> : <CaretUpOutlined />}
              {getDifference(value, prevValue)}
            </Space>
          </S.Percentage>
        </Col>
      )}
    </S.ScreeningsRow>
  );
};
