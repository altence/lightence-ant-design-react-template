import { Checkbox } from 'antd';
import styled from 'styled-components';

export const FilterWrapper = styled.div`
  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

export const CheckBox = styled(Checkbox)`
  font-size: 0.75rem;
`;
