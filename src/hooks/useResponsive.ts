import { useMediaQuery } from 'react-responsive';
import theme from 'styles/theme';

interface ResponsiveReturnValues {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  isBigScreen: boolean;
  mobileOnly: boolean;
  tabletOnly: boolean;
}

export const useResponsive = (): ResponsiveReturnValues => {
  const isMobile = useMediaQuery({ query: theme.media.xs });
  const isTablet = useMediaQuery({ query: theme.media.md });
  const isDesktop = useMediaQuery({ query: theme.media.xl });
  const isBigScreen = useMediaQuery({ query: theme.media.xxl });

  const mobileOnly = useMediaQuery({
    query: `(min-width: ${theme.breakpoints.xs - 1}px) and (max-width: ${theme.breakpoints.md - 1}px)`,
  });
  const tabletOnly = useMediaQuery({
    query: `(min-width: ${theme.breakpoints.md - 1}px) and (max-width: ${theme.breakpoints.xl - 1}px)`,
  });

  return {
    isMobile,
    isTablet,
    isDesktop,
    isBigScreen,
    mobileOnly,
    tabletOnly,
  };
};
