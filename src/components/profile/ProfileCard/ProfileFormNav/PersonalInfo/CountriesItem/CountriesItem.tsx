import React from 'react';
import { Select } from 'antd';
import { Country } from 'country-state-city';
import { useTranslation } from 'react-i18next';
import { FormItem } from '../../../ProfileForm/ProfileForm.styles';

const countries = Country.getAllCountries();

const selectOptions = countries.map((country) => (
  <Select.Option key={country.isoCode} value={country.isoCode}>
    {country.name}
  </Select.Option>
));

interface CountriesItemProps {
  setCountry: (state: string) => void;
}

export const CountriesItem: React.FC<CountriesItemProps> = ({ setCountry }) => {
  const { t } = useTranslation();

  const handleSelectCountry = (value: string) => {
    setCountry(value);
  };

  return (
    <FormItem name="countries" label={t('profile.nav.personalInfo.country')}>
      <Select
        showSearch
        filterOption={(input, option) => option?.children.toLowerCase().includes(input.toLowerCase())}
        onChange={handleSelectCountry}
      >
        {selectOptions}
      </Select>
    </FormItem>
  );
};
