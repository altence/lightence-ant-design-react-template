import React from 'react';
import { useTranslation } from 'react-i18next';
import ReactCountryFlag from 'react-country-flag';
import countryList from 'country-list';
import { FormItem } from 'components/common/Form/Form.styles';
import { Select, Option } from 'components/common/selects/Select/Select';
import * as S from './CountriesItem.styles';

const countries = countryList.getData();

const selectOptions = countries.map((country) => (
  <Option key={country.name} value={country.code}>
    <S.CountriesSpace align="center">
      <ReactCountryFlag countryCode={country.code} svg />
      {country.name}
    </S.CountriesSpace>
  </Option>
));

export const CountriesItem: React.FC = () => {
  const { t } = useTranslation();

  return (
    <FormItem name="country" label={t('profile.nav.personalInfo.country')}>
      <Select showSearch filterOption={(input, option) => option?.value.toLowerCase().includes(input.toLowerCase())}>
        {selectOptions}
      </Select>
    </FormItem>
  );
};
