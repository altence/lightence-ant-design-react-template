import { Col, Form as AntdForm, Row } from 'antd';
import { useTranslation } from 'react-i18next';
import { PlusOutlined } from '@ant-design/icons';
import { Form } from '@app/components/common/Form/Form';
import { FormItem, FormList } from 'components/common/Form/Form.styles';
import { Input } from '@app/components/common/inputs/Input/Input';
import { Select, Option } from '@app/components/common/selects/Select/Select';
import { Button } from '@app/components/common/buttons/Button/Button';
import * as S from './DynamicForm.styles';

interface Sight {
  [key: string]: string[];
}

export const DynamicForm: React.FC = () => {
  const [form] = AntdForm.useForm();
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
    return new Promise((res) => {
      setTimeout(() => {
        res(values);
      }, 1000);
    });
  };

  const handleChange = () => {
    form.setFieldsValue({ sights: [] });
  };

  return (
    <Form form={form} name="dynamicForm" onFinish={onFinish} autoComplete="off">
      <FormItem
        name="area"
        label={t('forms.dynamicFormLabels.area')}
        rules={[{ required: true, message: t('forms.dynamicFormLabels.areaError') }]}
      >
        <Select options={areas} onChange={handleChange} />
      </FormItem>
      <FormList name="sights">
        {(fields, { add, remove }) => (
          <>
            {fields.map((field) => (
              <Row key={field.key} wrap={false} gutter={[10, 10]} align="middle" justify="space-between">
                <Col span={12}>
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
                        label={t('forms.dynamicFormLabels.sight')}
                        name={[field.name, 'sight']}
                        fieldKey={[field.fieldKey, 'sight']}
                        rules={[{ required: true, message: t('forms.dynamicFormLabels.sightError') }]}
                      >
                        <Select disabled={!form.getFieldValue('area')}>
                          {(sights[form.getFieldValue('area')] || []).map((item) => (
                            <Option key={item} value={item}>
                              {item}
                            </Option>
                          ))}
                        </Select>
                      </FormItem>
                    )}
                  </FormItem>
                </Col>
                <Col span={12}>
                  <FormItem
                    {...field}
                    label={t('forms.dynamicFormLabels.price')}
                    name={[field.name, 'price']}
                    fieldKey={[field.fieldKey, 'price']}
                    rules={[{ required: true, message: t('forms.dynamicFormLabels.priceError') }]}
                  >
                    <S.Wrapper>
                      <Input />
                      <S.RemoveBtn onClick={() => remove(field.name)} />
                    </S.Wrapper>
                  </FormItem>
                </Col>
              </Row>
            ))}

            <FormItem>
              <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                {t('forms.dynamicFormLabels.addSights')}
              </Button>
            </FormItem>
          </>
        )}
      </FormList>
    </Form>
  );
};
