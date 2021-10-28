import styled from 'styled-components';
import { Typography } from 'antd';

export const Text = styled(Typography.Paragraph)`
  &.ant-typography {
    font-weight: 400;
    font-size: 0.75rem;

    color: ${(props) => props.theme.colors.text.main};
  }
`;
