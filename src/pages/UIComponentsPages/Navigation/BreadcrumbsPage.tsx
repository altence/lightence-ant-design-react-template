import { Col, Space } from 'antd';
import { Button } from 'components/common/buttons/Button/Button';
import { Breadcrumb, BreadcrumbItem } from 'components/common/Breadcrumb/Breadcrumb';
import { Menu, MenuItem } from 'components/common/Menu/Menu';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import * as S from '../UIComponentsPage.styles';
import { useLocation } from 'react-router-dom';
import React from 'react';

const BreadcrumbsPage: React.FC = () => {
  const { t } = useTranslation();

  const { pathname } = useLocation();

  const menu = (
    <Menu>
      <MenuItem key={1}>
        <Button type="link" target="_blank" rel="noopener noreferrer">
          {t('breadcrumbs.general')}
        </Button>
      </MenuItem>
      <MenuItem key={2}>
        <Button type="link" target="_blank" rel="noopener noreferrer">
          {t('breadcrumbs.layout')}
        </Button>
      </MenuItem>
      <MenuItem key={3}>
        <Button type="link" target="_blank" rel="noopener noreferrer">
          {t('breadcrumbs.navigation')}
        </Button>
      </MenuItem>
    </Menu>
  );
  return (
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
          <BreadcrumbItem overlay={menu}>{t('breadcrumbs.general')}</BreadcrumbItem>
          <BreadcrumbItem href={pathname}>{t('breadcrumbs.button')}</BreadcrumbItem>
        </Breadcrumb>
      </S.Card>
    </Col>
  );
};

export default BreadcrumbsPage;
