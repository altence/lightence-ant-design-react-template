import styled from 'styled-components';
import { ProfileForm } from '../../../ProfileForm/ProfileForm';

export const AuthForm = styled(ProfileForm)`
  @media only screen and ${(props) => props.theme.media.md} {
    display: flex;
  }
`;
