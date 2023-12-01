import styled from 'styled-components';
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
      background-color: ${({ theme }) => theme.background};

      .ant-modal-confirm-title {
        color: ${({ theme }) => theme.heading};
        font-size: ${({ theme }) => theme.fontSizes.lg};
      }

      .ant-modal-confirm-content {
        color: ${({ theme }) => theme.textMain};
        font-size: ${({ theme }) => theme.fontSizes.md};
      }

      .ant-modal-confirm-btns {
        .ant-btn.ant-btn-primary {
          font-size: ${({ theme }) => theme.fontSizes.md};
          font-weight: ${({ theme }) => theme.fontWeights.semibold};
          background-color: ${({ theme }) => theme.primary};
          border-color: ${({ theme }) => theme.primary};
          height: ${({ theme }) => theme.heights.md};
        }
      }
    }
  }
`;

const Icons = {
  success: CheckCircleOutlined,
  warning: ExclamationCircleOutlined,
  info: InfoCircleOutlined,
  error: CloseCircleOutlined,
} as const;

const modalRender = (node: React.ReactNode) => <ModalStyles>{node}</ModalStyles>;

type IconType = 'info' | 'success' | 'warning' | 'error';

export type ModalType = Pick<ModalStaticFunctions, IconType>;

const open = (type: IconType, modal: ModalType): ModalType[IconType] => {
  const Icon = Icons[type];
  return (props) => modal[type]({ modalRender, icon: <Icon />, ...props });
};

export const modalController = (modal: ModalType): ModalType => ({
  info: open('info', modal),
  success: open('success', modal),
  warning: open('warning', modal),
  error: open('error', modal),
});
