import { ActivityStatusType } from '@app/interfaces/interfaces';

export interface Activity {
  image: string;
  title: string;
  status: ActivityStatusType;
  date: number;
  owner: string;
}

export interface UserActivity extends Omit<Activity, 'owner'> {
  usd_value: number;
}

export interface TrendingActivity {
  title: string;
  owner: string;
  image: string;
  avatar: string;
  usd_value: number;
}

export const getUserActivities = (): Promise<UserActivity[]> => {
  return new Promise((res) => {
    setTimeout(() => {
      res([
        {
          image: 'https://res.cloudinary.com/lapkinthegod/image/upload/v1645568175/unsplash_t1PQ4fYJu7M_ueosw4.png',
          title: 'Cubic#1',
          status: 'sold',
          date: Date.now() - 1000 * 60 * 60 * 24 * 5,
          usd_value: 240,
        },
        {
          image: 'https://res.cloudinary.com/lapkinthegod/image/upload/v1645568179/unsplash_1rBg5YSi00c_ctycjc.png',
          title: 'Ancient Nature',
          status: 'added',
          date: Date.now() - 1000 * 60 * 60 * 24 * 22,
          usd_value: 1360,
        },
        {
          image: 'https://res.cloudinary.com/lapkinthegod/image/upload/v1645568182/unsplash_t55GeRpETn0_s8myd3.png',
          title: 'Art of Mind',
          status: 'booked',
          date: Date.now() - 1000 * 60 * 60 * 24 * 156,
          usd_value: 1895,
        },
        {
          image: 'https://res.cloudinary.com/lapkinthegod/image/upload/v1645568184/unsplash_geJHvrH-CgA_n6mmkv.png',
          title: 'CryptoBox',
          status: 'sold',
          date: Date.now() - 1000 * 60 * 60 * 24 * 31,
          usd_value: 3920,
        },
      ]);
    }, 0);
  });
};

export const getActivities = (): Promise<Activity[]> => {
  return new Promise((res) => {
    setTimeout(() => {
      res([
        {
          image: 'https://res.cloudinary.com/lapkinthegod/image/upload/v1645813445/unsplash_d2w-_1LJioQ_urzhuj.png',
          title: 'Yellow Light',
          status: 'sold',
          date: Date.now() - 1000 * 60 * 24,
          owner: '@chingu98',
        },
        {
          image: 'https://res.cloudinary.com/lapkinthegod/image/upload/v1645813449/unsplash_1rBg5YSi00c_1_mpz3a7.png',
          title: 'Cult of Nature',
          status: 'added',
          date: Date.now() - 1000 * 60 * 60 * 2,
          owner: '@azukaru1X',
        },
        {
          image: 'https://res.cloudinary.com/lapkinthegod/image/upload/v1645813452/unsplash_GfQEdpIkkuw_vid9mb.png',
          title: 'Match the Eyes',
          status: 'booked',
          date: Date.now() - 1000 * 60 * 60 * 22,
          owner: '@samsam',
        },
        {
          image: 'https://res.cloudinary.com/lapkinthegod/image/upload/v1645813455/unsplash_3MAmj1ZKSZA_rfbw6u.png',
          title: 'Plan A & CUSTOM X3',
          status: 'sold',
          date: Date.now() - 1000 * 60 * 60 * 8,
          owner: '@mikke_swar',
        },
      ]);
    }, 1000);
  });
};

export const getTrendingActivities = (): Promise<TrendingActivity[]> => {
  return new Promise((res) => {
    setTimeout(() => {
      res([
        {
          title: 'TownYTraveler',
          owner: '@akura',
          image: 'https://res.cloudinary.com/lapkinthegod/image/upload/v1646228769/unsplash_yhIsPgLfVNU_1_hdauhp.png',
          avatar: 'https://res.cloudinary.com/lapkinthegod/image/upload/v1646228774/unsplash_tmRuRPBiPcA_dlpsh0.png',
          usd_value: 1045,
        },
        {
          title: 'TownYTraveler',
          owner: '@akura',
          image: 'https://res.cloudinary.com/lapkinthegod/image/upload/v1646228777/unsplash_eHUMDkv4q1w_xchurr.png',
          avatar: 'https://res.cloudinary.com/lapkinthegod/image/upload/v1646228780/unsplash_Tgq8oggf0EY_mwyjub.png',
          usd_value: 1045,
        },
        {
          title: 'TownYTraveler',
          owner: '@akura',
          image: 'https://res.cloudinary.com/lapkinthegod/image/upload/v1646228783/unsplash_6JQn1G0lMgY_zqqd7q.png',
          avatar: 'https://res.cloudinary.com/lapkinthegod/image/upload/v1646228786/unsplash_nR-rzu8--5M_qwhnht.png',
          usd_value: 1045,
        },
        {
          title: 'TownYTraveler',
          owner: '@akura',
          image:
            'https://res.cloudinary.com/lapkinthegod/image/upload/v1647286450/milad-fakurian-bMSA5-tLFao-unsplash_js8utz.jpg',
          avatar:
            'https://res.cloudinary.com/lapkinthegod/image/upload/v1647286511/salvatore-andrea-santacroce-wGICoyAhEs4-unsplash_dfo8do.jpg',
          usd_value: 1045,
        },
        {
          title: 'TownYTraveler',
          owner: '@akura',
          image:
            'https://res.cloudinary.com/lapkinthegod/image/upload/v1647286453/javier-miranda-xB2XP29gn10-unsplash_klwx4d.jpg',
          avatar:
            'https://res.cloudinary.com/lapkinthegod/image/upload/v1647286517/simon-lee-hbFKxsIqclc-unsplash_vcv07z.jpg',
          usd_value: 1045,
        },
      ]);
    }, 0);
  });
};
