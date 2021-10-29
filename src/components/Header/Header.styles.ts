import styled from 'styled-components';
import { Menu } from 'antd';

export const DropdownMenu = styled(Menu)`
  border-radius: ${(props) => props.theme.border.radius};
`;

export const DropdownHeader = styled.div`
  cursor: pointer;

  & > span[role='img'],
  .ant-badge {
    display: block;
    font-size: 1.25rem;

    color: ${(props) => props.theme.colors.text.secondary};

    @media only screen and ${(props) => props.theme.media.md} {
      font-size: 1.625rem;
    }
  }
`;
