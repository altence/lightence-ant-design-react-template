import styled from 'styled-components';
import { BaseButton } from '@app/components/common/BaseButton/BaseButton';
import { BaseForm } from '@app/components/common/forms/BaseForm/BaseForm';
import { FONT_SIZE, FONT_WEIGHT } from '@app/styles/themes/constants';

export const UserList = styled(BaseForm.Item)`
  & label {
    font-size: ${FONT_SIZE.md};
    font-weight: ${FONT_WEIGHT.semibold};
  }
`;

export const Text = styled.div`
  color: var(--primary-color);
  font-size: ${FONT_SIZE.md};
  font-weight: ${FONT_WEIGHT.semibold};
`;

export const List = styled.ul`
  list-style-type: none;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 0.8rem;
`;

export const User = styled.div`
  color: var(--text-main-color);
  font-size: ${FONT_SIZE.md};
  font-weight: ${FONT_WEIGHT.semibold};
  margin-left: 0.5rem;
`;

export const AddUserButton = styled(BaseButton)`
  margin: 0 0.5rem;
`;
