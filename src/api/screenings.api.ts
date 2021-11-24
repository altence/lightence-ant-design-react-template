export interface Screening {
  name: string;
  imgUrl: string;
  value: number;
  prevValue: number;
  data: number[];
}

export const getScreenings = (): Promise<Screening[]> => {
  return new Promise((res) => {
    setTimeout(() => {
      res([
        {
          name: 'Ivanov Ivan',
          imgUrl:
            'https://res.cloudinary.com/lapkinthegod/image/upload/v1629187274/happy-young-male-doctor-using-tablet-computer_zjnbab.jpg',
          value: 45,
          prevValue: 30,
          data: [28, 32, 39, 41, 38, 40, 45, 49, 50, 48],
        },
        {
          name: 'Fedorova Lida',
          value: 12,
          prevValue: 20,
          imgUrl:
            'https://res.cloudinary.com/lapkinthegod/image/upload/v1629187274/doctor-using-tablet-computer-isolated-white-wall_jmtkgi.jpg',
          data: [22, 22, 25, 31, 38, 43, 42, 38, 36, 38],
        },
        {
          name: 'Ivanov Fedor',
          value: 90,
          prevValue: 60,
          imgUrl:
            'https://res.cloudinary.com/lapkinthegod/image/upload/v1629187273/portrait-successful-mid-adult-doctor-with-crossed-arms_kp1eyf.jpg',
          data: [22, 34, 55, 44, 34, 54, 56, 34, 34, 38],
        },
        {
          name: 'Ivanova Rita',
          value: 78,
          prevValue: 90,
          imgUrl:
            'https://res.cloudinary.com/lapkinthegod/image/upload/v1629187274/studio-shot-attractive-middle-aged-blonde-woman-physician-with-stethoscope-around-her-neck-posing-isolated-with-pen-clipboard-making-medical-records-prescribing-treatment-patient_l8ygoh.jpg',
          data: [33, 23, 43, 35, 47, 45, 43, 40, 45, 44],
        },
        {
          name: 'Fedorov Nik',
          value: 78,
          prevValue: 0,
          imgUrl:
            'https://res.cloudinary.com/lapkinthegod/image/upload/v1629187274/smile-happiness-nurse-medical-arab-strong_kqz3iv.jpg',
          data: [0, 34, 53, 56, 53, 64, 64, 44, 64, 53],
        },
        {
          name: 'Ivanova Mia',
          value: 78,
          prevValue: 90,
          imgUrl:
            'https://res.cloudinary.com/lapkinthegod/image/upload/v1629187274/young-male-doctor-white-uniform_x7dcrs.jpg',
          data: [42, 53, 44, 35, 64, 45, 43, 32, 34, 26],
        },
      ]);
    }, 0);
  });
};
