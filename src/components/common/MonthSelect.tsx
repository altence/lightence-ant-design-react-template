import React from 'react';
import styled from 'styled-components';
import { Select } from 'antd';
import { months } from '../../constants/months';

const { Option } = Select;

export const MonthSelect: React.FC = () => {
  return (
    <SelectStyled size="large" defaultValue="Month">
      {months.map((option, index) => (
        <Option key={index} value={option}>
          {option}
        </Option>
      ))}
    </SelectStyled>
  );
};

const SelectStyled = styled(Select)`
  min-width: 20rem;
`;
