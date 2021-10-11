import React, { useMemo } from 'react';
import { City } from 'country-state-city';
import { useTranslation } from 'react-i18next';
import { AimOutlined } from '@ant-design/icons';
import { FormItem } from '../../../ProfileForm/ProfileForm.styles';
import { Select, Option } from 'components/common/Select/Select';

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
        <Option key={`${city.name} ${city.stateCode}`} value={`${city.name} ${city.stateCode}`}>
          {`${city.name} (${city.stateCode})`}
        </Option>
      )),
    [cities],
  );

  return (
    <FormItem name="country" label={t('profile.nav.personalInfo.city')}>
      {citiesOptions && (
        <Select
          suffixIcon={<AimOutlined />}
          showSearch
          filterOption={(input, option) => option?.children.toLowerCase().includes(input.toLowerCase())}
        >
          {citiesOptions}
        </Select>
      )}
    </FormItem>
  );
};
