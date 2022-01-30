import { Row, Col } from 'antd';
import { useTranslation } from 'react-i18next';
import { UploadOutlined, InboxOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { BaseButtonsForm } from '@app/components/common/forms/BaseButtonsForm/BaseButtonsForm';
import { InputNumber } from '@app/components/common/inputs/InputNumber/InputNumber';
import { Select, Option } from '@app/components/common/selects/Select/Select';
import { Button } from '@app/components/common/buttons/Button/Button';
import { Switch } from '@app/components/common/Switch/Switch';
import { Radio, RadioButton, RadioGroup } from '@app/components/common/Radio/Radio';
import { Slider } from '@app/components/common/Slider/Slider';
import { Upload, UploadDragger } from '@app/components/common/Upload/Upload';
import { Rate } from '@app/components/common/Rate/Rate';
import { Checkbox, CheckboxGroup } from '@app/components/common/Checkbox/Checkbox';
import { notificationController } from '@app/controllers/notificationController';

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
          <Button type="primary" htmlType="submit" loading={isLoading}>
            {t('common.submit')}
          </Button>
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
        <Select placeholder={t('forms.validationFormLabels.selectCountry')}>
          <Option value="china">{t('forms.validationFormLabels.china')}</Option>
          <Option value="usa">{t('forms.validationFormLabels.usa')}</Option>
        </Select>
      </BaseButtonsForm.Item>

      <BaseButtonsForm.Item
        name="select-multiple"
        label={t('forms.validationFormLabels.selectMultiple')}
        rules={[{ required: true, message: t('forms.validationFormLabels.colorError'), type: 'array' }]}
      >
        <Select mode="multiple" placeholder={t('forms.validationFormLabels.selectColor')}>
          <Option value="red">{t('forms.validationFormLabels.red')}</Option>
          <Option value="green">{t('forms.validationFormLabels.green')}</Option>
          <Option value="blue">{t('forms.validationFormLabels.blue')}</Option>
        </Select>
      </BaseButtonsForm.Item>

      <BaseButtonsForm.Item label={t('forms.validationFormLabels.inputNumber')}>
        <BaseButtonsForm.Item name="input-number" noStyle>
          <InputNumber min={1} max={10} />
        </BaseButtonsForm.Item>
        <span> {t('forms.validationFormLabels.machines')}</span>
      </BaseButtonsForm.Item>

      <BaseButtonsForm.Item name="switch" label={t('forms.validationFormLabels.switch')} valuePropName="checked">
        <Switch />
      </BaseButtonsForm.Item>

      <BaseButtonsForm.Item name="slider" label={t('forms.validationFormLabels.slider')}>
        <Slider
          tooltipVisible={false}
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
        <RadioGroup>
          <Radio value="a">{t('forms.validationFormLabels.item')} 1</Radio>
          <Radio value="b">{t('forms.validationFormLabels.item')} 2</Radio>
          <Radio value="c">{t('forms.validationFormLabels.item')} 3</Radio>
        </RadioGroup>
      </BaseButtonsForm.Item>

      <BaseButtonsForm.Item
        name="radio-button"
        label={t('forms.validationFormLabels.radioButton')}
        rules={[{ required: true, message: t('forms.validationFormLabels.itemError') }]}
      >
        <RadioGroup>
          <RadioButton value="a">{t('forms.validationFormLabels.item')} 1</RadioButton>
          <RadioButton value="b">{t('forms.validationFormLabels.item')} 2</RadioButton>
          <RadioButton value="c">{t('forms.validationFormLabels.item')} 3</RadioButton>
        </RadioGroup>
      </BaseButtonsForm.Item>

      <BaseButtonsForm.Item name="checkbox-group" label={t('forms.validationFormLabels.checkboxGroup')}>
        <CheckboxGroup>
          <Row>
            <Col span={8}>
              <Checkbox value="A">A</Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value="B" disabled>
                B
              </Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value="C">C</Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value="D">D</Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value="E">E</Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value="F">F</Checkbox>
            </Col>
          </Row>
        </CheckboxGroup>
      </BaseButtonsForm.Item>

      <BaseButtonsForm.Item name="rate" label={t('forms.validationFormLabels.rate')}>
        <Rate />
      </BaseButtonsForm.Item>

      <BaseButtonsForm.Item
        name="upload"
        label={t('forms.validationFormLabels.upload')}
        valuePropName="fileList"
        getValueFromEvent={normFile}
      >
        <Upload name="logo" action="/upload.do" listType="picture">
          <Button type="default" icon={<UploadOutlined />}>
            {t('forms.validationFormLabels.clickToUpload')}
          </Button>
        </Upload>
      </BaseButtonsForm.Item>

      <BaseButtonsForm.Item label={t('forms.validationFormLabels.dragger')}>
        <BaseButtonsForm.Item name="dragger" valuePropName="fileList" getValueFromEvent={normFile} noStyle>
          <UploadDragger name="files" action="/upload.do">
            <p>
              <InboxOutlined />
            </p>
            <p>{t('forms.validationFormLabels.clickToDrag')}</p>
            <p>{t('forms.validationFormLabels.supportSingle')}</p>
          </UploadDragger>
        </BaseButtonsForm.Item>
      </BaseButtonsForm.Item>
    </BaseButtonsForm>
  );
};
