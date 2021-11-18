import React from 'react';
import * as S from './MainSider.styles';
import { RightOutlined } from '@ant-design/icons';
import { useResponsive } from '../../../../hooks/useResponsive';
import logo from '../../../../assets/logo.png';

interface SiderLogoProps {
  isSiderCollapsed: boolean;
  toggleSider: () => void;
}
export const SiderLogo: React.FC<SiderLogoProps> = ({ isSiderCollapsed, toggleSider }) => {
  const { tabletOnly } = useResponsive();

  return (
    <S.SiderLogoDiv>
      <S.SiderLogoLink to="/">
        <img src={logo} alt="Lightence" width={36} height={36} />
        <S.BrandSpan>Lightence</S.BrandSpan>
      </S.SiderLogoLink>
      {tabletOnly && (
        <S.CollapseButton
          type="text"
          icon={<RightOutlined rotate={isSiderCollapsed ? 0 : 180} />}
          onClick={toggleSider}
        />
      )}
    </S.SiderLogoDiv>
  );
};
