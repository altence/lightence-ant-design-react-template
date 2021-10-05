import React, { useCallback, useState } from 'react';
import { Modal } from 'antd';
import { cardThemes } from 'constants/cardThemes';
import { CreditCard } from '../PaymentCard/PaymentCard';
import * as S from './PaymentCardModal.styles';
import { PaymentCardForm } from './PaymentCardForm/PaymentCardForm';

export const emptyCardState: CreditCard = {
  cvc: '',
  expiry: '',
  name: '',
  number: '',
  focused: 'name',
};

export interface CardData {
  disabled: boolean;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleInputFocus: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface PaymentCardModalProps {
  editCard: CreditCard | null;
  setEditCard: (state: null) => void;
  isModalVisible: boolean;
  setModalVisible: (state: boolean) => void;
  setCards: (func: (state: CreditCard[]) => CreditCard[]) => void;
}

export const PaymentCardModal: React.FC<PaymentCardModalProps> = ({
  editCard,
  setEditCard,
  isModalVisible,
  setModalVisible,
  setCards,
}) => {
  const [currentTheme, setCurrentTheme] = useState(cardThemes[0].background);
  const [cardData, setCardData] = useState<CreditCard>(emptyCardState);

  const handleCancel = useCallback(() => {
    setModalVisible(false);
    setEditCard(null);
  }, [setModalVisible, setEditCard, editCard]);

  return (
    <Modal visible={isModalVisible} footer={null} closable={false} onCancel={handleCancel}>
      <S.PayCard cardData={cardData} background={currentTheme} />
      <PaymentCardForm
        editCard={editCard}
        setEditCard={setEditCard}
        setModalVisible={setModalVisible}
        currentTheme={currentTheme}
        setCurrentTheme={setCurrentTheme}
        cardData={cardData}
        setCardData={setCardData}
        setCards={setCards}
      />
    </Modal>
  );
};
