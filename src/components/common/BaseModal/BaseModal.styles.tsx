import styled from 'styled-components';
import { FONT_SIZE, FONT_WEIGHT } from '@app/styles/themes/constants';
import confirm, { ModalStaticFunctions, withInfo, withSuccess, withWarn, withError } from 'antd/es/modal/confirm';

const ModalStyles = styled.div`
  .ant-modal-confirm-success &,
  .ant-modal-confirm-info &,
  .ant-modal-confirm-warning &,
  .ant-modal-confirm-error & {
    .ant-modal-content {
      background-color: var(--background-color);

      .ant-modal-confirm-title {
        color: var(--heading-color);
        font-size: ${FONT_SIZE.lg};
      }

      .ant-modal-confirm-content {
        color: var(--text-main-color);
        font-size: ${FONT_SIZE.md};
      }

      .ant-modal-confirm-btns {
        .ant-btn.ant-btn-primary {
          font-size: ${FONT_SIZE.md};
          font-weight: ${FONT_WEIGHT.semibold};
          background-color: var(--ant-primary-color);
          border-color: var(--ant-primary-color);
          height: 50px;
        }
      }
    }
  }
`;

const modalRender = (node: React.ReactNode) => <ModalStyles>{node}</ModalStyles>;

export const ModalTypes: Pick<ModalStaticFunctions, 'info' | 'success' | 'warning' | 'error'> = {
  info: (props) => confirm({ modalRender, ...withInfo(props) }),
  success: (props) => confirm({ modalRender, ...withSuccess(props) }),
  warning: (props) => confirm({ modalRender, ...withWarn(props) }),
  error: (props) => confirm({ modalRender, ...withError(props) }),
};
