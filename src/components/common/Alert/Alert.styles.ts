import styled from 'styled-components';
import { Alert as AntAlert } from 'antd';

export const Alert = styled(AntAlert)`
  color: ${(props) => props.theme.commonColors.black};

  .ant-alert-message {
    color: ${(props) => props.theme.commonColors.black};
  }
`;
