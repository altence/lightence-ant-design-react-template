import { FormItem } from 'components/common/Form/Form.styles';
import { Input } from 'components/common/inputs/Input/Input';
import { useTranslation } from 'react-i18next';
import * as S from '../StepForm.styles';

export const Step3: React.FC = () => {
  const { t } = useTranslation();
  return (
    <S.FormContent>
      <FormItem
        name="address1"
        label={`${t('common.address')} 1`}
        rules={[{ required: true, message: t('forms.stepFormLabels.addressError') }]}
      >
        <Input />
      </FormItem>
      <FormItem
        name="address2"
        label={`${t('common.address')} 2`}
        rules={[{ required: true, message: t('forms.stepFormLabels.addressError') }]}
      >
        <Input />
      </FormItem>
      <FormItem
        name="zipCode"
        label={t('common.zipcode')}
        rules={[{ required: true, message: t('common.zipcodeError') }]}
      >
        <Input />
      </FormItem>
      <FormItem name="city" label={t('common.city')} rules={[{ required: true, message: t('common.cityError') }]}>
        <Input />
      </FormItem>
      <FormItem
        name="country"
        label={t('common.country')}
        rules={[{ required: true, message: t('common.countryError') }]}
      >
        <Input />
      </FormItem>
    </S.FormContent>
  );
};
