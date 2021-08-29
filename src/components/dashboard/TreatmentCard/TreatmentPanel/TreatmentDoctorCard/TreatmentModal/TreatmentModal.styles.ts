import styled from 'styled-components';
import { Modal as AntModal } from 'antd';

export const Modal = styled(AntModal)`
  & .ant-modal-close {
    display: none;
  }
`;
