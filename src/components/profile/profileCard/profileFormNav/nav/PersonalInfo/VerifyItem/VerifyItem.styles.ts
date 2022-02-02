import styled from 'styled-components';
import { Modal } from '@app/components/common/Modal/Modal';

export const TwoFactorAuthModal = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;

  .ant-modal-body {
    padding: 0;
  }
`;
