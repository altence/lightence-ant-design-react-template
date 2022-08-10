import styled from 'styled-components';
import { BaseButtonsForm } from '@app/components/common/forms/BaseButtonsForm/BaseButtonsForm';
import { BaseButtonsGroup } from '@app/components/common/forms/components/BaseButtonsGroup/BaseButtonsGroup';
import { media } from '@app/styles/themes/light/lightTheme';

export const Form = styled(BaseButtonsForm)`
  width: 16rem;
  border-radius: var(--border-radius);
  background-color: var(--background-color);
  padding: 1.25rem 1rem;
`;

export const FooterButtons = styled(BaseButtonsGroup)`
  margin-top: 1rem;
  margin-bottom: 0.625rem;
`;

export const FormInput = styled(BaseButtonsForm.Item)`
  @media only screen and ${media.xl} {
    margin-bottom: 1.5rem;
  }

  font-weight: var(--font-weight-medium);
  max-height: 1.25rem;
  & .ant-input {
    padding: 0;
    font-size: var(--font-size-md);
    font-weight: inherit;
  }
  & .ant-input::placeholder {
    color: var(--text-light-color);
  }
  & .ant-form-item-control-input {
    min-height: auto;
  }
`;
