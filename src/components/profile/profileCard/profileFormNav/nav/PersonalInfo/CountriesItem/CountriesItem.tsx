import React from 'react';
import { useTranslation } from 'react-i18next';
import ReactCountryFlag from 'react-country-flag';
import countryList from 'country-list';
import { BaseButtonsForm } from '@app/components/common/forms/BaseButtonsForm/BaseButtonsForm';
import { Select, Option } from '@app/components/common/selects/Select/Select';
import * as S from './CountriesItem.styles';

const countries = countryList.getData();

const selectOptions = countries.map((country) => (
  <Option key={country.name} value={country.code}>
    <S.CountriesSpace align="center">
      <ReactCountryFlag countryCode={country.code} svg alt="country flag" />
      {country.name}
    </S.CountriesSpace>
  </Option>
));

export const CountriesItem: React.FC = () => {
  const { t } = useTranslation();

  return (
    <BaseButtonsForm.Item name="country" label={t('common.country')}>
      <Select showSearch filterOption={(input, option) => option?.value.toLowerCase().includes(input.toLowerCase())}>
        {selectOptions}
      </Select>
    </BaseButtonsForm.Item>
  );
};
