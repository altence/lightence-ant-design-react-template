import { NoticeType } from 'components/common/Notice/Notice';

interface NoticeSeverity {
  id: number;
  name: NoticeType;
}

export const noticesSeverities: NoticeSeverity[] = [
  {
    id: 0,
    name: 'info',
  },
  {
    id: 1,
    name: 'success',
  },
  {
    id: 2,
    name: 'warning',
  },
  {
    id: 3,
    name: 'error',
  },
  {
    id: 4,
    name: 'mention',
  },
];
