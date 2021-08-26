import React from 'react';
import * as S from './Checkbox.styles';

interface CheckboxProps {
  setCategory: (func: (state: string) => string) => void;
  name: string;
  category: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({ setCategory, category, name }) => {
  const handleClickCategory = (mode: string) => () => {
    setCategory((prev: string) => {
      if (prev === mode) {
        return '';
      } else {
        return mode;
      }
    });
  };

  return (
    <S.Checkbox checked={category === name} onChange={handleClickCategory(name)}>{`${name[0].toUpperCase()}${name.slice(
      1,
    )}`}</S.Checkbox>
  );
};
