import { useTranslation } from 'react-i18next';
import { UploadOutlined, InboxOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { BaseButtonsForm } from '@app/components/common/forms/BaseButtonsForm/BaseButtonsForm';
import { InputNumber } from '@app/components/common/inputs/InputNumber/InputNumber';
import { BaseSelect, Option } from '@app/components/common/selects/BaseSelect/BaseSelect';
import { BaseButton } from '@app/components/common/BaseButton/BaseButton';
import { BaseSwitch } from '@app/components/common/BaseSwitch/BaseSwitch';
import { BaseRadio } from '@app/components/common/BaseRadio/BaseRadio';
import { BaseSlider } from '@app/components/common/BaseSlider/BaseSlider';
import { BaseUpload } from '@app/components/common/BaseUpload/BaseUpload';
import { BaseRate } from '@app/components/common/BaseRate/BaseRate';
import { notificationController } from '@app/controllers/notificationController';
import { BaseRow } from '@app/components/common/BaseRow/BaseRow';
import { BaseCol } from '@app/components/common/BaseCol/BaseCol';
import { BaseCheckbox } from '@app/components/common/BaseCheckbox/BaseCheckbox';

const formItemLayout = {
  labelCol: { span: 24 },
  wrapperCol: { span: 24 },
};

const normFile = (e = { fileList: [] }) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e && e.fileList;
};

