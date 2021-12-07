import { Row, Col } from 'antd';
import { UploadOutlined, InboxOutlined } from '@ant-design/icons';
import { InputNumber } from 'components/common/inputs/InputNumber/InputNumber';
import { Select, Option } from 'components/common/selects/Select/Select';
import { Button } from 'components/common/buttons/Button/Button';
import { Form } from 'components/common/Form/Form';
import { FormItem } from 'components/common/Form/Form.styles';
import { Switch } from 'components/common/Switch/Switch';
import { Radio, RadioButton, RadioGroup } from 'components/common/Radio/Radio';
import { Slider } from 'components/common/Slider/Slider';
import { Upload, UploadDragger } from 'components/common/Upload/Upload';
import { Rate } from 'components/common/Rate/Rate';
import { Checkbox, CheckboxGroup } from 'components/common/Checkbox/Checkbox';
import { useTranslation } from 'react-i18next';

const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 14 },
};

const normFile = (e = { fileList: [] }) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e && e.fileList;
};

export const ValidationForm: React.FC = () => {
  const { t } = useTranslation();

  const handleSubmit = (values = {}) => {
    console.log('Form values', values);
  };

  const onFinish = async (values = {}) => {
    await handleSubmit(values);
  };

  return (
    <Form
      name="validateForm"
      {...formItemLayout}
      onFinish={onFinish}
      initialValues={{
        'input-number': 3,
        'checkbox-group': ['A', 'B'],
        rate: 3.5,
      }}
      footer={() => (
        <FormItem>
          <Button type="primary" htmlType="submit">
            {t('forms.validationFormLabels.submit')}
          </Button>
        </FormItem>
      )}
    >
      <FormItem
        name="select"
        label={t('forms.validationFormLabels.select')}
        hasFeedback
        rules={[{ required: true, message: t('forms.validationFormLabels.countryError') }]}
      >
        <Select placeholder={t('forms.validationFormLabels.selectCountry')}>
          <Option value="china">{t('forms.validationFormLabels.china')}</Option>
          <Option value="usa">{t('forms.validationFormLabels.usa')}</Option>
        </Select>
      </FormItem>

      <FormItem
        name="select-multiple"
        label={t('forms.validationFormLabels.selectMultiple')}
        rules={[{ required: true, message: t('forms.validationFormLabels.colorError'), type: 'array' }]}
      >
        <Select mode="multiple" placeholder={t('forms.validationFormLabels.selectColor')}>
          <Option value="red">{t('forms.validationFormLabels.red')}</Option>
          <Option value="green">{t('forms.validationFormLabels.green')}</Option>
          <Option value="blue">{t('forms.validationFormLabels.blue')}</Option>
        </Select>
      </FormItem>

      <FormItem label={t('forms.validationFormLabels.inputNumber')}>
        <FormItem name="input-number" noStyle>
          <InputNumber min={1} max={10} />
        </FormItem>
        <span> {t('forms.validationFormLabels.machines')}</span>
      </FormItem>

      <FormItem name="switch" label={t('forms.validationFormLabels.switch')} valuePropName="checked">
        <Switch />
      </FormItem>

      <FormItem name="slider" label={t('forms.validationFormLabels.slider')}>
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
      </FormItem>

      <FormItem name="radio-group" label={t('forms.validationFormLabels.radioGroup')}>
        <RadioGroup>
          <Radio value="a">{t('forms.validationFormLabels.item')} 1</Radio>
          <Radio value="b">{t('forms.validationFormLabels.item')} 2</Radio>
          <Radio value="c">{t('forms.validationFormLabels.item')} 3</Radio>
        </RadioGroup>
      </FormItem>

      <FormItem
        name="radio-button"
        label={t('forms.validationFormLabels.radioButton')}
        rules={[{ required: true, message: t('forms.validationFormLabels.itemError') }]}
      >
        <RadioGroup>
          <RadioButton value="a">{t('forms.validationFormLabels.item')} 1</RadioButton>
          <RadioButton value="b">{t('forms.validationFormLabels.item')} 2</RadioButton>
          <RadioButton value="c">{t('forms.validationFormLabels.item')} 3</RadioButton>
        </RadioGroup>
      </FormItem>

      <FormItem name="checkbox-group" label={t('forms.validationFormLabels.checkboxGroup')}>
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
      </FormItem>

      <FormItem name="rate" label={t('forms.validationFormLabels.rate')}>
        <Rate />
      </FormItem>

      <FormItem
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
      </FormItem>

      <FormItem label={t('forms.validationFormLabels.dragger')}>
        <FormItem name="dragger" valuePropName="fileList" getValueFromEvent={normFile} noStyle>
          <UploadDragger name="files" action="/upload.do">
            <p>
              <InboxOutlined />
            </p>
            <p>{t('forms.validationFormLabels.clickToDrag')}</p>
            <p>{t('forms.validationFormLabels.supportSingle')}</p>
          </UploadDragger>
        </FormItem>
      </FormItem>
    </Form>
  );
};
