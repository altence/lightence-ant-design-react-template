export interface Doctor {
  id: number;
  name: string;
  specifity: number;
  rating: number;
  gps: {
    latitude: number;
    longitude: number;
  };
  imgUrl: string;
}

// TODO change image. Find new images and add them locally

export const getDoctorsData = (): Promise<Doctor[]> => {
  return new Promise((res) => {
    setTimeout(() => {
      res([
        {
          id: 1,
          name: 'Ivanov Ivan',
          specifity: 1,
          rating: 5,
          gps: {
            latitude: 51.505,
            longitude: -0.09,
          },
          imgUrl:
            'https://res.cloudinary.com/lapkinthegod/image/upload/v1629187274/happy-young-male-doctor-using-tablet-computer_zjnbab.jpg',
        },
        {
          id: 2,
          name: 'Fedorova Lida',
          specifity: 2,
          rating: 5,
          gps: {
            latitude: 40.73061,
            longitude: -73.935242,
          },
          imgUrl:
            'https://res.cloudinary.com/lapkinthegod/image/upload/v1629187274/doctor-using-tablet-computer-isolated-white-wall_jmtkgi.jpg',
        },
        {
          id: 3,
          name: 'Kozlov Fedor',
          specifity: 3,
          rating: 4,
          gps: {
            latitude: -99.133209,
            longitude: 19.432608,
          },
          imgUrl:
            'https://res.cloudinary.com/lapkinthegod/image/upload/v1629187273/portrait-successful-mid-adult-doctor-with-crossed-arms_kp1eyf.jpg',
        },
        {
          id: 4,
          name: 'Chernov Alex',
          specifity: 4,
          rating: 5,
          gps: {
            latitude: 35.652832,
            longitude: 139.839478,
          },
          imgUrl:
            'https://res.cloudinary.com/lapkinthegod/image/upload/v1629187274/smile-happiness-nurse-medical-arab-strong_kqz3iv.jpg',
        },
        {
          id: 5,
          name: 'Zelenskiy Nik',
          specifity: 5,
          rating: 4,
          gps: {
            latitude: 52.520008,
            longitude: 13.404954,
          },
          imgUrl:
            'https://res.cloudinary.com/lapkinthegod/image/upload/v1629187273/hospital-healthcare-workers-covid-19-treatment-concept-young-doctor-scrubs-making-daily-errands-clinic-listening-patient-symptoms-look-camera-professional-physician-curing-diseases_a5tou4.jpg',
        },
        {
          id: 6,
          name: 'Buzmakova Mia',
          specifity: 6,
          rating: 5,
          gps: {
            latitude: -26.195246,
            longitude: 28.034088,
          },
          imgUrl:
            'https://res.cloudinary.com/lapkinthegod/image/upload/v1629187274/studio-shot-attractive-middle-aged-blonde-woman-physician-with-stethoscope-around-her-neck-posing-isolated-with-pen-clipboard-making-medical-records-prescribing-treatment-patient_l8ygoh.jpg',
        },
        {
          id: 7,
          name: 'Lapkin Filipp',
          specifity: 7,
          rating: 4,
          gps: {
            latitude: -22.908333,
            longitude: -43.196388,
          },
          imgUrl:
            'https://res.cloudinary.com/lapkinthegod/image/upload/v1629187274/young-male-doctor-white-uniform_x7dcrs.jpg',
        },
        {
          id: 8,
          name: 'Test',
          specifity: 7,
          rating: 4,
          gps: {
            latitude: 49.895077,
            longitude: -97.138451,
          },
          imgUrl:
            'https://res.cloudinary.com/lapkinthegod/image/upload/v1629187274/young-male-doctor-white-uniform_x7dcrs.jpg',
        },
        {
          id: 9,
          name: 'Test',
          specifity: 7,
          rating: 4,
          gps: {
            latitude: 31.628674,
            longitude: -7.992047,
          },
          imgUrl:
            'https://res.cloudinary.com/lapkinthegod/image/upload/v1629187274/young-male-doctor-white-uniform_x7dcrs.jpg',
        },
      ]);
    }, 0);
  });
};
