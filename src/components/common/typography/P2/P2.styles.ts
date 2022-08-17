import styled from 'styled-components';
import { Typography } from 'antd';

export const Text = styled(Typography.Paragraph)`
  &.ant-typography {
    font-weight: 400;
    font-size: 0.75rem;
    margin-bottom: 0;

    color: var(--text-main-color);
  }
`;
