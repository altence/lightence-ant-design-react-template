import { DownOutlined } from '@ant-design/icons';
import { media } from '@app/utils/utils';
import styled from 'styled-components';
import { HeaderActionWrapper } from '@app/components/header/Header.styles';

export const ProfileDropdownHeader = styled(HeaderActionWrapper)`
  cursor: pointer;

  @media only screen and (${media('md')}) {
    border-radius: 50px;
    padding: 0.3125rem 0.2rem;
  }
`;

export const DownArrow = styled(DownOutlined)`
  color: ${({ theme }) => theme.textSecondary};

  @media only screen and (${media('md')}) {
    color: ${({ theme }) => theme.textMain};
  }
`;
