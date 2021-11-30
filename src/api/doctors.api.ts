import { Dates } from 'constants/Dates';

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
  phone: string;
  address: string;
}

// TODO change image. Find new images and add them locally

export const getDoctorsData = (): Promise<Doctor[]> => {
  return new Promise((res) => {
    setTimeout(() => {
      res([
        {
          id: 1,
          name: 'Anthony Owen',
          specifity: 1,
          rating: 5,
          gps: {
            latitude: 51.505,
            longitude: -0.09,
          },
          imgUrl:
            'https://res.cloudinary.com/lapkinthegod/image/upload/v1629187274/happy-young-male-doctor-using-tablet-computer_zjnbab.jpg',
          phone: '+X-XXX-XXX-XXXX',
          address: '98 Santa Clara Court Cherry Hill, NJ 08003',
        },
        {
          id: 2,
          name: 'Kate Walker',
          specifity: 2,
          rating: 5,
          gps: {
            latitude: 40.73061,
            longitude: -73.935242,
          },
          imgUrl:
            'https://res.cloudinary.com/lapkinthegod/image/upload/v1629187274/doctor-using-tablet-computer-isolated-white-wall_jmtkgi.jpg',
          phone: '+X-XXX-XXX-XXXX',
          address: '111 Foxrun Street Conyers, GA 30012',
        },
        {
          id: 3,
          name: 'Finley Edwards',
          specifity: 3,
          rating: 4,
          gps: {
            latitude: -99.133209,
            longitude: 19.432608,
          },
          imgUrl:
            'https://res.cloudinary.com/lapkinthegod/image/upload/v1629187273/portrait-successful-mid-adult-doctor-with-crossed-arms_kp1eyf.jpg',
          phone: '+X-XXX-XXX-XXXX',
          address: '9540 South Del Monte Rd. West Hempstead, NY 11552',
        },
        {
          id: 4,
          name: 'Henry James',
          specifity: 4,
          rating: 5,
          gps: {
            latitude: 35.652832,
            longitude: 139.839478,
          },
          imgUrl:
            'https://res.cloudinary.com/lapkinthegod/image/upload/v1629187274/smile-happiness-nurse-medical-arab-strong_kqz3iv.jpg',
          phone: '+X-XXX-XXX-XXXX',
          address: '9 Wagon Street Ravenna, OH 44266',
        },
        {
          id: 5,
          name: 'Oscar Davies',
          specifity: 5,
          rating: 4,
          gps: {
            latitude: 52.520008,
            longitude: 13.404954,
          },
          imgUrl:
            'https://res.cloudinary.com/lapkinthegod/image/upload/v1629187273/hospital-healthcare-workers-covid-19-treatment-concept-young-doctor-scrubs-making-daily-errands-clinic-listening-patient-symptoms-look-camera-professional-physician-curing-diseases_a5tou4.jpg',
          phone: '+X-XXX-XXX-XXXX',
          address: '9568 Tower St. Somerset, NJ 08873',
        },
        {
          id: 6,
          name: 'Madeleine Newman',
          specifity: 6,
          rating: 5,
          gps: {
            latitude: -26.195246,
            longitude: 28.034088,
          },
          imgUrl:
            'https://res.cloudinary.com/lapkinthegod/image/upload/v1629187274/studio-shot-attractive-middle-aged-blonde-woman-physician-with-stethoscope-around-her-neck-posing-isolated-with-pen-clipboard-making-medical-records-prescribing-treatment-patient_l8ygoh.jpg',
          phone: '+X-XXX-XXX-XXXX',
          address: '850 South Tunnel St. Newburgh, NY 12550',
        },
        {
          id: 7,
          name: 'Bailey Lee',
          specifity: 7,
          rating: 4,
          gps: {
            latitude: -22.908333,
            longitude: -43.196388,
          },
          imgUrl:
            'https://res.cloudinary.com/lapkinthegod/image/upload/v1629187274/young-male-doctor-white-uniform_x7dcrs.jpg',
          phone: '+X-XXX-XXX-XXXX',
          address: '7634 Taylor St. Boston, MA 02127',
        },
        {
          id: 8,
          name: 'Evan Bennett',
          specifity: 7,
          rating: 4,
          gps: {
            latitude: 49.895077,
            longitude: -97.138451,
          },
          imgUrl:
            'https://res.cloudinary.com/lapkinthegod/image/upload/v1629187274/young-male-doctor-white-uniform_x7dcrs.jpg',
          phone: '+X-XXX-XXX-XXXX',
          address: '8687 Helen St. Orange Park, FL 32065',
        },
        {
          id: 9,
          name: 'Alvin Jimenez',
          specifity: 7,
          rating: 4,
          gps: {
            latitude: 31.628674,
            longitude: -7.992047,
          },
          imgUrl:
            'https://res.cloudinary.com/lapkinthegod/image/upload/v1629187274/young-male-doctor-white-uniform_x7dcrs.jpg',
          phone: '+X-XXX-XXX-XXXX',
          address: '90 Taylor Drive Saginaw, MI 48601',
        },
      ]);
    }, 0);
  });
};

const now = Dates.getToday().valueOf();

export interface History {
  doctor: number;
  date: number;
}

export const getDoctorsHistory = (): Promise<History[]> => {
  return new Promise((res) => {
    setTimeout(() => {
      res([
        {
          doctor: 1,
          date: now - 1000 * 60 * 60 * 24,
        },
        {
          doctor: 2,
          date: now - 1000 * 60 * 60 * 24 * 10,
        },
        {
          doctor: 3,
          date: now - 1000 * 60 * 60 * 24 * 2,
        },
        {
          doctor: 4,
          date: now - 1000 * 60 * 60 * 24 * 4,
        },
        {
          doctor: 5,
          date: now - 1000 * 60 * 60 * 24 * 22,
        },
        {
          doctor: 6,
          date: now - 1000 * 60 * 60 * 24 * 16,
        },
      ]);
    }, 0);
  });
};
