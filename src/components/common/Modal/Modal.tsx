import React from 'react';
import { Modal as AntModal, ModalProps as AntModalProps } from 'antd';
import { modalSizes } from 'constants/modalSizes';

interface ModalProps extends AntModalProps {
  size?: 'small' | 'middle' | 'large';
}

export const Modal: React.FC<ModalProps> = ({ size = 'middle', children, ...props }) => {
  const modalSize = Object.entries(modalSizes).find((sz) => sz[0] === size)?.[1];

  return (
    <AntModal width={modalSize} {...props}>
      {children}
    </AntModal>
  );
};
