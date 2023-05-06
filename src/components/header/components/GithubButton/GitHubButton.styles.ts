import { GithubOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { BASE_COLORS } from '@app/styles/themes/constants';
import { BaseButton } from '@app/components/common/BaseButton/BaseButton';

interface Dark {
  $isDark: boolean;
}

export const Button = styled(BaseButton)<Dark>`
  color: ${(props) => BASE_COLORS[props.$isDark ? 'white' : 'black']};
  background: ${(props) => BASE_COLORS[props.$isDark ? 'black' : 'white']};
  border-radius: 50px;
  padding-top: 0;
  padding-bottom: 0;
  gap: 0;

  align-items: center;

  &.ant-btn-default:not(:disabled) {
    &:hover,
    &:active,
    &:focus {
      color: ${(props) => BASE_COLORS[props.$isDark ? 'black' : 'white']};
      background: ${(props) => BASE_COLORS[props.$isDark ? 'white' : 'black']};
    }
  }
`;

export const GithubIcon = styled(GithubOutlined)`
  font-size: 1.5rem;
  vertical-align: middle;
`;
