import styled from 'styled-components';
import { BaseButton } from '@app/components/common/BaseButton/BaseButton';
import { BaseForm } from '@app/components/common/forms/BaseForm/BaseForm';

export const UserList = styled(BaseForm.Item)`
  & .ant-form-item-label label {
    font-size: ${({ theme }) => theme.fontSizes.md};
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
  }
`;

export const Text = styled.div`
  color: ${({ theme }) => theme.primary};
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
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
  color: ${({ theme }) => theme.textMain};
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  margin-left: 0.5rem;
`;

export const AddUserButton = styled(BaseButton)`
  margin: 0.5rem 0;
`;
