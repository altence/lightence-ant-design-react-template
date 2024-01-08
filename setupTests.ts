// setupTests.ts
import { toMatchImageSnapshot } from 'jest-image-snapshot';
import matchMediaMock from 'match-media-mock';
import * as useResponsiveModule from './src/hooks/useResponsive';
import { WidthCategory } from './src/styles/themes/types';

const matchMedia = matchMediaMock.create();

global.matchMedia = matchMedia;

expect.extend({ toMatchImageSnapshot });

export const setupResponsiveMock = () => {
  const useResponsiveMock = jest.spyOn(useResponsiveModule, 'useResponsive');
  useResponsiveMock.mockImplementation(() => ({
    isMobile: false,
    isTablet: false,
    isDesktop: true,
    isBigScreen: false,
    mobileOnly: false,
    tabletOnly: false,
    desktopOnly: true,
    breakpoint: 'large' as WidthCategory,
    useMediaQuery: jest.fn(),
  }));
};