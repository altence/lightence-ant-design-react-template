export interface Tag {
  id: string;
  title: string;
  bgcolor: string;
}

export interface Participant {
  id: string;
  name: string;
  avatar?: string;
}

export interface CardState {
  id?: number | string;
  title?: string;
  description?: string;
  tags?: Tag[];
  participants?: Participant[];
}
