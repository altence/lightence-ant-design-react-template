import { WidthCategories } from '@app/styles/themes/types';

export const modalSizes = {
  xs: '400px',
  md: '600px',
  xl: '800px',
} as const satisfies WidthCategories;
