import { ReactNode } from 'react';

export type WithChildrenProps<T = undefined> = T extends undefined
  ? {
      children?: ReactNode;
    }
  : T & {
      children?: ReactNode;
    };
