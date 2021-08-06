import React from 'react';
import { Select } from 'antd';
import * as S from './ScreeningsSelect.styles';

const { Option } = Select;

interface ScreeningsSelectProps {
  options: string[];
  defaultValue: string;
}

export const ScreeningsSelect: React.FC<ScreeningsSelectProps> = ({ options, defaultValue }) => {
  return (
    <S.Select defaultValue={defaultValue}>
      {options.map((option, index) => (
        <Option key={index} value={option}>
          {option}
        </Option>
      ))}
    </S.Select>
  );
};
