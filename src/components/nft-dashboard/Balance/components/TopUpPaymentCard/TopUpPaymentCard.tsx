import React from 'react';
import * as S from './TopUpPaymentCard.styles';

interface TopUpPaymentCardProps {
  img: string | null;
  type: string;
  number: string;
}

export const TopUpPaymentCard: React.FC<TopUpPaymentCardProps> = ({ img, type, number }) => {
  return (
    <S.Wrapper>
      <S.CardIssuerImg size={50} src={img} alt={type} />

      <S.InfoWrapper>
        <S.PaymentCardSystem level={5}>{type}</S.PaymentCardSystem>

        <S.PaymentCardNumber>{number}</S.PaymentCardNumber>
      </S.InfoWrapper>
    </S.Wrapper>
  );
};
