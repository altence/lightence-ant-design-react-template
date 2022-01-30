import styled from 'styled-components';
import { BaseButtonsForm } from '@app/components/common/forms/BaseButtonsForm/BaseButtonsForm';
import { BaseButtonsGroup } from '@app/components/common/forms/components/BaseButtonsGroup/BaseButtonsGroup';

export const Form = styled(BaseButtonsForm)`
  width: 16rem;
  border-radius: ${(props) => props.theme.border.radius};
  background-color: ${(props) => props.theme.colors.main.mainBackground};
  padding: 1.25rem 1rem;
`;

export const FooterButtons = styled(BaseButtonsGroup)`
  margin-top: 1rem;
  margin-bottom: 0.625rem;
`;

export const FormInput = styled(BaseButtonsForm.Item)`
  @media only screen and ${(props) => props.theme.media.xl} {
    margin-bottom: 1.5rem;
  }

  font-weight: ${(props) => props.theme.commonFontWeight.medium};
  max-height: 1.25rem;
  & .ant-input {
    padding: 0;
    font-size: ${(props) => props.theme.commonFontSizes.md};
    font-weight: inherit;
  }
  & .ant-input::placeholder {
    color: ${(props) => props.theme.colors.text.light};
  }
  & .ant-form-item-control-input {
    min-height: auto;
  }
`;
