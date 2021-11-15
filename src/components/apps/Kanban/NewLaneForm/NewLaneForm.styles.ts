import styled from 'styled-components';
import { Form as CommonForm } from 'components/common/Form/Form';
import { FormItem } from 'components/common/Form/Form.styles';
import { ButtonsGroup } from 'components/common/Form/ButtonsGroup/ButtonsGroup';

export const Form = styled(CommonForm)`
  width: 15.9375rem;
  border-radius: ${(props) => props.theme.border.radius};
  background-color: ${(props) => props.theme.colors.main.mainBackground};
  padding: 1.25rem 1rem;
`;

export const FooterButtons = styled(ButtonsGroup)`
  margin-top: 1rem;
`;

export const FormInput = styled(FormItem)`
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
