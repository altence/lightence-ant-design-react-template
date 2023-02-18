import styled from 'styled-components';
import { Result as AntResult } from 'antd';

export const Result = styled(AntResult)`
  &.ant-result-success .ant-result-icon > .anticon {
    color: var(--success-color);
  }

  &.ant-result-info .ant-result-icon > .anticon {
    color: var(--primary-color);
  }
  &.ant-result-warning .ant-result-icon > .anticon {
    color: var(--warning-color);
  }
  &.ant-result-error .ant-result-icon > .anticon {
    color: var(--error-color);
  }

  .ant-result-subtitle {
    color: var(--breadcrumb-color);
  }
`;
