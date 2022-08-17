import { BREAKPOINTS, media } from '@app/styles/themes/constants';
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
  const isMobile = useMediaQuery({ query: media.xs });
  const isTablet = useMediaQuery({ query: media.md });
  const isDesktop = useMediaQuery({ query: media.xl });
  const isBigScreen = useMediaQuery({ query: media.xxl });

  const mobileOnly = useMediaQuery({
    query: `(max-width: ${BREAKPOINTS.md - 0.02}px)`,
  });

  const tabletOnly = useMediaQuery({
    query: `(min-width: ${BREAKPOINTS.md}px) and (max-width: ${BREAKPOINTS.xl - 0.02}px)`,
  });

  const desktopOnly = useMediaQuery({
    query: `(min-width: ${BREAKPOINTS.xl}px) and (max-width: ${BREAKPOINTS.xxl - 0.02}px)`,
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
