import React from 'react';
import { useTranslation } from 'react-i18next';
import ReactCountryFlag from 'react-country-flag';
import countryList from 'country-list';
import { FormItem } from 'components/common/Form/Form.styles';
import { Select, Option } from 'components/common/selects/Select/Select';
import { Space } from 'antd';

const countries = countryList.getData();

const selectOptions = countries.map((country) => (
  <Option key={country.name} value={country.code}>
    <Space align="center">
      <ReactCountryFlag countryCode={country.code} svg />
      <span style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>{country.name}</span>
    </Space>
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
