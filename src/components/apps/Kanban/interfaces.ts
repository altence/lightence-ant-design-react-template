export interface CardState {
  id?: number | string;
  title?: string;
  label?: string;
  description?: string;
  tags?: { title: string; bgcolor: string }[];
}

export interface Tag {
  title: string;
  bgcolor: string;
}
