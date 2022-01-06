import React from 'react';
import { Select, Option } from 'components/common/selects/Select/Select';
import { useTranslation } from 'react-i18next';
import { languages } from 'constants/languages';
import { FormItem } from 'components/common/Form/Form.styles';
import { Space } from 'antd';
import ReactCountryFlag from 'react-country-flag';

const languageOptions = languages.map((lang) => (
  <Option key={lang.id} value={lang.name}>
    <Space align="center">
      <ReactCountryFlag svg countryCode={lang.countryCode} />
      {lang.title}
    </Space>
  </Option>
));

export const LanguageItem: React.FC = () => {
  const { t } = useTranslation();

  return (
    <FormItem name="language" label={t('profile.nav.personalInfo.language')}>
      <Select filterOption={(input, option) => option?.value.toLowerCase().includes(input.toLowerCase())} showSearch>
        {languageOptions}
      </Select>
    </FormItem>
  );
};
