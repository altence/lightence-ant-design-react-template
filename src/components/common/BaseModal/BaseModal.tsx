import React from 'react';
import { Modal, ModalProps } from 'antd';
import { modalSizes } from 'constants/modalSizes';

interface BaseModalProps extends ModalProps {
  size?: 'small' | 'medium' | 'large';
}

interface BaseModalInterface extends React.FC<BaseModalProps> {
  info: typeof Modal.info;
  success: typeof Modal.success;
  warning: typeof Modal.warning;
  error: typeof Modal.error;
}

export const BaseModal: BaseModalInterface = ({ size = 'medium', children, ...props }) => {
  const modalSize = Object.entries(modalSizes).find((sz) => sz[0] === size)?.[1];

  return (
    <Modal getContainer={false} width={modalSize} {...props}>
      {children}
    </Modal>
  );
};

BaseModal.info = Modal.info;
BaseModal.success = Modal.success;
BaseModal.warning = Modal.warning;
BaseModal.error = Modal.error;
