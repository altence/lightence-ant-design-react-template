// setupTests.ts
import { toMatchImageSnapshot } from 'jest-image-snapshot';
import matchMediaMock from 'match-media-mock';
import * as useResponsiveModule from './src/hooks/useResponsive';
import { WidthCategory } from './src/styles/themes/types';
import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';

const matchMedia = matchMediaMock.create();

global.matchMedia = matchMedia;

expect.extend({ toMatchImageSnapshot });

i18n.use(initReactI18next).init({
  resources: {},
  lng: 'en',
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

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