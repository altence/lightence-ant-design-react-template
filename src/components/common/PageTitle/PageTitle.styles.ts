import styled from 'styled-components';
import { H1 } from '../typography/H1/H1';

export const Text = styled(H1)`
  &.ant-typography {
    margin-bottom: 1rem;

    color: ${(props) => props.theme.colors.text.secondary};

    @media only screen and ${(props) => props.theme.media.md} {
      margin-bottom: 1.25rem;
    }

    @media only screen and ${(props) => props.theme.media.xl} {
      margin-bottom: 1.625rem;
    }
  }
`;
