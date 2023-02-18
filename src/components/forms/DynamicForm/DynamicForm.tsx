import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { PlusOutlined } from '@ant-design/icons';
import { BaseButtonsForm } from '@app/components/common/forms/BaseButtonsForm/BaseButtonsForm';
import { BaseInput } from '@app/components/common/inputs/BaseInput/BaseInput';
import { BaseSelect, Option } from '@app/components/common/selects/BaseSelect/BaseSelect';
import { BaseButton } from '@app/components/common/BaseButton/BaseButton';
import { notificationController } from '@app/controllers/notificationController';
import * as S from './DynamicForm.styles';
import { BaseRow } from '@app/components/common/BaseRow/BaseRow';
import { BaseCol } from '@app/components/common/BaseCol/BaseCol';

interface Sight {
  [key: string]: string[];
}

export const DynamicForm: React.FC = () => {
  const [isFieldsChanged, setFieldsChanged] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [form] = BaseButtonsForm.useForm();
  const { t } = useTranslation();

  const areas = [
    { label: t('forms.dynamicFormLabels.beijing'), value: 'Beijing' },
    { label: t('forms.dynamicFormLabels.shanghai'), value: 'Shanghai' },
  ];

  const sights: Sight = {
    Beijing: [t('forms.dynamicFormLabels.tiananmen'), t('forms.dynamicFormLabels.greatWall')],
    Shanghai: [t('forms.dynamicFormLabels.orientalPearl'), t('forms.dynamicFormLabels.theBund')],
  };

  const onFinish = (values = {}) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setFieldsChanged(false);
      notificationController.success({ message: t('common.success') });
      console.log(values);
    }, 1000);
  };

  const handleChange = () => {
    form.setFieldsValue({ sights: [] });
  };

  return (
    <BaseButtonsForm
      form={form}
      name="dynamicForm"
      isFieldsChanged={isFieldsChanged}
      loading={isLoading}
      onFinish={onFinish}
      autoComplete="off"
      onFieldsChange={() => setFieldsChanged(true)}
    >
      <BaseButtonsForm.Item
        name="area"
        label={t('forms.dynamicFormLabels.area')}
        rules={[{ required: true, message: t('forms.dynamicFormLabels.areaError') }]}
      >
        <BaseSelect options={areas} onChange={handleChange} />
      </BaseButtonsForm.Item>
      <BaseButtonsForm.List name="sights">
        {(fields, { add, remove }) => (
          <>
            {fields.map((field) => (
              <BaseRow key={field.key} wrap={false} gutter={[10, 10]} align="middle" justify="space-between">
                <BaseCol span={12}>
                  <BaseButtonsForm.Item
                    noStyle
                    // eslint-disable-next-line
                    shouldUpdate={(prevValues: any, curValues: any) =>
                      prevValues.area !== curValues.area || prevValues.sights !== curValues.sights
                    }
                  >
                    {() => (
                      <BaseButtonsForm.Item
                        {...field}
                        label={t('forms.dynamicFormLabels.sight')}
                        name={[field.name, 'sight']}
                        fieldKey={[field.key, 'sight']}
                        rules={[{ required: true, message: t('forms.dynamicFormLabels.sightError') }]}
                      >
                        <BaseSelect disabled={!form.getFieldValue('area')}>
                          {(sights[form.getFieldValue('area')] || []).map((item) => (
                            <Option key={item} value={item}>
                              {item}
                            </Option>
                          ))}
                        </BaseSelect>
                      </BaseButtonsForm.Item>
                    )}
                  </BaseButtonsForm.Item>
                </BaseCol>
                <BaseCol span={12}>
                  <BaseButtonsForm.Item
                    {...field}
                    label={t('forms.dynamicFormLabels.price')}
                    name={[field.name, 'price']}
                    fieldKey={[field.key, 'price']}
                    rules={[{ required: true, message: t('forms.dynamicFormLabels.priceError') }]}
                  >
                    <S.Wrapper>
                      <BaseInput />
                      <S.RemoveBtn onClick={() => remove(field.name)} />
                    </S.Wrapper>
                  </BaseButtonsForm.Item>
                </BaseCol>
              </BaseRow>
            ))}

            <BaseButtonsForm.Item>
              <BaseButton type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                {t('forms.dynamicFormLabels.addSights')}
              </BaseButton>
            </BaseButtonsForm.Item>
          </>
        )}
      </BaseButtonsForm.List>
    </BaseButtonsForm>
  );
};
