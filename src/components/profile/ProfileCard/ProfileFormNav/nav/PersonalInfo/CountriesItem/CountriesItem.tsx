import React from 'react';
import { Country } from 'country-state-city';
import { useTranslation } from 'react-i18next';
import { Select, Option } from 'components/common/Select/Select';
import { IconWrapper } from 'components/common/Select/Select.styles';
import { FormItem } from '../../../ProfileForm/ProfileForm.styles';
import ReactCountryFlag from 'react-country-flag';

const countries = Country.getAllCountries();

const selectOptions = countries.map((country) => (
  <Option key={country.name} value={country.name}>
    <IconWrapper>
      <ReactCountryFlag countryCode={country.isoCode} svg />
      {country.name}
    </IconWrapper>
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
