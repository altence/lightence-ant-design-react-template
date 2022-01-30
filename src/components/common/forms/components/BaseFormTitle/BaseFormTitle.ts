import styled from 'styled-components';
import { Typography } from 'antd';

export const BaseFormTitle = styled(Typography.Text)`
  font-weight: 700;
  font-size: 1rem;
  display: block;

  @media only screen and ${(props) => props.theme.media.md} {
    font-size: 1.125rem;
  }
`;
