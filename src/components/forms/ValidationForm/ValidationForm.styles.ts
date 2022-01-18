import styled from 'styled-components';
import { Form as CommonForm } from 'components/common/Form/Form';
import lightTheme from '@app/styles/themes/light/lightTheme';

export const Form = styled(CommonForm)`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Content = styled.div`
  min-width: 35rem;

  @media only screen and ${lightTheme.media.xs} {
    min-width: 100%;
  }

  @media only screen and ${lightTheme.media.md} {
    min-width: 35rem;
  }
`;
