import { useTranslation } from 'react-i18next';
import { BaseForm } from '@app/components/common/forms/BaseForm/BaseForm';
import { Input } from '@app/components/common/inputs/Input/Input';
import { InputPassword } from '@app/components/common/inputs/InputPassword/InputPassword';
import * as S from '../StepForm.styles';

export const Step1: React.FC = () => {
  const { t } = useTranslation();
  return (
    <S.FormContent>
      <BaseForm.Item
        name="login"
        label={t('forms.stepFormLabels.login')}
        rules={[{ required: true, message: t('forms.stepFormLabels.loginError') }]}
      >
        <Input />
      </BaseForm.Item>
      <BaseForm.Item
        name="password"
        label={t('common.password')}
        rules={[{ required: true, message: t('forms.stepFormLabels.passwordError') }]}
      >
        <InputPassword />
      </BaseForm.Item>
      <BaseForm.Item
        name="confirmPassword"
        label={t('common.confirmPassword')}
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
      </BaseForm.Item>
    </S.FormContent>
  );
};
