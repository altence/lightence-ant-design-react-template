import { DropdownMenu } from 'components/Header/Header.styles';
import styled from 'styled-components';

export const Menu = styled(DropdownMenu)`
  padding: 1rem;
  max-height: 50vh;
  overflow-y: auto;

  @media only screen and ${(props) => props.theme.media.md} {
    padding: 1rem 2rem;
  }
`;
