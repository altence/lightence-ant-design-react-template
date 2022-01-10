import React, { useCallback, useState } from 'react';
import { Form } from 'antd';
import { useTranslation } from 'react-i18next';
import { Card } from 'components/common/Card/Card';
import { FormItem, Title } from '@app/components/common/Form/Form.styles';
import { CreditCard } from './PaymentForm/interfaces';
import { cardThemes } from 'constants/cardThemes';
import { PaymentModal } from './PaymentModal/PaymentModal';
import { useResponsive } from 'hooks/useResponsive';
import { cards as initialCards } from '@app/constants/data/cards';
import * as S from './PaymentMethod.styles';
import { PaymentCardsWidget } from '@app/components/profile/ProfileCard/ProfileFormNav/nav/Payments/PaymentMethod/PaymentCardsWidget';

export const clearCardData: CreditCard = {
  name: '',
  cvc: '',
  expiry: '',
  number: '',
  focused: '',
  background: cardThemes[0].background,
  isEdit: false,
};

export const PaymentMethod: React.FC = () => {
  const { t } = useTranslation();
  const [isModalVisible, setModalVisible] = useState(false);
  const [cardData, setCardData] = useState<CreditCard>(clearCardData);
  const [cards, setCards] = useState<CreditCard[]>(initialCards);

  const [form] = Form.useForm();

  const { isTablet } = useResponsive();

  const handleOpenModal = useCallback(() => {
    setModalVisible(true);
  }, [setModalVisible]);

  const handleCardRemove = (cardNumber: string) => setCards(cards.filter((card) => card.number !== cardNumber));

  const handleCardEdit = (card: CreditCard) => {
    const editCard = { ...card, isEdit: true };
    setCardData(editCard);
    form.setFieldsValue(editCard);
    handleOpenModal();
  };

  const content = (
    <S.Wrapper>
      <FormItem>
        <Title>{t('profile.nav.payments.paymentMethod')}</Title>
      </FormItem>
      <PaymentCardsWidget cards={cards} onCardEdit={handleCardEdit} onCardRemove={handleCardRemove} />
      <S.AddBtn type="ghost" onClick={handleOpenModal}>
        {t('profile.nav.payments.addNewCard')}
      </S.AddBtn>
      <PaymentModal
        isModalVisible={isModalVisible}
        setModalVisible={setModalVisible}
        form={form}
        cardData={cardData}
        setCardData={setCardData}
        setCards={setCards}
      />
    </S.Wrapper>
  );

  return isTablet ? content : <Card>{content}</Card>;
};
