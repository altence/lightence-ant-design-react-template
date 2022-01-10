import React from 'react';
import { CreditCard } from './PaymentForm/interfaces';
import { PaymentCard } from '@app/components/profile/ProfileCard/ProfileFormNav/nav/Payments/PaymentMethod/PaymentCard/PaymentCard';
import { Col, Row } from 'antd';
import { useResponsive } from '@app/hooks/useResponsive';
import { ActionButtons } from '@app/components/profile/ProfileCard/ProfileFormNav/nav/Payments/PaymentMethod/PaymentCardCarousel/ActionButtons/ActionButtons';

interface PaymentCardsWidgetProps {
  cards: CreditCard[];
  onCardEdit: (card: CreditCard) => void;
  onCardRemove: (cardNumber: string) => void;
}

export const PaymentCardsWidget: React.FC<PaymentCardsWidgetProps> = ({ cards, onCardEdit, onCardRemove }) => {
  const { useMediaQuery } = useResponsive();

  const breakpoint = 659.98; // calculated manually according to default card size (290px) and other factors
  const isBreakpoint = useMediaQuery({ query: `(min-width: ${breakpoint}px)` });

  const justify = isBreakpoint ? 'start' : 'space-around';

  return (
    <Row justify={justify} gutter={[16, 16]}>
      {cards.map((card) => (
        <Col key={card.number}>
          <PaymentCard cardData={card}>
            <ActionButtons onEdit={() => onCardEdit(card)} onRemove={() => onCardRemove(card.number)} />
          </PaymentCard>
        </Col>
      ))}
    </Row>
  );
};
