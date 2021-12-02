import theme from 'styles/theme';

const { red, orange, lightgreen } = theme.commonColors;

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
