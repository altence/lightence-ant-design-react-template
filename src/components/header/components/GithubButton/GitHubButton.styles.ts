import { GithubOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { BaseButton } from '@app/components/common/BaseButton/BaseButton';

interface Dark {
  $isDark: boolean;
}

export const Button = styled(BaseButton)<Dark>`
  color: ${(props) => (props.$isDark ? props.theme.white : props.theme.black)};
  background: ${(props) => (props.$isDark ? props.theme.black : props.theme.white)};
  border-radius: 50px;
  padding-top: 0;
  padding-bottom: 0;
  gap: 0;
  align-items: center;

  &.ant-btn-default:not(:disabled) {
    &:hover,
    &:active,
    &:focus {
      color: ${(props) => (props.$isDark ? props.theme.black : props.theme.white)};
      background: ${(props) => (props.$isDark ? props.theme.white : props.theme.black)};
    }
  }
`;

export const GithubIcon = styled(GithubOutlined)`
  font-size: ${({ theme }) => theme.fontSizes.xxl};
  vertical-align: middle;
`;
