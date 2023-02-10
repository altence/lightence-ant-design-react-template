import React from 'react';
import { Modal } from '@app/components/common/Modal/Modal';
import { TopUpDataProps } from '../../interfaces/interfaces';
import { Spinner } from '@app/components/common/Spinner/Spinner';
import { TopUpBalanceForm } from '../TopUpBalanceForm/TopUpBalanceForm';

interface TopUpBalanceModalProps extends TopUpDataProps {
  isOpen: boolean;
  onOpenChange: () => void;
}

export const TopUpBalanceModal: React.FC<TopUpBalanceModalProps> = ({
  cards,
  loading,
  isOpen,
  onOpenChange,
  onFinish,
}) => {
  return (
    <Modal width={500} open={isOpen} onCancel={onOpenChange} footer={null} destroyOnClose>
      <Spinner spinning={loading}>
        <TopUpBalanceForm cards={cards} loading={loading} onFinish={onFinish} />
      </Spinner>
    </Modal>
  );
};
