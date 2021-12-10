import { FormItem } from 'components/common/Form/Form.styles';
import { Input } from 'components/common/inputs/Input/Input';
import { InputPassword } from 'components/common/inputs/InputPassword/InputPassword';
import { useTranslation } from 'react-i18next';
import * as S from '../StepForm.styles';

export const Step1: React.FC = () => {
  const { t } = useTranslation();
  return (
    <S.FormContent>
      <FormItem
        name="login"
        label={t('forms.stepFormLabels.login')}
        rules={[{ required: true, message: t('forms.stepFormLabels.loginError') }]}
      >
        <Input />
      </FormItem>
      <FormItem
        name="password"
        label={t('forms.stepFormLabels.password')}
        rules={[{ required: true, message: t('forms.stepFormLabels.passwordError') }]}
      >
        <InputPassword />
      </FormItem>
      <FormItem
        name="confirmPassword"
        label={t('forms.stepFormLabels.confirmPassword')}
        dependencies={['password']}
        rules={[
          { required: true, message: t('common.confirmPasswordError') },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error(t('common.confirmPasswordError')));
            },
          }),
        ]}
      >
        <InputPassword />
      </FormItem>
    </S.FormContent>
  );
};
