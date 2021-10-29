import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'components/common/inputs/Input/Input';
import styled from 'styled-components';

export const SearchIcon = styled(SearchOutlined)`
  @media only screen and ${(props) => props.theme.media.md} {
    &.anticon.anticon-search {
      color: ${(props) => props.theme.colors.text.main};
    }
  }
`;

export const SearchInput = styled(Input)`
  border-radius: 50px;
  border: 0;
  padding-left: 1.25rem;
  padding-right: 1.25rem;

  & .ant-input-prefix {
    margin-right: 0.5rem;
  }

  & span[role='img'] {
    font-size: 1.25rem;
  }
`;
