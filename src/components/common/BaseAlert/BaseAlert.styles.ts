import styled from 'styled-components';
import { Alert as AntAlert } from 'antd';

export const Alert = styled(AntAlert)`
  &.ant-alert {
    padding-inline: 15px;
  }

  .ant-alert-action {
    margin-inline-start: 8px;
  }
`;
