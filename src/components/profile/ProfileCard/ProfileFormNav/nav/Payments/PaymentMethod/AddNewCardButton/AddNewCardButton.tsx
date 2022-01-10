import React, { useState } from 'react';
import * as S from '@app/components/profile/ProfileCard/ProfileFormNav/nav/Payments/PaymentMethod/AddNewCardButton/AddNewCardButton.styles';
import { AddNewCardModal } from '@app/components/profile/ProfileCard/ProfileFormNav/nav/Payments/PaymentMethod/PaymentModal/AddNewCardModal';
import { CreditCard } from '@app/components/profile/ProfileCard/ProfileFormNav/nav/Payments/PaymentMethod/PaymentForm/interfaces';
import { useTranslation } from 'react-i18next';

interface AddNewCardButtonProps {
  onCardAdd: (card: CreditCard) => Promise<void>;
}
export const AddNewCardButton: React.FC<AddNewCardButtonProps> = ({ onCardAdd }) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

  const { t } = useTranslation();

  return (
    <>
      <S.AddBtn type="ghost" onClick={openModal}>
        {t('profile.nav.payments.addNewCard')}
      </S.AddBtn>
      <AddNewCardModal isModalVisible={isModalVisible} closeModal={closeModal} onCardAdd={onCardAdd} />
    </>
  );
};
