import React, { useCallback } from 'react';
import { Country } from 'country-state-city';
import { useTranslation } from 'react-i18next';
import { GlobalOutlined } from '@ant-design/icons';
import { Select, Option } from 'components/common/Select/Select';
import { FormItem } from '../../../ProfileForm/ProfileForm.styles';
import * as S from './CountriesItem.styles';

const countries = Country.getAllCountries();

const selectOptions = countries.map((country) => (
  <Option key={country.isoCode} value={country.isoCode}>
    <S.CountryFlag countryCode={country.isoCode} svg />
    {country.name}
  </Option>
));

interface CountriesItemProps {
  setCountry: (state: string) => void;
}

export const CountriesItem: React.FC<CountriesItemProps> = ({ setCountry }) => {
  const { t } = useTranslation();

  const handleSelectCountry = useCallback(
    (value: string) => {
      setCountry(value);
    },
    [setCountry],
  );

  return (
    <FormItem name="countries" label={t('profile.nav.personalInfo.country')}>
      <Select
        suffixIcon={<GlobalOutlined />}
        showSearch
        filterOption={(input, option) => option?.children[1].toLowerCase().includes(input.toLowerCase())}
        onChange={handleSelectCountry}
      >
        {selectOptions}
      </Select>
    </FormItem>
  );
};
