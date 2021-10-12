import React from 'react';
import { useTranslation } from 'react-i18next';
import { ManOutlined, WomanOutlined } from '@ant-design/icons';
import { Select, Option } from 'components/common/Select/Select';
import { FormItem } from 'components/common/Form/Form.styles';
import { IconWrapper } from 'components/common/Select/Select.styles';

export const SexItem: React.FC = () => {
  const { t } = useTranslation();

  return (
    <FormItem name="sex" label={t('profile.nav.personalInfo.sex')}>
      <Select showSearch filterOption={(input, option) => option?.value.toLowerCase().includes(input.toLowerCase())}>
        <Option value="male">
          <IconWrapper>
            <ManOutlined />
            {t('profile.nav.personalInfo.male')}
          </IconWrapper>
        </Option>
        <Option value="female">
          <IconWrapper>
            <WomanOutlined />
            {t('profile.nav.personalInfo.female')}
          </IconWrapper>
        </Option>
      </Select>
    </FormItem>
  );
};
