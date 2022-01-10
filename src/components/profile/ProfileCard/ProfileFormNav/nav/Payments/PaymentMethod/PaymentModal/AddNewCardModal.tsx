import React from 'react';
import { Modal } from 'components/common/Modal/Modal';
import { CreditCard } from '../PaymentForm/interfaces';
import { PaymentForm } from '../PaymentForm/PaymentForm';

interface PaymentModalProps {
  isModalVisible: boolean;
  closeModal: () => void;
  onCardAdd: (card: CreditCard) => Promise<void>;
}

export const AddNewCardModal: React.FC<PaymentModalProps> = ({ isModalVisible, closeModal, onCardAdd }) => {
  return (
    <Modal size="small" visible={isModalVisible} onCancel={closeModal} footer={null} closable={false}>
      <PaymentForm closeModal={closeModal} onFormFinish={onCardAdd} />
    </Modal>
  );
};
