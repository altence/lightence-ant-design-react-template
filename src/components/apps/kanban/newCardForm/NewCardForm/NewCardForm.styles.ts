import styled from 'styled-components';
import { CardWrapper as Card } from 'react-trello/dist/styles/Base';
import { BaseForm } from '@app/components/common/forms/BaseForm/BaseForm';
import { BaseButtonsGroup } from '@app/components/common/forms/components/BaseButtonsGroup/BaseButtonsGroup';

export const FooterButtons = styled(BaseButtonsGroup)`
  margin-top: 1rem;
`;

export const FormInput = styled(BaseForm.Item)`
  font-weight: var(--font-weight-medium);
  max-height: 1.25rem;

  &:first-child {
    font-weight: var(--font-weight-semibold);
  }

  .ant-input {
    padding: 0;
    font-size: var(--font-size-xs);
    font-weight: inherit;
  }

  .ant-input::placeholder {
    color: var(--text-light-color);
  }

  .ant-form-item-control-input {
    min-height: auto;
  }
`;

export const CardWrapper = styled(Card)`
  padding: 1.25rem 1rem;

  background: var(--background-color);
`;
