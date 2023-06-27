import styled from 'styled-components';
import { FONT_SIZE, FONT_WEIGHT, HEIGHT } from '@app/styles/themes/constants';
import { ModalStaticFunctions } from 'antd/es/modal/confirm';
import {
  CheckCircleOutlined,
  ExclamationCircleOutlined,
  InfoCircleOutlined,
  CloseCircleOutlined,
} from '@ant-design/icons';

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
          background-color: var(--primary-color);
          border-color: var(--primary-color);
          height: ${HEIGHT.md};
        }
      }
    }
  }
`;

const modalRender = (node: React.ReactNode) => <ModalStyles>{node}</ModalStyles>;

type ModalType = Pick<ModalStaticFunctions, 'info' | 'success' | 'warning' | 'error'>;

const openInfo = (modal: ModalType): ModalType['info'] => {
  return (props) => modal.info({ modalRender, icon: <InfoCircleOutlined />, ...props });
};

const openSuccess = (modal: ModalType): ModalType['success'] => {
  return (props) => modal.success({ modalRender, icon: <CheckCircleOutlined />, ...props });
};

const openWarning = (modal: ModalType): ModalType['warning'] => {
  return (props) => modal.warning({ modalRender, icon: <ExclamationCircleOutlined />, ...props });
};

const openError = (modal: ModalType): ModalType['error'] => {
  return (props) => modal.error({ modalRender, icon: <CloseCircleOutlined />, ...props });
};

export const modalController = (modal: ModalType): ModalType => ({
  info: openInfo(modal),
  success: openSuccess(modal),
  warning: openWarning(modal),
  error: openError(modal),
});
