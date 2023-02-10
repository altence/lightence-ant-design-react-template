import React, { useState } from 'react';
import * as S from '@app/components/profile/profileCard/profileFormNav/nav/payments/paymentMethod/addNewCard/AddNewCardButton/AddNewCardButton.styles';
import { AddNewCardModal } from '@app/components/profile/profileCard/profileFormNav/nav/payments/paymentMethod/addNewCard/AddNewCardModal';
import { useTranslation } from 'react-i18next';
import { PaymentCard } from '@app/interfaces/interfaces';

interface AddNewCardButtonProps {
  onCardAdd: (card: PaymentCard) => void;
}
export const AddNewCardButton: React.FC<AddNewCardButtonProps> = ({ onCardAdd }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const { t } = useTranslation();

  return (
    <>
      <S.AddBtn type="ghost" onClick={openModal}>
        {t('profile.nav.payments.addNewCard')}
      </S.AddBtn>
      <AddNewCardModal isModalOpen={isModalOpen} closeModal={closeModal} onCardAdd={onCardAdd} />
    </>
  );
};
