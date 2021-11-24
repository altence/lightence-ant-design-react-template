import React, { useMemo } from 'react';
import { City, Country } from 'country-state-city';
import { useTranslation } from 'react-i18next';
import { Select, Option } from 'components/common/selects/Select/Select';
import { FormItem } from 'components/common/Form/Form.styles';
interface CitiesItemProps {
  country: string | undefined;
}

export const CitiesItem: React.FC<CitiesItemProps> = ({ country }) => {
  const { t } = useTranslation();

  const countryISOCode = useMemo(() => Country.getAllCountries().find((cn) => cn.name === country)?.isoCode, [country]);

  const cities = useMemo(() => countryISOCode && City.getCitiesOfCountry(countryISOCode), [countryISOCode]);

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
    <FormItem name="city" label={t('profile.nav.personalInfo.city')}>
      <Select showSearch filterOption={(input, option) => option?.value.toLowerCase().includes(input.toLowerCase())}>
        {citiesOptions}
      </Select>
    </FormItem>
  );
};
