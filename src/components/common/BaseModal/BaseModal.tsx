import React from 'react';
import { Modal, ModalProps } from 'antd';
import { WidthCategory } from '@app/styles/themes/types';
import { modalSizes } from 'constants/modalSizes';

interface BaseModalProps extends ModalProps {
  size?: 'small' | 'medium' | 'large';
}

export const BaseModal: React.FC<BaseModalProps> = ({ size = 'medium', children, ...props }) => {
  const modalSize = modalSizes[WidthCategory[size]];

  return (
    <Modal getContainer={false} width={modalSize} {...props}>
      {children}
    </Modal>
  );
};
