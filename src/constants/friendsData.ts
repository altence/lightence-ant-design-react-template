interface Friend {
  id: number;
  name: string;
  imgUrl: string;
  value: number;
  isDowngrade: boolean;
}

export const friendsData: Array<Friend> = [
  {
    id: 1,
    name: 'Ivanov Ivan',
    imgUrl: 'https://res.cloudinary.com/lapkinthegod/image/upload/v1628432724/Rectangle_551_1_l6ndl7.jpg',
    value: 20,
    isDowngrade: false,
  },
  {
    id: 2,
    name: 'Fedorova Lida',
    imgUrl: 'https://res.cloudinary.com/lapkinthegod/image/upload/v1628432724/Rectangle_686_1_pyv0j9.jpg',
    value: 30,
    isDowngrade: true,
  },
  {
    id: 3,
    name: 'Ivanov Fedor',
    imgUrl: 'https://res.cloudinary.com/lapkinthegod/image/upload/v1628432723/Rectangle_687_1_iithmi.jpg',
    value: 60,
    isDowngrade: false,
  },
  {
    id: 4,
    name: 'Ivanova Rita',
    imgUrl: 'https://res.cloudinary.com/lapkinthegod/image/upload/v1628432724/Rectangle_688_1_ccv2tv.jpg',
    value: 31,
    isDowngrade: false,
  },
  {
    id: 5,
    name: 'Fedorov Nik',
    imgUrl: 'https://res.cloudinary.com/lapkinthegod/image/upload/v1628432724/Rectangle_690_1_anmz8o.jpg',
    value: 10,
    isDowngrade: true,
  },
  {
    id: 6,
    name: 'Ivanova Mia',
    imgUrl: 'https://res.cloudinary.com/lapkinthegod/image/upload/v1628432724/Rectangle_689_1_ewzayb.jpg',
    value: 23,
    isDowngrade: false,
  },
];
