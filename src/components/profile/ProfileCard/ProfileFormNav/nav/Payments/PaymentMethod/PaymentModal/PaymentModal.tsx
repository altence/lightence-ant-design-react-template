import React, { useCallback } from 'react';
import { FormInstance, Modal } from 'antd';
import { CreditCard } from '../PaymentForm/interfaces';
import { PaymentForm } from '../PaymentForm/PaymentForm';
import { clearCardData } from '../PaymentMethod';
import { useMediaQuery } from 'react-responsive';
import theme from 'styles/theme';

interface PaymentModalProps {
  isModalVisible: boolean;
  setModalVisible: (state: boolean) => void;
  form: FormInstance;
  cardData: CreditCard;
  editCard: CreditCard | null;
  setEditCard: (state: null) => void;
  setCardData: (state: CreditCard) => void;
  setCards: (func: (state: CreditCard[]) => CreditCard[]) => void;
}

export const PaymentModal: React.FC<PaymentModalProps> = ({
  isModalVisible,
  setModalVisible,
  form,
  cardData,
  editCard,
  setEditCard,
  setCardData,
  setCards,
}) => {
  const isTablet = useMediaQuery({ query: theme.media.md });

  const handleCloseModal = useCallback(() => {
    setModalVisible(false);
    form.setFieldsValue(clearCardData);
    setCardData(clearCardData);
    editCard && setEditCard(null);
  }, [setModalVisible, setCardData, editCard, setEditCard]);

  return (
    <Modal
      visible={isModalVisible}
      onCancel={handleCloseModal}
      footer={null}
      closable={false}
      {...(isTablet && { width: 400 })}
    >
      <PaymentForm
        form={form}
        cardData={cardData}
        editCard={editCard}
        setCardData={setCardData}
        setCards={setCards}
        closeModal={handleCloseModal}
      />
    </Modal>
  );
};
