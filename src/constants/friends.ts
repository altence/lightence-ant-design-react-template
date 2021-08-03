interface Friend {
  id: number;
  name: string;
  imgUrl: string;
  value: number;
  isDowngrade: boolean;
}

export const friends: Array<Friend> = [
  {
    id: 1,
    name: 'Ivanov Ivan',
    imgUrl: 'https://res.cloudinary.com/lapkinthegod/image/upload/v1628001000/Rectangle_551_md1rkl.jpg',
    value: 20,
    isDowngrade: false,
  },
  {
    id: 2,
    name: 'Fedorova Lida',
    imgUrl: 'https://res.cloudinary.com/lapkinthegod/image/upload/v1628001000/Rectangle_686_rfdown.jpg',
    value: 30,
    isDowngrade: true,
  },
  {
    id: 3,
    name: 'Ivanov Fedor',
    imgUrl: 'https://res.cloudinary.com/lapkinthegod/image/upload/v1628001000/Rectangle_687_ohu79e.jpg',
    value: 60,
    isDowngrade: false,
  },
  {
    id: 4,
    name: 'Ivanova Rita',
    imgUrl: 'https://res.cloudinary.com/lapkinthegod/image/upload/v1628000999/Rectangle_688_j0w0md.jpg',
    value: 31,
    isDowngrade: false,
  },
  {
    id: 5,
    name: 'Fedorov Nik',
    imgUrl: 'https://res.cloudinary.com/lapkinthegod/image/upload/v1628001000/Rectangle_689_dzzqsc.jpg',
    value: 10,
    isDowngrade: true,
  },
  {
    id: 6,
    name: 'Ivanova Mia',
    imgUrl: 'https://res.cloudinary.com/lapkinthegod/image/upload/v1628001000/Rectangle_690_veiemr.jpg',
    value: 23,
    isDowngrade: false,
  },
];
