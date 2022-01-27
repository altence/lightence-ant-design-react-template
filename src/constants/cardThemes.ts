import gradient1 from '@app/assets/images/card-themes/gradient-1.jpeg';
import blueGradient from '@app/assets/images/card-themes/blue-gradient.png';
import yellow from '@app/assets/images/card-themes/yellow.png';
import black from '@app/assets/images/card-themes/black.png';
import gradient2 from '@app/assets/images/card-themes/gradient-2.png';
import blue from '@app/assets/images/card-themes/blue.png';

interface CardTheme {
  id: number;
  background: string;
}

export const cardThemes: CardTheme[] = [
  {
    id: 1,
    background: gradient1,
  },
  {
    id: 2,
    background: blueGradient,
  },
  {
    id: 3,
    background: yellow,
  },
  {
    id: 4,
    background: black,
  },
  {
    id: 5,
    background: gradient2,
  },
  {
    id: 6,
    background: blue,
  },
];
