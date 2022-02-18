import { DropdownMenu } from '@app/components/header/Header.styles';
import { media } from '@app/styles/themes/constants';
import styled from 'styled-components';

export const Menu = styled(DropdownMenu)`
  padding: 1rem;
  max-height: 50vh;
  overflow-y: auto;

  @media only screen and ${media.md} {
    padding: 1rem 2rem;
  }
`;
