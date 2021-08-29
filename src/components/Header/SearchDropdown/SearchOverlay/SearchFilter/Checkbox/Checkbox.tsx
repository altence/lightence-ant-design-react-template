import React from 'react';
import { useTranslation } from 'react-i18next';
import { getCamelizedName } from '../../../../../../helpers/getCamelizedName';
import * as S from './Checkbox.styles';

interface CheckboxProps {
  setCategory: (func: (state: string) => string) => void;
  name: string;
  category: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({ setCategory, category, name }) => {
  const { t } = useTranslation();

  const nameFromLowerCase = name.toLowerCase();

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
    <S.Checkbox checked={category === nameFromLowerCase} onChange={handleClickCategory(nameFromLowerCase)}>
      {t(`common.${getCamelizedName(name)}`)}
    </S.Checkbox>
  );
};
