import React, { useCallback } from 'react';
import { Select, Option } from 'components/common/Select/Select';
import { Country } from 'country-state-city';
import { useTranslation } from 'react-i18next';
import { FormItem } from '../../../ProfileForm/ProfileForm.styles';

const countries = Country.getAllCountries();

const selectOptions = countries.map((country) => (
  <Option key={country.isoCode} value={country.isoCode}>
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
        showSearch
        filterOption={(input, option) => option?.children.toLowerCase().includes(input.toLowerCase())}
        onChange={handleSelectCountry}
      >
        {selectOptions}
      </Select>
    </FormItem>
  );
};
