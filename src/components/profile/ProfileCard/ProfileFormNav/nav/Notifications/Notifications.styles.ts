import { Typography } from 'antd';
import styled from 'styled-components';

export const Description = styled(Typography.Text)`
  display: block;
  font-weight: 500;
  font-size: 0.75rem;
  margin-bottom: 1rem;

  @media only screen and ${(props) => props.theme.media.md} {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
`;
