import React from 'react';
import { useTranslation } from 'react-i18next';
import { HeartOutlined } from '@ant-design/icons';
import { Select, Option } from 'components/common/Select/Select';
import { FormItem } from '../../../ProfileForm/ProfileForm.styles';

export const SexItem: React.FC = () => {
  const { t } = useTranslation();

  return (
    <FormItem name="sex" label={t('profile.nav.personalInfo.sex')}>
      <Select
        suffixIcon={<HeartOutlined />}
        showSearch
        filterOption={(input, option) => option?.children.toLowerCase().includes(input.toLowerCase())}
      >
        <Option value="male">{t('profile.nav.personalInfo.male')}</Option>
        <Option value="female">{t('profile.nav.personalInfo.female')}</Option>
      </Select>
    </FormItem>
  );
};
