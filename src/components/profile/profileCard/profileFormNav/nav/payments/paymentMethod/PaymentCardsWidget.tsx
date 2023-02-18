import React from 'react';
import { PaymentCard as IPaymentCard } from '@app/interfaces/interfaces';
import { PaymentCard } from '@app/components/profile/profileCard/profileFormNav/nav/payments/paymentMethod/PaymentCard/PaymentCard';
import { useResponsive } from '@app/hooks/useResponsive';
import { ActionButtons } from '@app/components/profile/profileCard/profileFormNav/nav/payments/paymentMethod/ActionButtons/ActionButtons';
import { AddNewCardButton } from '@app/components/profile/profileCard/profileFormNav/nav/payments/paymentMethod/addNewCard/AddNewCardButton/AddNewCardButton';
import { BaseRow } from '@app/components/common/BaseRow/BaseRow';
import { BaseCol } from '@app/components/common/BaseCol/BaseCol';

interface PaymentCardsWidgetProps {
  cards: IPaymentCard[];
  onCardRemove: (cardNumber: string) => void;
  onCardAdd: (card: IPaymentCard) => void;
}

export const PaymentCardsWidget: React.FC<PaymentCardsWidgetProps> = ({ cards, onCardRemove, onCardAdd }) => {
  const { useMediaQuery } = useResponsive();

  const breakpoint = 659.98; // calculated manually according to default card size (290px) and other factors
  const isBreakpoint = useMediaQuery({ query: `(min-width: ${breakpoint}px)` });

  const justify = isBreakpoint ? 'start' : 'space-around';

  return (
    <BaseRow justify={justify} gutter={[16, 16]}>
      {cards.map((card) => (
        <BaseCol key={card.number}>
          <PaymentCard cardData={card}>
            <ActionButtons onRemove={() => onCardRemove(card.number)} />
          </PaymentCard>
        </BaseCol>
      ))}
      <BaseCol>
        <AddNewCardButton onCardAdd={onCardAdd} />
      </BaseCol>
    </BaseRow>
  );
};
