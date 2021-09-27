import React, { useMemo } from 'react';
import { Select } from 'antd';
import { City } from 'country-state-city';
import { useTranslation } from 'react-i18next';
import { FormItem } from '../../../ProfileForm/ProfileForm.styles';

interface CitiesItemProps {
  country: string;
}

export const CitiesItem: React.FC<CitiesItemProps> = ({ country }) => {
  const { t } = useTranslation();

  const cities = useMemo(() => City.getCitiesOfCountry(country), [country]);

  const citiesOptions = useMemo(
    () =>
      cities &&
      cities.map((city) => (
        <Select.Option key={`${city.name} ${city.stateCode}`} value={`${city.name} ${city.stateCode}`}>
          {`${city.name} (${city.stateCode})`}
        </Select.Option>
      )),
    [cities],
  );

  return (
    <FormItem name="country" label={t('profile.nav.personalInfo.city')}>
      {citiesOptions && (
        <Select
          showSearch
          filterOption={(input, option) => option?.children.toLowerCase().includes(input.toLowerCase())}
        >
          {citiesOptions}
        </Select>
      )}
    </FormItem>
  );
};
