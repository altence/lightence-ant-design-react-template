interface Polyclinic {
  id: number;
  name: string;
  gps: {
    latitude: number;
    longitude: number;
  };
}

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
