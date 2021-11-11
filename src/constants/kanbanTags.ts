import theme from 'styles/theme';

const { red, orange, lightgreen, skyblue } = theme.commonColors;

export const kanbanTags = {
  high: {
    id: 'high',
    title: 'high',
    bgcolor: red,
  },
  medium: {
    id: 'medium',
    title: 'medium',
    bgcolor: orange,
  },
  low: {
    id: 'low',
    title: 'low',
    bgcolor: lightgreen,
  },
  ui: {
    id: 'ui',
    title: 'ui',
    bgcolor: skyblue,
  },
  dev: {
    id: 'dev',
    title: 'dev',
    bgcolor: skyblue,
  },
};
