import styled from 'styled-components';
import { BaseModal } from '@app/components/common/BaseModal/BaseModal';

export const AuthModal = styled(BaseModal)`
  display: flex;
  align-items: center;
  justify-content: center;

  .ant-modal-body {
    padding: 0;
  }
`;
