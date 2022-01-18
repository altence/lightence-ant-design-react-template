import lightTheme from '@app/styles/themes/light/lightTheme';

const { red, orange, lightgreen, skyblue } = lightTheme.commonColors;

export const kanbanTags = {
  high: {
    id: 'high',
    title: 'high',
    bgColor: red,
  },
  medium: {
    id: 'medium',
    title: 'medium',
    bgColor: orange,
  },
  low: {
    id: 'low',
    title: 'low',
    bgColor: lightgreen,
  },
  ui: {
    id: 'ui',
    title: 'ui',
    bgColor: skyblue,
  },
  dev: {
    id: 'dev',
    title: 'dev',
    bgColor: skyblue,
  },
};
