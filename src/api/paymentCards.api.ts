import { cardThemes } from '@app/constants/cardThemes';
import { PaymentCard } from '@app/interfaces/interfaces';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getPaymentCards = (id: number): Promise<PaymentCard[]> =>
  new Promise((res) =>
    setTimeout(
      () =>
        res([
          {
            name: 'Dean James',
            cvc: '144',
            expiry: '11/24',
            number: '4255 2003 0168 9006',
            focused: '',
            background: cardThemes[0].background,
            isEdit: false,
          },
          {
            name: 'Walker Alan',
            cvc: '179',
            expiry: '05/23',
            number: '5245 0017 2000 0164',
            focused: '',
            background: cardThemes[3].background,
            isEdit: false,
          },
          {
            name: 'Jackson Michael',
            cvc: '345',
            expiry: '12/22',
            number: '4255 1000 2046 8006',
            focused: '',
            background: cardThemes[5].background,
            isEdit: false,
          },
          {
            name: 'Christopher Johnson',
            cvc: '222',
            expiry: '09/24',
            number: '5205 0024 2535 5235',
            focused: '',
            background: cardThemes[4].background,
            isEdit: false,
          },
        ]),
      1500,
    ),
  );
