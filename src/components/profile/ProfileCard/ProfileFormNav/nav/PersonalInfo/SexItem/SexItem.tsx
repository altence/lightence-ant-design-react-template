import React from 'react';
import { useTranslation } from 'react-i18next';
import { ManOutlined, WomanOutlined } from '@ant-design/icons';
import { Space } from 'antd';
import { Select, Option } from 'components/common/selects/Select/Select';
import { FormItem } from 'components/common/Form/Form.styles';

export const SexItem: React.FC = () => {
  const { t } = useTranslation();

  return (
    <FormItem name="sex" label={t('profile.nav.personalInfo.sex')}>
      <Select showSearch filterOption={(input, option) => option?.value.toLowerCase().includes(input.toLowerCase())}>
        <Option value="male">
          <Space align="center">
            <ManOutlined />
            {t('profile.nav.personalInfo.male')}
          </Space>
        </Option>
        <Option value="female">
          <Space align="center">
            <WomanOutlined />
            {t('profile.nav.personalInfo.female')}
          </Space>
        </Option>
      </Select>
    </FormItem>
  );
};
