import styled from 'styled-components';
import { Typography } from 'antd';

export const Text = styled(Typography.Title)`
  &.ant-typography {
    font-weight: 600;
    font-size: 0.875rem;

    color: ${(props) => props.theme.colors.text.main};

    @media only screen and ${(props) => props.theme.media.md} {
      font-size: 1rem;
    }

    @media only screen and ${(props) => props.theme.media.xl} {
      font-weight: 700;
      font-size: 1.5rem;
    }
  }
`;
