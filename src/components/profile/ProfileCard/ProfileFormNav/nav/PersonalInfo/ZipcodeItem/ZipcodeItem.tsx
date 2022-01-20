import React from 'react';
import { Input } from 'components/common/inputs/Input/Input';
import { useTranslation } from 'react-i18next';
import { FormItem } from '../../../../../../common/Form/Form.styles';

export const ZipcodeItem: React.FC = () => {
  const { t } = useTranslation();

  return (
    <FormItem name="zipcode" label={t('common.zipcode')}>
      <Input />
    </FormItem>
  );
};
