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
        primaryLight: string;
        primaryShade: string;
        primaryGradient: string;
        light: string;
        secondary: string;
        error: string;
        warning: string;
        success: string;
        angularGradient: string;
        mainBackground: string;
        secondaryBackground: string;
        chartPrimaryGradient: LinearGradientObject;
        chartSecondaryGradient: LinearGradientObject;
        chartAdditionalGradient: LinearGradientObject;
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
      charts: {
        tooltipLabel: string;
        color1: string;
        color1Tint: string;
        color2: string;
        color2Tint: string;
        color3: string;
        color3Tint: string;
        color4: string;
        color4Tint: string;
        color5: string;
        color5Tint: string;
      };
      shadow: {
        color: string;
      };
      notifications: {
        success: string;
        primary: string;
        warning: string;
        error: string;
      };
    };
    border: {
      radius: string;
    };
    boxShadow: string;
    breakpoints: {
      xs: number;
      sm: number;
      md: number;
      xl: number;
      xxl: number;
    };
    media: {
      xs: string;
      sm: string;
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
      regular: string;
      medium: string;
      semibold: string;
      bold: string;
      extraBold: string;
      black: string;
    };
  }
}
