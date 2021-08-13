export interface FavoriteDoctor {
  id: number;
  name: string;
  specifity: string;
  visit: number;
  rating: number;
  imgUrl: string;
}

export const favouritesDoctorsData: Array<FavoriteDoctor> = [
  {
    id: 1,
    name: 'Ivanov Ivan',
    specifity: 'Surgeon',
    visit: 1628197200000,
    rating: 4,
    imgUrl: 'https://res.cloudinary.com/lapkinthegod/image/upload/v1628436647/Rectangle_463_1_d1omr2.jpg',
  },
  {
    id: 2,
    name: 'Fedorova Lida',
    specifity: 'Dermatologist',
    visit: 1628456400000,
    rating: 5,
    imgUrl: 'https://res.cloudinary.com/lapkinthegod/image/upload/v1628436647/Rectangle_463_2_hgqjsp.jpg',
  },
  {
    id: 3,
    name: 'Stepanov Fedor',
    specifity: 'Oncologist',
    visit: 1628197200000,
    rating: 5,
    imgUrl: 'https://res.cloudinary.com/lapkinthegod/image/upload/v1628436646/Rectangle_463_3_gl0gcr.jpg',
  },
  {
    id: 4,
    name: 'Filippov Anton',
    specifity: 'Cardiologist',
    visit: 1627938000000,
    rating: 4,
    imgUrl: 'https://res.cloudinary.com/lapkinthegod/image/upload/v1628436647/Rectangle_463_4_gep4lc.jpg',
  },
];
