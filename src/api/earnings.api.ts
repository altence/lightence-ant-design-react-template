import { CurrencyType } from '@app/interfaces/interfaces';

/* eslint-disable @typescript-eslint/no-unused-vars */
export interface Balance {
  usd_balance: number;
  eth_balance: number;
  btc_balance: number;
}

export interface Earning {
  date: number;
  usd_value: number;
}

export const getBalance = (id: number): Promise<Balance> => {
  return new Promise((res) => {
    setTimeout(() => {
      res({
        usd_balance: 3040.51,
        eth_balance: 1040.51,
        btc_balance: 5373.51,
      });
    }, 0);
  });
};

export const getNFTEarnings = (id: number, currency: CurrencyType): Promise<Earning[]> => {
  return new Promise((res) => {
    setTimeout(() => {
      res([
        {
          date: Date.now() - 1000 * 60 * 60 * 24 * 7,
          usd_value: 100,
        },
        {
          date: Date.now() - 1000 * 60 * 60 * 24 * 6,
          usd_value: 150,
        },
        {
          date: Date.now() - 1000 * 60 * 60 * 24 * 5,
          usd_value: 370,
        },
        {
          date: Date.now() - 1000 * 60 * 60 * 24 * 4,
          usd_value: 260,
        },
        {
          date: Date.now() - 1000 * 60 * 60 * 24 * 3,
          usd_value: 190,
        },
        {
          date: Date.now() - 1000 * 60 * 60 * 24 * 2,
          usd_value: 220,
        },
        {
          date: Date.now() - 1000 * 60 * 60 * 24,
          usd_value: 140,
        },
      ]);
    }, 0);
  });
};

export const getOtherEarnings = (id: number, currency: CurrencyType): Promise<Earning[]> => {
  return new Promise((res) => {
    setTimeout(() => {
      res([
        {
          date: Date.now() - 1000 * 60 * 60 * 24 * 7,
          usd_value: 100,
        },
        {
          date: Date.now() - 1000 * 60 * 60 * 24 * 6,
          usd_value: 200,
        },
        {
          date: Date.now() - 1000 * 60 * 60 * 24 * 5,
          usd_value: 220,
        },
        {
          date: Date.now() - 1000 * 60 * 60 * 24 * 4,
          usd_value: 230,
        },
        {
          date: Date.now() - 1000 * 60 * 60 * 24 * 3,
          usd_value: 350,
        },
        {
          date: Date.now() - 1000 * 60 * 60 * 24 * 2,
          usd_value: 280,
        },
        {
          date: Date.now() - 1000 * 60 * 60 * 24,
          usd_value: 140,
        },
      ]);
    }, 0);
  });
};
