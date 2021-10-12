import styled from 'styled-components';
import { Select } from 'antd';

export const SelectStyled = styled(Select)`
  & .ant-select-arrow {
    width: unset;
    height: unset;
    font-size: 1rem;
    top: 50%;
  }
`;

export const IconWrapper = styled.div`
  display: inline-block;
  margin-right: 0.5rem;
`;
