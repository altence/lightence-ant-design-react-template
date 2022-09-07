import { CurrencyTypeEnum, PaymentCard } from '@app/interfaces/interfaces';

export interface TopUpData {
  amount: string;
  currency: CurrencyTypeEnum;
  card: string;
}

export interface TopUpDataProps {
  cards: PaymentCard[];
  loading: boolean;
  onFinish: (data: TopUpData) => void;
}
