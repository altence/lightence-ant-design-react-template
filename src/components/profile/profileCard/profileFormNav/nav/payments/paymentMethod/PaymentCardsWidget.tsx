import React from 'react';
import { CreditCard } from './paymentForm/interfaces';
import { PaymentCard } from '@app/components/profile/profileCard/profileFormNav/nav/payments/paymentMethod/PaymentCard/PaymentCard';
import { Col, Row } from 'antd';
import { useResponsive } from '@app/hooks/useResponsive';
import { ActionButtons } from '@app/components/profile/profileCard/profileFormNav/nav/payments/paymentMethod/ActionButtons/ActionButtons';
import { AddNewCardButton } from '@app/components/profile/profileCard/profileFormNav/nav/payments/paymentMethod/addNewCard/AddNewCardButton/AddNewCardButton';

interface PaymentCardsWidgetProps {
  cards: CreditCard[];
  onCardRemove: (cardNumber: string) => void;
  onCardAdd: (card: CreditCard) => void;
}

export const PaymentCardsWidget: React.FC<PaymentCardsWidgetProps> = ({ cards, onCardRemove, onCardAdd }) => {
  const { useMediaQuery } = useResponsive();

  const breakpoint = 659.98; // calculated manually according to default card size (290px) and other factors
  const isBreakpoint = useMediaQuery({ query: `(min-width: ${breakpoint}px)` });

  const justify = isBreakpoint ? 'start' : 'space-around';

  return (
    <Row justify={justify} gutter={[16, 16]}>
      {cards.map((card) => (
        <Col key={card.number}>
          <PaymentCard cardData={card}>
            <ActionButtons onRemove={() => onCardRemove(card.number)} />
          </PaymentCard>
        </Col>
      ))}
      <Col>
        <AddNewCardButton onCardAdd={onCardAdd} />
      </Col>
    </Row>
  );
};
