import styled from 'styled-components';
import { Space as AntSpace } from 'antd';
import { Input } from 'components/common/inputs/Input/Input';

export const SearchInput = styled(Input)`
  & input::placeholder {
    color: ${(props) => props.theme.colors.text.main};
  }
`;

export const Space = styled(AntSpace)`
  & > .ant-space-item:last-of-type {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
