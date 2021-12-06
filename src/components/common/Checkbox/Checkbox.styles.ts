import styled from 'styled-components';
import { Checkbox as AntdCheckbox } from 'antd';

export const Checkbox = styled(AntdCheckbox)`
  & .ant-checkbox-inner {
    border-radius: 0.1875rem;
    height: 1.25rem;
    width: 1.25rem;
    border: ${(props) => `1px solid ${props.theme.colors.main.primary}`};
  }
`;
