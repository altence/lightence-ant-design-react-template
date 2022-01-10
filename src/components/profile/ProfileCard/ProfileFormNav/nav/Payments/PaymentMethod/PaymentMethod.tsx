import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Card } from 'components/common/Card/Card';
import { FormItem, Title } from '@app/components/common/Form/Form.styles';
import { CreditCard } from './PaymentForm/interfaces';
import { AddNewCardModal } from './PaymentModal/AddNewCardModal';
import { useResponsive } from 'hooks/useResponsive';
import { cards as initialCards } from '@app/constants/data/cards';
import * as S from './PaymentMethod.styles';
import { PaymentCardsWidget } from '@app/components/profile/ProfileCard/ProfileFormNav/nav/Payments/PaymentMethod/PaymentCardsWidget';
import { addCreditCard } from '@app/api/users.api';

export const PaymentMethod: React.FC = () => {
  const { t } = useTranslation();
  const [isModalVisible, setModalVisible] = useState(false);
  const [cards, setCards] = useState<CreditCard[]>(initialCards);

  const { isTablet } = useResponsive();

  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

  const handleCardRemove = (cardNumber: string) => setCards(cards.filter((card) => card.number !== cardNumber));

  const handleCardAdd = (card: CreditCard) => {
    return addCreditCard(card).then(() => setCards([...cards, card]));
  };

  const content = (
    <S.Wrapper>
      <FormItem>
        <Title>{t('profile.nav.payments.paymentMethod')}</Title>
      </FormItem>
      <PaymentCardsWidget cards={cards} onCardRemove={handleCardRemove} />
      <S.AddBtn type="ghost" onClick={openModal}>
        {t('profile.nav.payments.addNewCard')}
      </S.AddBtn>
      <AddNewCardModal isModalVisible={isModalVisible} closeModal={closeModal} onCardAdd={handleCardAdd} />
    </S.Wrapper>
  );

  return isTablet ? content : <Card>{content}</Card>;
};
