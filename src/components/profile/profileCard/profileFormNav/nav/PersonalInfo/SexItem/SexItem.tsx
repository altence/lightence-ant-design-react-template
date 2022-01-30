import React from 'react';
import { useTranslation } from 'react-i18next';
import { ManOutlined, WomanOutlined } from '@ant-design/icons';
import { Space } from 'antd';
import { BaseButtonsForm } from '@app/components/common/forms/BaseButtonsForm/BaseButtonsForm';
import { Select, Option } from '@app/components/common/selects/Select/Select';

export const SexItem: React.FC = () => {
  const { t } = useTranslation();

  return (
    <BaseButtonsForm.Item name="sex" label={t('profile.nav.personalInfo.sex')}>
      <Select>
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
    </BaseButtonsForm.Item>
  );
};
