import React from 'react';
import { Modal as AntModal, ModalProps as AntModalProps } from 'antd';

const sizes = {
  small: '400px',
  middle: '600px',
  large: '800px',
};

interface ModalProps extends AntModalProps {
  size?: 'small' | 'middle' | 'large';
}

export const Modal: React.FC<ModalProps> = ({ size = 'middle', children, ...props }) => {
  const modalSize = Object.entries(sizes).find((sz) => sz[0] === size)?.[1];

  return (
    <AntModal width={modalSize} {...props}>
      {children}
    </AntModal>
  );
};
