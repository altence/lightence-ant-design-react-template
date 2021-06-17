import 'styled-components';
import theme from './styles/theme';

declare module 'styled-components' {
  type Theme = typeof theme;
  export type DefaultTheme = Theme;
}
