import React from 'react';
import { BaseCard, BaseCardProps } from '@app/components/common/BaseCard/BaseCard';
import { useResponsive } from 'hooks/useResponsive';
import { WidthCategories } from '@app/styles/themes/types';

export const dashboardPaddings = {
  xs: [20, 15],
  md: [20, 20],
  xl: [20, 20],
} as const satisfies WidthCategories;

export const DashboardCard: React.FC<BaseCardProps> = ({ children, ...props }) => {
  const { breakpoint } = useResponsive();

  return (
    <BaseCard padding={dashboardPaddings[breakpoint]} {...props}>
      {children}
    </BaseCard>
  );
};
