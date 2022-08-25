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
          image: process.env.REACT_APP_ASSETS_BUCKET + '/lightence-activity/unsplash_t1PQ4fYJu7M_ueosw4.webp',
          title: 'Cubic#1',
          status: 'sold',
          date: Date.now() - 1000 * 60 * 60 * 24 * 5,
          usd_value: 240,
        },
        {
          image: process.env.REACT_APP_ASSETS_BUCKET + '/lightence-activity/unsplash_1rBg5YSi00c_ctycjc.webp',
          title: 'Ancient Nature',
          status: 'added',
          date: Date.now() - 1000 * 60 * 60 * 24 * 22,
          usd_value: 1360,
        },
        {
          image: process.env.REACT_APP_ASSETS_BUCKET + '/lightence-activity/unsplash_t55GeRpETn0_s8myd3.webp',
          title: 'Art of Mind',
          status: 'booked',
          date: Date.now() - 1000 * 60 * 60 * 24 * 156,
          usd_value: 1895,
        },
        {
          image: process.env.REACT_APP_ASSETS_BUCKET + '/lightence-activity/unsplash_geJHvrH-CgA_n6mmkv.webp',
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
          image: process.env.REACT_APP_ASSETS_BUCKET + '/lightence-activity/unsplash_d2w-_1LJioQ_urzhuj.webp',
          title: 'Yellow Light',
          status: 'sold',
          date: Date.now() - 1000 * 60 * 24,
          owner: '@chingu98',
        },
        {
          image: process.env.REACT_APP_ASSETS_BUCKET + '/lightence-activity/unsplash_1rBg5YSi00c_1_mpz3a7.webp',
          title: 'Cult of Nature',
          status: 'added',
          date: Date.now() - 1000 * 60 * 60 * 2,
          owner: '@azukaru1X',
        },
        {
          image: process.env.REACT_APP_ASSETS_BUCKET + '/lightence-activity/unsplash_GfQEdpIkkuw_vid9mb.webp',
          title: 'Match the Eyes',
          status: 'booked',
          date: Date.now() - 1000 * 60 * 60 * 22,
          owner: '@samsam',
        },
        {
          image: process.env.REACT_APP_ASSETS_BUCKET + '/lightence-activity/unsplash_3MAmj1ZKSZA_rfbw6u.webp',
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
          image: process.env.REACT_APP_ASSETS_BUCKET + '/lightence-activity/unsplash_yhIsPgLfVNU_1_hdauhp.webp',
          avatar: process.env.REACT_APP_ASSETS_BUCKET + '/lightence-activity/unsplash_tmRuRPBiPcA_dlpsh0.webp',
          usd_value: 1045,
        },
        {
          title: 'TownYTraveler',
          owner: '@akura',
          image: process.env.REACT_APP_ASSETS_BUCKET + '/lightence-activity/unsplash_eHUMDkv4q1w_xchurr.webp',
          avatar: process.env.REACT_APP_ASSETS_BUCKET + '/lightence-activity/unsplash_Tgq8oggf0EY_mwyjub.webp',
          usd_value: 1045,
        },
        {
          title: 'TownYTraveler',
          owner: '@akura',
          image: process.env.REACT_APP_ASSETS_BUCKET + '/lightence-activity/unsplash_6JQn1G0lMgY_zqqd7q.webp',
          avatar: process.env.REACT_APP_ASSETS_BUCKET + '/lightence-activity/unsplash_nR-rzu8--5M_qwhnht.webp',
          usd_value: 1045,
        },
        {
          title: 'TownYTraveler',
          owner: '@akura',
          image:
            process.env.REACT_APP_ASSETS_BUCKET + '/lightence-activity/milad-fakurian-bMSA5-tLFao-unsplash_js8utz.webp',
          avatar:
            process.env.REACT_APP_ASSETS_BUCKET +
            '/lightence-activity/salvatore-andrea-santacroce-wGICoyAhEs4-unsplash_dfo8do.webp',
          usd_value: 1045,
        },
        {
          title: 'TownYTraveler',
          owner: '@akura',
          image:
            process.env.REACT_APP_ASSETS_BUCKET + '/lightence-activity/javier-miranda-xB2XP29gn10-unsplash_klwx4d.webp',
          avatar:
            process.env.REACT_APP_ASSETS_BUCKET + '/lightence-activity/simon-lee-hbFKxsIqclc-unsplash_vcv07z.webp',
          usd_value: 1045,
        },
      ]);
    }, 0);
  });
};
