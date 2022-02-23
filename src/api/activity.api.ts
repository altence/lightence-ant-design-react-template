import { CurrencyType } from '@app/interfaces/interfaces';

export interface Activity {
  image: string;
  title: string;
  status: string;
  date: number;
  price: number;
  currency: CurrencyType;
}

export const getActivities = (): Promise<Activity[]> => {
  return new Promise((res) => {
    setTimeout(() => {
      res([
        {
          image: 'https://res.cloudinary.com/lapkinthegod/image/upload/v1645568175/unsplash_t1PQ4fYJu7M_ueosw4.png',
          title: 'Cubic#1',
          status: 'sold',
          date: Date.now() - 1000 * 60 * 60 * 24 * 5,
          price: 240,
          currency: 'USD',
        },
        {
          image: 'https://res.cloudinary.com/lapkinthegod/image/upload/v1645568179/unsplash_1rBg5YSi00c_ctycjc.png',
          title: 'Ancient Nature',
          status: 'added',
          date: Date.now() - 1000 * 60 * 60 * 24 * 22,
          price: 1360,
          currency: 'USD',
        },
        {
          image: 'https://res.cloudinary.com/lapkinthegod/image/upload/v1645568182/unsplash_t55GeRpETn0_s8myd3.png',
          title: 'Art of Mind',
          status: 'booked',
          date: Date.now() - 1000 * 60 * 60 * 24 * 156,
          price: 1895,
          currency: 'USD',
        },
        {
          image: 'https://res.cloudinary.com/lapkinthegod/image/upload/v1645568184/unsplash_geJHvrH-CgA_n6mmkv.png',
          title: 'CryptoBox',
          status: 'sold',
          date: Date.now() - 1000 * 60 * 60 * 24 * 31,
          price: 3920,
          currency: 'USD',
        },
      ]);
    }, 0);
  });
};
