import React from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import { CreditCard } from '../PaymentForm/interfaces';
import * as S from './PaymentCard.styles';

interface PaymentCardProps {
  className?: string;
  cardData: CreditCard;
  children?: React.ReactNode;
}

export const PaymentCard = React.forwardRef<HTMLDivElement, PaymentCardProps>(
  ({ className, cardData, children }, ref) => (
    <S.Wrapper className={className} ref={ref} background={cardData.background}>
      <Cards {...cardData} />
      {children}
    </S.Wrapper>
  ),
);
