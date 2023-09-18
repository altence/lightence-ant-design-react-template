import { useTheme } from 'styled-components';
import { MediaQueryAllQueryable, MediaQueryMatchers, useMediaQuery } from 'react-responsive';

interface ResponsiveReturnValues {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  isBigScreen: boolean;
  mobileOnly: boolean;
  tabletOnly: boolean;
  desktopOnly: boolean;
  useMediaQuery: (
    settings: Partial<MediaQueryAllQueryable & { query?: string | undefined }>,
    device?: MediaQueryMatchers,
    callback?: (matches: boolean) => void,
  ) => boolean;
}

export const useResponsive = (): ResponsiveReturnValues => {
  const theme = useTheme();

  const isMobile = useMediaQuery({ query: `(min-width: ${theme.breakpoints.xs}px)` });
  const isTablet = useMediaQuery({ query: `(min-width: ${theme.breakpoints.md}px)` });
  const isDesktop = useMediaQuery({ query: `(min-width: ${theme.breakpoints.xl}px)` });
  const isBigScreen = useMediaQuery({ query: `(min-width: ${theme.breakpoints.xxl}px)` });

  const mobileOnly = useMediaQuery({
    query: `(max-width: ${theme.breakpoints.md - 0.02}px)`,
  });

  const tabletOnly = useMediaQuery({
    query: `(min-width: ${theme.breakpoints.md}px) and (max-width: ${theme.breakpoints.xl - 0.02}px)`,
  });

  const desktopOnly = useMediaQuery({
    query: `(min-width: ${theme.breakpoints.xl}px) and (max-width: ${theme.breakpoints.xxl - 0.02}px)`,
  });

  return {
    isMobile,
    isTablet,
    isDesktop,
    isBigScreen,
    mobileOnly,
    tabletOnly,
    desktopOnly,
    useMediaQuery,
  };
};
