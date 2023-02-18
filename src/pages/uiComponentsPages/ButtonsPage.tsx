import { useState, useEffect } from 'react';
import { PoweroffOutlined, SearchOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { BaseButton } from '@app/components/common/BaseButton/BaseButton';
import { PageTitle } from '@app/components/common/PageTitle/PageTitle';
import * as S from '@app/pages/uiComponentsPages//UIComponentsPage.styles';
import { BaseCol } from '@app/components/common/BaseCol/BaseCol';
import { BaseTooltip } from '@app/components/common/BaseTooltip/BaseTooltip';

const ButtonsPage: React.FC = () => {
  const [loadings, setLoadings] = useState<boolean[]>([]);
  const { t } = useTranslation();
  let timeout: ReturnType<typeof setTimeout> | null = null;

  useEffect(() => {
    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [timeout]);

  const enterLoading = (index: number) => {
    setLoadings((loadings) => {
      const newLoadings = [...loadings];
      newLoadings[index] = true;
      return newLoadings;
    });
    timeout = setTimeout(() => {
      setLoadings((loadings) => {
        const newLoadings = [...loadings];
        newLoadings[index] = false;
        return newLoadings;
      });
    }, 6000);
  };
  return (
    <>
      <PageTitle>{t('common.button')}</PageTitle>
      <BaseCol>
        <S.Card title={t('buttons.types')}>
          <BaseButton type="primary">{t('buttons.primary')}</BaseButton>
          <BaseButton type="default">{t('buttons.default')}</BaseButton>
          <BaseButton type="ghost">{t('buttons.ghost')}</BaseButton>
          <BaseButton type="dashed">{t('buttons.dashed')}</BaseButton>
          <BaseButton type="text">{t('buttons.text')}</BaseButton>
          <BaseButton type="link">{t('buttons.link')}</BaseButton>
        </S.Card>
        <S.Card title={t('buttons.severities')}>
          <BaseButton severity="info">{t('common.info')}</BaseButton>
          <BaseButton severity="success">{t('common.success')}</BaseButton>
          <BaseButton severity="warning">{t('common.warning')}</BaseButton>
          <BaseButton severity="error">{t('common.error')}</BaseButton>
        </S.Card>
        <S.Card title={t('buttons.sizes')}>
          <BaseButton type="ghost" size="small">
            {t('buttons.small')}
          </BaseButton>
          <BaseButton type="ghost" size="middle">
            {t('buttons.default')}
          </BaseButton>
          <BaseButton type="ghost" size="large">
            {t('buttons.large')}
          </BaseButton>
        </S.Card>
        <S.Card title={t('buttons.loadings')}>
          <BaseButton type="primary" size="small" loading>
            {t('buttons.loading')}
          </BaseButton>
          <BaseButton type="primary" loading>
            {t('buttons.loading')}
          </BaseButton>
          <BaseButton type="primary" icon={<PoweroffOutlined />} loading />

          <BaseButton type="primary" loading={loadings[0]} onClick={() => enterLoading(0)}>
            {t('buttons.click')}
          </BaseButton>
          <BaseButton type="primary" icon={<PoweroffOutlined />} loading={loadings[1]} onClick={() => enterLoading(1)}>
            {t('buttons.click')}
          </BaseButton>
          <BaseButton
            type="primary"
            icon={<PoweroffOutlined />}
            loading={loadings[2]}
            onClick={() => enterLoading(2)}
          />
        </S.Card>
        <S.Card title={t('buttons.danger')}>
          <BaseButton type="primary" danger>
            {t('buttons.primary')}
          </BaseButton>
          <BaseButton type="default" danger>
            {t('buttons.default')}
          </BaseButton>
          <BaseButton type="dashed" danger>
            {t('buttons.dashed')}
          </BaseButton>
          <BaseButton type="text" danger>
            {t('buttons.text')}
          </BaseButton>
          <BaseButton type="link" danger>
            {t('buttons.link')}
          </BaseButton>
        </S.Card>
        <S.Card title={t('buttons.disabled')}>
          <BaseButton type="primary" disabled>
            {t('buttons.primary')}
          </BaseButton>
          <BaseButton type="default" disabled>
            {t('buttons.default')}
          </BaseButton>
          <BaseButton type="ghost" disabled>
            {t('buttons.ghost')}
          </BaseButton>
          <BaseButton type="dashed" disabled>
            {t('buttons.dashed')}
          </BaseButton>
          <BaseButton type="text" disabled>
            {t('buttons.text')}
          </BaseButton>
          <BaseButton type="link" disabled>
            {t('buttons.link')}
          </BaseButton>
        </S.Card>
        <S.Card title={t('buttons.icons')}>
          <BaseTooltip title={t('buttons.search')}>
            <BaseButton type="primary" shape="circle" icon={<SearchOutlined />} />
          </BaseTooltip>
          <BaseTooltip title={t('buttons.search')}>
            <BaseButton type="primary" shape="circle">
              A
            </BaseButton>
          </BaseTooltip>
          <BaseTooltip title={t('buttons.search')}>
            <BaseButton type="primary" icon={<SearchOutlined />}>
              {t('buttons.search')}
            </BaseButton>
          </BaseTooltip>

          <BaseTooltip title={t('buttons.search')}>
            <BaseButton type="dashed" shape="circle" icon={<SearchOutlined />} size="large" />
          </BaseTooltip>
          <BaseTooltip title={t('buttons.search')}>
            <BaseButton type="dashed" icon={<SearchOutlined />} size="large">
              {t('buttons.search')}
            </BaseButton>
          </BaseTooltip>
          <BaseTooltip title={t('buttons.search')}>
            <BaseButton type="ghost" icon={<SearchOutlined />} size="large" />
          </BaseTooltip>
        </S.Card>
      </BaseCol>
    </>
  );
};

export default ButtonsPage;
