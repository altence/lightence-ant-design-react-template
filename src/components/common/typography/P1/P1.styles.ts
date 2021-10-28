import styled from 'styled-components';
import { Typography } from 'antd';

export const Text = styled(Typography.Paragraph)`
  &.ant-typography {
    font-weight: 400;
    font-size: 0.75rem;
    margin-bottom: 0;

    color: ${(props) => props.theme.colors.text.main};

    @media only screen and ${(props) => props.theme.media.xl} {
      font-size: 0.875rem;
    }
  }
`;
