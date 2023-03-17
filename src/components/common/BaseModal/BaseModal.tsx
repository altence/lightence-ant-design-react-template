import React from 'react';
import { Modal, ModalProps } from 'antd';
import { modalSizes } from 'constants/modalSizes';
import { ModalTypes } from './BaseModal.styles';

interface BaseModalProps extends ModalProps {
  size?: 'small' | 'medium' | 'large';
}

interface BaseModalInterface extends React.FC<BaseModalProps> {
  info: typeof ModalTypes.info;
  success: typeof ModalTypes.success;
  warning: typeof ModalTypes.warning;
  error: typeof ModalTypes.error;
}

export const BaseModal: BaseModalInterface = ({ size = 'medium', children, ...props }) => {
  const modalSize = Object.entries(modalSizes).find((sz) => sz[0] === size)?.[1];

  return (
    <Modal getContainer={false} width={modalSize} {...props}>
      {children}
    </Modal>
  );
};

BaseModal.info = ModalTypes.info;
BaseModal.success = ModalTypes.success;
BaseModal.warning = ModalTypes.warning;
BaseModal.error = ModalTypes.error;
