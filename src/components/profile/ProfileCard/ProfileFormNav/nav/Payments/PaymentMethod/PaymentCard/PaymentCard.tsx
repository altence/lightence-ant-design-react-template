import React from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import { CreditCard } from '../PaymentForm/interfaces';
import * as S from './PaymentCard.styles';

interface PaymentCardProps {
  className?: string;
  cardData: CreditCard;
}

export const PaymentCard: React.FC<PaymentCardProps> = ({ className, cardData, children }) => (
  <S.Wrapper className={className} background={cardData.background}>
    <Cards {...cardData} />
    {children}
  </S.Wrapper>
);
