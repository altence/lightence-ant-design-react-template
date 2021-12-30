import styled from 'styled-components';
import { Result as AntResult } from 'antd';

export const Result = styled(AntResult)`
  &.ant-result-success .ant-result-icon > .anticon {
    color: ${(props) => `${props.theme.colors.main.success}`};
  }

  &.ant-result-info .ant-result-icon > .anticon {
    color: ${(props) => `${props.theme.colors.main.primary}`};
  }
  &.ant-result-warning .ant-result-icon > .anticon {
    color: ${(props) => `${props.theme.colors.main.warning}`};
  }
  &.ant-result-error .ant-result-icon > .anticon {
    color: ${(props) => `${props.theme.colors.main.error}`};
  }
`;
