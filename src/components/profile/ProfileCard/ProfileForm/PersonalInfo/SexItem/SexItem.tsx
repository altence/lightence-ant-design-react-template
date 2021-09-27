import React from 'react';
import { Select } from 'antd';
import { useTranslation } from 'react-i18next';
import { FormItem } from '../../ProfileForm.styles';

export const SexItem: React.FC = () => {
  const { t } = useTranslation();

  return (
    <FormItem name="sex" label={t('profile.nav.personalInfo.sex')}>
      <Select showSearch filterOption={(input, option) => option?.children.toLowerCase().includes(input.toLowerCase())}>
        <Select.Option value="male">{t('profile.nav.personalInfo.male')}</Select.Option>
        <Select.Option value="female">{t('profile.nav.personalInfo.female')}</Select.Option>
      </Select>
    </FormItem>
  );
};
