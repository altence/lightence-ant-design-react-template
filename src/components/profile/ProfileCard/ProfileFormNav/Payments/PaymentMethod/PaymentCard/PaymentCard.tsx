import React from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import * as S from './PaymentCard.styles';

export interface CreditCard {
  cvc: string;
  expiry: string;
  name: string;
  number: string;
  focused: any | undefined;
  theme?: string;
}

interface PaymentCardProps {
  className?: string;
  cardData: CreditCard;
  background: string;
}

export const PaymentCard: React.FC<PaymentCardProps> = ({ className, cardData, background, children }) => (
  <S.Wrapper className={className} background={background}>
    <Cards {...cardData} />
    {children}
  </S.Wrapper>
);
