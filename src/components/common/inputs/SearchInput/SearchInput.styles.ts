import styled from 'styled-components';
import { Space as AntSpace } from 'antd';
import { Input } from 'components/common/inputs/Input/Input';

export const SearchInput = styled(Input)`
  & .ant-input-prefix {
    margin: 0.5rem;
  }

  & input {
    font-size: 0.75rem;
    font-weight: 600;

    @media only screen and ${(props) => props.theme.media.md} {
      font-size: 1rem;
    }

    &::placeholder {
      font-weight: 500;

      color: ${(props) => props.theme.colors.text.main};
    }
  }
`;

export const Space = styled(AntSpace)`
  & > .ant-space-item:last-of-type {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
