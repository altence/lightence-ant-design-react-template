import styled from 'styled-components';
import { Button } from '@app/components/common/buttons/Button/Button';
import { BaseForm } from '@app/components/common/forms/BaseForm/BaseForm';

export const UserList = styled(BaseForm.Item)`
  & label {
    font-size: var(--font-size-md);
    font-weight: var(--font-weight-semibold);
  }
`;

export const Text = styled.div`
  color: var(--primary-color);
  font-size: var(--font-size-md);
  font-weight: var(--font-weight-semibold);
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
  font-size: var(--font-size-md);
  font-weight: var(--font-weight-semibold);
  margin-left: 0.5rem;
`;

export const AddUserButton = styled(Button)`
  margin: 0 0.5rem;
`;
