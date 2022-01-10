import React from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import { CreditCard } from '../paymentForm/interfaces';
import * as S from './PaymentCard.styles';

interface PaymentCardProps {
  className?: string;
  cardData: CreditCard;
  children?: React.ReactNode;
}

export const PaymentCard: React.FC<PaymentCardProps> = ({ className, cardData, children }) => (
  <S.Wrapper className={className} $background={cardData.background}>
    <Cards {...cardData} />
    {children}
  </S.Wrapper>
);
