import React, { useCallback } from 'react';
import { Country } from 'country-state-city';
import { useTranslation } from 'react-i18next';
import { Select, Option } from 'components/common/Select/Select';
import { IconWrapper } from 'components/common/Select/Select.styles';
import { FormItem } from '../../../ProfileForm/ProfileForm.styles';
import ReactCountryFlag from 'react-country-flag';

const countries = Country.getAllCountries();

const selectOptions = countries.map((country) => (
  <Option key={country.isoCode} value={country.isoCode}>
    <IconWrapper>
      <ReactCountryFlag countryCode={country.isoCode} svg />
    </IconWrapper>
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
        filterOption={(input, option) => option?.children[1].toLowerCase().includes(input.toLowerCase())}
        onChange={handleSelectCountry}
      >
        {selectOptions}
      </Select>
    </FormItem>
  );
};