export const ValidationForm: React.FC = () => {
  const [isFieldsChanged, setFieldsChanged] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const { t } = useTranslation();

  const onFinish = async (values = {}) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setFieldsChanged(false);
      notificationController.success({ message: t('common.success') });
      console.log(values);
    }, 1000);
  };

  return (
    <BaseButtonsForm
      {...formItemLayout}
      isFieldsChanged={isFieldsChanged}
      onFieldsChange={() => setFieldsChanged(true)}
      name="validateForm"
      initialValues={{
        'input-number': 3,
        'checkbox-group': ['A', 'B'],
        rate: 3.5,
      }}
      footer={
        <BaseButtonsForm.Item>
          <BaseButton type="primary" htmlType="submit" loading={isLoading}>
            {t('common.submit')}
          </BaseButton>
        </BaseButtonsForm.Item>
      }
      onFinish={onFinish}
    >
      <BaseButtonsForm.Item
        name="select"
        label={t('forms.validationFormLabels.select')}
        hasFeedback
        rules={[{ required: true, message: t('forms.validationFormLabels.countryError') }]}
      >
        <BaseSelect placeholder={t('forms.validationFormLabels.selectCountry')}>
          <Option value="china">{t('forms.validationFormLabels.china')}</Option>
          <Option value="usa">{t('forms.validationFormLabels.usa')}</Option>
        </BaseSelect>
      </BaseButtonsForm.Item>

      <BaseButtonsForm.Item
        name="select-multiple"
        label={t('forms.validationFormLabels.selectMultiple')}
        rules={[{ required: true, message: t('forms.validationFormLabels.colorError'), type: 'array' }]}
      >
        <BaseSelect mode="multiple" placeholder={t('forms.validationFormLabels.selectColor')}>
          <Option value="red">{t('forms.validationFormLabels.red')}</Option>
          <Option value="green">{t('forms.validationFormLabels.green')}</Option>
          <Option value="blue">{t('forms.validationFormLabels.blue')}</Option>
        </BaseSelect>
      </BaseButtonsForm.Item>

      <BaseButtonsForm.Item label={t('forms.validationFormLabels.inputNumber')}>
        <label>
          <BaseButtonsForm.Item name="input-number" noStyle>
            <InputNumber min={1} max={10} />
          </BaseButtonsForm.Item>
        </label>
        <span> {t('forms.validationFormLabels.machines')}</span>
      </BaseButtonsForm.Item>

      <BaseButtonsForm.Item name="switch" label={t('forms.validationFormLabels.switch')} valuePropName="checked">
        <BaseSwitch />
      </BaseButtonsForm.Item>

      <BaseButtonsForm.Item name="slider" label={t('forms.validationFormLabels.slider')}>
        <BaseSlider
          tooltip={{ open: false }}
          marks={{
            0: 'A',
            20: 'B',
            40: 'C',
            60: 'D',
            80: 'E',
            100: 'F',
          }}
        />
      </BaseButtonsForm.Item>

      <BaseButtonsForm.Item name="radio-group" label={t('forms.validationFormLabels.radioGroup')}>
        <BaseRadio.Group>
          <BaseRadio value="a">{t('forms.validationFormLabels.item')} 1</BaseRadio>
          <BaseRadio value="b">{t('forms.validationFormLabels.item')} 2</BaseRadio>
          <BaseRadio value="c">{t('forms.validationFormLabels.item')} 3</BaseRadio>
        </BaseRadio.Group>
      </BaseButtonsForm.Item>

      <BaseButtonsForm.Item
        name="radio-button"
        label={t('forms.validationFormLabels.radioButton')}
        rules={[{ required: true, message: t('forms.validationFormLabels.itemError') }]}
      >
        <BaseRadio.Group>
          <BaseRadio.Button value="a">{t('forms.validationFormLabels.item')} 1</BaseRadio.Button>
          <BaseRadio.Button value="b">{t('forms.validationFormLabels.item')} 2</BaseRadio.Button>
          <BaseRadio.Button value="c">{t('forms.validationFormLabels.item')} 3</BaseRadio.Button>
        </BaseRadio.Group>
      </BaseButtonsForm.Item>

      <BaseButtonsForm.Item name="checkbox-group" label={t('forms.validationFormLabels.checkboxGroup')}>
        <BaseCheckbox.Group>
          <BaseRow>
            <BaseCol span={8}>
              <BaseCheckbox value="A">A</BaseCheckbox>
            </BaseCol>
            <BaseCol span={8}>
              <BaseCheckbox value="B" disabled>
                B
              </BaseCheckbox>
            </BaseCol>
            <BaseCol span={8}>
              <BaseCheckbox value="C">C</BaseCheckbox>
            </BaseCol>
            <BaseCol span={8}>
              <BaseCheckbox value="D">D</BaseCheckbox>
            </BaseCol>
            <BaseCol span={8}>
              <BaseCheckbox value="E">E</BaseCheckbox>
            </BaseCol>
            <BaseCol span={8}>
              <BaseCheckbox value="F">F</BaseCheckbox>
            </BaseCol>
          </BaseRow>
        </BaseCheckbox.Group>
      </BaseButtonsForm.Item>

      <BaseButtonsForm.Item name="rate" label={t('forms.validationFormLabels.rate')}>
        <BaseRate />
      </BaseButtonsForm.Item>

      <BaseButtonsForm.Item
        name="upload"
        label={t('forms.validationFormLabels.upload')}
        valuePropName="fileList"
        getValueFromEvent={normFile}
      >
        <BaseUpload name="logo" action="/upload.do" listType="picture">
          <BaseButton type="default" icon={<UploadOutlined />}>
            {t('forms.validationFormLabels.clickToUpload')}
          </BaseButton>
        </BaseUpload>
      </BaseButtonsForm.Item>

      <BaseButtonsForm.Item label={t('forms.validationFormLabels.dragger')}>
        <BaseButtonsForm.Item name="dragger" valuePropName="fileList" getValueFromEvent={normFile} noStyle>
          <BaseUpload.Dragger name="files" action="/upload.do">
            <p>
              <InboxOutlined />
            </p>
            <p>{t('forms.validationFormLabels.clickToDrag')}</p>
            <p>{t('forms.validationFormLabels.supportSingle')}</p>
          </BaseUpload.Dragger>
        </BaseButtonsForm.Item>
      </BaseButtonsForm.Item>
    </BaseButtonsForm>
  );
};
