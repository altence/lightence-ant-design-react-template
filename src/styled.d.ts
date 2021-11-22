import { LinearGradientObject } from 'echarts';
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    commonColors: {
      white: string;
      black: string;
      green: string;
      orange: string;
      gray: string;
      lightgrey: string;
      violet: string;
      lightgreen: string;
      pink: string;
      blue: string;
      skyblue: string;
      red: string;
    };
    colors: {
      main: {
        primary: string;
        primaryShade: string;
        primaryGradient: string;
        secondary: string;
        error: string;
        warning: string;
        success: string;
        angularGradient: string;
        mainBackground: string;
        secondaryBackground: string;
        chartPrimaryGradient: LinearGradientObject;
        chartSecondaryGradient: LinearGradientObject;
      };
      text: {
        main: string;
        light: string;
        superLight: string;
        secondary: string;
      };
      border: {
        main: string;
      };
      mapGradient: string;
    };
    border: {
      radius: string;
    };
    boxShadow: string;
    breakpoints: {
      xs: number;
      md: number;
      xl: number;
      xxl: number;
    };
    media: {
      xs: string;
      md: string;
      xl: string;
      xxl: string;
    };
    mobileLayout: {
      paddingVertical: string;
      paddingHorizontal: string;
      headerHeight: string;
      headerPadding: string;
    };
    desktopLayout: {
      paddingVertical: string;
      paddingHorizontal: string;
      headerHeight: string;
    };
    commonFontSizes: {
      xxs: string;
      xs: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
      xxxl: string;
      xxxxl: string;
    };
    commonFontWeight: {
      thin: string;
      extraLight: string;
      light: string;
      normal: string;
      medium: string;
      semibold: string;
      bold: string;
      extraBold: string;
      black: string;
    };
  }
}
