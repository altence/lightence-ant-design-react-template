import { Button } from 'components/common/buttons/Button/Button';
import styled from 'styled-components';

export const Wrapper = styled.div`
  @media only screen and ${(props) => props.theme.media.md} {
    padding: 1rem;
  }

  @media only screen and ${(props) => props.theme.media.xl} {
    padding: 0;
  }
`;

export const AddBtn = styled(Button)`
  width: 100%;

  @media only screen and ${(props) => props.theme.media.md} {
    max-width: 15rem;
  }
`;
