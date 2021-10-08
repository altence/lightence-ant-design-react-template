import React, { useCallback, useState } from 'react';
import { Modal, Form } from 'antd';
import { useTranslation } from 'react-i18next';
import { Card } from 'components/common/Card/Card';
import { Title } from '../../../ProfileForm/ProfileForm.styles';
import { PaymentCardCarousel } from './PaymentCardCarousel/PaymentCardCarousel';
import { PaymentForm } from './PaymentForm/PaymentForm';
import { CreditCard } from './PaymentForm/interfaces';
import { cardThemes } from 'constants/cardThemes';
import * as S from './PaymentMethod.styles';

export const clearCardData: CreditCard = {
  name: '',
  cvc: '',
  expiry: '',
  number: '',
  focused: '',
  background: cardThemes[0].background,
};

export const PaymentMethod: React.FC = () => {
  const { t } = useTranslation();
  const [isModalVisible, setModalVisible] = useState(false);
  const [cardData, setCardData] = useState<CreditCard>(clearCardData);
  const [cards, setCards] = useState<CreditCard[]>([]);
  const [editCard, setEditCard] = useState<CreditCard | null>(null);
  const [form] = Form.useForm();

  const handleOpenModal = useCallback(() => {
    setModalVisible(true);
  }, [setModalVisible]);

  const handleCloseModal = useCallback(() => {
    setModalVisible(false);
    form.setFieldsValue(clearCardData);
    setCardData(clearCardData);
    editCard && setEditCard(null);
  }, [setModalVisible, setCardData, editCard, setEditCard]);

  return (
    <Card padding="1.875rem 1rem">
      <Title>{t('profile.nav.payments.paymentMethod')}</Title>
      <PaymentCardCarousel
        cards={cards}
        setCards={setCards}
        setEditCard={setEditCard}
        handleOpenModal={handleOpenModal}
      />
      <S.AddBtn type="ghost" onClick={handleOpenModal}>
        {t('profile.nav.payments.addNewCard')}
      </S.AddBtn>
      <Modal visible={isModalVisible} onCancel={handleCloseModal} footer={null} closable={false}>
        <PaymentForm
          form={form}
          cardData={cardData}
          editCard={editCard}
          setCardData={setCardData}
          setCards={setCards}
          closeModal={handleCloseModal}
        />
      </Modal>
    </Card>
  );
};
