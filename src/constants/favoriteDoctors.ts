import { Dates } from './dates';

const today = Dates.getToday();

export interface FavoriteDoctor {
  id?: number;
  name: string;
  specifity: string;
  visit: Date;
  rating: number;
  imgUrl: string;
}

export const favoriteDoctors: Array<FavoriteDoctor> = [
  {
    id: 1,
    name: 'Ivanov Ivan',
    specifity: 'Dermatologist',
    visit: today,
    rating: 5,
    imgUrl: 'https://res.cloudinary.com/lapkinthegod/image/upload/v1628001383/Rectangle_463_jnyv7r.jpg',
  },
  {
    id: 2,
    name: 'Ivanov Ivan',
    specifity: 'Dermatologist',
    visit: today,
    rating: 5,
    imgUrl: 'https://res.cloudinary.com/lapkinthegod/image/upload/v1628001384/Rectangle_638_nreofs.jpg',
  },
  {
    id: 3,
    name: 'Ivanov Ivan',
    specifity: 'Dermatologist',
    visit: today,
    rating: 5,
    imgUrl: 'https://res.cloudinary.com/lapkinthegod/image/upload/v1628001387/Rectangle_639_arezkv.jpg',
  },
  {
    id: 4,
    name: 'Ivanov Ivan',
    specifity: 'Dermatologist',
    visit: today,
    rating: 5,
    imgUrl: 'https://res.cloudinary.com/lapkinthegod/image/upload/v1628001278/Rectangle_534_vxr19u.jpg',
  },
];
