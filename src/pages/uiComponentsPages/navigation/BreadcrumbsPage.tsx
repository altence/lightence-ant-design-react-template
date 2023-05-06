import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import { BaseBreadcrumb, BaseBreadcrumbItemType } from '@app/components/common/BaseBreadcrumb/BaseBreadcrumb';
import { PageTitle } from '@app/components/common/PageTitle/PageTitle';
import * as S from '@app/pages/uiComponentsPages//UIComponentsPage.styles';
import { BaseCol } from '@app/components/common/BaseCol/BaseCol';
import { BaseSpace } from '@app/components/common/BaseSpace/BaseSpace';

const BreadcrumbsPage: React.FC = () => {
  const { t } = useTranslation();

  const { pathname: href } = useLocation();

  const menuItems: Required<BaseBreadcrumbItemType>['menu']['items'] = [
    { label: t('breadcrumbs.general') },
    { label: t('breadcrumbs.layout') },
    { label: t('breadcrumbs.navigation') },
  ];

  return (
    <>
      <PageTitle>{t('common.breadcrumbs')}</PageTitle>
      <BaseCol>
        <S.Card title={t('breadcrumbs.basic')}>
          <BaseBreadcrumb
            items={[
              { href, title: t('breadcrumbs.home') },
              { href, title: t('breadcrumbs.applicationCenter') },
              { href, title: t('breadcrumbs.applicationList') },
              { href, title: t('breadcrumbs.application') },
            ]}
          />
        </S.Card>
        <S.Card title={t('breadcrumbs.withIcon')}>
          <BaseBreadcrumb
            items={[
              { href, title: <HomeOutlined /> },
              {
                href,
                title: (
                  <BaseSpace>
                    <UserOutlined />
                    <span>{t('breadcrumbs.applicationList')}</span>
                  </BaseSpace>
                ),
              },
              { href, title: t('breadcrumbs.application') },
            ]}
          />
        </S.Card>
        <S.Card title={t('breadcrumbs.customSeparator')}>
          <BaseBreadcrumb
            separator=">"
            items={[
              { href, title: t('breadcrumbs.home') },
              { href, title: t('breadcrumbs.applicationCenter') },
              { href, title: t('breadcrumbs.applicationList') },
              { href, title: t('breadcrumbs.application') },
            ]}
          />
        </S.Card>
        <S.Card title={t('breadcrumbs.withDropdown')}>
          <BaseBreadcrumb
            items={[
              { href, title: t('breadcrumbs.antd') },
              { href, title: t('breadcrumbs.component') },
              {
                menu: { items: menuItems.map((item) => ({ key: item.label as React.Key, ...item })) },
                title: t('breadcrumbs.general'),
              },
              { href, title: t('breadcrumbs.button') },
            ]}
          />
        </S.Card>
      </BaseCol>
    </>
  );
};

export default BreadcrumbsPage;
