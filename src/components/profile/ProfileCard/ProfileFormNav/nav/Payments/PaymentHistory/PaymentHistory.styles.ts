import { Typography } from 'antd';
import styled from 'styled-components';

export const TitleWrapper = styled.div`
  padding: 0 1rem;

  @media only screen and ${(props) => props.theme.media.xl} {
    padding: 0;
  }
`;

export const Text = styled(Typography.Text)``;
