interface Tag {
  id: string;
  title: string;
  bgColor: 'error' | 'warning' | 'success' | 'primary';
}

interface KanbanTags {
  [key: string]: Tag;
}

export const kanbanTags: KanbanTags = {
  high: {
    id: 'high',
    title: 'high',
    bgColor: 'error',
  },
  medium: {
    id: 'medium',
    title: 'medium',
    bgColor: 'warning',
  },
  low: {
    id: 'low',
    title: 'low',
    bgColor: 'success',
  },
  ui: {
    id: 'ui',
    title: 'ui',
    bgColor: 'primary',
  },
  dev: {
    id: 'dev',
    title: 'dev',
    bgColor: 'primary',
  },
};
