import { Col, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { Dropdown } from '@app/components/common/Dropdown/Dropdown';
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

  const basicItems = [
    {
      key: '1',
      label: t('dropdowns.firstItem'),
    },
    {
      key: '2',
      label: `${t('dropdowns.secondItem')} ${t('dropdowns.disabled')}`,
      icon: <DownOutlined />,
      disabled: true,
    },
    {
      key: '3',
      label: `${t('dropdowns.thirdItem')} ${t('dropdowns.disabled')}`,
      disabled: true,
    },
    {
      key: '4',
      label: t('dropdowns.dangerItem'),
      danger: true,
    },
  ];

  const positionItems = [
    {
      key: '1',
      label: t('dropdowns.firstItem'),
    },
    {
      key: '2',
      label: t('dropdowns.secondItem'),
    },
    {
      key: '3',
      label: t('dropdowns.thirdItem'),
    },
  ];

  return (
    <>
      <PageTitle>{t('common.dropdown')}</PageTitle>
      <Col>
        <S.Card title={t('dropdowns.basic')}>
          <Dropdown menu={{ items: basicItems }}>
            <Button onClick={(e) => e.preventDefault()}>
              {t('dropdowns.hoverMe')} <DownOutlined />
            </Button>
          </Dropdown>
        </S.Card>
        <S.Card title={t('dropdowns.positions')}>
          <Space size={16} wrap>
            <Dropdown menu={{ items: basicItems }} placement="bottomLeft" arrow>
              <Button>{t('dropdowns.bl')}</Button>
            </Dropdown>
            <Dropdown menu={{ items: basicItems }} placement="bottom" arrow>
              <Button>{t('dropdowns.b')}</Button>
            </Dropdown>
            <Dropdown menu={{ items: basicItems }} placement="bottomRight" arrow>
              <Button>{t('dropdowns.br')}</Button>
            </Dropdown>
            <Dropdown menu={{ items: basicItems }} placement="topLeft" arrow>
              <Button>{t('dropdowns.tl')}</Button>
            </Dropdown>
            <Dropdown menu={{ items: basicItems }} placement="top" arrow>
              <Button>{t('dropdowns.t')}</Button>
            </Dropdown>
            <Dropdown menu={{ items: basicItems }} placement="topRight" arrow>
              <Button>{t('dropdowns.tr')}</Button>
            </Dropdown>
          </Space>
        </S.Card>
        <S.Card title={t('dropdowns.clickable')}>
          <Dropdown menu={{ items: positionItems }} trigger={['click']}>
            <Button onClick={(e) => e.preventDefault()}>
              {t('dropdowns.clickMe')} <DownOutlined />
            </Button>
          </Dropdown>
        </S.Card>
        <S.Card title={t('dropdowns.context')}>
          <Dropdown menu={{ items: positionItems }} trigger={['contextMenu']}>
            <ContextMenuWrapper>{t('dropdowns.rightClick')}</ContextMenuWrapper>
          </Dropdown>
        </S.Card>
      </Col>
    </>
  );
};

export default DropdownsPage;
