import { GithubOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { BaseButton } from '@app/components/common/BaseButton/BaseButton';

interface Dark {
  $isDark: boolean;
}

export const Button = styled(BaseButton)<Dark>`
  color: ${({ $isDark, theme }) => ($isDark ? theme.white : theme.black)};
  background: ${({ $isDark, theme }) => ($isDark ? theme.black : theme.white)};
  border-radius: 50px;
  padding-top: 0;
  padding-bottom: 0;
  gap: 0;
  align-items: center;

  &.ant-btn-default:not(:disabled) {
    &:hover,
    &:active,
    &:focus {
      color: ${({ $isDark, theme }) => ($isDark ? theme.black : theme.white)};
      background: ${({ $isDark, theme }) => ($isDark ? theme.white : theme.black)};
    }
  }
`;

export const GithubIcon = styled(GithubOutlined)`
  font-size: 1.5rem;
  vertical-align: middle;
`;
