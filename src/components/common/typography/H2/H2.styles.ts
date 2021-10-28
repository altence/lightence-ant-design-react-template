import styled from 'styled-components';
import { Typography } from 'antd';

export const Text = styled(Typography.Title)`
  &.ant-typography {
    font-weight: 700;
    font-size: 1rem;
    margin-bottom: 0;

    color: ${(props) => props.theme.colors.text.main};

    @media only screen and ${(props) => props.theme.media.md} {
      font-size: 1.125rem;
    }

    @media only screen and ${(props) => props.theme.media.xl} {
      font-weight: 800;
      font-size: 1.625rem;
    }
  }
`;
