import styled from 'styled-components';
import { Button } from '@app/components/common/buttons/Button/Button';
import { BaseForm } from '@app/components/common/forms/BaseForm/BaseForm';

export const UserList = styled(BaseForm.Item)`
  & label {
    font-size: ${(props) => props.theme.commonFontSizes.md};
    font-weight: ${(props) => props.theme.commonFontWeight.semibold};
  }
`;

export const Text = styled.div`
  color: ${(props) => props.theme.colors.main.primary};
  font-size: ${(props) => props.theme.commonFontSizes.md};
  font-weight: ${(props) => props.theme.commonFontWeight.semibold};
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
  color: ${(props) => props.theme.colors.text.main};
  font-size: ${(props) => props.theme.commonFontSizes.md};
  font-weight: ${(props) => props.theme.commonFontWeight.semibold};
  margin-left: 0.5rem;
`;

export const AddUserButton = styled(Button)`
  margin: 0 0.5rem;
`;
