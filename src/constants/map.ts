interface Polyclinic {
  id: number;
  name: string;
  gps: {
    latitude: number;
    longitude: number;
  };
}

interface Doctor extends Polyclinic {
  specifity: string;
  imgUrl: string;
  rating: number;
}

export const doctorsData: Doctor[] = [
  {
    id: 1,
    gps: {
      latitude: 42.341798,
      longitude: -83.070841,
    },
    name: 'Ivanov Ivan',
    specifity: 'Dermatologist',
    imgUrl: 'https://res.cloudinary.com/lapkinthegod/image/upload/v1628001278/Rectangle_534_vxr19u.jpg',
    rating: 4,
  },
  {
    id: 2,
    gps: {
      latitude: 42.362096,
      longitude: -83.039921,
    },
    name: 'Ivanov Ivan',
    specifity: 'Dermatologist',
    imgUrl: 'https://res.cloudinary.com/lapkinthegod/image/upload/v1628001000/Rectangle_551_md1rkl.jpg',
    rating: 5,
  },
  {
    id: 3,
    gps: {
      latitude: 42.355246,
      longitude: -83.023087,
    },
    name: 'Ivanov Ivan',
    specifity: 'Dermatologist',
    imgUrl: 'https://res.cloudinary.com/lapkinthegod/image/upload/v1628001000/Rectangle_687_ohu79e.jpg',
    rating: 5,
  },
  {
    id: 4,
    gps: {
      latitude: 42.328601,
      longitude: -83.049541,
    },
    name: 'Ivanov Ivan',
    specifity: 'Dermatologist',
    imgUrl: 'https://res.cloudinary.com/lapkinthegod/image/upload/v1628001000/Rectangle_689_dzzqsc.jpg',
    rating: 4,
  },
];

export const polyclinicData: Polyclinic[] = [
  {
    id: 1,
    name: 'Polyclinic 42',
    gps: {
      latitude: 42.333804,
      longitude: -83.042268,
    },
  },
  {
    id: 2,
    name: 'Polyclinic 14',
    gps: {
      latitude: 42.331916,
      longitude: -83.038296,
    },
  },
  {
    id: 3,
    name: 'Polyclinic 26',
    gps: {
      latitude: 42.349918,
      longitude: -83.025836,
    },
  },
];
