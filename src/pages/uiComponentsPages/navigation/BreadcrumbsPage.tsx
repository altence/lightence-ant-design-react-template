import React from 'react';
import { Col, Space } from 'antd';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, BreadcrumbItem } from '@app/components/common/Breadcrumb/Breadcrumb';
import { PageTitle } from '@app/components/common/PageTitle/PageTitle';
import * as S from '@app/pages/uiComponentsPages//UIComponentsPage.styles';

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
      <Col>
        <S.Card title={t('breadcrumbs.basic')}>
          <Breadcrumb>
            <BreadcrumbItem href={pathname}>{t('breadcrumbs.home')}</BreadcrumbItem>
            <BreadcrumbItem href={pathname}>{t('breadcrumbs.applicationCenter')}</BreadcrumbItem>
            <BreadcrumbItem href={pathname}>{t('breadcrumbs.applicationList')}</BreadcrumbItem>
            <BreadcrumbItem href={pathname}>{t('breadcrumbs.application')}</BreadcrumbItem>
          </Breadcrumb>
        </S.Card>
        <S.Card title={t('breadcrumbs.withIcon')}>
          <Breadcrumb>
            <BreadcrumbItem href={pathname}>
              <HomeOutlined />
            </BreadcrumbItem>
            <BreadcrumbItem href={pathname}>
              <Space>
                <UserOutlined />
                <span>{t('breadcrumbs.applicationList')}</span>
              </Space>
            </BreadcrumbItem>
            <BreadcrumbItem href={pathname}>{t('breadcrumbs.application')}</BreadcrumbItem>
          </Breadcrumb>
        </S.Card>
        <S.Card title={t('breadcrumbs.customSeparator')}>
          <Breadcrumb separator=">">
            <BreadcrumbItem href={pathname}>{t('breadcrumbs.home')}</BreadcrumbItem>
            <BreadcrumbItem href={pathname}>{t('breadcrumbs.applicationCenter')}</BreadcrumbItem>
            <BreadcrumbItem href={pathname}>{t('breadcrumbs.applicationList')}</BreadcrumbItem>
            <BreadcrumbItem href={pathname}>{t('breadcrumbs.application')}</BreadcrumbItem>
          </Breadcrumb>
        </S.Card>
        <S.Card title={t('breadcrumbs.withDropdown')}>
          <Breadcrumb>
            <BreadcrumbItem href={pathname}>{t('breadcrumbs.antd')}</BreadcrumbItem>
            <BreadcrumbItem href={pathname}>{t('breadcrumbs.component')}</BreadcrumbItem>
            <BreadcrumbItem menu={{ items: menu }}>{t('breadcrumbs.general')}</BreadcrumbItem>
            <BreadcrumbItem href={pathname}>{t('breadcrumbs.button')}</BreadcrumbItem>
          </Breadcrumb>
        </S.Card>
      </Col>
    </>
  );
};

export default BreadcrumbsPage;
