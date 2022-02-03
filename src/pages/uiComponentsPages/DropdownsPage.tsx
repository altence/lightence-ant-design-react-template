import { Col, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { Dropdown } from '@app/components/common/Dropdown/Dropdown';
import { Menu, MenuItem } from '@app/components/common/Menu/Menu';
import { Button } from '@app/components/common/buttons/Button/Button';
import { PageTitle } from '@app/components/common/PageTitle/PageTitle';
import * as S from '@app/pages/uiComponentsPages//UIComponentsPage.styles';

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
        <Button type="link" target="_blank" rel="noopener noreferrer">
          {t('dropdowns.firstItem')}
        </Button>
      </MenuItem>
      <MenuItem icon={<DownOutlined />} disabled>
        <Button type="link" target="_blank" rel="noopener noreferrer">
          {t('dropdowns.secondItem')} ({t('dropdowns.disabled')})
        </Button>
      </MenuItem>
      <MenuItem disabled>
        <Button type="link" target="_blank" rel="noopener noreferrer">
          {t('dropdowns.thirdItem')} ({t('dropdowns.disabled')})
        </Button>
      </MenuItem>
      <MenuItem danger>{t('dropdowns.dangerItem')}</MenuItem>
    </Menu>
  );

  const positionMenu = (
    <Menu>
      <MenuItem>
        <Button type="link" target="_blank" rel="noopener noreferrer">
          {t('dropdowns.firstItem')}
        </Button>
      </MenuItem>
      <MenuItem>
        <Button type="link" target="_blank" rel="noopener noreferrer">
          {t('dropdowns.secondItem')}
        </Button>
      </MenuItem>
      <MenuItem>
        <Button type="link" target="_blank" rel="noopener noreferrer">
          {t('dropdowns.thirdItem')}
        </Button>
      </MenuItem>
    </Menu>
  );
  return (
    <>
      <PageTitle>{t('common.dropdown')}</PageTitle>
      <Col>
        <S.Card title={t('dropdowns.basic')}>
          <Dropdown overlay={basicMenu}>
            <Button onClick={(e) => e.preventDefault()}>
              {t('dropdowns.hoverMe')} <DownOutlined />
            </Button>
          </Dropdown>
        </S.Card>
        <S.Card title={t('dropdowns.positions')}>
          <Space size={16} wrap>
            <Dropdown overlay={positionMenu} placement="bottomLeft" arrow>
              <Button>{t('dropdowns.bl')}</Button>
            </Dropdown>
            <Dropdown overlay={positionMenu} placement="bottomCenter" arrow>
              <Button>{t('dropdowns.bc')}</Button>
            </Dropdown>
            <Dropdown overlay={positionMenu} placement="bottomRight" arrow>
              <Button>{t('dropdowns.br')}</Button>
            </Dropdown>
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
        </S.Card>
        <S.Card title={t('dropdowns.clickable')}>
          <Dropdown overlay={positionMenu} trigger={['click']}>
            <Button onClick={(e) => e.preventDefault()}>
              {t('dropdowns.clickMe')} <DownOutlined />
            </Button>
          </Dropdown>
        </S.Card>
        <S.Card title={t('dropdowns.context')}>
          <Dropdown overlay={positionMenu} trigger={['contextMenu']}>
            <ContextMenuWrapper>{t('dropdowns.rightClick')}</ContextMenuWrapper>
          </Dropdown>
        </S.Card>
      </Col>
    </>
  );
};

export default DropdownsPage;
