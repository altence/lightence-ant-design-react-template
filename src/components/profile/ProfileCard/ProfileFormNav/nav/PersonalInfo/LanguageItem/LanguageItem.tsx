import React from 'react';
import { Select, Option } from 'components/common/Select/Select';
import { useTranslation } from 'react-i18next';
import { languages } from 'constants/languages';
import { FormItem } from 'components/common/Form/Form.styles';
import { IconWrapper } from 'components/common/Select/Select.styles';

const languageOptions = languages.map((lang) => (
  <Option key={lang.id} value={lang.name}>
    <IconWrapper>
      <lang.icon />
      {lang.name}
    </IconWrapper>
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
