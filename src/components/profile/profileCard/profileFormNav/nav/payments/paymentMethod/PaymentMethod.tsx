import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Col, Row } from 'antd';
import { BaseForm } from '@app/components/common/forms/BaseForm/BaseForm';
import { Card } from '@app/components/common/Card/Card';
import { PaymentCardsWidget } from '@app/components/profile/profileCard/profileFormNav/nav/payments/paymentMethod/PaymentCardsWidget';
import { useResponsive } from '@app/hooks/useResponsive';
import { cards as initialCards } from '@app/constants/cards';
import { CreditCard } from '@app/components/profile/profileCard/profileFormNav/nav/payments/paymentMethod/paymentForm/interfaces';

export const PaymentMethod: React.FC = () => {
  const { t } = useTranslation();

  const [cards, setCards] = useState<CreditCard[]>(initialCards);

  const { isTablet } = useResponsive();

  const handleCardRemove = (cardNumber: string) => setCards(cards.filter((card) => card.number !== cardNumber));

  const handleCardAdd = (card: CreditCard) => {
    setCards([...cards, card]);
  };

  const content = (
    <Row gutter={[32, 32]}>
      <Col span={24}>
        <BaseForm.Title>{t('profile.nav.payments.paymentMethod')}</BaseForm.Title>
      </Col>
      <Col span={24}>
        <PaymentCardsWidget cards={cards} onCardRemove={handleCardRemove} onCardAdd={handleCardAdd} />
      </Col>
    </Row>
  );

  return isTablet ? content : <Card>{content}</Card>;
};
