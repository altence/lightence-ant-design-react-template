import React from 'react';
import { Modal } from '@app/components/common/Modal/Modal';
import { PaymentForm } from '../paymentForm/PaymentForm/PaymentForm';
import { PaymentCard } from '@app/interfaces/interfaces';

interface PaymentModalProps {
  isModalVisible: boolean;
  closeModal: () => void;
  onCardAdd: (card: PaymentCard) => void;
}

export const AddNewCardModal: React.FC<PaymentModalProps> = ({ isModalVisible, closeModal, onCardAdd }) => {
  return (
    <Modal destroyOnClose size="small" visible={isModalVisible} onCancel={closeModal} footer={null} closable={false}>
      <PaymentForm closeModal={closeModal} onFormFinish={onCardAdd} />
    </Modal>
  );
};
