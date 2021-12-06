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
  const handleSubmit = (values = {}) => {
    console.log('Form values', values);
  };

  const onFinish = async (values = {}) => {
    await handleSubmit(values);
  };

  return (
    <Form
      name="validate_other"
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
            Submit
          </Button>
        </FormItem>
      )}
    >
      <FormItem
        name="select"
        label="Select"
        hasFeedback
        rules={[{ required: true, message: 'Please select your country!' }]}
      >
        <Select placeholder="Please select a country">
          <Option value="china">China</Option>
          <Option value="usa">U.S.A</Option>
        </Select>
      </FormItem>

      <FormItem
        name="select-multiple"
        label="Select [multiple]"
        rules={[{ required: true, message: 'Please select your favourite colors!', type: 'array' }]}
      >
        <Select mode="multiple" placeholder="Please select favourite colors">
          <Option value="red">Red</Option>
          <Option value="green">Green</Option>
          <Option value="blue">Blue</Option>
        </Select>
      </FormItem>

      <FormItem label="Input Number">
        <FormItem name="input-number" noStyle>
          <InputNumber min={1} max={10} />
        </FormItem>
        <span className="ant-form-text"> machines</span>
      </FormItem>

      <FormItem name="switch" label="Switch" valuePropName="checked">
        <Switch />
      </FormItem>

      <FormItem name="slider" label="Slider">
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

      <FormItem name="radio-group" label="Radio Group">
        <RadioGroup>
          <Radio value="a">item 1</Radio>
          <Radio value="b">item 2</Radio>
          <Radio value="c">item 3</Radio>
        </RadioGroup>
      </FormItem>

      <FormItem name="radio-button" label="Radio Button" rules={[{ required: true, message: 'Please pick an item!' }]}>
        <RadioGroup>
          <RadioButton value="a">item 1</RadioButton>
          <RadioButton value="b">item 2</RadioButton>
          <RadioButton value="c">item 3</RadioButton>
        </RadioGroup>
      </FormItem>

      <FormItem name="checkbox-group" label="Checkbox Group">
        <CheckboxGroup>
          <Row>
            <Col span={8}>
              <Checkbox value="A" style={{ lineHeight: '32px' }}>
                A
              </Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value="B" style={{ lineHeight: '32px' }} disabled>
                B
              </Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value="C" style={{ lineHeight: '32px' }}>
                C
              </Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value="D" style={{ lineHeight: '32px' }}>
                D
              </Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value="E" style={{ lineHeight: '32px' }}>
                E
              </Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value="F" style={{ lineHeight: '32px' }}>
                F
              </Checkbox>
            </Col>
          </Row>
        </CheckboxGroup>
      </FormItem>

      <FormItem name="rate" label="Rate">
        <Rate />
      </FormItem>

      <FormItem name="upload" label="Upload" valuePropName="fileList" getValueFromEvent={normFile}>
        <Upload name="logo" action="/upload.do" listType="picture">
          <Button type="default" icon={<UploadOutlined />}>
            Click to upload
          </Button>
        </Upload>
      </FormItem>

      <FormItem label="Dragger">
        <FormItem name="dragger" valuePropName="fileList" getValueFromEvent={normFile} noStyle>
          <UploadDragger name="files" action="/upload.do">
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">Click or drag file to this area to upload</p>
            <p className="ant-upload-hint">Support for a single or bulk upload.</p>
          </UploadDragger>
        </FormItem>
      </FormItem>
    </Form>
  );
};
