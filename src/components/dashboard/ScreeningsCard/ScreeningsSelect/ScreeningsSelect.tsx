import React from 'react';
import { Select } from 'antd';
import * as S from './ScreeningsSelect.styles';

const { Option } = Select;

interface ScreeningsSelectProps {
  options: string[];
  placeholder: string;
}

export const ScreeningsSelect: React.FC<ScreeningsSelectProps> = ({ options, placeholder }) => {
  return (
    <S.Select size="small" bordered={false} placeholder={placeholder}>
      {options.map((option, index) => (
        <Option key={index} value={option}>
          {option}
        </Option>
      ))}
    </S.Select>
  );
};
