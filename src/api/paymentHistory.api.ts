import ibm from '@app/assets/images/logos/ibm.png';
import citigroup from '@app/assets/images/logos/citigroup.png';
import netflix from '@app/assets/images/logos/netflix.png';

export interface Payment {
  id: number;
  recipient: string;
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
          recipient: 'IBM Transactions',
          date: 1626037200000,
          status: 1,
          amount: 500,
          currency: 'USD',
          imgUrl: ibm,
        },
        {
          id: 2,
          recipient: 'Citigroup',
          date: 1630443600000,
          status: 2,
          amount: 40,
          currency: 'USD',
          imgUrl: citigroup,
        },
        {
          id: 3,
          recipient: 'Netflix',
          date: 1628370000000,
          status: 3,
          amount: 1200,
          currency: 'USD',
          imgUrl: netflix,
        },
        {
          id: 4,
          recipient: 'IBM Transactions',
          date: 1622667600000,
          status: 4,
          amount: 190,
          currency: 'USD',
          imgUrl: ibm,
        },
      ]);
    }, 0);
  });
};
