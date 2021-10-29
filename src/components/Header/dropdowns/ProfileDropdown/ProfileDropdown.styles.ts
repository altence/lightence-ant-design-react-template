import { DownOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import styled from 'styled-components';
import { DropdownHeader } from '../../Header.styles';

export const ProfileDropdownHeader = styled(DropdownHeader)`
  cursor: pointer;

  @media only screen and ${(props) => props.theme.media.md} {
    border-radius: 50px;
    padding: 0.3125rem 0.2rem;

    background-color: ${(props) => props.theme.colors.main.secondaryBackground};
  }
`;

export const AvatarImg = styled(Avatar)`
  @media only screen and ${(props) => props.theme.media.md} {
    width: 2.3125rem;
    height: 2.3125rem;
  }
`;

export const DownArrow = styled(DownOutlined)`
  color: ${(props) => props.theme.colors.text.secondary};

  @media only screen and ${(props) => props.theme.media.md} {
    color: ${(props) => props.theme.colors.text.main};
  }
`;
