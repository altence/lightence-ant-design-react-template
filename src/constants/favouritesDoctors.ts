export interface FavoriteDoctor {
  id?: number;
  name: string;
  specifity: string;
  visit: string;
  rating: number;
  imgUrl: string;
}

export const favoriteDoctors: Array<FavoriteDoctor> = [
  {
    id: 1,
    name: 'Ivanov Ivan',
    specifity: 'Surgeon',
    visit: '6.08.21',
    rating: 4,
    imgUrl: 'https://res.cloudinary.com/lapkinthegod/image/upload/v1628436647/Rectangle_463_1_d1omr2.jpg',
  },
  {
    id: 2,
    name: 'Fedorova Lida',
    specifity: 'Dermatologist',
    visit: '9.08.21',
    rating: 5,
    imgUrl: 'https://res.cloudinary.com/lapkinthegod/image/upload/v1628436647/Rectangle_463_2_hgqjsp.jpg',
  },
  {
    id: 3,
    name: 'Stepanov Fedor',
    specifity: 'Oncologist',
    visit: '6.08.21',
    rating: 5,
    imgUrl: 'https://res.cloudinary.com/lapkinthegod/image/upload/v1628436646/Rectangle_463_3_gl0gcr.jpg',
  },
  {
    id: 4,
    name: 'Filippov Anton',
    specifity: 'Cardiologist',
    visit: '3.08.21',
    rating: 4,
    imgUrl: 'https://res.cloudinary.com/lapkinthegod/image/upload/v1628436647/Rectangle_463_4_gep4lc.jpg',
  },
];
