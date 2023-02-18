import { DownOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { BaseDropdown } from '@app/components/common/BaseDropdown/Dropdown';
import { BaseButton } from '@app/components/common/BaseButton/BaseButton';
import { PageTitle } from '@app/components/common/PageTitle/PageTitle';
import * as S from '@app/pages/uiComponentsPages//UIComponentsPage.styles';
import { BaseCol } from '@app/components/common/BaseCol/BaseCol';
import { BaseSpace } from '@app/components/common/BaseSpace/BaseSpace';

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
      <BaseCol>
        <S.Card title={t('dropdowns.basic')}>
          <BaseDropdown menu={{ items: basicItems }}>
            <BaseButton onClick={(e) => e.preventDefault()}>
              {t('dropdowns.hoverMe')} <DownOutlined />
            </BaseButton>
          </BaseDropdown>
        </S.Card>
        <S.Card title={t('dropdowns.positions')}>
          <BaseSpace size={16} wrap>
            <BaseDropdown menu={{ items: basicItems }} placement="bottomLeft" arrow>
              <BaseButton>{t('dropdowns.bl')}</BaseButton>
            </BaseDropdown>
            <BaseDropdown menu={{ items: basicItems }} placement="bottom" arrow>
              <BaseButton>{t('dropdowns.b')}</BaseButton>
            </BaseDropdown>
            <BaseDropdown menu={{ items: basicItems }} placement="bottomRight" arrow>
              <BaseButton>{t('dropdowns.br')}</BaseButton>
            </BaseDropdown>
            <BaseDropdown menu={{ items: basicItems }} placement="topLeft" arrow>
              <BaseButton>{t('dropdowns.tl')}</BaseButton>
            </BaseDropdown>
            <BaseDropdown menu={{ items: basicItems }} placement="top" arrow>
              <BaseButton>{t('dropdowns.t')}</BaseButton>
            </BaseDropdown>
            <BaseDropdown menu={{ items: basicItems }} placement="topRight" arrow>
              <BaseButton>{t('dropdowns.tr')}</BaseButton>
            </BaseDropdown>
          </BaseSpace>
        </S.Card>
        <S.Card title={t('dropdowns.clickable')}>
          <BaseDropdown menu={{ items: positionItems }} trigger={['click']}>
            <BaseButton onClick={(e) => e.preventDefault()}>
              {t('dropdowns.clickMe')} <DownOutlined />
            </BaseButton>
          </BaseDropdown>
        </S.Card>
        <S.Card title={t('dropdowns.context')}>
          <BaseDropdown menu={{ items: positionItems }} trigger={['contextMenu']}>
            <ContextMenuWrapper>{t('dropdowns.rightClick')}</ContextMenuWrapper>
          </BaseDropdown>
        </S.Card>
      </BaseCol>
    </>
  );
};

export default DropdownsPage;
