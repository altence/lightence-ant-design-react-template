import { useTranslation } from 'react-i18next';
import { BaseCollapse } from '@app/components/common/BaseCollapse/BaseCollapse';
import { PageTitle } from '@app/components/common/PageTitle/PageTitle';
import * as S from '@app/pages/uiComponentsPages//UIComponentsPage.styles';
import { BaseCol } from '@app/components/common/BaseCol/BaseCol';
import { useMemo } from 'react';

const CollapsePage: React.FC = () => {
  const { t } = useTranslation();

  const { items, nestedItems } = useMemo(() => {
    const items = [
      {
        label: `${t('dataDisplay.collapse.panelHeader')} 1`,
        key: 1,
        children: <p>{t('dataDisplay.collapse.text')}</p>,
      },
      {
        label: `${t('dataDisplay.collapse.panelHeader')} 2`,
        key: 2,
        children: <p>{t('dataDisplay.collapse.text')}</p>,
      },
      {
        label: `${t('dataDisplay.collapse.panelHeader')} 3`,
        key: 3,
        children: <p>{t('dataDisplay.collapse.text')}</p>,
      },
    ];
    return {
      items,
      nestedItems: [
        { ...items[0], children: <BaseCollapse defaultActiveKey="1" items={[items[0]]} /> },
        items[1],
        items[2],
      ],
    };
  }, [t]);

  return (
    <>
      <PageTitle>{t('common.collapse')}</PageTitle>
      <BaseCol>
        <S.Card title={t('dataDisplay.collapse.basic')}>
          <S.CollapseWrapper defaultActiveKey={['1']} items={items} />
        </S.Card>
        <S.Card title={t('dataDisplay.collapse.accordion')}>
          <S.CollapseWrapper accordion defaultActiveKey={['2']} items={items} />
        </S.Card>
        <S.Card title={t('dataDisplay.collapse.nested')}>
          <S.CollapseWrapper defaultActiveKey="1" items={nestedItems} />
        </S.Card>
        <S.Card title={t('dataDisplay.collapse.ghost')}>
          <S.CollapseWrapper defaultActiveKey={['1']} ghost items={items} />
        </S.Card>
      </BaseCol>
    </>
  );
};

export default CollapsePage;
