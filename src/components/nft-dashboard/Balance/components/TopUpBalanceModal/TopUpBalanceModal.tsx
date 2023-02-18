import React from 'react';
import { BaseModal } from '@app/components/common/BaseModal/BaseModal';
import { TopUpDataProps } from '../../interfaces/interfaces';
import { BaseSpin } from '@app/components/common/BaseSpin/BaseSpin';
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
    <BaseModal width={500} open={isOpen} onCancel={onOpenChange} footer={null} destroyOnClose>
      <BaseSpin spinning={loading}>
        <TopUpBalanceForm cards={cards} loading={loading} onFinish={onFinish} />
      </BaseSpin>
    </BaseModal>
  );
};
