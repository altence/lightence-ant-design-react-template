import { FormItem } from 'components/common/Form/Form.styles';
import { Input } from 'components/common/inputs/Input/Input';
import { RadioButton, RadioGroup } from 'components/common/Radio/Radio';
import { DatePicker } from 'components/common/pickers/DatePicker';
import { Select, Option } from 'components/common/selects/Select/Select';
import { useTranslation } from 'react-i18next';
import * as S from '../StepForm.styles';

export const Step2: React.FC = () => {
  const { t } = useTranslation();

  const prefixSelector = (
    <FormItem name="prefix" noStyle>
      <S.Select>
        <Option value="375">+375</Option>
        <Option value="7">+7</Option>
      </S.Select>
    </FormItem>
  );

  return (
    <S.FormContent>
      <FormItem
        name="salutation"
        label={t('forms.stepFormLabels.salutation')}
        rules={[{ required: true, message: t('common.requiredField') }]}
      >
        <RadioGroup>
          <RadioButton value="mr">{t('forms.stepFormLabels.mr')}</RadioButton>
          <RadioButton value="mrs">{t('forms.stepFormLabels.mrs')}</RadioButton>
        </RadioGroup>
      </FormItem>
      <FormItem
        name="gender"
        label={t('forms.stepFormLabels.gender')}
        rules={[{ required: true, message: t('common.requiredField') }]}
      >
        <Select placeholder={t('forms.stepFormLabels.gender')}>
          <Option value="male">{t('forms.stepFormLabels.male')}</Option>
          <Option value="female">{t('forms.stepFormLabels.female')}</Option>
        </Select>
      </FormItem>
      <FormItem
        name="firstName"
        label={t('forms.stepFormLabels.firstName')}
        rules={[{ required: true, message: t('common.requiredField') }]}
      >
        <Input />
      </FormItem>
      <FormItem
        name="lastName"
        label={t('forms.stepFormLabels.lastName')}
        rules={[{ required: true, message: t('common.requiredField') }]}
      >
        <Input />
      </FormItem>
      <FormItem
        name="birthday"
        label={t('forms.stepFormLabels.birthday')}
        rules={[{ required: true, message: t('common.requiredField') }]}
      >
        <DatePicker format="YYYY-MM-DD" />
      </FormItem>
      <S.PhoneItem
        name="phone"
        label={t('forms.stepFormLabels.phone')}
        rules={[{ required: true, message: t('common.requiredField') }]}
      >
        <Input addonBefore={prefixSelector} />
      </S.PhoneItem>
      <FormItem
        name="email"
        label={t('forms.stepFormLabels.email')}
        rules={[
          {
            type: 'email',
            message: t('profile.nav.personalInfo.notValidEmail'),
          },
        ]}
      >
        <Input />
      </FormItem>
    </S.FormContent>
  );
};
