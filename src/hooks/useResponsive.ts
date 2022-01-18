import { MediaQueryAllQueryable, MediaQueryMatchers, useMediaQuery } from 'react-responsive';
import lightTheme from '@app/styles/themes/light/lightTheme';

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
  const isMobile = useMediaQuery({ query: lightTheme.media.xs });
  const isTablet = useMediaQuery({ query: lightTheme.media.md });
  const isDesktop = useMediaQuery({ query: lightTheme.media.xl });
  const isBigScreen = useMediaQuery({ query: lightTheme.media.xxl });

  const mobileOnly = useMediaQuery({
    query: `(max-width: ${lightTheme.breakpoints.md - 0.02}px)`,
  });

  const tabletOnly = useMediaQuery({
    query: `(min-width: ${lightTheme.breakpoints.md}px) and (max-width: ${lightTheme.breakpoints.xl - 0.02}px)`,
  });

  const desktopOnly = useMediaQuery({
    query: `(min-width: ${lightTheme.breakpoints.xl}px) and (max-width: ${lightTheme.breakpoints.xxl - 0.02}px)`,
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
