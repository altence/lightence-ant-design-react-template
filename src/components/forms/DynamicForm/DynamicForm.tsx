import { Form as AntdForm, Space } from 'antd';
import { Form } from '../../common/Form/Form';
import { FormItem, FormList } from 'components/common/Form/Form.styles';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Input } from '../../common/inputs/Input/Input';
import { Select, Option } from '../../common/selects/Select/Select';
import { Button } from '../../common/buttons/Button/Button';

const areas = [
  { label: 'Beijing', value: 'Beijing' },
  { label: 'Shanghai', value: 'Shanghai' },
];

interface Sight {
  [key: string]: string[];
}

const sights: Sight = {
  Beijing: ['Tiananmen', 'Great Wall'],
  Shanghai: ['Oriental Pearl', 'The Bund'],
};

export const DynamicForm: React.FC = () => {
  const [form] = AntdForm.useForm();

  const handleSubmit = (values = {}) => {
    console.log('Form values', values);
  };

  const onFinish = async (values = {}) => {
    await handleSubmit(values);
  };

  const handleChange = () => {
    form.setFieldsValue({ sights: [] });
  };

  return (
    <Form form={form} name="dynamic_form_nest_item" onFinish={onFinish} autoComplete="off">
      <FormItem name="area" label="Area" rules={[{ required: true, message: 'Missing area' }]}>
        <Select options={areas} onChange={handleChange} />
      </FormItem>
      <FormList name="sights">
        {(fields, { add, remove }) => (
          <>
            {fields.map((field) => (
              <Space key={field.key} align="baseline">
                <FormItem
                  noStyle
                  // eslint-disable-next-line
                  shouldUpdate={(prevValues: any, curValues: any) =>
                    prevValues.area !== curValues.area || prevValues.sights !== curValues.sights
                  }
                >
                  {() => (
                    <FormItem
                      {...field}
                      label="Sight"
                      name={[field.name, 'sight']}
                      fieldKey={[field.fieldKey, 'sight']}
                      rules={[{ required: true, message: 'Missing sight' }]}
                    >
                      <Select disabled={!form.getFieldValue('area')} style={{ width: 253 }}>
                        {(sights[form.getFieldValue('area')] || []).map((item) => (
                          <Option key={item} value={item}>
                            {item}
                          </Option>
                        ))}
                      </Select>
                    </FormItem>
                  )}
                </FormItem>
                <FormItem
                  {...field}
                  label="Price"
                  name={[field.name, 'price']}
                  fieldKey={[field.fieldKey, 'price']}
                  rules={[{ required: true, message: 'Missing price' }]}
                >
                  <Input />
                </FormItem>

                <MinusCircleOutlined onClick={() => remove(field.name)} />
              </Space>
            ))}

            <FormItem>
              <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                Add sights
              </Button>
            </FormItem>
          </>
        )}
      </FormList>
    </Form>
  );
};
