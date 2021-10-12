import React from 'react';
import { useTranslation } from 'react-i18next';
import { Select, Option } from 'components/common/Select/Select';
import { FormItem } from '../../../ProfileForm/ProfileForm.styles';
import { ManOutlined, WomanOutlined } from '@ant-design/icons';
import { IconWrapper } from 'components/common/Select/Select.styles';

export const SexItem: React.FC = () => {
  const { t } = useTranslation();

  return (
    <FormItem name="sex" label={t('profile.nav.personalInfo.sex')}>
      <Select showSearch filterOption={(input, option) => option?.children.toLowerCase().includes(input.toLowerCase())}>
        <Option value="male">
          <IconWrapper>
            <ManOutlined />
          </IconWrapper>
          {t('profile.nav.personalInfo.male')}
        </Option>
        <Option value="female">
          <IconWrapper>
            <WomanOutlined />
          </IconWrapper>
          {t('profile.nav.personalInfo.female')}
        </Option>
      </Select>
    </FormItem>
  );
};
