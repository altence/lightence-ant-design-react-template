import { ButtonsGroup } from 'components/common/Form/ButtonsGroup/ButtonsGroup';
import styled from 'styled-components';

export const Buttons = styled(ButtonsGroup)`
  @media only screen and ${(props) => props.theme.media.md} {
    width: calc(50% - 10px);
  }
`;
