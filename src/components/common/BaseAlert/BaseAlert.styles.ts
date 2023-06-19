import styled from 'styled-components';
import { Alert as AntAlert } from 'antd';

export const Alert = styled(AntAlert)`
  color: var(--black);

  &.ant-alert {
    padding-inline: 15px;
  }

  .ant-alert-message {
    color: var(--black);
  }

  .ant-alert-action {
    margin-inline-start: 8px;
  }
`;
