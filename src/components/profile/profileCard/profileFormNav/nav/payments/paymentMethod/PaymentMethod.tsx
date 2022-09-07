import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Col, Row } from 'antd';
import { BaseForm } from '@app/components/common/forms/BaseForm/BaseForm';
import { Card } from '@app/components/common/Card/Card';
import { PaymentCardsWidget } from '@app/components/profile/profileCard/profileFormNav/nav/payments/paymentMethod/PaymentCardsWidget';
import { useResponsive } from '@app/hooks/useResponsive';
import { Spinner } from '@app/components/common/Spinner/Spinner';
import { PaymentCard } from '@app/interfaces/interfaces';
import { useAppSelector } from '@app/hooks/reduxHooks';
import { getPaymentCards } from '@app/api/paymentCards.api';

export const PaymentMethod: React.FC = () => {
  const { t } = useTranslation();

  const [cards, setCards] = useState<PaymentCard[]>([]);
  const [loading, setLoading] = useState(false);

  const id = useAppSelector((state) => state.user?.user?.id);

  useEffect(() => {
    if (id) {
      setLoading(true);
      getPaymentCards(id)
        .then((res) => setCards(res))
        .finally(() => setLoading(false));
    }
  }, [id]);

  const { isTablet } = useResponsive();

  const handleCardRemove = (cardNumber: string) => setCards(cards.filter((card) => card.number !== cardNumber));

  const handleCardAdd = (card: PaymentCard) => {
    setCards([...cards, card]);
  };

  const content = (
    <Row gutter={[32, 32]}>
      <Col span={24}>
        <BaseForm.Title>{t('profile.nav.payments.paymentMethod')}</BaseForm.Title>
      </Col>
      <Col span={24}>
        <Spinner spinning={loading}>
          <PaymentCardsWidget cards={cards} onCardRemove={handleCardRemove} onCardAdd={handleCardAdd} />
        </Spinner>
      </Col>
    </Row>
  );

  return isTablet ? content : <Card>{content}</Card>;
};
