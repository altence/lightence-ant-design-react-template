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
    imgUrl: 'https://res.cloudinary.com/lapkinthegod/image/upload/v1628001383/Rectangle_463_jnyv7r.jpg',
  },
  {
    id: 2,
    name: 'Fedorova Lida',
    specifity: 'Dermatologist',
    visit: '9.08.21',
    rating: 5,
    imgUrl: 'https://res.cloudinary.com/lapkinthegod/image/upload/v1628001384/Rectangle_638_nreofs.jpg',
  },
  {
    id: 3,
    name: 'Stepanov Fedor',
    specifity: 'Oncologist',
    visit: '6.08.21',
    rating: 5,
    imgUrl: 'https://res.cloudinary.com/lapkinthegod/image/upload/v1628001387/Rectangle_639_arezkv.jpg',
  },
  {
    id: 4,
    name: 'Filippov Anton',
    specifity: 'Cardiologist',
    visit: '3.08.21',
    rating: 4,
    imgUrl: 'https://res.cloudinary.com/lapkinthegod/image/upload/v1628001278/Rectangle_534_vxr19u.jpg',
  },
];
