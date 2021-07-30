import React from 'react';
import styled from 'styled-components';
import { Select as AntSelect } from 'antd';

const { Option } = AntSelect;

interface SelectStyledProps {
  width?: string;
}

interface SelectProps extends SelectStyledProps {
  options: string[];
  defaultValue: string;
}

export const Select: React.FC<SelectProps> = ({ options, defaultValue, width }) => {
  return (
    <SelectStyled width={width} size="middle" defaultValue={defaultValue}>
      {options.map((option, index) => (
        <Option key={index} value={option}>
          {option}
        </Option>
      ))}
    </SelectStyled>
  );
};

const SelectStyled = styled(AntSelect)<SelectStyledProps>`
  width: ${(props) => props.width || '13.5rem'};
  font-size: 0.75rem;
`;
