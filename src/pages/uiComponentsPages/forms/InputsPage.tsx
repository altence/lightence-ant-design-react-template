import { Col, Cascader, Tooltip } from 'antd';
import { Input, TextArea } from 'components/common/inputs/Input/Input';
import { Select, Option } from 'components/common/selects/Select/Select';
import { SearchInput } from 'components/common/inputs/SearchInput/SearchInput';
import { InputPassword } from 'components/common/inputs/InputPassword/InputPassword';
import {
  UserOutlined,
  AudioOutlined,
  EyeTwoTone,
  EyeInvisibleOutlined,
  SettingOutlined,
  InfoCircleOutlined,
} from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import * as S from '../UIComponentsPage.styles';
import { ClipboardInput } from '@app/components/common/inputs/ClipboardInput/ClipboardInput';
import { OpenURLInput } from '@app/components/common/inputs/OpenURLInput/OpenURLInput';
import { useState } from 'react';

const InputsPage: React.FC = () => {
  const { t } = useTranslation();
  const [clipboardValue, setClipboardValue] = useState('@altence_team');
  const [newTabValue, setNewTabValue] = useState('https://altence.com');

  const selectBefore = (
    <Select defaultValue="http://">
      <Option value="http://">http://</Option>
      <Option value="https://">https://</Option>
    </Select>
  );

  const selectAfter = (
    <Select defaultValue=".com">
      <Option value=".com">.com</Option>
      <Option value=".jp">.jp</Option>
      <Option value=".cn">.cn</Option>
      <Option value=".org">.org</Option>
    </Select>
  );

  return (
    <Col>
      <S.Card title={t('inputs.basic')}>
        <S.InputsWrapper>
          <Input placeholder={t('inputs.basic')} />
        </S.InputsWrapper>
      </S.Card>
      <S.Card title={t('inputs.sizes')}>
        <S.InputsWrapper>
          <Input size="small" placeholder={t('inputs.small')} prefix={<UserOutlined />} />
          <Input placeholder={t('inputs.default')} prefix={<UserOutlined />} />
          <Input size="large" placeholder={t('inputs.large')} prefix={<UserOutlined />} />
        </S.InputsWrapper>
      </S.Card>
      <S.Card title={t('inputs.prePost')}>
        <S.InputsWrapper>
          <Input addonBefore="http://" addonAfter=".com" defaultValue="mysite" />
          <Input addonBefore={selectBefore} addonAfter={selectAfter} defaultValue="mysite" />
          <Input addonAfter={<SettingOutlined />} defaultValue="mysite" />
          <Input addonBefore="http://" suffix=".com" defaultValue="mysite" />
          <Input addonBefore={<Cascader placeholder="cascader" />} defaultValue="mysite" />
        </S.InputsWrapper>
      </S.Card>
      <S.Card title={t('inputs.prefixSuffix')}>
        <S.InputsWrapper>
          <Input
            placeholder={t('inputs.enterName')}
            prefix={<UserOutlined />}
            suffix={
              <Tooltip title={t('inputs.extra')}>
                <InfoCircleOutlined />
              </Tooltip>
            }
          />
          <Input prefix="￥" suffix="RMB" />
          <Input prefix="￥" suffix="RMB" disabled />
        </S.InputsWrapper>
      </S.Card>
      <S.Card title={t('inputs.search')}>
        <S.InputsWrapper>
          <SearchInput placeholder={t('inputs.searchText')} allowClear />
          <SearchInput addonBefore="https://" placeholder={t('inputs.searchText')} allowClear />
          <SearchInput
            placeholder={t('inputs.searchText')}
            enterButton="Search"
            size="large"
            suffix={<AudioOutlined />}
          />
        </S.InputsWrapper>
      </S.Card>
      <S.Card title={t('inputs.password')}>
        <S.InputsWrapper>
          <InputPassword
            placeholder={t('inputs.passwordText')}
            iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
          />
        </S.InputsWrapper>
      </S.Card>
      <S.Card title={t('inputs.textarea')}>
        <S.InputsWrapper>
          <TextArea rows={4} />
        </S.InputsWrapper>
      </S.Card>
      <S.Card title={t('inputs.func')}>
        <S.InputsWrapper>
          <ClipboardInput
            value={clipboardValue}
            placeholder={t('inputs.clipboard')}
            valueToCopy={clipboardValue}
            onChange={(e) => setClipboardValue(e.target.value)}
          />
          <OpenURLInput
            value={newTabValue}
            placeholder={t('inputs.openURL')}
            href={newTabValue}
            onChange={(e) => setNewTabValue(e.target.value)}
          />
        </S.InputsWrapper>
      </S.Card>
    </Col>
  );
};

export default InputsPage;
