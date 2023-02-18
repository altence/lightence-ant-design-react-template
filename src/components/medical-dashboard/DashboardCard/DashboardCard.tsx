import React from 'react';
import { BaseCard, BaseCardProps } from '@app/components/common/BaseCard/BaseCard';
import { useResponsive } from 'hooks/useResponsive';

interface DashboardPaddings {
  xs: [number, number];
  md: [number, number];
  xl: [number, number];
}

export const dashboardPaddings: DashboardPaddings = {
  xs: [20, 15],
  md: [20, 20],
  xl: [20, 20],
};

export const DashboardCard: React.FC<BaseCardProps> = ({ children, ...props }) => {
  const { isMobile, isTablet, isDesktop } = useResponsive();

  const responsivePaddings =
    (isDesktop && dashboardPaddings.xl) ||
    (isTablet && dashboardPaddings.md) ||
    (isMobile && dashboardPaddings.xs) ||
    dashboardPaddings.xs;

  return (
    <BaseCard padding={responsivePaddings} {...props}>
      {children}
    </BaseCard>
  );
};
