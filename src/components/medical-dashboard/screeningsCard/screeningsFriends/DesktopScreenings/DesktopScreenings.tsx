import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { LeftOutlined } from '@ant-design/icons';
import { useResponsive } from 'hooks/useResponsive';
import { ScreeningsProps } from '../interfaces';
import * as S from './DesktopScreenings.styles';
import { BaseCol } from '@app/components/common/BaseCol/BaseCol';
import { BaseRow } from '@app/components/common/BaseRow/BaseRow';

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
        <BaseCol key={index} span={24}>
          {item}
        </BaseCol>
      )),
    [screeningsItems],
  );

  const handleClick = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <BaseRow
      gutter={[
        { xs: 10, sm: 10, xl: 22 },
        { xs: 10, sm: 10, xl: 22 },
      ]}
    >
      <BaseCol span={24}>
        <BaseRow justify={isMenuOpen ? 'space-between' : 'center'}>
          {isMenuOpen && (
            <BaseCol>
              <S.Title>{t('medical-dashboard.latestScreenings.friends')}</S.Title>
            </BaseCol>
          )}

          {isDesktop && (
            <BaseCol>
              <LeftOutlined onClick={handleClick} rotate={isMenuOpen ? 0 : 180} />
            </BaseCol>
          )}
        </BaseRow>
      </BaseCol>

      {colItems}
    </BaseRow>
  );
};
