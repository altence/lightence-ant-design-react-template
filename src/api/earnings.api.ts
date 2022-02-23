import { CurrencyType } from '@app/interfaces/interfaces';

/* eslint-disable @typescript-eslint/no-unused-vars */
export interface Balance {
  usd_balance: number;
  eth_balance: number;
  btc_balance: number;
}

export interface Earning {
  date: number;
  value: number;
  currency: CurrencyType;
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

export const getNFTEarnings = (id: number): Promise<Earning[]> => {
  return new Promise((res) => {
    setTimeout(() => {
      res([
        {
          date: Date.now() - 1000 * 60 * 60 * 24 * 7,
          value: 100,
          currency: 'USD',
        },
        {
          date: Date.now() - 1000 * 60 * 60 * 24 * 6,
          value: 250,
          currency: 'USD',
        },
        {
          date: Date.now() - 1000 * 60 * 60 * 24 * 5,
          value: 370,
          currency: 'USD',
        },
        {
          date: Date.now() - 1000 * 60 * 60 * 24 * 4,
          value: 300,
          currency: 'USD',
        },
        {
          date: Date.now() - 1000 * 60 * 60 * 24 * 3,
          value: 260,
          currency: 'USD',
        },
        {
          date: Date.now() - 1000 * 60 * 60 * 24 * 2,
          value: 230,
          currency: 'USD',
        },
        {
          date: Date.now() - 1000 * 60 * 60 * 24,
          value: 270,
          currency: 'USD',
        },
      ]);
    }, 0);
  });
};

export const getOtherEarnings = (id: number): Promise<Earning[]> => {
  return new Promise((res) => {
    setTimeout(() => {
      res([
        {
          date: Date.now() - 1000 * 60 * 60 * 24 * 7,
          value: 144,
          currency: 'USD',
        },
        {
          date: Date.now() - 1000 * 60 * 60 * 24 * 6,
          value: 122,
          currency: 'USD',
        },
        {
          date: Date.now() - 1000 * 60 * 60 * 24 * 5,
          value: 270,
          currency: 'USD',
        },
        {
          date: Date.now() - 1000 * 60 * 60 * 24 * 4,
          value: 292,
          currency: 'USD',
        },
        {
          date: Date.now() - 1000 * 60 * 60 * 24 * 3,
          value: 320,
          currency: 'USD',
        },
        {
          date: Date.now() - 1000 * 60 * 60 * 24 * 2,
          value: 167,
          currency: 'USD',
        },
        {
          date: Date.now() - 1000 * 60 * 60 * 24,
          value: 140,
          currency: 'USD',
        },
      ]);
    }, 0);
  });
};
