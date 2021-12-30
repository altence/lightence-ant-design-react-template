import React, { useCallback } from 'react';
import { FormInstance } from 'antd';
import { Modal } from 'components/common/Modal/Modal';
import { CreditCard } from '../PaymentForm/interfaces';
import { PaymentForm } from '../PaymentForm/PaymentForm';
import { clearCardData } from '../PaymentMethod';

interface PaymentModalProps {
  isModalVisible: boolean;
  setModalVisible: (state: boolean) => void;
  form: FormInstance;
  cardData: CreditCard;
  setCardData: (state: CreditCard) => void;
  setCards: (func: (state: CreditCard[]) => CreditCard[]) => void;
}

export const PaymentModal: React.FC<PaymentModalProps> = ({
  isModalVisible,
  setModalVisible,
  form,
  cardData,
  setCardData,
  setCards,
}) => {
  const handleCloseModal = useCallback(() => {
    setModalVisible(false);
    form.setFieldsValue(clearCardData);
    setCardData(clearCardData);
  }, [setModalVisible, setCardData, form]);

  return (
    <Modal size="small" visible={isModalVisible} onCancel={handleCloseModal} footer={null} closable={false}>
      <PaymentForm
        form={form}
        cardData={cardData}
        setCardData={setCardData}
        setCards={setCards}
        closeModal={handleCloseModal}
      />
    </Modal>
  );
};
