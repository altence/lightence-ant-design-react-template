export interface Payment {
  id: number;
  seller: string;
  date: number;
  status: number;
  amount: number;
  currency: string;
  imgUrl: string;
}

export const getPaymentHistory = (): Promise<Payment[]> => {
  return new Promise((res) => {
    setTimeout(() => {
      res([
        {
          id: 1,
          seller: 'IBM Transactions',
          date: 1626037200000,
          status: 1,
          amount: 500,
          currency: 'USD',
          imgUrl: 'https://res.cloudinary.com/lapkinthegod/image/upload/v1632988451/Ellipse_72_hwxejr.png',
        },
        {
          id: 2,
          seller: 'Citigroup',
          date: 1630443600000,
          status: 2,
          amount: 40,
          currency: 'USD',
          imgUrl: 'https://res.cloudinary.com/lapkinthegod/image/upload/v1632988456/Ellipse_73_zanfs3.png',
        },
        {
          id: 3,
          seller: 'Netflix',
          date: 1628370000000,
          status: 3,
          amount: 1200,
          currency: 'USD',
          imgUrl: 'https://res.cloudinary.com/lapkinthegod/image/upload/v1632988460/Ellipse_73_1_hhfpzj.png',
        },
        {
          id: 4,
          seller: 'IBM Transactions',
          date: 1622667600000,
          status: 4,
          amount: 190,
          currency: 'USD',
          imgUrl: 'https://res.cloudinary.com/lapkinthegod/image/upload/v1632988451/Ellipse_72_hwxejr.png',
        },
      ]);
    }, 0);
  });
};
