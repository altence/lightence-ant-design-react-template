import { Typography } from 'antd';
import styled from 'styled-components';

export const Text = styled(Typography.Text)`
  font-size: 1.125rem;
  font-weight: 700;
  margin-bottom: 1rem;
  display: block;

  color: ${(props) => props.theme.colors.text.secondary};

  @media only screen and ${(props) => props.theme.media.md} {
    font-size: 1.5rem;
    margin-bottom: 1.25rem;
  }

  @media only screen and ${(props) => props.theme.media.xl} {
    font-size: 2.25rem;
    margin-bottom: 1.625rem;
  }
`;
