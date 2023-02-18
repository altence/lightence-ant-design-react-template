import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import { BaseBreadcrumb } from '@app/components/common/BaseBreadcrumb/BaseBreadcrumb';
import { PageTitle } from '@app/components/common/PageTitle/PageTitle';
import * as S from '@app/pages/uiComponentsPages//UIComponentsPage.styles';
import { BaseCol } from '@app/components/common/BaseCol/BaseCol';
import { BaseSpace } from '@app/components/common/BaseSpace/BaseSpace';

const BreadcrumbsPage: React.FC = () => {
  const { t } = useTranslation();

  const { pathname } = useLocation();

  const menu = [
    {
      key: '1',
      label: t('breadcrumbs.general'),
    },
    {
      key: '2',
      label: t('breadcrumbs.layout'),
    },
    {
      key: '3',
      label: t('breadcrumbs.navigation'),
    },
  ];

  return (
    <>
      <PageTitle>{t('common.breadcrumbs')}</PageTitle>
      <BaseCol>
        <S.Card title={t('breadcrumbs.basic')}>
          <BaseBreadcrumb>
            <BaseBreadcrumb.Item href={pathname}>{t('breadcrumbs.home')}</BaseBreadcrumb.Item>
            <BaseBreadcrumb.Item href={pathname}>{t('breadcrumbs.applicationCenter')}</BaseBreadcrumb.Item>
            <BaseBreadcrumb.Item href={pathname}>{t('breadcrumbs.applicationList')}</BaseBreadcrumb.Item>
            <BaseBreadcrumb.Item href={pathname}>{t('breadcrumbs.application')}</BaseBreadcrumb.Item>
          </BaseBreadcrumb>
        </S.Card>
        <S.Card title={t('breadcrumbs.withIcon')}>
          <BaseBreadcrumb>
            <BaseBreadcrumb.Item href={pathname}>
              <HomeOutlined />
            </BaseBreadcrumb.Item>
            <BaseBreadcrumb.Item href={pathname}>
              <BaseSpace>
                <UserOutlined />
                <span>{t('breadcrumbs.applicationList')}</span>
              </BaseSpace>
            </BaseBreadcrumb.Item>
            <BaseBreadcrumb.Item href={pathname}>{t('breadcrumbs.application')}</BaseBreadcrumb.Item>
          </BaseBreadcrumb>
        </S.Card>
        <S.Card title={t('breadcrumbs.customSeparator')}>
          <BaseBreadcrumb separator=">">
            <BaseBreadcrumb.Item href={pathname}>{t('breadcrumbs.home')}</BaseBreadcrumb.Item>
            <BaseBreadcrumb.Item href={pathname}>{t('breadcrumbs.applicationCenter')}</BaseBreadcrumb.Item>
            <BaseBreadcrumb.Item href={pathname}>{t('breadcrumbs.applicationList')}</BaseBreadcrumb.Item>
            <BaseBreadcrumb.Item href={pathname}>{t('breadcrumbs.application')}</BaseBreadcrumb.Item>
          </BaseBreadcrumb>
        </S.Card>
        <S.Card title={t('breadcrumbs.withDropdown')}>
          <BaseBreadcrumb>
            <BaseBreadcrumb.Item href={pathname}>{t('breadcrumbs.antd')}</BaseBreadcrumb.Item>
            <BaseBreadcrumb.Item href={pathname}>{t('breadcrumbs.component')}</BaseBreadcrumb.Item>
            <BaseBreadcrumb.Item menu={{ items: menu }}>{t('breadcrumbs.general')}</BaseBreadcrumb.Item>
            <BaseBreadcrumb.Item href={pathname}>{t('breadcrumbs.button')}</BaseBreadcrumb.Item>
          </BaseBreadcrumb>
        </S.Card>
      </BaseCol>
    </>
  );
};

export default BreadcrumbsPage;
