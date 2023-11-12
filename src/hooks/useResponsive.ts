import { useTheme } from 'styled-components';
import { MediaQueryAllQueryable, MediaQueryMatchers, useMediaQuery } from 'react-responsive';
import { media, mediaMax, mediaRange } from '@app/utils/utils';
import { WidthCategory } from '@app/styles/themes/types';

interface ResponsiveReturnValues {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  isBigScreen: boolean;
  mobileOnly: boolean;
  tabletOnly: boolean;
  desktopOnly: boolean;
  breakpoint: WidthCategory;
  useMediaQuery: (
    settings: Partial<MediaQueryAllQueryable & { query?: string | undefined }>,
    device?: MediaQueryMatchers,
    callback?: (matches: boolean) => void,
  ) => boolean;
}

export const useResponsive = (): ResponsiveReturnValues => {
  const theme = useTheme();

  const isMobile = useMediaQuery({ query: `(${media('xs')({ theme })})` });
  const isTablet = useMediaQuery({ query: `(${media('md')({ theme })})` });
  const isDesktop = useMediaQuery({ query: `(${media('xl')({ theme })})` });
  const isBigScreen = useMediaQuery({ query: `(${media('xxl')({ theme })})` });

  const mobileOnly = useMediaQuery({ query: `(${mediaMax('md')({ theme })})` });
  const tabletOnly = useMediaQuery({ query: `(${mediaRange('md', 'xl')({ theme })})` });
  const desktopOnly = useMediaQuery({ query: `(${mediaRange('xl', 'xxl')({ theme })})` });

  const breakpoint = isDesktop ? WidthCategory.large : isTablet ? WidthCategory.medium : WidthCategory.small;

  return {
    isMobile,
    isTablet,
    isDesktop,
    isBigScreen,
    mobileOnly,
    tabletOnly,
    desktopOnly,
    breakpoint,
    useMediaQuery,
  };
};
