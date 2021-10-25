import { CardState, Tag } from 'components/apps/Kanban/interfaces';

export const addCard = (card: CardState): Promise<CardState> => {
  return new Promise((res) => {
    setTimeout(() => {
      res(card);
    }, 1000);
  });
};

export const addTag = (tag: Tag): Promise<Tag> => {
  return new Promise((res) => {
    setTimeout(() => {
      res(tag);
    }, 1000);
  });
};
