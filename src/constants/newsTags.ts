// TODO add i18n

interface Tag {
  id: string;
  title: string;
  bgColor: 'error' | 'warning' | 'success';
}

interface NewsTags {
  [key: string]: Tag;
}

export const newsTags: NewsTags = {
  arts: {
    id: 'Arts',
    title: 'arts',
    bgColor: 'error',
  },
  music: {
    id: 'music',
    title: 'music',
    bgColor: 'warning',
  },
  health: {
    id: 'health',
    title: 'health',
    bgColor: 'success',
  },
  covid: {
    id: 'covid',
    title: 'COVID',
    bgColor: 'error',
  },
};
