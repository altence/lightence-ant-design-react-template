import React from 'react';
import { CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons';
import { useResponsive } from 'hooks/useResponsive';
import { getDifference } from 'utils/utils';
import { BaseCol } from '@app/components/common/BaseCol/BaseCol';
import { BaseRow } from '@app/components/common/BaseRow/BaseRow';
import { BaseSpace } from '@app/components/common/BaseSpace/BaseSpace';
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
      <BaseCol>
        <BaseRow gutter={[10, 0]} align="middle" wrap={false}>
          <BaseCol>
            <S.Avatar
              {...(mobileOnly && { size: 'large' })}
              shape="square"
              src={src}
              alt="Friend avatar"
              $isPrimary={isPrimary}
              $isSecondary={isSecondary}
            />
          </BaseCol>

          {isTabletOrHigher && isMenuOpen && (
            <BaseCol>
              <S.Name $isPrimary={isPrimary} $isSecondary={isSecondary}>
                {name}
              </S.Name>
            </BaseCol>
          )}
        </BaseRow>
      </BaseCol>

      {isTabletOrHigher && isMenuOpen && (
        <BaseCol>
          <S.Percentage $isDowngrade={isDowngrade}>
            <BaseSpace size={0}>
              {isDowngrade ? <CaretDownOutlined /> : <CaretUpOutlined />}
              <S.Percentage $isDowngrade={isDowngrade}>{getDifference(value, prevValue)}</S.Percentage>
            </BaseSpace>
          </S.Percentage>
        </BaseCol>
      )}
    </S.ScreeningsRow>
  );
};
