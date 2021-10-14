import { Button } from 'components/common/buttons/Button/Button';
import styled from 'styled-components';

export const Wrapper = styled.div``;

export const AddBtn = styled(Button)`
  width: 100%;

  @media only screen and ${(props) => props.theme.media.md} {
    max-width: 15rem;
  }
`;
