import React from 'react';
import { Modal } from '@app/components/common/Modal/Modal';
import { CreditCard } from '../paymentForm/interfaces';
import { PaymentForm } from '../paymentForm/PaymentForm/PaymentForm';

interface PaymentModalProps {
  isModalVisible: boolean;
  closeModal: () => void;
  onCardAdd: (card: CreditCard) => void;
}

export const AddNewCardModal: React.FC<PaymentModalProps> = ({ isModalVisible, closeModal, onCardAdd }) => {
  return (
    <Modal destroyOnClose size="small" visible={isModalVisible} onCancel={closeModal} footer={null} closable={false}>
      <PaymentForm closeModal={closeModal} onFormFinish={onCardAdd} />
    </Modal>
  );
};
