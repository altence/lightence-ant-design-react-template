import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    commonColors: {
      white: string;
      black: string;
      green: string;
      orange: string;
      gray: string;
      violet: string;
      lightgreen: string;
      pink: string;
      blue: string;
      skyblue: string;
    };
    colors: {
      main: {
        primary: string;
        primaryGradient: string;
        secondary: string;
        error: string;
        warning: string;
        success: string;
        angularGradient: string;
        mainBackground: string;
        secondaryBackground: string;
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
    };
    desktopLayout: {
      paddingVertical: string;
      paddingHorizontal: string;
    };
  }
}
