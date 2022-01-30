import styled from 'styled-components';
import { CardWrapper as Card } from 'react-trello/dist/styles/Base';
import { BaseForm } from '@app/components/common/forms/BaseForm/BaseForm';
import { BaseButtonsGroup } from '@app/components/common/forms/components/BaseButtonsGroup/BaseButtonsGroup';

export const FooterButtons = styled(BaseButtonsGroup)`
  margin-top: 1rem;
`;

export const FormInput = styled(BaseForm.Item)`
  font-weight: ${(props) => props.theme.commonFontWeight.medium};
  max-height: 1.25rem;

  &:first-child {
    font-weight: ${(props) => props.theme.commonFontWeight.semibold};
  }

  .ant-input {
    padding: 0;
    font-size: ${(props) => props.theme.commonFontSizes.xs};
    font-weight: inherit;
  }

  .ant-input::placeholder {
    color: ${(props) => props.theme.colors.text.light};
  }

  .ant-form-item-control-input {
    min-height: auto;
  }
`;

export const CardWrapper = styled(Card)`
  padding: 1.25rem 1rem;

  background: ${(props) => props.theme.colors.main.mainBackground};
`;
