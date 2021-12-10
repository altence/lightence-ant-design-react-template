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
        label={t('forms.stepFormLabels.address1')}
        rules={[{ required: true, message: t('forms.stepFormLabels.addressError') }]}
      >
        <Input />
      </FormItem>
      <FormItem
        name="address2"
        label={t('forms.stepFormLabels.address2')}
        rules={[{ required: true, message: t('forms.stepFormLabels.addressError') }]}
      >
        <Input />
      </FormItem>
      <FormItem
        name="zipCode"
        label={t('forms.stepFormLabels.zipCode')}
        rules={[{ required: true, message: t('forms.stepFormLabels.zipCodeError') }]}
      >
        <Input />
      </FormItem>
      <FormItem
        name="city"
        label={t('forms.stepFormLabels.city')}
        rules={[{ required: true, message: t('forms.stepFormLabels.cityError') }]}
      >
        <Input />
      </FormItem>
      <FormItem
        name="country"
        label={t('forms.stepFormLabels.country')}
        rules={[{ required: true, message: t('forms.stepFormLabels.countryError') }]}
      >
        <Input />
      </FormItem>
    </S.FormContent>
  );
};
