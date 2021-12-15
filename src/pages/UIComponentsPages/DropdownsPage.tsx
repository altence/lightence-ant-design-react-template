import { Col, Space } from 'antd';
import { Dropdown } from 'components/common/Dropdown/Dropdown';
import { Menu, MenuItem } from 'components/common/Menu/Menu';
import { Button } from 'components/common/buttons/Button/Button';
import { DownOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import * as S from './UIComponentsPage.styles';

const ContextMenuWrapper = styled.div`
  height: 12.5rem;
  width: 18.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: lightgrey;
`;

const DropdownsPage: React.FC = () => {
  const { t } = useTranslation();

  const basicMenu = (
    <Menu>
      <MenuItem>
        <Button type="link" target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          {t('dropdowns.firstItem')}
        </Button>
      </MenuItem>
      <MenuItem icon={<DownOutlined />} disabled>
        <Button type="link" target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
          {t('dropdowns.secondItem')} ({t('dropdowns.disabled')})
        </Button>
      </MenuItem>
      <MenuItem disabled>
        <Button type="link" target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
          {t('dropdowns.thirdItem')} ({t('dropdowns.disabled')})
        </Button>
      </MenuItem>
      <MenuItem danger>{t('dropdowns.dangerItem')}</MenuItem>
    </Menu>
  );

  const positionMenu = (
    <Menu>
      <MenuItem>
        <Button type="link" target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          {t('dropdowns.firstItem')}
        </Button>
      </MenuItem>
      <MenuItem>
        <Button type="link" target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
          {t('dropdowns.secondItem')}
        </Button>
      </MenuItem>
      <MenuItem>
        <Button type="link" target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
          {t('dropdowns.thirdItem')}
        </Button>
      </MenuItem>
    </Menu>
  );
  return (
    <Col>
      <S.Card title={t('dropdowns.basic')} padding="1.25rem 0">
        <Dropdown overlay={basicMenu}>
          <Button onClick={(e) => e.preventDefault()}>
            {t('dropdowns.hoverMe')} <DownOutlined />
          </Button>
        </Dropdown>
      </S.Card>
      <S.Card title={t('dropdowns.positions')} padding="1.25rem 0">
        <Space direction="vertical" size={16}>
          <Space size={16}>
            <Dropdown overlay={positionMenu} placement="bottomLeft" arrow>
              <Button>{t('dropdowns.bl')}</Button>
            </Dropdown>
            <Dropdown overlay={positionMenu} placement="bottomCenter" arrow>
              <Button>{t('dropdowns.bc')}</Button>
            </Dropdown>
            <Dropdown overlay={positionMenu} placement="bottomRight" arrow>
              <Button>{t('dropdowns.br')}</Button>
            </Dropdown>
          </Space>
          <Space size={16}>
            <Dropdown overlay={positionMenu} placement="topLeft" arrow>
              <Button>{t('dropdowns.tl')}</Button>
            </Dropdown>
            <Dropdown overlay={positionMenu} placement="topCenter" arrow>
              <Button>{t('dropdowns.tc')}</Button>
            </Dropdown>
            <Dropdown overlay={positionMenu} placement="topRight" arrow>
              <Button>{t('dropdowns.tr')}</Button>
            </Dropdown>
          </Space>
        </Space>
      </S.Card>
      <S.Card title={t('dropdowns.clickable')} padding="1.25rem 0">
        <Dropdown overlay={positionMenu} trigger={['click']}>
          <Button onClick={(e) => e.preventDefault()}>
            {t('dropdowns.clickMe')} <DownOutlined />
          </Button>
        </Dropdown>
      </S.Card>
      <S.Card title={t('dropdowns.context')} padding="1.25rem 0">
        <Dropdown overlay={positionMenu} trigger={['contextMenu']}>
          <ContextMenuWrapper>{t('dropdowns.rightClick')}</ContextMenuWrapper>
        </Dropdown>
      </S.Card>
    </Col>
  );
};

export default DropdownsPage;
