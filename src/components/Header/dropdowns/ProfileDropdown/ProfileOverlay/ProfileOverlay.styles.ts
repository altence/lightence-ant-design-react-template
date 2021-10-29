import styled from 'styled-components';
import { Typography } from 'antd';

export const Text = styled(Typography.Text)`
  font-size: 0.875rem;
  font-weight: 600;

  @media only screen and ${(props) => props.theme.media.md} {
    font-size: 1rem;
  }
`;
