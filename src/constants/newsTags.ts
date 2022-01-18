import lightTheme from '@app/styles/themes/light/lightTheme';
// todo take colors from the current theme
const { red, orange, lightgreen } = lightTheme.commonColors;

// TODO add i18n
export const newsTags = {
  arts: {
    id: 'Arts',
    title: 'arts',
    bgColor: red,
  },
  music: {
    id: 'music',
    title: 'music',
    bgColor: orange,
  },
  health: {
    id: 'health',
    title: 'health',
    bgColor: lightgreen,
  },
  covid: {
    id: 'covid',
    title: 'COVID',
    bgColor: red,
  },
};
